export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const fetchRes = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!fetchRes.ok) {
      return res.status(fetchRes.status).json({ error: "Failed to fetch URL" });
    }

    const html = await fetchRes.text();
    const match = html.match(/<meta[^>]*property=['"]og:image['"][^>]*content=['"]([^'"]+)['"]/i) || 
                  html.match(/<meta[^>]*content=['"]([^'"]+)['"][^>]*property=['"]og:image['"]/i);

    if (match && match[1]) {
      return res.status(200).json({ image: match[1] });
    } else {
      return res.status(404).json({ error: "No OG image found" });
    }
  } catch (e) {
    return res.status(500).json({ error: "Internal Server Error", message: e.message });
  }
}

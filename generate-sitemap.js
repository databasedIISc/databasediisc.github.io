const fs = require('fs');
const path = require('path');

const BASE_URL = "https://databased.csa.iisc.ac.in";

// Paths to exclude relative to repo root (no leading slash)
const excludePaths = [
  'pages/open-day-2025/nim-game/nim_play.html',
  'pages/open-day-2025/nim-game/nim_game.html',
  'learn/index.html',
  'about/member.html',
  '404.html',
];

function shouldExclude(filePath) {
  // Normalize slashes
  const normalized = filePath.replace(/\\/g, '/');
  return excludePaths.includes(normalized);
}

function walk(dir, baseUrl) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(function(file) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);

    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filepath, baseUrl));
    } else if (file.endsWith('.html')) {
      const relativePath = path.relative('./', filepath).replace(/\\/g, '/');

      if (shouldExclude(relativePath)) {
        // Skip excluded file
        return;
      }

      // Remove 'index.html' or '.html' to create clean URL path
      const urlPath = relativePath.replace('index.html', '').replace(/\.html$/, '');
      const url = `${baseUrl}/${urlPath}`;
      const lastmod = new Date(stat.mtime).toISOString().split('T')[0];

      results.push(`
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`);
    }
  });

  return results;
}

const urls = walk('./', BASE_URL).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync('sitemap.xml', sitemap);
console.log("✅ sitemap.xml generated.");

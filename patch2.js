const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('<section id="about" class="py-24 relative z-10 border-t border-white/5 bg-white/[0.02] overflow-hidden">', '<section id="about" class="py-24 relative z-10 border-t border-white/5 bg-white/[0.04] overflow-hidden">');

html = html.replace('<section id="education" class="py-24 relative z-10 border-t border-white/5 bg-white/[0.02] overflow-hidden">', '<section id="education" class="py-24 relative z-10 border-t border-white/5 bg-white/[0.04] overflow-hidden">');

html = html.replace('<section id="portfolio" class="py-24 relative z-10 border-t border-white/5 bg-transparent">', '<section id="portfolio" class="py-24 relative z-10 border-t border-white/5 bg-white/[0.04]">');

html = html.replace('<section id="contact" class="py-24 relative z-10 border-t border-white/5 bg-white/[0.02] text-center overflow-hidden">', '<section id="contact" class="py-24 relative z-10 border-t border-white/5 bg-transparent text-center overflow-hidden">');

fs.writeFileSync('index.html', html);
console.log('Zebra patched!');

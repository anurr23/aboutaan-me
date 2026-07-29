const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

let count = 0;
html = html.replace(/<div class="portfolio-card([^>]+?)">/g, (match, classes) => {
    count++;
    
    // Extract animation delay if exists
    let delayMatch = classes.match(/\[animation-delay:\d+ms\]/);
    let delayClass = delayMatch ? delayMatch[0] : '';
    
    // Determine color based on index
    let color = 'brand';
    if (count % 3 === 2) color = 'purple';
    if (count % 3 === 0) color = 'blue';

    let wrapperClasses = 'reveal-up tilt-wrap';
    if (delayClass) wrapperClasses += ' ' + delayClass;
    
    // Remove reveal-up, shadow-xl, and animation-delay from inner card
    let innerClasses = classes.replace('reveal-up', '').replace(delayClass, '').replace('shadow-xl', '').trim();
    
    return `<div class="${wrapperClasses}" style="perspective: 1000px;">\n                    <div class="portfolio-card ${innerClasses} hover:border-${color}-500/50 transition-colors shadow-xl h-full glow-card tilt-card" style="transform-style: preserve-3d;">`;
});

// Add closing wrapper div
html = html.replace(/<div class="portfolio-content">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g, (match) => {
    return match + '\n                </div>';
});

fs.writeFileSync('index.html', html);
console.log('Done replacement! Total cards:', count);

const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, '../src/_data/locales.json');
const localesData = JSON.parse(fs.readFileSync(localesPath, 'utf8'));
const keys = Object.keys(localesData.en);

function processHtmlFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    if (filePath.endsWith('.html')) {
        if (!content.includes('pagination:')) {
            content = content.replace(/^---\s*\n/m, `---\npagination:\n  data: site.languages\n  size: 1\n  alias: lang\n`);
            if (filePath.includes('blog/')) {
                content = content.replace(/permalink:\s*".*?"/, `permalink: "{{ lang.prefix }}blog/${path.basename(filePath)}"`);
            } else {
                content = content.replace(/permalink:\s*".*?"/, `permalink: "{{ lang.prefix }}${path.basename(filePath)}"`);
            }
        }
    }

    // Replace the inner HTML of tags that have data-i18n="key"
    keys.forEach(key => {
        // Regex to find a tag with data-i18n="KEY".
        // Example: <span data-i18n="hero_title">...</span>
        // Since HTML can have nested tags, matching the exact closing block is hard.
        // Instead, we match the data-i18n attribute and replace its inner text up to the specific closing tag.
        
        const r = new RegExp(`(<([a-zA-Z0-9]+)[^>]*?data-i18n="${key}"[^>]*>)([\\s\\S]*?)(</\\2>)`, 'g');
        content = content.replace(r, (match, openTag, tagName, inner, closeTag) => {
            return `${openTag}{{ locales[lang.code].${key} | safe }}${closeTag}`;
        });
    });

    // Also update instances where i18n is used in placeholder like data-i18n-placeholder="key"
    // Wait, the user didn't have data-i18n-placeholder before but if any placeholders exist we'll skip for now.

    fs.writeFileSync(filePath, content);
    console.log(`Processed ${filePath}`);
}

const files = [
    'src/index.html',
    'src/cv.html',
    'src/blog/saga-orchestrator.html',
    'src/blog/shopping-cart.html',
    'src/_includes/partials/header.njk',
    'src/_includes/partials/footer.njk'
];

files.forEach(f => {
    const fullPath = path.join(__dirname, '..', f);
    if (fs.existsSync(fullPath)) {
        processHtmlFile(fullPath);
    }
});

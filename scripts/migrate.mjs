import fs from 'fs';
import path from 'path';

const xmlPath = 'c:/Users/Emrah/Desktop/peugottuzla/peugeottuzlazelservis.WordPress.2025-12-24.xml';
const outputPath = 'c:/Users/Emrah/Desktop/peugottuzla/src/data/wp_content.json';

function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    fs.mkdirSync(dirname, { recursive: true });
}

function extractTag(content, tag) {
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
    const match = content.match(regex);
    if (!match) return '';
    let res = match[1].replace('<![CDATA[', '').replace(']]>', '');
    return res.trim();
}

function extractMeta(content, key) {
    const regex = new RegExp(`<wp:meta_key><!\\[CDATA\\[${key}\\]\\]><\\/wp:meta_key>\\s*<wp:meta_value><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/wp:meta_value>`, 'i');
    const match = content.match(regex);
    return match ? match[1].trim() : '';
}

function cleanContent(content, allItems) {
    let cleaned = content;

    // 1. Replace image URLs
    cleaned = cleaned.replace(/https?:\/\/peugeottuzla\.com\/wp-content\/uploads\/\d{4}\/\d{2}\/([^"\s>]+)/g, '/images/$1');
    cleaned = cleaned.replace(/https?:\/\/peugeottuzla\.com\/wp-content\/uploads\/([^"\s>]+)/g, '/images/$1');

    // 2. Rewrite internal links
    allItems.forEach(item => {
        const originalLinks = [
            `https://peugeottuzla.com/${item.slug}/`,
            `https://peugeottuzla.com/${item.slug}`,
            `http://peugeottuzla.com/${item.slug}/`,
            `http://peugeottuzla.com/${item.slug}`
        ];
        const newLink = `/${item.slug}`;

        originalLinks.forEach(link => {
            if (item.slug) {
                cleaned = cleaned.split(link).join(newLink);
            }
        });
    });

    // 3. Cleanup WP artifacts
    cleaned = cleaned.replace(/\[peugeot_[^\]]+\]/g, ''); // Remove custom shortcodes
    cleaned = cleaned.replace(/<!-- [\s\S]*? -->/g, ''); // Remove comments
    cleaned = cleaned.replace(/&nbsp;/g, ' ');

    return cleaned;
}

function main() {
    console.log('Starting migration script...');
    const xmlData = fs.readFileSync(xmlPath, 'utf-8');

    // Split items
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let items = [];
    let match;

    const attachments = {}; // ID -> filename

    console.log('Extracting items...');
    while ((match = itemRegex.exec(xmlData)) !== null) {
        const itemContent = match[1];
        const type = extractTag(itemContent, 'wp:post_type');
        const id = extractTag(itemContent, 'wp:post_id');

        if (type === 'attachment') {
            const fileMeta = extractMeta(itemContent, '_wp_attached_file');
            if (fileMeta) {
                attachments[id] = path.basename(fileMeta);
            } else {
                const url = extractTag(itemContent, 'guid');
                if (url) attachments[id] = path.basename(url);
            }
            continue;
        }

        if (type === 'post' || type === 'page') {
            const status = extractTag(itemContent, 'wp:status');
            if (status !== 'publish' && status !== 'inherit') continue;

            items.push({
                id,
                title: extractTag(itemContent, 'title'),
                slug: extractTag(itemContent, 'wp:post_name'),
                type,
                content: extractTag(itemContent, 'content:encoded'),
                meta_title: extractMeta(itemContent, '_yoast_wpseo_title'),
                meta_desc: extractMeta(itemContent, '_yoast_wpseo_metadesc'),
                meta_focuskw: extractMeta(itemContent, '_yoast_wpseo_focuskw'),
                thumbnail_id: extractMeta(itemContent, '_thumbnail_id'),
                date: extractTag(itemContent, 'wp:post_date')
            });
        }
    }

    // Resolve thumbnails and clean content
    console.log('Cleaning content and resolving thumbnails...');
    const finalItems = items.map(item => {
        let thumbnail = null;
        if (item.thumbnail_id && attachments[item.thumbnail_id]) {
            thumbnail = `/images/${attachments[item.thumbnail_id]}`;
        }

        return {
            ...item,
            content: cleanContent(item.content, items),
            thumbnail,
            thumbnail_id: undefined // Clean up
        };
    });

    ensureDirectoryExistence(outputPath);
    fs.writeFileSync(outputPath, JSON.stringify(finalItems, null, 2), 'utf-8');
    console.log(`Migration completed. ${finalItems.length} items extracted and cleaned to ${outputPath}`);
}

main();

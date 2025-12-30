import json
import re

file_path = r"c:\Users\Emrah\Desktop\peugottuzla\src\data\wp_content.json"
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

def transform_content(content):
    if not isinstance(content, str):
        return content
    
    # 1. Remove meta tags, style tags, and body/html wrappers
    content = re.sub(r'<!DOCTYPE html>.*?(<body[^>]*>)', '', content, flags=re.DOTALL | re.IGNORECASE)
    content = re.sub(r'</body>.*?</html>', '', content, flags=re.DOTALL | re.IGNORECASE)
    content = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL | re.IGNORECASE)
    content = re.sub(r'<head>.*?</head>', '', content, flags=re.DOTALL | re.IGNORECASE)
    content = re.sub(r'<meta[^>]*>', '', content, flags=re.IGNORECASE)
    content = re.sub(r'<title>.*?</title>', '', content, flags=re.IGNORECASE)
    
    # 2. Refine Contact Block Formatting
    # Target my previous attempt specifically
    contact_pattern = r'<strong>\[ICON_PHONE\] Telefon:</strong> <a href="tel:05421985134">0542 198 51 34</a><br>\s+&nbsp;&nbsp;&nbsp;&nbsp;<strong>\[ICON_WHATSAPP\] WhatsApp:</strong> <a href="[^"]+">Hemen Yaz</a><br>\s+<br>\s+<strong>\[ICON_MAP\] Adres:</strong> ([^<]+)<br>\s+<strong>\[ICON_CLOCK\] Çalışma Saatleri:</strong><br>\s+&nbsp;&nbsp;&nbsp;&nbsp;Pts-Cts: 09:00-18:00,<br>\s+&nbsp;&nbsp;&nbsp;&nbsp;Pazar kapalı'
    
    # Also handle the variant without indentation if it exists
    contact_pattern_alt = r'<strong>\[ICON_PHONE\] Telefon:</strong> <a href="tel:05421985134">0542 198 51 34</a><br>\s+<strong>\[ICON_WHATSAPP\] WhatsApp:</strong> <a href="[^"]+">Hemen Yaz</a><br>\s+<br>\s+<strong>\[ICON_MAP\] Adres:</strong> ([^<]+)<br>\s+<strong>\[ICON_CLOCK\] Çalışma Saatleri:</strong><br>\s+&nbsp;&nbsp;&nbsp;&nbsp;Pts-Cts: 09:00-18:00,<br>\s+&nbsp;&nbsp;&nbsp;&nbsp;Pazar kapalı'

    # Replacement: Phone/WhatsApp same line, Hours below indented.
    replacement = (
        '<strong>[ICON_PHONE] Telefon:</strong> <a href="tel:05421985134">0542 198 51 34</a> &nbsp;&nbsp;&nbsp;&nbsp; '
        '<strong>[ICON_WHATSAPP] WhatsApp:</strong> <a href="https://api.whatsapp.com/send?phone=905421985134">Hemen Yaz</a><br>\n'
        '        <strong>[ICON_MAP] Adres:</strong> \\1<br>\n'
        '        <strong>[ICON_CLOCK] Çalışma Saatleri:</strong><br>\n'
        '        &nbsp;&nbsp;&nbsp;&nbsp;Pts-Cts: 09:00-18:00, Pazar kapalı'
    )
    
    content = re.sub(contact_pattern, replacement, content)
    content = re.sub(contact_pattern_alt, replacement, content)
    
    return content.strip()

for item in data:
    if 'content' in item:
        item['content'] = transform_content(item['content'])

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("JSON Content cleaned and contact info reformatted.")

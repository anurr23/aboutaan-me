import re
import json

with open('old_backup/index.php', 'r') as f:
    content = f.read()

modals = []
modal_matches = re.finditer(r'<div class="modal fade" id="(.*?)"', content)

for match in modal_matches:
    modal_id = match.group(1)
    
    # Extract the block for this modal
    start_idx = match.start()
    end_idx = content.find('<!-- End Modal', start_idx)
    if end_idx == -1:
        end_idx = content.find('<div class="modal fade"', start_idx + 10)
    if end_idx == -1:
        end_idx = len(content)
        
    block = content[start_idx:end_idx]
    
    # Title
    title_match = re.search(r'<h3>(.*?)</h3>', block)
    title = title_match.group(1) if title_match else ''
    
    # Image
    img_match = re.search(r'<img.*?src="(.*?)".*?>', block)
    image = img_match.group(1) if img_match else ''
    
    # Paragraphs and lists
    text_content = ""
    tc_start = block.find('<div class="text-content">')
    if tc_start != -1:
        tc_end = block.find('<!-- End of .text-content -->', tc_start)
        tc_block = block[tc_start:tc_end]
        
        # strip out h3 and span
        tc_block = re.sub(r'<span>.*?</span>', '', tc_block, count=1, flags=re.DOTALL)
        tc_block = re.sub(r'<h3>.*?</h3>', '', tc_block, count=1, flags=re.DOTALL)
        tc_block = re.sub(r'<div class="text-content">', '', tc_block, count=1)
        
        text_content = tc_block.strip()
    
    modals.append({
        'id': modal_id,
        'title': title,
        'image': image,
        'content': text_content
    })

with open('modals_data.json', 'w') as f:
    json.dump(modals, f, indent=4)
print("Extracted", len(modals), "modals")

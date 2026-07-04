from PIL import Image

def remove_white_bg(img_path, out_path):
    img = Image.open(img_path).convert("RGBA")
    
    w, h = img.size
    threshold = 220
    
    pixels = img.load()
    
    visited = set()
    stack = [(0,0), (w-1,0), (0,h-1), (w-1,h-1)]
    
    while stack:
        x, y = stack.pop()
        if (x, y) in visited:
            continue
            
        if x < 0 or x >= w or y < 0 or y >= h:
            continue
            
        r, g, b, a = pixels[x, y]
        if r > threshold and g > threshold and b > threshold:
            pixels[x, y] = (255, 255, 255, 0)
            visited.add((x, y))
            stack.extend([(x+1, y), (x-1, y), (x, y+1), (x, y-1)])
            
    img.save(out_path, "PNG")

remove_white_bg("/Users/anur/Sites/profile/images/avatar new.jpeg", "/Users/anur/Sites/profile/images/avatar_transparent.png")

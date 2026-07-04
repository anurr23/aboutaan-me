from PIL import Image

def remove_green(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        r, g, b, a = item
        # The background is extremely green: e.g. (0, 255, 0)
        # If green is dominant, make it transparent
        if g > 150 and g > r * 1.5 and g > b * 1.5:
            # Full transparent
            new_data.append((255, 255, 255, 0))
        elif g > r * 1.1 and g > b * 1.1:
            # Edge pixels - semi transparent and remove green cast
            new_data.append((r, int((r+b)/2), b, 100))
        else:
            new_data.append(item)

    img.putdata(new_data)
    
    # Crop empty space at the top and bottom to make it easier for 3D effect
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")

remove_green("/Users/anur/.gemini/antigravity/brain/54894d3e-5068-4066-afe9-a947eb36070a/anur_greenscreen_1783185585842.png", "/Users/anur/Sites/profile/images/new_avatar_3d.png")

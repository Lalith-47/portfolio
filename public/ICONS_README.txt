PWA ICONS SETUP INSTRUCTIONS
=============================

For your portfolio to work as a Progressive Web App (PWA), you need to add icon files.

Required Icons:
---------------

1. favicon.ico (16x16, 32x32, 48x48)
   - Location: public/favicon.ico
   - Format: ICO file
   - Used for: Browser tabs, bookmarks

2. apple-touch-icon.png (180x180)
   - Location: public/apple-touch-icon.png
   - Format: PNG
   - Used for: iOS home screen icons

3. favicon-16x16.png (16x16)
   - Location: public/favicon-16x16.png
   - Format: PNG
   - Used for: Browser tabs

4. favicon-32x32.png (32x32)
   - Location: public/favicon-32x32.png
   - Format: PNG
   - Used for: Browser tabs

5. icon-192.png (192x192)
   - Location: public/icon-192.png
   - Format: PNG
   - Used for: Android home screen

6. icon-512.png (512x512)
   - Location: public/icon-512.png
   - Format: PNG
   - Used for: Android splash screen

7. og-image.png (1200x630)
   - Location: public/og-image.png
   - Format: PNG
   - Used for: Social media previews (Facebook, Twitter, LinkedIn)

How to Create Icons:
--------------------

Option 1: Using Online Tools (Easiest)
- Visit: https://realfavicongenerator.net/
- Upload a square logo image (at least 512x512 pixels)
- Generate all icons automatically
- Download and extract to public/ folder

Option 2: Using Figma/Canva
- Create a 512x512px square design
- Use your initial "L" or a logo
- Color scheme: #0ea5e9 (blue) background with white letter
- Export at different sizes
- Convert to ICO using: https://convertio.co/png-ico/

Option 3: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first
# Then run these commands from a 512x512 source image:

convert logo.png -resize 16x16 public/favicon-16x16.png
convert logo.png -resize 32x32 public/favicon-32x32.png
convert logo.png -resize 180x180 public/apple-touch-icon.png
convert logo.png -resize 192x192 public/icon-192.png
convert logo.png -resize 512x512 public/icon-512.png
convert logo.png -resize 16x16 -resize 32x32 public/favicon.ico
```

Design Tips:
-----------
- Use simple, bold design that works at small sizes
- Your initial "L" in a circle with gradient background
- Colors: Blue (#0ea5e9) to Cyan (#06b6d4) gradient
- White letter for contrast
- No fine details (they won't show at small sizes)
- Test at actual sizes to ensure readability

OpenGraph Image (og-image.png):
-------------------------------
- Size: 1200x630 pixels
- Content: Your name, title, and small screenshot of portfolio
- Text should be large and readable
- Use your portfolio's color scheme
- Tools: Canva, Figma, or https://www.opengraph.xyz/

Current Status:
--------------
❌ Icons not yet added
📁 Add icons to public/ folder
✅ manifest.json already configured
✅ Meta tags already in place

Once you add the icons, delete this file!


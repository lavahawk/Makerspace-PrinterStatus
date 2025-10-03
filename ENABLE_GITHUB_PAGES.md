# Enable GitHub Pages - Instructions

## Steps to Enable:

1. **Go to your repository:**
   - https://github.com/lavahawk/Makerspace-PrinterStatus

2. **Click on Settings** (top right)

3. **Click on Pages** (left sidebar under "Code and automation")

4. **Under "Source":**
   - Select: **Deploy from a branch**
   
5. **Under "Branch":**
   - Select: **main**
   - Folder: **/ (root)**
   - Click **Save**

6. **Wait 1-2 minutes** for GitHub to build and deploy

7. **Your dashboard will be live at:**
   ```
   https://lavahawk.github.io/Makerspace-PrinterStatus/printer-status.html
   ```

---

## Then Use in Google Sites:

### Method 1: Embed URL
1. Open your Google Site in edit mode
2. Click **Insert** → **Embed** → **Embed URL**
3. Paste: `https://lavahawk.github.io/Makerspace-PrinterStatus/printer-status.html`
4. Set width to 100%, height to ~1000px
5. Click **Insert** → **Publish**

### Method 2: iframe
1. Click **Insert** → **Embed** → **Embed code**
2. Paste:
```html
<iframe src="https://lavahawk.github.io/Makerspace-PrinterStatus/printer-status.html" 
        width="100%" 
        height="1000" 
        frameborder="0" 
        style="border:none;">
</iframe>
```
3. Click **Next** → **Insert** → **Publish**

---

## ✅ What's Been Changed:

- ✅ Clemson Orange (#F66733) and Purple (#522D80) theme
- ✅ Removed all emojis
- ✅ Optimized padding/spacing for embedding
- ✅ Smaller header for compact display
- ✅ Pushed to GitHub
- ✅ Ready for GitHub Pages

**All you need to do now is enable GitHub Pages in your repository settings!**

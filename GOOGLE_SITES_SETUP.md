# 📋 How to Add the Printer Dashboard to Google Sites

## Method 1: Embed URL (Recommended)

### Step 1: Host the HTML File
You need to host your HTML file somewhere accessible. Here are your options:

#### Option A: GitHub Pages (Free & Easy)
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select your main branch
4. Click **Save**
5. GitHub will give you a URL like: `https://yourusername.github.io/Makerspace-Printer-Status/printer-status.html`

#### Option B: Google Drive (Quick)
1. Upload `printer-status.html` to Google Drive
2. Right-click the file → **Get link**
3. Change to "Anyone with the link"
4. Copy the file ID from the URL
5. Use this format: `https://drive.google.com/uc?export=view&id=1EReB3YbMJaaaGgnVXcN7-kWmjfsxbv7d`

### Step 2: Embed in Google Sites
1. Open your Google Site in edit mode
2. Click where you want to add the dashboard
3. Click the **Insert** menu on the right
4. Select **Embed** → **Embed URL**
5. Paste your hosted HTML URL
6. Click **Insert**
7. Resize the embed as needed (recommended: full width, 800-1000px height)
8. Click **Publish**

---

## Method 2: Embed Code (Direct HTML)

### Step 1: Copy the HTML
1. Open `printer-status.html`
2. Select ALL the code (Ctrl+A)
3. Copy it (Ctrl+C)

### Step 2: Add to Google Sites
1. Open your Google Site in edit mode
2. Click where you want to add the dashboard
3. Click the **Insert** menu on the right
4. Select **Embed** → **Embed code**
5. Paste the entire HTML code
6. Click **Next**
7. Click **Insert**
8. Resize as needed
9. Click **Publish**

---

## Method 3: iframe (Most Reliable)

If Method 1 or 2 doesn't work, use an iframe:

1. First, host your HTML file (see Method 1, Step 1)
2. In Google Sites, click **Insert** → **Embed** → **Embed code**
3. Paste this code (replace YOUR_URL with your hosted file URL):

```html
<iframe src="YOUR_URL" width="100%" height="1000px" frameborder="0" style="border:none;"></iframe>
```

4. Click **Next** → **Insert**
5. Click **Publish**

---

## ⚙️ Recommended Settings for Google Sites

- **Width**: Full width (100%)
- **Height**: 800-1200px (depending on your layout)
- **Position**: Center aligned
- **Margin**: Add some padding around it for better appearance

---

## 🔄 Auto-Updates

The dashboard will automatically:
- Fetch fresh data every 30 seconds
- Update the printer status in real-time
- Show the last update timestamp

As long as your Google Sheet stays published, the data will stay current!

---

## 🎨 Customization Tips

If you want to match Clemson branding, edit these lines in the HTML:

**For Clemson Orange & Purple:**
```css
background: linear-gradient(135deg, #F66733 0%, #522D80 100%);
```

**To change the header:**
```html
<h1>🔧 Clemson Makerspace</h1>
<p>3D Printer Status Dashboard</p>
```

---

## ❓ Troubleshooting

### Dashboard doesn't load
- Make sure your Google Sheet is published (File → Share → Publish to web)
- Check that the CSV URL is correct in the HTML
- Try refreshing the page

### Shows old data
- The dashboard refreshes every 30 seconds
- Make sure your Google Sheet is being updated by your scripts

### Embed doesn't show in Google Sites
- Try Method 3 (iframe) instead
- Make sure the HTML file is publicly accessible
- Check browser console for errors (F12)

---

## 📝 Quick Checklist

- [ ] Google Sheet is published to web as CSV
- [ ] HTML file is hosted online (or ready to embed)
- [ ] Google Site is in edit mode
- [ ] Dashboard is embedded using one of the methods above
- [ ] Dashboard is properly sized and positioned
- [ ] Site is published
- [ ] Data is loading correctly

---

**Need help?** Check the browser console (F12) for error messages!

# 🔥 Chef's Pride Restaurant Website

**Premium restaurant website for Chef's Pride Restaurant, Chagga Street, Dar es Salaam**

---

## 🚀 Quick Start

1. Unzip the folder
2. Open `index.html` in any modern browser
3. That's it — no build tools, no dependencies, no server required!

---

## 📁 Project Structure

```
chefs-pride/
├── index.html          ← Main HTML page
├── css/
│   └── style.css       ← All styles (glassmorphism, animations, responsive)
├── js/
│   └── app.js          ← All JavaScript (menu data, cart, interactions)
└── README.md
```

---

## ✅ Checklist Before Going Live

### 1. Update Your WhatsApp Number
Search for `255XXXXXXXXX` in these files and replace with your actual number:
- `index.html` (3 places)
- `js/app.js` (1 place)

Example: `+255 712 345 678` → use `255712345678` (no spaces or +)

### 2. Update Contact Details
In `index.html`, find the footer section and update:
- Phone number
- Email address
- Opening hours (if different)

### 3. Deploy Options

**Free Hosting:**
- [Netlify](https://netlify.com) — drag & drop the folder, instant live URL
- [Vercel](https://vercel.com) — same, free tier
- [GitHub Pages](https://pages.github.com) — free with GitHub account

**Paid (Professional):**
- Any cPanel hosting → upload via File Manager
- Your own VPS with Nginx

---

## 🍽️ Menu Items Included

### Shawarma Joint (from your photos)
- Shawarma Chicken — TZS 7,000
- Shawarma Chicken (Plate) — TZS 15,000
- Shawarma Beef — TZS 7,000
- Shawarma Beef (Plate) — TZS 15,000
- Roasted Chicken Full — TZS 20,000
- Roasted Chicken Half — TZS 10,000
- Falafel (6 Pcs) — TZS 5,000

### Chef's Pride BBQ (from your photos)
All 15 items including Sekela, White Chicken, Skewers, Chang, 
Boneless Chicken, Mutton, Beef Shashliky, Fish Fillet, Grill Chicken,
Wings, Firigisi, Prawns, King Fish, Mzuzu Bananas, Morocco

### Additional Cuisines
- 🍝 Italian (5 items)
- 🍛 Chinese & Indian (6 items)
- 🦞 Seafood (5 items)
- 🥗 Salads (3 items)
- 🍲 Starters & Soups (4 items)
- 🍟 Snacks (4 items)

---

## 💡 How to Add More Menu Items

In `js/app.js`, find the `MENU_DATA` object and add to any category:

```javascript
{
  id: "unique-id",           // Must be unique
  name: "Dish Name",
  price: 12000,              // In TZS (no commas)
  desc: "Description here",
  img: "https://images.unsplash.com/photo-XXXXXX?w=600&q=80&fit=crop",
  badge: "New",              // Or null for no badge
  heat: 2                    // 0=mild, 1=low, 2=medium, 3=spicy
}
```

For images, you can use:
- Unsplash (free): https://unsplash.com — copy image URL
- Your own photos: put them in `/assets/` folder and reference as `assets/yourphoto.jpg`

---

## 🎨 Customization

### Change Colors
In `css/style.css`, edit the `:root` variables:
```css
:root {
  --fire: #FF4D00;    /* Primary red-orange */
  --ember: #FF8C00;   /* Secondary orange */
  --gold: #FFB800;    /* Accent gold */
}
```

### Change WhatsApp Number
In `js/app.js` line ~280:
```javascript
window.open(`https://wa.me/255712345678?text=${encoded}`, '_blank');
```

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Custom cursor with glow effect (desktop)
- ✅ Infinite food carousel (auto-scrolling)
- ✅ Category-based menu with skeleton loading
- ✅ Add to cart with fly animation
- ✅ Cart sidebar with quantity controls
- ✅ WhatsApp checkout (auto-formats order message)
- ✅ Scroll-triggered reveal animations
- ✅ Parallax hero background
- ✅ Magnetic buttons
- ✅ Glassmorphism UI
- ✅ Bento grid cuisine showcase
- ✅ Heat indicator (🌶️ level)
- ✅ No frameworks, pure HTML/CSS/JS

---

## 🛠️ Tech Stack

- Pure HTML5 / CSS3 / Vanilla JavaScript (ES6+)
- Google Fonts (Playfair Display, DM Sans, Bebas Neue)
- Unsplash for food photography
- Web Animations API for cart fly effect
- IntersectionObserver API for scroll reveals

---

*Chef's Pride Restaurant — Made with 🔥 in Dar es Salaam, Tanzania*

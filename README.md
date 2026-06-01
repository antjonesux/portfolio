# Anthony Jones — Portfolio

Personal portfolio site. Built with React + Vite.

## Quick Start (Cursor)

```bash
# 1. Open this folder in Cursor
# 2. Open the terminal and install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open http://localhost:5173 in your browser
```

## Project Structure

```
src/
├── App.jsx                  # Main app — wires all sections together
├── main.jsx                 # Entry point
├── data/
│   └── projects.js          # All project content — edit text/images here
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── Work.jsx             # Project card grid
│   ├── About.jsx
│   ├── Capabilities.jsx
│   ├── Approach.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ProjectModal.jsx     # Full case study modal
│   ├── PlaceholderImage.jsx # Swap these out for real <img> tags
│   └── Logo.jsx             # Replace SVG with your real logo
├── styles/
│   ├── variables.css        # Design tokens (colors, spacing, radii)
│   └── global.css           # All styles organized by component
└── assets/                  # Drop your images here
```

## Replacing Placeholder Images

1. Drop your images into `src/assets/`
2. Open `src/data/projects.js`
3. Import and assign them:

```js
import uspsCard from '../assets/usps-card.png'
import aimsplusCard from '../assets/aimsplus-card.png'

// Then in the project object:
cardImage: uspsCard,
```

4. For platform screenshots and about photo, update the relevant component directly.

## Deploy to Vercel

### First deploy

1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project" → import your repo
4. Vercel auto-detects Vite — just click Deploy
5. You'll get a live URL like `yourproject.vercel.app`

### Connect your custom domain

1. In Vercel dashboard → your project → Settings → Domains
2. Add your domain (e.g. `anthonyjones.com`)
3. Vercel will give you DNS records to configure
4. In GoDaddy → DNS Management:
   - Add an A record: `@` → `76.76.21.21`
   - Add a CNAME record: `www` → `cname.vercel-dns.com`
5. Wait for DNS propagation (usually minutes, can take up to 48hrs)
6. Vercel auto-provisions HTTPS

## Domain Transfer from UXfolio → GoDaddy

1. Email **support@uxfol.io** with:
   - Your GoDaddy username
   - The email registered to your GoDaddy account
   - The domain you want to transfer
2. Keep your UXfolio subscription active until the transfer completes
3. Once the domain is in GoDaddy, update DNS to point to Vercel (see above)

## Development Notes

- All content lives in `src/data/projects.js` — easy to update without touching components
- CSS uses custom properties defined in `src/styles/variables.css`
- The modal locks body scroll when open and animates in
- Responsive breakpoints: mobile (<768px), tablet (768-1023px), desktop (1024px+)

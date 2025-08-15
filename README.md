# RoyaltyPerleRare - Landing Page

A beautiful, modern landing page for RoyaltyPerleRare, a waist bead vendor celebrating African culture and tradition.

## Features

- 🎨 **Modern Design**: Elegant dark theme with gold and purple accents
- 📱 **Responsive**: Fully responsive design that works on all devices
- ✨ **Smooth Animations**: Framer Motion animations for engaging user experience
- 🎯 **Call-to-Action**: Direct links to Shopify collection page
- 🌍 **Cultural Focus**: Celebrates African heritage and waist bead traditions

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Shopify Store URL
The landing page is now connected to your Shopify store at:
**https://chkzu1-m3.myshopify.com/collections/all**

All call-to-action buttons throughout the site will direct visitors to your actual product collection.

### Colors
The color palette is defined in `tailwind.config.js`:
- **Gold**: `#f59e0b` - Primary accent color
- **Royal Purple**: `#8b5cf6` - Secondary accent color
- **Dark**: Various shades for backgrounds

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features section
│   ├── About.tsx        # About section
│   └── Footer.tsx       # Footer
```

## Deployment

This project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

## License

This project is created for RoyaltyPerleRare.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

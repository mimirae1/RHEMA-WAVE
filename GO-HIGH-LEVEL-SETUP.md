# RHEMA WAVE TECHNOLOGIES — Go High Level Setup Guide

## Overview
This repository contains the complete website for RHEMA WAVE TECHNOLOGIES, built as static HTML/CSS/JS files ready for import into Go High Level (GHL).

## Go High Level Integration Steps

### Option 1: Rebuild in GHL Funnel/Website Builder (Recommended)
1. Log into your GHL account: `https://app.gohighlevel.com/v2/location/cNAyHmngYm8u4K3qqUPq/funnels-websites/websites`
2. Create a new Website (not funnel) in the Website Builder
3. Use the HTML files in this repo as your **content and structure reference**
4. Recreate each page using GHL's drag-and-drop builder:
   - **Home** → index.html (Hero, Intro, How It Works, Systems Preview, Benefits, Video, Audience, Testimonials, CTA)
   - **About** → about.html
   - **The Science** → technology.html
   - **Systems** → products.html
   - **Commercial** → commercial.html
   - **Gallery** → gallery.html
   - **Testimonials** → testimonials.html
   - **Contact** → contact.html (Replace form with GHL form)
5. Add the CSS custom styles via GHL's Custom CSS injection (Settings > Custom CSS)
6. Copy the contents of `css/styles.css` into the custom CSS field

### Option 2: Custom Code Elements in GHL
1. Create a new GHL website with blank pages
2. On each page, add a "Custom Code" element
3. Paste the full HTML from each file into the corresponding page
4. Upload CSS/JS files to GHL's media library or use Custom Code in the header/footer

### Option 3: External Hosting with GHL Forms
1. Host this website on Netlify, Vercel, or any static host
2. Connect your custom domain
3. Replace the contact form with a GHL form embed code
4. Set up GHL workflows to handle form submissions

## Media Assets Setup

### Images Required
Place your images in `assets/images/` with these filenames:
- `scalar-waves-hero.jpg` — Main hero/intro image
- `about-mission.jpg` — About page mission section
- `scalar-science.jpg` — Technology page science visual
- `commercial-environment.jpg` — Commercial page hero
- `residential-system.jpg` — Home page residential preview
- `commercial-system.jpg` — Home page commercial preview
- `individual-wellness.jpg` — Audience card for individuals
- `med-spa.jpg` — Audience card for med spas
- `functional-medicine.jpg` — Audience card for clinics
- `video-poster.jpg` — Video section poster image

### Product Images (`assets/images/products/`)
- `the-cube.jpg`
- `the-sphere.jpg`
- `the-pyramid.jpg`
- `the-chair.jpg`
- `4-unit-system.jpg`
- `8-unit-system.jpg`
- `12-unit-system.jpg`
- `compact-qbe.jpg`
- `wearables.jpg`
- `journey-commercial.jpg`
- `dream-commercial.jpg`
- `awakening-commercial.jpg`

### Gallery Images (`assets/images/gallery/`)
- `system-01.jpg` through `system-06.jpg`

### Videos (`assets/videos/`)
Download from your Dropbox folders and rename:
- Scalar Wave Videos → `scalar-wave-01.mp4` through `scalar-wave-06.mp4`
- B-Roll Videos → `broll-01.mp4` through `broll-06.mp4`
- Hero background video → `hero-bg.mp4`
- Demo video → `scalar-waves-demo.mp4`

**Dropbox - Scalar Waves:** https://www.dropbox.com/scl/fo/mm10rcg547f7nczoc6h8p/APom_4l0rF3N9AYP4dboVZo?rlkey=feqlfoszpyr7d1hnk8gibs91f&st=02wbxd08&dl=0

**Dropbox - B-Roll:** https://www.dropbox.com/scl/fo/oe37whfti0h9s5o0yylp7/AMW0E9Y0lw9c6UxhgAJgGy4?rlkey=t2ygdj40oziz1jkvgkogbjwd7&st=yjepyvjl&dl=0

## Brand Colors (CSS Custom Properties)
- **White:** `#ffffff`
- **Calming Purple:** `#c4b5d8` (light), `#8b6fad` (deep)
- **Soft Green:** `#a8d5ba` (light), `#6db88a` (deep)
- **Dark Background:** `#1a1225`

## Fonts
- Display: Cormorant Garamond (Google Fonts)
- Body: Montserrat (Google Fonts)

## Things to Update
- [ ] Replace phone number placeholders (`+1 (XXX) XXX-XXXX`) with actual number
- [ ] Replace email if different from `info@rhemawavetech.com`
- [ ] Add actual product images from your photo collection
- [ ] Download and add videos from Dropbox folders
- [ ] Add social media URLs in footer
- [ ] Review product pricing against your current Sales Agreement/contract
- [ ] Replace contact form with GHL form embed code
- [ ] Add Google Analytics tracking code
- [ ] Add Facebook Pixel code
- [ ] Review all legal pages with your legal counsel
- [ ] Add your company logo image (currently text-only)

## GHL Automation Recommendations (Phase 2)
- Form submission → Auto-tag lead in GHL CRM
- Consultation booking → Calendar integration
- Email nurture sequence for new leads
- SMS follow-up workflow
- Pipeline stages: Inquiry → Consultation → Quote → Agreement → Installation → Support

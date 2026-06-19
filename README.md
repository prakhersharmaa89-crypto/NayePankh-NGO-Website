# NayePankh Foundation — Website

A simple, responsive, multi-page website for NayePankh Foundation with
interactive features and animations. Built with plain HTML, CSS, and
JavaScript — no frameworks, no build step required.

## Folder structure

```
nayepankh-foundation/
├── index.html          # All pages (Home, About, Programs, Gallery, Contact)
├── assets/
│   ├── style.css        # All styling, layout, animations, responsive rules
│   └── script.js         # Navigation, counters, form handling, interactivity
└── README.md
```

## How to view it

1. Unzip the folder.
2. Double-click `index.html` — it opens directly in any browser.
   No server or installation needed.

## Features included

- **5 pages** (single-page app style, no reload): Home, About, Programs,
  Gallery, Contact — navigated via the top nav bar / footer links.
- **Interactive elements**:
  - Animated stat counters (people helped, interns trained, etc.)
  - Donation amount selector buttons
  - Contact form with simple validation + success message
  - Animated progress bars on the Programs page
  - Gallery hover overlays
- **Animations**: fade-up entrance on cards, smooth progress bar fills,
  hover transitions on cards and buttons.
- **Fully responsive**: adapts down to mobile widths (breakpoints at
  700px, 600px, 420px).

## Getting a live URL (free options)

This is a static site (HTML/CSS/JS only), so any static host works:

1. **Netlify Drop** — go to https://app.netlify.com/drop and drag the
   whole `nayepankh-foundation` folder in. Instant live URL, no signup.
2. **GitHub Pages** — push this folder to a GitHub repo, then enable
   Pages in repo Settings → Pages. URL will be
   `https://<username>.github.io/<repo-name>/`.
3. **Vercel** — https://vercel.com → "Add New Project" → import/drag
   the folder.

## Making the contact form actually work

Right now the form shows a success message but doesn't send the data
anywhere (no backend). To make it functional, pick one:

- **Formspree** (easiest, free tier): sign up at formspree.io, get a
  form endpoint, and change the `<form>` tag in `index.html` to POST to
  it (e.g. `action="https://formspree.io/f/yourFormId" method="POST"`).
- **EmailJS**: sends form data straight to your email via JS, no backend.
- **Custom backend**: Node.js/Express + Nodemailer, or any server that
  accepts POST requests.

## Adding real donations (India)

For real payments, integrate a gateway such as **Razorpay** (popular in
India for NGOs) or **Instamojo**. Both offer JS SDKs that can replace
the static "Donate Now" buttons with an actual checkout flow.

## Customizing

- **Colors**: edit the CSS variables at the top of `assets/style.css`
  (`--color-primary`, etc.) to change the theme.
- **Content/text**: edit directly inside `index.html`.
- **Images**: the gallery currently uses emoji placeholders — swap the
  `.gallery-img` divs for real `<img>` tags once you have photos.

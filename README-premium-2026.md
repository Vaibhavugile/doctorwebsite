# Doctor Clinic Landing Page — Premium 2026 Update

## What's updated
- Mobile hero layout now puts the doctor's photo first, followed by headline, supporting copy, CTAs and trust details.
- Refined premium visual system: soft glass navbar, smoother interactions, modern cards, subtle depth, responsive spacing and reduced-motion support.
- Added a responsive appointment enquiry form with name, phone, reason for visit, preferred date and optional note.
- Form validation checks required fields and opens WhatsApp with a prefilled appointment request. The patient still needs to press Send in WhatsApp.
- Kept the existing reusable clinic data configuration in `src/clinicData.js`.

## Run locally
```bash
npm install
npm start
```

## Configure before publishing
Edit `src/clinicData.js` with the real doctor name, speciality, credentials, phone, WhatsApp number (country code, digits only), clinic address, opening hours and services. Replace the stock photo URLs with licensed/approved doctor photos.

The form does not store submissions in a database or send them automatically. It hands the enquiry to WhatsApp after the visitor submits the form. Avoid asking visitors to include sensitive medical information.

## Build and deploy
```bash
npm run build
firebase deploy --only hosting
```
Ensure Firebase CLI is installed and the correct Firebase project is selected before deploying.

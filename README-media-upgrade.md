# Premium Clinic Website — Media Upgrade

## Added
- A responsive four-photo editorial gallery under “Inside the clinic”.
- A clinic introduction video area with responsive 16:9 video embed support.
- Gallery navigation link in the header and footer.
- Mobile-specific gallery layout and premium hover effects.

## Add your video
Open `src/clinicData.js` and set `introVideoUrl` to a YouTube embed URL, for example:
`https://www.youtube.com/embed/YOUR_VIDEO_ID`

Use an official, clinic-approved video only. If you use a self-hosted MP4, this version expects a YouTube-compatible embed URL; the component can be adapted for `<video>` hosting if needed.

## Important
The included photos are illustrative stock images. Replace them with licensed images and genuine, consented clinic photos before publishing. Verify all doctor details and contact numbers in `src/clinicData.js`.

## Run
```bash
npm install
npm start
```

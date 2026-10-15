// Update this file for each doctor. Use a real, clinic-approved photo and verified credentials before publishing.
const clinicData = {
  doctorName: "Dr. Aanya Mehta",
  credentials: "MBBS, MD (Internal Medicine)",
  specialty: "Consultant Physician",
  experience: "12+ years of experience",
  clinicName: "Mehta Family Clinic",
  phoneDisplay: "+91 98765 43210",
  phone: "919876543210",
  whatsapp: "919876543210",
  address: "204, Harmony Medical Centre, Baner, Pune, Maharashtra",
  hours: [
    ["Monday – Friday", "9:00 AM – 1:00 PM · 5:00 PM – 8:00 PM"],
    ["Saturday", "9:00 AM – 1:00 PM"],
    ["Sunday", "By appointment"]
  ],
  // Optional: use a YouTube EMBED URL, e.g. https://www.youtube.com/embed/YOUR_VIDEO_ID
  // Keep this empty until you have a clinic-approved video.
  introVideoUrl: "",
  services: [
    { number: "01", title: "General consultation", text: "Thoughtful assessment for everyday health concerns and ongoing care.", icon: "stethoscope" },
    { number: "02", title: "Preventive health", text: "Health check-ups and practical guidance to support long-term wellbeing.", icon: "heart-pulse" },
    { number: "03", title: "Chronic condition care", text: "Personalised follow-up for conditions that benefit from consistent care.", icon: "activity" },
    { number: "04", title: "Family health", text: "Clear, considerate care for adults and the health questions that matter.", icon: "users" }
  ],
  // Replace with verified, consented testimonials only. These sample cards are intentionally generic placeholders.
  testimonials: [
    { quote: "The consultation felt unhurried. Everything was explained in a way I could understand.", name: "Patient feedback", detail: "Sample placeholder — replace before launch" },
    { quote: "The clinic team was welcoming and the appointment process was straightforward.", name: "Patient feedback", detail: "Sample placeholder — replace before launch" }
  ]
};

export default clinicData;
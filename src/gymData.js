
export const gymData = {
  brand: {
    name: "AUREX",
    fullName: "AUREX ATHLETIC CLUB",
    tagline: "BUILT DIFFERENT. TRAIN WITH PURPOSE.",
    headline: ["BECOME", "YOUR", "STRONGEST."],
    description:
      "A new standard in strength, performance and personal transformation. Your next chapter starts with showing up.",
    logoLetters: "A",
    announcement: "YOUR NEXT LEVEL IS CLOSER THAN YOU THINK",
    city: "Pune, India",
  },

  contact: {
    phone: "919876543210",
    phoneDisplay: "+91 98765 43210",
    email: "hello@aurexfitness.com",
    address: "Your Gym Address, Pune, Maharashtra, India",
    openingHours: [
      { day: "MON – FRI", hours: "5:00 AM – 11:00 PM" },
      { day: "SATURDAY", hours: "6:00 AM – 10:00 PM" },
      { day: "SUNDAY", hours: "7:00 AM – 12:00 PM" },
    ],
    mapUrl: "https://maps.google.com/?q=gyms+in+Pune",
    instagramUrl: "https://www.instagram.com/",
    youtubeUrl: "https://www.youtube.com/",
  },

  theme: {
    background: "#f8f7f3",
    surface: "#ffffff",
    gold: "#a87c3e",
    goldLight: "#d6b77d",
    text: "#20211f",
    muted: "#666760",
  },

  hero: {
    eyebrow: "THE ART OF GETTING STRONGER",
    titleLineOne: "BUILT",
    titleLineTwo: "BY",
    titleAccent: "DISCIPLINE.",
    description:
      "Not just another gym. A space for people who are ready to move with intent, train intelligently and become more.",
    primaryButton: "Explore memberships",
    secondaryButton: "Discover the club",

    // Replace with your own licensed gym video when available.
    video:
      "https://www.pexels.com/download/video/37536685/",

    // Optional vertical 9:16 mobile video. Replace with a licensed vertical gym clip.
    // If left empty, the desktop video and mobile poster are used.
    mobileVideo: "https://www.pexels.com/download/video/29532359/",
    mobilePoster:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",

    poster:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90",

    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90",

    badge: "YOUR STRONGEST SELF STARTS HERE",

    stats: [
      { value: "01", label: "YOUR GOALS" },
      { value: "100%", label: "YOUR COMMITMENT" },
      { value: "DAILY", label: "YOUR PROGRESS" },
    ],
  },

  marquee: [
    "STRENGTH",
    "DISCIPLINE",
    "PERFORMANCE",
    "COMMUNITY",
    "PROGRESS",
    "CONSISTENCY",
  ],

  introduction: {
    eyebrow: "MORE THAN A PLACE TO TRAIN",
    title: "YOUR AMBITION.",
    accent: "OUR ENVIRONMENT.",
    description:
      "Every detail matters. From the equipment you use to the people who coach you, we create an environment where progress becomes a habit.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    features: [
      "Purpose-built training zones",
      "Personal coaching options",
      "Structured training programs",
      "A community that keeps you moving",
    ],
  },

  programs: [
    {
      id: "strength",
      number: "01",
      category: "BUILD POWER",
      title: "Strength & hypertrophy",
      description:
        "Progressive resistance training for strength, muscle development and confidence.",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1100&q=85",
      icon: "dumbbell",
    },
    {
      id: "performance",
      number: "02",
      category: "MOVE BETTER",
      title: "Athletic performance",
      description:
        "Develop power, mobility, coordination and the conditioning to perform at your best.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=85",
      icon: "zap",
    },
    {
      id: "personal",
      number: "03",
      category: "YOUR OWN PLAN",
      title: "Personal training",
      description:
        "One-to-one coaching with training tailored to your experience and individual goals.",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1100&q=85",
      icon: "target",
    },
    {
      id: "conditioning",
      number: "04",
      category: "PUSH YOUR LIMITS",
      title: "Conditioning & HIIT",
      description:
        "Challenging sessions combining intervals, movement and full-body conditioning.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1100&q=85",
      icon: "activity",
    },
  ],

  experience: {
    eyebrow: "DESIGNED FOR THE WORK",
    title: "A SPACE THAT",
    accent: "MOVES YOU.",
    description:
      "Serious equipment. Thoughtful training zones. A focused atmosphere that makes it easier to concentrate on your next rep.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90",
    features: [
      "Strength and free-weight zone",
      "Cardio and endurance equipment",
      "Functional training space",
      "Personal coaching area",
    ],
  },

  memberships: [
    {
      id: "monthly",
      name: "Essential",
      subtitle: "Start with consistency.",
      duration: "1 month",
      price: 1999,
      period: "/ month",
      label: "FLEXIBLE ACCESS",
      features: [
        "Gym floor access",
        "Strength and cardio equipment",
        "Initial fitness orientation",
        "Locker access, subject to availability",
      ],
      featured: false,
    },
    {
      id: "quarterly",
      name: "Performance",
      subtitle: "Make progress a habit.",
      duration: "3 months",
      price: 4999,
      period: "/ 3 months",
      label: "MEMBER FAVOURITE",
      features: [
        "Everything in Essential",
        "Fitness progress check-ins",
        "Group class access",
        "Workout guidance",
      ],
      featured: true,
    },
    {
      id: "annual",
      name: "Elite",
      subtitle: "Commit to the bigger picture.",
      duration: "12 months",
      price: 14999,
      period: "/ year",
      label: "LONG-TERM COMMITMENT",
      features: [
        "Everything in Performance",
        "Priority class reservations",
        "Quarterly progress review",
        "Member appreciation benefits",
      ],
      featured: false,
    },
  ],

  trainers: [
    {
      id: "coach-01",
      name: "Alex Morgan",
      role: "HEAD STRENGTH COACH",
      experience: "8+ years",
      speciality: "Strength & hypertrophy",
      bio: "Focused on sustainable strength, technique and progressive training.",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "coach-02",
      name: "Jordan Lee",
      role: "PERSONAL TRAINER",
      experience: "6+ years",
      speciality: "Personal training",
      bio: "Helps members build routines that fit their goals and lifestyles.",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "coach-03",
      name: "Taylor Brooks",
      role: "PERFORMANCE COACH",
      experience: "5+ years",
      speciality: "Conditioning & mobility",
      bio: "Combines conditioning and movement work to develop overall performance.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    },
  ],

  // Vertical social-style cards.
  // Each item can use a video URL or fall back to its poster image.
  reels: [
    {
      id: "reel-01",
      category: "TRAINING",
      title: "One more rep.",
      description: "The work nobody sees.",
      poster:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=85",
      video: "https://www.pexels.com/download/video/34800551/",
      duration: "00:18",
    },
    {
      id: "reel-02",
      category: "THE CLUB",
      title: "Inside the grind.",
      description: "Your space. Your pace.",
      poster:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=85",
      video: "https://www.pexels.com/download/video/34800557/",
      duration: "00:24",
    },
    {
      id: "reel-03",
      category: "COACHING",
      title: "Form comes first.",
      description: "Train smarter every day.",
      poster:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=85",
      video: "https://www.pexels.com/download/video/4686178/",
      duration: "00:15",
    },
    {
      id: "reel-04",
      category: "COMMUNITY",
      title: "Stronger together.",
      description: "Good energy. Better habits.",
      poster:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=85",
      video: "https://www.pexels.com/download/video/37642253/",
      duration: "00:20",
    },
  ],

  gallery: [
    {
      id: "gallery-01",
      title: "THE TRAINING FLOOR",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "gallery-02",
      title: "STRENGTH ZONE",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: "gallery-03",
      title: "BUILT FOR PERFORMANCE",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: "gallery-04",
      title: "THE DAILY WORK",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: "gallery-05",
      title: "FOCUS ON PROGRESS",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=85",
    },
  ],

  testimonials: [
    {
      id: "review-01",
      quote:
        "The best training environment is one that makes consistency feel achievable. That is the experience we want every member to have.",
      name: "Member experience",
      detail: "AUREX COMMUNITY",
      rating: 5,
    },
    {
      id: "review-02",
      quote:
        "Good coaching is about more than a workout. It is about understanding your goals and helping you keep moving forward.",
      name: "Coaching philosophy",
      detail: "AUREX TRAINING",
      rating: 5,
    },
    {
      id: "review-03",
      quote:
        "Every session is another opportunity to improve your technique, build confidence and become more consistent.",
      name: "Training mindset",
      detail: "THE AUREX STANDARD",
      rating: 5,
    },
  ],

  schedule: [
    {
      id: "class-01",
      day: "Mon",
      time: "06:00 AM",
      title: "Strength foundations",
      category: "STRENGTH",
      coach: "Alex",
    },
    {
      id: "class-02",
      day: "Mon",
      time: "06:00 PM",
      title: "HIIT conditioning",
      category: "CONDITIONING",
      coach: "Taylor",
    },
    {
      id: "class-03",
      day: "Tue",
      time: "07:00 AM",
      title: "Functional training",
      category: "PERFORMANCE",
      coach: "Jordan",
    },
    {
      id: "class-04",
      day: "Tue",
      time: "06:30 PM",
      title: "Mobility and movement",
      category: "MOBILITY",
      coach: "Taylor",
    },
    {
      id: "class-05",
      day: "Wed",
      time: "06:00 AM",
      title: "Full-body strength",
      category: "STRENGTH",
      coach: "Alex",
    },
    {
      id: "class-06",
      day: "Wed",
      time: "06:00 PM",
      title: "HIIT conditioning",
      category: "CONDITIONING",
      coach: "Jordan",
    },
    {
      id: "class-07",
      day: "Thu",
      time: "07:00 AM",
      title: "Functional training",
      category: "PERFORMANCE",
      coach: "Taylor",
    },
    {
      id: "class-08",
      day: "Thu",
      time: "06:30 PM",
      title: "Strength foundations",
      category: "STRENGTH",
      coach: "Alex",
    },
    {
      id: "class-09",
      day: "Fri",
      time: "06:00 AM",
      title: "Full-body strength",
      category: "STRENGTH",
      coach: "Jordan",
    },
    {
      id: "class-10",
      day: "Fri",
      time: "06:30 PM",
      title: "Athletic conditioning",
      category: "CONDITIONING",
      coach: "Taylor",
    },
    {
      id: "class-11",
      day: "Sat",
      time: "08:00 AM",
      title: "Weekend training club",
      category: "COMMUNITY",
      coach: "Alex",
    },
  ],

  navigation: [
    { label: "The club", href: "#club" },
    { label: "Training", href: "#programs" },
    { label: "Membership", href: "#membership" },
    { label: "Coaches", href: "#trainers" },
    { label: "Reels", href: "#reels" },
    { label: "Visit us", href: "#location" },
  ],
};

export function getWhatsAppUrl(message) {
  const phone = gymData.contact.phone.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(price);
}

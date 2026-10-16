import React, { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Baby,
  Bone,
  Brain,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Heart,
  HeartPulse,
  MapPin,
  Menu,
  Microscope,
  MoveRight,
  Phone,
  Play,
  Plus,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Video,
  X,
} from "lucide-react";

import "./styles.css";

/* =========================================================
   CLINIC CONFIGURATION
   Replace the sample details with your actual clinic details.
========================================================= */

const clinic = {
  name: "Carewell Multispeciality Clinic",
  shortName: "Carewell",
  tagline: "Thoughtful care. Better health.",
  phone: "+91 00000 00000",
  email: "hello@exampleclinic.com",
  address: "Add your clinic address here",
  hours: "Mon – Sat, 9:00 AM – 8:00 PM",
  whatsapp: "910000000000",
  mapsUrl: "https://maps.google.com/?q=your+clinic+address",
};

/* =========================================================
   IMAGE AND VIDEO ASSETS
   These are remote demonstration assets.
   Replace them with your own optimized clinic media before
   publishing your website.
========================================================= */

const media = {
  heroPoster:
    "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?auto=format&fit=crop&w=1600&q=85",

  heroVideo:
    "https://videos.pexels.com/video-files/7578545/7578545-hd_1920_1080_25fps.mp4",

  about:
    "https://img.freepik.com/premium-photo/young-indian-female-doctor-image_669954-13673.jpg?w=2000",

  clinicInterior:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",

  reception:
    "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?auto=format&fit=crop&w=1200&q=85",

  consultation:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",

  generalMedicine:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",

  cardiology:
    "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=900&q=85",

  paediatrics:
    "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=900&q=85",

  orthopaedics:
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=85",

  neurology:
    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=85",

  diagnostics:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85",

  preventive:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85",

  heartHealth:
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=85",

  jointCare:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=85",

  childWellness:
    "https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=1000&q=85",

  diagnosticCare:
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85",

  neurologicalCare:
    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85",

  gallery1:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85",

  gallery2:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",

  gallery3:
    "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?auto=format&fit=crop&w=1000&q=85",

  gallery4:
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85",

  clinicFilm:
    "https://videos.pexels.com/video-files/7578545/7578545-hd_1920_1080_25fps.mp4",
};

/* =========================================================
   SPECIALITIES
========================================================= */

const services = [
  {
    id: "general-medicine",
    number: "01",
    title: "General Medicine",
    tag: "Everyday health",
    detail:
      "Consultations for common illnesses, ongoing health concerns and preventive care.",
    image: media.generalMedicine,
    icon: Stethoscope,
  },
  {
    id: "cardiology",
    number: "02",
    title: "Cardiology",
    tag: "Heart health",
    detail:
      "Heart-health consultations, risk assessment and appropriate diagnostic referrals.",
    image: media.cardiology,
    icon: HeartPulse,
  },
  {
    id: "paediatrics",
    number: "03",
    title: "Paediatrics",
    tag: "Care for children",
    detail:
      "Child wellness consultations and age-appropriate preventive healthcare.",
    image: media.paediatrics,
    icon: Baby,
  },
  {
    id: "orthopaedics",
    number: "04",
    title: "Orthopaedics",
    tag: "Bones & mobility",
    detail:
      "Assessment of joint discomfort, mobility concerns and musculoskeletal conditions.",
    image: media.orthopaedics,
    icon: Bone,
  },
  {
    id: "neurology",
    number: "05",
    title: "Neurology",
    tag: "Nervous system",
    detail:
      "Consultations for neurological symptoms and guidance on further evaluation.",
    image: media.neurology,
    icon: Brain,
  },
  {
    id: "diagnostics",
    number: "06",
    title: "Diagnostics",
    tag: "Investigations",
    detail:
      "Access to relevant diagnostic investigations according to clinical requirements.",
    image: media.diagnostics,
    icon: Microscope,
  },
];

/* =========================================================
   TREATMENTS AND CARE SERVICES
   Add a videoUrl when you have a suitable treatment video.
========================================================= */

const treatments = [
  {
    id: "preventive-health",
    number: "01",
    title: "Preventive Health Checkups",
    category: "PREVENTIVE CARE",
    detail:
      "Health assessments designed to support early identification of potential health concerns.",
    image: media.preventive,
    icon: ShieldCheck,
  },
  {
    id: "heart-health",
    number: "02",
    title: "Heart Health Consultations",
    category: "CARDIAC CARE",
    detail:
      "Personalised consultation and guidance based on symptoms, history and clinical findings.",
    image: media.heartHealth,
    icon: Heart,
  },
  {
    id: "joint-mobility",
    number: "03",
    title: "Joint & Mobility Assessment",
    category: "MOBILITY CARE",
    detail:
      "Assessment of joint pain, movement limitations and suitable next steps for care.",
    image: media.jointCare,
    icon: Activity,
  },
  {
    id: "child-wellness",
    number: "04",
    title: "Child Wellness Visits",
    category: "CHILD HEALTH",
    detail:
      "Routine child health consultations and guidance for parents and caregivers.",
    image: media.childWellness,
    icon: Baby,
  },
  {
    id: "diagnostic-services",
    number: "05",
    title: "Diagnostic Services",
    category: "DIAGNOSTICS",
    detail:
      "Guidance on appropriate investigations and understanding the next steps in care.",
    image: media.diagnosticCare,
    icon: Microscope,
    videoUrl: "",
  },
  {
    id: "neurological-consultations",
    number: "06",
    title: "Neurological Consultations",
    category: "SPECIALIST CARE",
    detail:
      "Clinical evaluation of neurological symptoms and referral guidance where appropriate.",
    image: media.neurologicalCare,
    icon: Brain,
    videoUrl: "",
  },
];

/* =========================================================
   CLINIC GALLERY
========================================================= */

const clinicGallery = [
  {
    image: media.gallery1,
    title: "Welcoming clinic spaces",
    category: "OUR CLINIC",
  },
  {
    image: media.gallery2,
    title: "A thoughtful care experience",
    category: "PATIENT EXPERIENCE",
  },
  {
    image: media.gallery3,
    title: "Comfortable consultation areas",
    category: "CONSULTATIONS",
  },
  {
    image: media.gallery4,
    title: "A connected healthcare environment",
    category: "OUR FACILITIES",
  },
];

/* =========================================================
   PATIENT JOURNEY
========================================================= */

const patientJourney = [
  {
    number: "01",
    title: "Book your visit",
    detail:
      "Contact our team to enquire about your preferred speciality and appointment.",
  },
  {
    number: "02",
    title: "Meet your care team",
    detail:
      "Discuss your concerns and medical history with the appropriate healthcare professional.",
  },
  {
    number: "03",
    title: "Understand your options",
    detail:
      "Receive guidance on relevant investigations, treatment options or specialist referrals.",
  },
  {
    number: "04",
    title: "Plan your next steps",
    detail:
      "Follow the care plan recommended by your treating healthcare professional.",
  },
];

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function BrandLogo() {
  return (
    <a href="#home" className="brand-logo" aria-label={`${clinic.name} home`}>
      <span className="brand-symbol">
        <Plus size={25} strokeWidth={2.5} />
      </span>

      <span className="brand-copy">
        <strong>{clinic.shortName}</strong>
        <small>MULTISPECIALITY CLINIC</small>
      </span>
    </a>
  );
}

function PrimaryButton({
  children,
  onClick,
  href,
  variant = "primary",
  type = "button",
}) {
  if (href) {
    return (
      <a href={href} className={`button button-${variant}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`button button-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ServiceCard({ service, onBook }) {
  const Icon = service.icon;

  return (
    <article className="premium-service-card">
      <div className="premium-service-image">
        <img
          src={service.image}
          alt={`${service.title} speciality`}
          loading="lazy"
        />

        <span className="service-number">{service.number}</span>

        <span className="service-image-icon">
          <Icon size={23} strokeWidth={1.7} />
        </span>
      </div>

      <div className="premium-service-content">
        <span className="service-tag">{service.tag}</span>

        <h3>{service.title}</h3>

        <p>{service.detail}</p>

        <button
          type="button"
          className="text-link"
          onClick={() => onBook(service.title)}
        >
          Enquire about care
          <ArrowUpRight size={17} />
        </button>
      </div>
    </article>
  );
}

function TreatmentCard({ treatment, onBook }) {
  const Icon = treatment.icon;

  return (
    <article className="premium-treatment-card">
      <div className="premium-treatment-media">
        <img
          src={treatment.image}
          alt={treatment.title}
          loading="lazy"
        />

        <span className="treatment-category">
          {treatment.category}
        </span>

        {treatment.videoUrl ? (
          <a
            href={treatment.videoUrl}
            className="treatment-video-link"
            target="_blank"
            rel="noreferrer"
            aria-label={`Watch video about ${treatment.title}`}
          >
            <Play size={18} fill="currentColor" />
            Watch video
          </a>
        ) : (
          <span className="treatment-media-label">
            <Icon size={16} />
            CARE & CONSULTATION
          </span>
        )}
      </div>

      <div className="premium-treatment-content">
        <div className="treatment-title-row">
          <h3>{treatment.title}</h3>

          <span className="treatment-number">{treatment.number}</span>
        </div>

        <p>{treatment.detail}</p>

        <button
          type="button"
          className="text-link"
          onClick={() => onBook(treatment.title)}
        >
          Make an enquiry
          <ArrowRight size={17} />
        </button>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingDepartment, setBookingDepartment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    department: "",
    preferredDate: "",
    message: "",
  });

  const openBooking = (department = "") => {
    setBookingDepartment(department);

    setBookingForm((previous) => ({
      ...previous,
      department,
    }));

    setBookingOpen(true);
    setMenuOpen(false);
  };

  const closeBooking = () => {
    setBookingOpen(false);
    setSubmitting(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setBookingForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const submitBooking = (event) => {
    event.preventDefault();

    if (!bookingForm.name.trim() || !bookingForm.phone.trim()) {
      window.alert("Please enter your name and phone number.");
      return;
    }

    const phoneDigits = bookingForm.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10) {
      window.alert("Please enter a valid contact number.");
      return;
    }

    setSubmitting(true);

    const message = [
      `Hello ${clinic.name},`,
      "",
      "I would like to enquire about an appointment.",
      "",
      `Name: ${bookingForm.name}`,
      `Phone: ${bookingForm.phone}`,
      `Speciality / Service: ${
        bookingForm.department || bookingDepartment || "General enquiry"
      }`,
      `Preferred date: ${bookingForm.preferredDate || "Not specified"}`,
      `Message: ${bookingForm.message || "No additional message"}`,
      "",
      "Please let me know the available appointment options.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitting(false);
    setBookingOpen(false);
  };

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <div className="clinic-site">
      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-message">
            <span className="topbar-status-dot" />
            <span>
              Your health deserves thoughtful attention.
            </span>
          </div>

          <div className="topbar-contact">
            <a href={`tel:${clinic.phone.replace(/\s/g, "")}`}>
              <Phone size={14} />
              {clinic.phone}
            </a>

            <span className="topbar-divider" />

            <span>
              <Clock3 size={14} />
              {clinic.hours}
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="site-header">
        <div className="container nav-inner">
          <BrandLogo />

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav
            className={`main-nav ${menuOpen ? "main-nav-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMobileMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMobileMenu}>
              About us
            </a>

            <a href="#specialities" onClick={closeMobileMenu}>
              Specialities
            </a>

            <a href="#treatments" onClick={closeMobileMenu}>
              Treatments
            </a>

            <a href="#clinic" onClick={closeMobileMenu}>
              Our clinic
            </a>

            <a href="#contact" onClick={closeMobileMenu}>
              Contact
            </a>

            <button
              type="button"
              className="nav-book-button"
              onClick={() => openBooking()}
            >
              Book an appointment
              <ArrowUpRight size={17} />
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* =====================================================
            HERO — CLINIC-FOCUSED, NOT DOCTOR-FOCUSED
        ===================================================== */}

        <section className="hero-section" id="home">
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-icon">
                  <Plus size={16} />
                </span>

                <span>WELCOME TO {clinic.shortName.toUpperCase()}</span>
              </div>

              <h1>
                Better care.
                <br />
                <span>One connected clinic.</span>
              </h1>

              <p className="hero-description">
                Discover a more connected healthcare experience with
                multiple specialities, thoughtful consultations and
                care centred around your needs.
              </p>

              <div className="hero-actions">
                <PrimaryButton onClick={() => openBooking()}>
                  Book an appointment
                  <ArrowUpRight size={18} />
                </PrimaryButton>

                <a href="#specialities" className="hero-secondary-link">
                  Explore specialities
                  <ArrowDownRight size={18} />
                </a>
              </div>

              <div className="hero-trust-list">
                <div>
                  <CheckCircle2 size={17} />
                  <span>Connected care</span>
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  <span>Multiple specialities</span>
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  <span>Patient-focused approach</span>
                </div>
              </div>
            </div>

            <div className="hero-visual clinic-hero-visual">
              <video
                className="hero-clinic-video"
                autoPlay
                muted
                loop
                playsInline
                poster={media.heroPoster}
                aria-label="Clinic environment video"
              >
                <source src={media.heroVideo} type="video/mp4" />
              </video>

              <img
                className="clinic-hero-poster"
                src={media.heroPoster}
                alt="Modern healthcare environment"
              />

              <div className="clinic-hero-overlay" />

              <div className="clinic-hero-topline">
                <span className="hero-live-dot" />
                <span>CARE THAT CONNECTS</span>
              </div>

              <div className="clinic-hero-caption">
                <span className="clinic-hero-caption-label">
                  YOUR HEALTH, OUR PRIORITY
                </span>

                <h2>More care. One connected place.</h2>

                <p>
                  A welcoming environment for your healthcare journey.
                </p>
              </div>

              <div className="clinic-hero-floating">
                <span className="floating-icon">
                  <HeartPulse size={22} />
                </span>

                <span>
                  <strong>Care centred on you</strong>
                  <small>From consultation to next steps</small>
                </span>

                <CheckCircle2 size={19} className="floating-check" />
              </div>

              <div className="clinic-hero-index">
                <span>01</span>
                <span className="hero-index-line" />
                <span>CLINIC EXPERIENCE</span>
              </div>
            </div>
          </div>

          <div className="container hero-bottom">
            <span>ONE DESTINATION FOR YOUR HEALTHCARE NEEDS</span>

            <a href="#about" aria-label="Scroll to about us">
              <ArrowDownRight size={21} />
            </a>
          </div>
        </section>

        {/* =====================================================
            QUICK BENEFITS STRIP
        ===================================================== */}

        <section className="proof-strip">
          <div className="container proof-strip-grid">
            <div className="proof-item">
              <span className="proof-icon">
                <Stethoscope size={23} />
              </span>

              <div>
                <strong>Multiple specialities</strong>
                <p>Care across different health needs</p>
              </div>
            </div>

            <div className="proof-item">
              <span className="proof-icon">
                <CalendarDays size={23} />
              </span>

              <div>
                <strong>Appointment enquiries</strong>
                <p>Connect with our clinic team</p>
              </div>
            </div>

            <div className="proof-item">
              <span className="proof-icon">
                <ShieldCheck size={23} />
              </span>

              <div>
                <strong>Patient-first approach</strong>
                <p>Guidance tailored to your needs</p>
              </div>
            </div>

            <div className="proof-item">
              <span className="proof-icon">
                <HeartPulse size={23} />
              </span>

              <div>
                <strong>Connected healthcare</strong>
                <p>A coordinated care experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT THE CLINIC
        ===================================================== */}

        <section className="about-section section-padding" id="about">
          <div className="container about-layout">
            <div className="about-visual">
              <div className="about-main-image">
                <img
                  src={media.about}
                  alt="Healthcare professional providing a consultation"
                  loading="lazy"
                />

                <div className="about-image-overlay">
                  <span>OUR APPROACH</span>
                  <strong>Healthcare with a human touch.</strong>
                </div>
              </div>

              <div className="about-small-image">
                <img
                  src={media.clinicInterior}
                  alt="Modern clinic interior"
                  loading="lazy"
                />
              </div>

              <div className="about-floating-card">
                <span className="about-floating-icon">
                  <Sparkles size={21} />
                </span>

                <span>
                  <strong>Care, made more connected</strong>
                  <small>Designed around your journey</small>
                </span>
              </div>

              <span className="about-decoration" />
            </div>

            <div className="about-copy">
              <SectionHeading
                eyebrow="ABOUT OUR CLINIC"
                title={
                  <>
                    Healthcare should feel{" "}
                    <span>clear, connected and personal.</span>
                  </>
                }
                description="We bring different healthcare specialities together in one place, helping patients find relevant consultations, understand their options and navigate their next steps with greater confidence."
              />

              <div className="about-points">
                <div className="about-point">
                  <span>
                    <Check size={17} />
                  </span>

                  <div>
                    <strong>A connected approach</strong>
                    <p>
                      Access information about the specialities and
                      services available at our clinic.
                    </p>
                  </div>
                </div>

                <div className="about-point">
                  <span>
                    <Check size={17} />
                  </span>

                  <div>
                    <strong>Clear communication</strong>
                    <p>
                      Understand appointment options and how to prepare
                      for your visit.
                    </p>
                  </div>
                </div>

                <div className="about-point">
                  <span>
                    <Check size={17} />
                  </span>

                  <div>
                    <strong>Care centred on people</strong>
                    <p>
                      A welcoming experience that respects each
                      patient's individual healthcare needs.
                    </p>
                  </div>
                </div>
              </div>

              <PrimaryButton
                variant="outline"
                href="#specialities"
              >
                Discover our specialities
                <ArrowRight size={18} />
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* =====================================================
            SPECIALITIES — PREMIUM IMAGE CARDS
        ===================================================== */}

        <section
          className="specialities-section section-padding"
          id="specialities"
        >
          <div className="container">
            <div className="specialities-heading-row">
              <SectionHeading
                eyebrow="OUR SPECIALITIES"
                title={
                  <>
                    Different needs.
                    <br />
                    <span>Connected care.</span>
                  </>
                }
                description="Explore our speciality areas and enquire about the appropriate consultation for your healthcare needs."
              />

              <a
                href="#contact"
                className="section-side-link"
              >
                Speak to our team
                <MoveRight size={18} />
              </a>
            </div>

            <div className="premium-services-grid">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onBook={openBooking}
                />
              ))}
            </div>

            <div className="specialities-footer">
              <span>
                <ShieldCheck size={19} />
                Speciality availability may vary. Please contact the
                clinic to confirm services and appointments.
              </span>

              <button
                type="button"
                className="text-link"
                onClick={() => openBooking()}
              >
                Enquire about a speciality
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            TREATMENTS AND CARE SERVICES
        ===================================================== */}

        <section
          className="treatments-section section-padding"
          id="treatments"
        >
          <div className="container">
            <div className="treatments-heading-row">
              <SectionHeading
                eyebrow="TREATMENTS & CARE"
                title={
                  <>
                    Care that starts with
                    <br />
                    <span>understanding your needs.</span>
                  </>
                }
                description="Learn more about our care pathways, consultations and health services. Our team can help you identify the appropriate next step."
              />

              <div className="treatments-heading-note">
                <span className="treatments-note-icon">
                  <Activity size={22} />
                </span>

                <p>
                  The right care begins with the right conversation.
                </p>
              </div>
            </div>

            <div className="premium-treatments-grid">
              {treatments.map((treatment) => (
                <TreatmentCard
                  key={treatment.id}
                  treatment={treatment}
                  onBook={openBooking}
                />
              ))}
            </div>

            <div className="treatments-disclaimer">
              <ShieldCheck size={18} />

              <p>
                Services and treatment suitability depend on clinical
                assessment and availability. Please consult a qualified
                healthcare professional for individual advice.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CLINIC VIDEO / EXPERIENCE
        ===================================================== */}

        <section className="clinic-film-section" id="clinic">
          <div className="container">
            <div className="clinic-film-card">
              <video
                className="clinic-film-video"
                autoPlay
                muted
                loop
                playsInline
                poster={media.clinicInterior}
                aria-label="Healthcare environment video"
              >
                <source src={media.clinicFilm} type="video/mp4" />
              </video>

              <div className="clinic-film-overlay" />

              <div className="clinic-film-content">
                <span className="section-eyebrow section-eyebrow-light">
                  INSIDE OUR CLINIC
                </span>

                <h2>
                  A more welcoming way
                  <br />
                  to experience healthcare.
                </h2>

                <p>
                  Explore a connected care experience designed to help
                  you feel informed, supported and ready for your visit.
                </p>

                <button
                  type="button"
                  className="film-cta"
                  onClick={() => openBooking()}
                >
                  <span className="film-cta-icon">
                    <Play size={17} fill="currentColor" />
                  </span>

                  <span>Plan your clinic visit</span>

                  <ArrowUpRight size={17} />
                </button>
              </div>

              <div className="clinic-film-label">
                <Video size={17} />
                <span>OUR CARE EXPERIENCE</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CLINIC GALLERY
        ===================================================== */}

        <section className="gallery-section section-padding">
          <div className="container">
            <SectionHeading
              eyebrow="OUR ENVIRONMENT"
              title={
                <>
                  Designed around
                  <br />
                  <span>your care experience.</span>
                </>
              }
              description="A look at the spaces and experiences that help shape a welcoming clinic visit."
              align="center"
            />

            <div className="clinic-gallery-grid">
              {clinicGallery.map((item, index) => (
                <article
                  className={`gallery-card gallery-card-${index + 1}`}
                  key={item.title}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="gallery-card-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>

                    <ArrowUpRight size={21} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR APPROACH
        ===================================================== */}

        <section className="approach-section section-padding">
          <div className="container approach-layout">
            <div className="approach-copy">
              <SectionHeading
                eyebrow="THE CARE EXPERIENCE"
                title={
                  <>
                    Every visit deserves
                    <br />
                    <span>a thoughtful approach.</span>
                  </>
                }
                description="We aim to make it easier to understand where to start, whom to contact and what to expect when seeking healthcare."
              />

              <PrimaryButton onClick={() => openBooking()}>
                Talk to our clinic team
                <ArrowRight size={18} />
              </PrimaryButton>
            </div>

            <div className="approach-cards">
              <article className="approach-card">
                <span className="approach-card-icon">
                  <HeartPulse size={23} />
                </span>

                <span className="approach-card-number">01</span>

                <h3>Listen first</h3>

                <p>
                  Start with your concerns and the healthcare support
                  you are looking for.
                </p>
              </article>

              <article className="approach-card">
                <span className="approach-card-icon">
                  <Microscope size={23} />
                </span>

                <span className="approach-card-number">02</span>

                <h3>Explore options</h3>

                <p>
                  Find out about relevant consultations, services and
                  investigations.
                </p>
              </article>

              <article className="approach-card">
                <span className="approach-card-icon">
                  <ShieldCheck size={23} />
                </span>

                <span className="approach-card-number">03</span>

                <h3>Plan your next step</h3>

                <p>
                  Get guidance on arranging a visit and discussing
                  appropriate care with a professional.
                </p>
              </article>

              <article className="approach-card approach-card-accent">
                <span className="approach-card-icon">
                  <Sparkles size={23} />
                </span>

                <span className="approach-card-number">04</span>

                <h3>Feel informed</h3>

                <p>
                  Know how to contact the clinic and prepare for your
                  appointment.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            PATIENT JOURNEY
        ===================================================== */}

        <section className="journey-section section-padding">
          <div className="container">
            <SectionHeading
              eyebrow="YOUR VISIT, SIMPLIFIED"
              title={
                <>
                  From your first enquiry
                  <br />
                  <span>to your next step.</span>
                </>
              }
              description="Here is a simple overview of how to get started with our clinic."
              align="center"
            />

            <div className="patient-journey-grid">
              {patientJourney.map((step, index) => (
                <article
                  className="journey-card"
                  key={step.number}
                >
                  <div className="journey-number-row">
                    <span className="journey-number">
                      {step.number}
                    </span>

                    {index !== patientJourney.length - 1 && (
                      <span className="journey-connector">
                        <ArrowRight size={18} />
                      </span>
                    )}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT AND LOCATION
        ===================================================== */}

        <section
          className="contact-section section-padding"
          id="contact"
        >
          <div className="container contact-layout">
            <div className="contact-copy">
              <SectionHeading
                eyebrow="GET IN TOUCH"
                title={
                  <>
                    Let's help you
                    <br />
                    <span>find your next step.</span>
                  </>
                }
                description="Contact our clinic to enquire about available specialities, appointment options and clinic timings."
              />

              <div className="contact-details">
                <a
                  href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <Phone size={20} />
                  </span>

                  <span>
                    <small>CALL OUR CLINIC</small>
                    <strong>{clinic.phone}</strong>
                  </span>

                  <ArrowUpRight size={18} />
                </a>

                <a
                  href={`mailto:${clinic.email}`}
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <MapPin size={20} />
                  </span>

                  <span>
                    <small>EMAIL US</small>
                    <strong>{clinic.email}</strong>
                  </span>

                  <ArrowUpRight size={18} />
                </a>

                <a
                  href={clinic.mapsUrl}
                  className="contact-detail"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-detail-icon">
                    <MapPin size={20} />
                  </span>

                  <span>
                    <small>VISIT OUR CLINIC</small>
                    <strong>{clinic.address}</strong>
                  </span>

                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="contact-hours">
                <Clock3 size={18} />

                <div>
                  <strong>Clinic hours</strong>
                  <p>{clinic.hours}</p>
                </div>
              </div>
            </div>

            <div className="contact-visual">
              <img
                src={media.reception}
                alt="Welcoming clinic reception"
                loading="lazy"
              />

              <div className="contact-visual-overlay" />

              <div className="contact-visual-content">
                <span className="contact-visual-icon">
                  <MapPin size={21} />
                </span>

                <span className="contact-visual-eyebrow">
                  WE'RE HERE TO HELP
                </span>

                <h3>Your healthcare journey starts here.</h3>

                <p>
                  Reach out to discuss your visit and available services.
                </p>

                <button
                  type="button"
                  className="contact-visual-button"
                  onClick={() => openBooking()}
                >
                  Send an enquiry
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <span className="contact-visual-decoration" />
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="final-cta-section">
          <div className="container final-cta">
            <div className="final-cta-icon">
              <Plus size={29} />
            </div>

            <div className="final-cta-copy">
              <span>YOUR HEALTH MATTERS</span>

              <h2>
                Ready to take the next step?
              </h2>

              <p>
                Contact our team to enquire about your appointment.
              </p>
            </div>

            <button
              type="button"
              className="final-cta-button"
              onClick={() => openBooking()}
            >
              Book an appointment
              <ArrowUpRight size={19} />
            </button>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <BrandLogo />

            <p>
              Thoughtful healthcare, connected specialities and a
              patient-focused experience.
            </p>

            <div className="footer-brand-tag">
              <HeartPulse size={17} />
              <span>{clinic.tagline}</span>
            </div>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>

            <a href="#home">Home</a>
            <a href="#about">About us</a>
            <a href="#specialities">Specialities</a>
            <a href="#treatments">Treatments</a>
          </div>

          <div className="footer-column">
            <h3>Patient information</h3>

            <a href="#clinic">Our clinic</a>
            <a href="#contact">Contact</a>

            <button
              type="button"
              onClick={() => openBooking()}
            >
              Appointment enquiry
            </button>
          </div>

          <div className="footer-column footer-contact-column">
            <h3>Contact</h3>

            <a href={`tel:${clinic.phone.replace(/\s/g, "")}`}>
              {clinic.phone}
            </a>

            <a href={`mailto:${clinic.email}`}>
              {clinic.email}
            </a>

            <span>{clinic.address}</span>

            <span className="footer-hours">{clinic.hours}</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights
            reserved.
          </p>

          <p className="footer-disclaimer">
            Website information is for general guidance and does not
            replace professional medical advice.
          </p>

          <a href="#home" className="back-to-top">
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>

      {/* =====================================================
          MOBILE CALL BUTTON
      ===================================================== */}

      <a
        href={`tel:${clinic.phone.replace(/\s/g, "")}`}
        className="mobile-call-button"
        aria-label="Call the clinic"
      >
        <Phone size={19} />
        <span>Call clinic</span>
      </a>

      {/* =====================================================
          APPOINTMENT ENQUIRY MODAL
      ===================================================== */}

      {bookingOpen && (
        <div
          className="booking-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeBooking();
            }
          }}
        >
          <div
            className="booking-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
          >
            <div className="booking-modal-header">
              <div>
                <span className="booking-modal-eyebrow">
                  APPOINTMENT ENQUIRY
                </span>

                <h2 id="booking-modal-title">
                  Let's arrange your visit.
                </h2>

                <p>
                  Share your details and continue through WhatsApp to
                  contact our clinic.
                </p>
              </div>

              <button
                type="button"
                className="booking-modal-close"
                onClick={closeBooking}
                aria-label="Close appointment form"
              >
                <X size={22} />
              </button>
            </div>

            <form
              className="booking-form"
              onSubmit={submitBooking}
            >
              <div className="booking-form-grid">
                <label>
                  Full name <span>*</span>

                  <input
                    type="text"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  Phone number <span>*</span>

                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />
                </label>

                <label>
                  Speciality or service

                  <span className="visually-hidden">
                    Optional
                  </span>

                  <div className="booking-select-wrap">
                    <select
                      name="department"
                      value={bookingForm.department}
                      onChange={handleInputChange}
                    >
                      <option value="">
                        Select a speciality
                      </option>

                      {services.map((service) => (
                        <option
                          key={service.id}
                          value={service.title}
                        >
                          {service.title}
                        </option>
                      ))}

                      {treatments.map((treatment) => (
                        <option
                          key={treatment.id}
                          value={treatment.title}
                        >
                          {treatment.title}
                        </option>
                      ))}
                    </select>

                    <ChevronDown size={17} />
                  </div>
                </label>

                <label>
                  Preferred date

                  <input
                    type="date"
                    name="preferredDate"
                    value={bookingForm.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </label>

                <label className="booking-message-field">
                  How can we help?

                  <textarea
                    name="message"
                    value={bookingForm.message}
                    onChange={handleInputChange}
                    placeholder="Share any additional information (optional)"
                    rows={3}
                  />
                </label>
              </div>

              <div className="booking-privacy-note">
                <ShieldCheck size={17} />

                <p>
                  Your enquiry will be prepared for WhatsApp. Avoid
                  sharing sensitive medical information in this form.
                </p>
              </div>

              <button
                type="submit"
                className="booking-submit-button"
                disabled={submitting}
              >
                {submitting
                  ? "Preparing your enquiry..."
                  : "Continue to WhatsApp"}

                <ArrowUpRight size={19} />
              </button>

              <p className="booking-modal-footnote">
                Submitting this form sends you to WhatsApp. It does not
                confirm an appointment; the clinic must confirm
                availability separately.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
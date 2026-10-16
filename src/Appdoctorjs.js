
import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
  UserRound,
  Mail,
  CalendarCheck,
  ClipboardList,
  Play,
  Camera,
} from "lucide-react";

import clinicData from "./clinicData";

const iconMap = {
  stethoscope: Stethoscope,
  "heart-pulse": HeartPulse,
  activity: Activity,
  users: Users,
};

const heroImages = [
  {
    src: "https://static.vecteezy.com/system/resources/previews/047/883/550/non_2x/young-indian-female-doctor-isolated-photo.jpg",
    alt: "Doctor in a white coat in a bright clinical setting",
    title: "Care with a human touch",
    subtitle: "Every question deserves time.",
  },
  {
    src: "https://img.freepik.com/premium-photo/young-indian-female-doctor-image_669954-13673.jpg?w=2000",
    alt: "Doctor providing attentive patient care",
    title: "Your health comes first",
    subtitle: "Thoughtful care for every patient.",
  },
  {
    src : "https://img.freepik.com/premium-photo/handsome-indian-male-doctor-posing-with-folded-hands-smiling-camera-hospital_512242-7452.jpg?w=2000",
    alt: "Healthcare professional discussing care with a patient",
    title: "Guidance you can trust",
    subtitle: "Clear answers, every step of the way.",
  },
];

function WhatsAppLink({
  children,
  className = "button button-primary",
  message = "Hello, I would like to enquire about an appointment.",
}) {
  const url = `https://wa.me/${clinicData.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span className="label-line" />
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formStatus, setFormStatus] = useState("");
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  // Automatically change the hero image every 4.5 seconds.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    clinicData.address
  )}`;

  const submitAppointment = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const service = String(
      form.get("service") || "General consultation"
    );
    const date = String(form.get("date") || "Flexible");
    const message = String(form.get("message") || "").trim();

    if (!name || !phone) {
      setFormStatus("Please add your name and phone number.");
      return;
    }

    const whatsappMessage = [
      `Hello, I would like to request an appointment with ${clinicData.doctorName}.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Reason for visit: ${service}`,
      `Preferred date: ${date}`,
      message ? `Additional details: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setFormStatus(
      "Your WhatsApp message is ready. Please send it to confirm your request."
    );

    window.open(
      `https://wa.me/${clinicData.whatsapp}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setShowTop(window.scrollY > 420);
      setScrolled(window.scrollY > 18);

      setScrollProgress(
        maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0
      );
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    const sectionIds = [
      "home",
      "about",
      "care",
      "experience",
      "approach",
      "visit",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((element) => revealObserver.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="site-shell">
      <div className="announcement">
        <Sparkles size={14} />
        Thoughtful care. Clear answers. A healthier you.
      </div>

      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className={`header${scrolled ? " header-scrolled" : ""}`}>
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
          aria-label="Go to homepage"
        >
          <span className="brand-mark">
            <PlusMark />
          </span>

          <span className="brand-copy">
            <strong>{clinicData.doctorName}</strong>
            <small>{clinicData.specialty}</small>
          </span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Main navigation"
        >
          <a
            className={activeSection === "about" ? "nav-link active" : "nav-link"}
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            className={activeSection === "care" ? "nav-link active" : "nav-link"}
            href="#care"
            onClick={closeMenu}
          >
            Areas of care
          </a>

          <a
            className={
              activeSection === "experience"
                ? "nav-link active"
                : "nav-link"
            }
            href="#experience"
            onClick={closeMenu}
          >
            Inside the clinic
          </a>

          <a
            className={
              activeSection === "approach"
                ? "nav-link active"
                : "nav-link"
            }
            href="#approach"
            onClick={closeMenu}
          >
            My approach
          </a>

          <a
            className={activeSection === "visit" ? "nav-link active" : "nav-link"}
            href="#visit"
            onClick={closeMenu}
          >
            Visit the clinic
          </a>

          <WhatsAppLink
            className="button button-nav"
            message={`Hello, I would like to book an appointment with ${clinicData.doctorName}.`}
          >
            <CalendarDays size={16} />
            Book a visit
          </WhatsAppLink>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR HEALTH, AT THE HEART OF IT
            </div>

            <h1>
              Care that sees <em>the whole</em> you.
            </h1>

            <p className="hero-lede">
              Good healthcare starts with listening. Get thoughtful medical
              guidance, clear answers and care that puts you first.
            </p>

            <div className="hero-actions">
              <WhatsAppLink
                message={`Hello, I would like to book an appointment with ${clinicData.doctorName}.`}
              >
                <CalendarDays size={17} />
                Book an appointment
                <ArrowRight size={17} />
              </WhatsAppLink>

              <a
                className="button button-secondary"
                href={`tel:+${clinicData.phone}`}
              >
                <Phone size={16} />
                Call the clinic
              </a>
            </div>

            <div className="hero-note">
              <ShieldCheck size={17} />
              <span>Personalised care, delivered with respect.</span>
            </div>

            <div className="hero-stats">
              <div>
                <strong>{clinicData.experience.split(" ")[0]}</strong>
                <span>Experience</span>
              </div>

              <div className="stat-divider" />

              <div>
                <strong>One-to-one</strong>
                <span>Patient-focused care</span>
              </div>

              <div className="stat-divider" />

              <div>
                <strong>Clear</strong>
                <span>Guidance you can trust</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay">
            <div
              className="image-frame hero-image-carousel"
              aria-label="Clinic highlights"
            >
              {heroImages.map((image, index) => (
                <div
                  className={`hero-carousel-slide${
                    index === activeHeroImage ? " active" : ""
                  }`}
                  key={image.src}
                  aria-hidden={index !== activeHeroImage}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                  />

                  <div className="image-wash" />

                  <div className="photo-caption">
                    <span className="caption-icon">
                      <Stethoscope size={18} />
                    </span>

                    <span>
                      <strong>{image.title}</strong>
                      <small>{image.subtitle}</small>
                    </span>
                  </div>
                </div>
              ))}

              <div
                className="hero-carousel-dots"
                aria-label="Choose hero image"
              >
                {heroImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={index === activeHeroImage ? "active" : ""}
                    onClick={() => setActiveHeroImage(index)}
                    aria-label={`Show hero image ${index + 1}`}
                    aria-pressed={index === activeHeroImage}
                  />
                ))}
              </div>
            </div>

            <div className="decor decor-one" />
            <div className="decor decor-two" />
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={15} />
          </a>
        </section>

        {/* TRUST STRIP */}
        <section className="trust-strip">
          <div className="trust-inner">
            <div>
              <ShieldCheck />
              <span>
                <strong>Patient-first care</strong>
                <small>Every visit, every concern</small>
              </span>
            </div>

            <div>
              <MessageCircle />
              <span>
                <strong>Easy appointment enquiries</strong>
                <small>Call or message us directly</small>
              </span>
            </div>

            <div>
              <Clock3 />
              <span>
                <strong>Convenient clinic hours</strong>
                <small>Plan a visit that works for you</small>
              </span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section-wrap section-space" id="about">
          <div className="about-image-wrap reveal">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85"
                alt="Doctor preparing for a patient consultation"
                loading="lazy"
              />
            </div>

            <div className="experience-stamp">
              <span className="stamp-number">
                12<span>+</span>
              </span>
              <span className="stamp-text">
                YEARS OF
                <br />
                EXPERIENCE
              </span>
            </div>

            <div className="about-image-note">
              <span className="note-check">
                <Check size={15} />
              </span>
              A calm, welcoming space for your health
            </div>
          </div>

          <div className="about-copy reveal reveal-delay">
            <SectionLabel>MEET YOUR DOCTOR</SectionLabel>

            <h2>
              Medicine with expertise.
              <br />
              <em>Care with empathy.</em>
            </h2>

            <p className="body-large">
              I'm {clinicData.doctorName}, a{" "}
              {clinicData.specialty.toLowerCase()} who believes the best care
              begins with understanding you — not just your symptoms.
            </p>

            <p>
              My approach combines careful assessment, honest conversations
              and practical next steps. Whether you have a new concern or need
              ongoing support, you deserve to feel heard and informed.
            </p>

            <div className="doctor-credentials">
              <span className="credential-icon">
                <Stethoscope size={19} />
              </span>

              <span>
                <strong>{clinicData.credentials}</strong>
                <small>
                  {clinicData.specialty} · {clinicData.clinicName}
                </small>
              </span>
            </div>

            <a href="#approach" className="text-link">
              Discover my approach
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* PHOTO GALLERY AND VIDEO */}
        <section className="experience-gallery section-space" id="experience">
          <div className="section-wrap">
            <div className="section-heading reveal">
              <div>
                <SectionLabel>INSIDE THE CLINIC</SectionLabel>
                <h2>
                  A closer look at
                  <br />
                  <em>your care experience.</em>
                </h2>
              </div>

              <p>
                A welcoming space, thoughtful conversations and a team focused
                on helping you feel comfortable from the moment you arrive.
              </p>
            </div>

            <div className="media-mosaic">
              <figure className="media-tile media-tile-large reveal">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"
                  alt="Bright, modern healthcare consultation room"
                  loading="lazy"
                />

                <figcaption>
                  <span>01</span>
                  <div>
                    <strong>A calm clinic environment</strong>
                    <small>Designed around comfort and care</small>
                  </div>
                </figcaption>
              </figure>

              <figure className="media-tile media-tile-tall reveal reveal-delay">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85"
                  alt="Healthcare professional discussing care with a patient"
                  loading="lazy"
                />

                <figcaption>
                  <span>02</span>
                  <div>
                    <strong>Time to talk</strong>
                    <small>Your questions matter</small>
                  </div>
                </figcaption>
              </figure>

              <figure className="media-tile reveal reveal-delay">
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=85"
                  alt="Healthcare team preparing for a patient visit"
                  loading="lazy"
                />

                <figcaption>
                  <span>03</span>
                  <div>
                    <strong>Thoughtful support</strong>
                    <small>Care at every step</small>
                  </div>
                </figcaption>
              </figure>

              <figure className="media-tile reveal">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85"
                  alt="Medical professional reviewing patient information"
                  loading="lazy"
                />

                <figcaption>
                  <span>04</span>
                  <div>
                    <strong>Clear guidance</strong>
                    <small>Understand your next steps</small>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="clinic-film reveal">
              <div className="clinic-film-copy">
                <span className="film-kicker">
                  <Camera size={15} />
                  A PERSONAL INTRODUCTION
                </span>

                <h3>
                  Meet your doctor
                  <br />
                  <em>before your visit.</em>
                </h3>

                <p>
                  Add a short welcome video from the doctor or a walk-through
                  of the clinic. A 30–60 second video can help new patients
                  feel more familiar with the space.
                </p>

                {clinicData.introVideoUrl ? (
                  <a
                    className="text-link"
                    href={clinicData.introVideoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Watch the introduction
                    <ArrowRight size={16} />
                  </a>
                ) : (
                  <span className="film-note">
                    Video link goes in <code>clinicData.js</code>
                  </span>
                )}
              </div>

              <div className="clinic-film-frame">
                {clinicData.introVideoUrl ? (
                  <iframe
                    src={clinicData.introVideoUrl}
                    title={`Introduction to ${clinicData.clinicName}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="film-placeholder">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85"
                      alt="Doctor speaking with a patient in a consultation room"
                      loading="lazy"
                    />

                    <div className="film-overlay">
                      <span className="film-play">
                        <Play size={23} fill="currentColor" />
                      </span>

                      <span>
                        <strong>Your clinic introduction</strong>
                        <small>
                          Add your YouTube embed URL to activate video
                        </small>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* AREAS OF CARE */}
        <section className="care-section section-space" id="care">
          <div className="section-wrap">
            <div className="section-heading reveal">
              <div>
                <SectionLabel>HOW I CAN HELP</SectionLabel>
                <h2>
                  Care for what
                  <br />
                  <em>matters to you.</em>
                </h2>
              </div>

              <p>
                From everyday health questions to long-term wellbeing,
                appointments are focused on understanding your needs and
                helping you make informed decisions.
              </p>
            </div>

            <div className="service-grid">
              {clinicData.services.map((service, index) => {
                const Icon = iconMap[service.icon] || Stethoscope;

                return (
                  <article
                    className={`service-card reveal service-delay-${index}`}
                    key={service.number}
                  >
                    <div className="service-top">
                      <span className="service-icon">
                        <Icon size={22} strokeWidth={1.7} />
                      </span>
                      <span className="service-number">{service.number}</span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.text}</p>

                    <WhatsAppLink
                      className="service-link"
                      message={`Hello, I would like to enquire about ${service.title.toLowerCase()} with ${clinicData.doctorName}.`}
                    >
                      Enquire about this
                      <ArrowRight size={15} />
                    </WhatsAppLink>
                  </article>
                );
              })}
            </div>

            <p className="care-disclaimer">
              Services listed are illustrative. Please confirm the doctor's
              actual specialisation and available treatments before publishing.
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section className="approach section-wrap section-space" id="approach">
          <div className="approach-copy reveal">
            <SectionLabel>A DIFFERENT KIND OF VISIT</SectionLabel>

            <h2>
              You deserve to feel
              <br />
              <em>heard and understood.</em>
            </h2>

            <p>
              Healthcare can feel overwhelming. My goal is to make each step
              a little clearer, with time for your questions and a plan that
              makes sense to you.
            </p>

            <WhatsAppLink message="Hello, I would like to enquire about a consultation.">
              Let's talk about your health
              <ArrowRight size={17} />
            </WhatsAppLink>
          </div>

          <div className="approach-steps reveal reveal-delay">
            <div className="approach-step">
              <span className="step-index">01</span>
              <div>
                <h3>We listen first</h3>
                <p>Share your concerns, history and what matters most to you.</p>
              </div>
              <span className="step-icon">
                <MessageCircle size={20} />
              </span>
            </div>

            <div className="approach-step">
              <span className="step-index">02</span>
              <div>
                <h3>We understand together</h3>
                <p>
                  Discuss your symptoms, possible next steps and any questions.
                </p>
              </div>
              <span className="step-icon">
                <HeartPulse size={20} />
              </span>
            </div>

            <div className="approach-step">
              <span className="step-index">03</span>
              <div>
                <h3>We make a clear plan</h3>
                <p>
                  Leave with guidance on what comes next and when to follow up.
                </p>
              </div>
              <span className="step-icon">
                <Check size={20} />
              </span>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="quote-band">
          <div className="quote-mark">“</div>

          <blockquote>
            Good care isn't just about finding answers.
            <br />
            <em>It's about finding them together.</em>
          </blockquote>

          <div className="quote-rule" />

          <span className="quote-attribution">
            {clinicData.doctorName} <span>·</span> {clinicData.specialty}
          </span>
        </section>

        {/* VISIT AND APPOINTMENT FORM */}
        <section
          className="appointment-contact-section section-wrap section-space"
          id="visit"
        >
          <div className="appointment-contact-copy reveal">
            <SectionLabel>PLAN YOUR VISIT</SectionLabel>

            <h2>
              We're here when
              <br />
              <em>you need us.</em>
            </h2>

            <p>
              Have a question or ready to book? Reach out by phone or WhatsApp
              and our team will help you with the next steps.
            </p>

            <div className="appointment-contact-actions">
              <WhatsAppLink
                message={`Hello, I would like to book an appointment with ${clinicData.doctorName}.`}
              >
                <MessageCircle size={17} />
                Message on WhatsApp
              </WhatsAppLink>

              <a
                href={`tel:+${clinicData.phone}`}
                className="button button-secondary"
              >
                <Phone size={16} />
                {clinicData.phoneDisplay}
              </a>
            </div>

            <div className="appointment-contact-detail">
              <span className="appointment-detail-icon">
                <MapPin size={19} />
              </span>

              <div>
                <strong>Clinic address</strong>
                <p>{clinicData.address}</p>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Get directions
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="appointment-contact-detail">
              <span className="appointment-detail-icon">
                <Clock3 size={19} />
              </span>

              <div>
                <strong>Clinic hours</strong>

                {clinicData.hours.map(([day, time]) => (
                  <p className="appointment-hours-row" key={day}>
                    <span>{day}</span>
                    <span>{time}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="appointment-form-wrap reveal reveal-delay">
            <div className="appointment-form-card">
              <div className="appointment-form-art">
                <div className="appointment-art-circle appointment-art-circle-one" />
                <div className="appointment-art-circle appointment-art-circle-two" />

                <div className="appointment-art-cross">
                  <PlusMark />
                </div>

                <div className="appointment-art-caption">
                  YOUR WELLBEING,
                  <br />
                  <em>OUR PRIORITY.</em>
                </div>
              </div>

              <div className="appointment-form-body">
                <span className="appointment-form-kicker">
                  TAKE THE FIRST STEP
                </span>

                <h3>Request an appointment.</h3>

                <p>
                  Share a few details and continue securely in WhatsApp to
                  confirm your request.
                </p>

                <form
                  className="patient-appointment-form"
                  onSubmit={submitAppointment}
                >
                  <label>
                    <span>
                      <UserRound size={15} />
                      Full name *
                    </span>

                    <input
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label>
                    <span>
                      <Phone size={15} />
                      Phone number *
                    </span>

                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="Your contact number"
                      required
                    />
                  </label>

                  <label>
                    <span>
                      <ClipboardList size={15} />
                      What would you like help with?
                    </span>

                    <select name="service" defaultValue="">
                      <option value="" disabled>
                        Select a reason for visit
                      </option>

                      {clinicData.services.map((service) => (
                        <option
                          key={service.number}
                          value={service.title}
                        >
                          {service.title}
                        </option>
                      ))}

                      <option value="General consultation">
                        General consultation
                      </option>

                      <option value="Follow-up visit">
                        Follow-up visit
                      </option>
                    </select>
                  </label>

                  <label>
                    <span>
                      <CalendarCheck size={15} />
                      Preferred date
                    </span>

                    <input
                      name="date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </label>

                  <label>
                    <span>
                      <Mail size={15} />
                      Anything we should know?
                      <small>(optional)</small>
                    </span>

                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Briefly share your question (please avoid sensitive medical details)."
                    />
                  </label>

                  <button
                    className="button button-dark patient-form-submit"
                    type="submit"
                  >
                    Continue to WhatsApp
                    <ArrowRight size={17} />
                  </button>

                  {formStatus && (
                    <p className="patient-form-status" role="status">
                      {formStatus}
                    </p>
                  )}
                </form>

                <div className="appointment-form-foot">
                  <ShieldCheck size={15} />
                  Your details are used to respond to this appointment enquiry.
                </div>
              </div>
            </div>

            <div className="appointment-form-decoration">
              CARE
              <br />
              THAT
              <br />
              <em>CONNECTS.</em>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="appointment-final-cta">
          <div className="appointment-final-cta-inner section-wrap">
            <div>
              <span className="appointment-final-kicker">
                YOUR HEALTH MATTERS
              </span>

              <h2>
                Let's take the next step, <em>together.</em>
              </h2>
            </div>

            <WhatsAppLink
              className="button button-light"
              message={`Hello, I would like to book an appointment with ${clinicData.doctorName}.`}
            >
              Book an appointment
              <ArrowRight size={17} />
            </WhatsAppLink>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="clinic-site-footer">
        <div className="clinic-footer-main section-wrap">
          <a href="#home" className="brand clinic-footer-brand">
            <span className="brand-mark">
              <PlusMark />
            </span>

            <span className="brand-copy">
              <strong>{clinicData.doctorName}</strong>
              <small>{clinicData.specialty}</small>
            </span>
          </a>

          <p>
            Thoughtful care for every stage of your health journey.
          </p>

          <div className="clinic-footer-links">
            <a href="#about">About</a>
            <a href="#care">Areas of care</a>
            <a href="#experience">Inside the clinic</a>
            <a href="#visit">Contact</a>
            <a href={`tel:+${clinicData.phone}`}>Call</a>
          </div>
        </div>

        <div className="clinic-footer-bottom section-wrap">
          <span>
            © {new Date().getFullYear()} {clinicData.clinicName}. All rights
            reserved.
          </span>

          <span>
            This website is for general information and is not a substitute
            for emergency medical care.
          </span>
        </div>
      </footer>

      {/* MOBILE BOOKING BAR */}
      <div className="clinic-mobile-booking-bar">
        <a
          href={`tel:+${clinicData.phone}`}
          aria-label="Call clinic"
        >
          <Phone size={18} />
          <span>Call</span>
        </a>

        <WhatsAppLink
          className="clinic-mobile-whatsapp"
          message={`Hello, I would like to book an appointment with ${clinicData.doctorName}.`}
        >
          <MessageCircle size={18} />
          Book via WhatsApp
        </WhatsAppLink>
      </div>

      {showTop && (
        <button
          className="clinic-back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowDownRight size={19} />
        </button>
      )}
    </div>
  );
}

function PlusMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M16 5h8v11h11v8H24v11h-8V24H5v-8h11z"
        fill="currentColor"
      />
    </svg>
  );
}

export default App;

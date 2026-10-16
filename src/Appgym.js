
import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Dumbbell,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";

import {
  gymData,
  getWhatsAppUrl,
  formatPrice,
} from "./gymData";

import "./styles.css";

const iconMap = {
  dumbbell: Dumbbell,
  zap: Zap,
  target: Target,
  activity: Activity,
};

function Eyebrow({ children, light = false }) {
  return (
    <div className={`gx-eyebrow${light ? " gx-eyebrow-light" : ""}`}>
      <span className="gx-eyebrow-line" />
      {children}
    </div>
  );
}

function Brand({ footer = false }) {
  return (
    <a
      href="#home"
      className={`gx-brand${footer ? " gx-brand-footer" : ""}`}
      aria-label={`${gymData.brand.fullName} home`}
    >
      <span className="gx-brand-symbol">
        <Dumbbell size={24} strokeWidth={1.8} />
      </span>
      <span className="gx-brand-name">
        <strong>{gymData.brand.name}</strong>
        <small>ATHLETIC CLUB</small>
      </span>
    </a>
  );
}

function ActionLink({ children, message, className = "" }) {
  return (
    <a
      className={className}
      href={getWhatsAppUrl(
        message || `Hello ${gymData.brand.fullName}, I would like more information.`
      )}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  centered = false,
}) {
  return (
    <div className={`gx-section-heading${centered ? " gx-centered" : ""}`}>
      <div className="gx-heading-title">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>
          {title}
          <br />
          <em>{accent}</em>
        </h2>
      </div>
      {description && <p className="gx-heading-description">{description}</p>}
    </div>
  );
}

function VideoOrImage({ video, mobileVideo, poster, mobilePoster, image, className = "", muted = true }) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div
      className={`gx-media ${className}`}
      data-mobile-poster={mobilePoster || poster || image || ""}
    >
      {video && !videoFailed ? (
        <>
          <video
            className="gx-video-desktop"
            autoPlay
            loop
            muted={muted}
            playsInline
            preload="metadata"
            poster={poster || image}
            onError={() => setVideoFailed(true)}
          >
            <source src={video} type="video/mp4" />
          </video>
          {mobileVideo ? (
            <video
              className="gx-video-mobile"
              autoPlay
              loop
              muted={muted}
              playsInline
              preload="metadata"
              poster={mobilePoster || poster || image}
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            >
              <source src={mobileVideo} type="video/mp4" />
            </video>
          ) : (
            <img className="gx-video-mobile-poster" src={mobilePoster || poster || image} alt="" />
          )}
        </>
      ) : (
        <picture>
          {mobilePoster && <source media="(max-width: 640px)" srcSet={mobilePoster} />}
          <img src={poster || image} alt="" loading="lazy" />
        </picture>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState("Mon");
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [chosenPlan, setChosenPlan] = useState("quarterly");
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeReel, setActiveReel] = useState(null);
  const [formNotice, setFormNotice] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "Build strength",
    plan: "quarterly",
    date: "",
  });

  useEffect(() => {
    const previous = document.body.style.overflow;
    if (activeGallery || activeReel !== null || registrationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previous;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveGallery(null);
        setActiveReel(null);
        setRegistrationOpen(false);
      }
      if (activeGallery && event.key === "ArrowRight") {
        setActiveGallery((current) =>
          current === null
            ? null
            : (current + 1) % gymData.gallery.length
        );
      }
      if (activeGallery && event.key === "ArrowLeft") {
        setActiveGallery((current) =>
          current === null
            ? null
            : (current - 1 + gymData.gallery.length) %
              gymData.gallery.length
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [activeGallery, activeReel, registrationOpen]);

  const openRegistration = (plan = chosenPlan) => {
    setChosenPlan(plan);
    setForm((current) => ({ ...current, plan }));
    setFormNotice("");
    setRegistrationOpen(true);
    setMenuOpen(false);
  };

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitRegistration = (event) => {
    event.preventDefault();

    const plan = gymData.memberships.find((item) => item.id === form.plan);

    const message = [
      `Hello ${gymData.brand.fullName}! I would like to enquire about membership.`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Membership: ${plan?.name || form.plan}`,
      `Price shown: ₹${plan ? formatPrice(plan.price) : "To confirm"}`,
      `Fitness goal: ${form.goal}`,
      `Preferred start date: ${form.date || "Flexible"}`,
      "",
      "Please confirm membership availability, pricing and terms.",
    ].join("\n");

    const popup = window.open(
      getWhatsAppUrl(message),
      "_blank",
      "noopener,noreferrer"
    );

    if (!popup) {
      window.location.href = getWhatsAppUrl(message);
    }

    setFormNotice(
      "Your details are prepared for WhatsApp. Send the message there to complete your enquiry."
    );
  };

  const classesForDay = gymData.schedule.filter(
    (item) => item.day === activeDay
  );

  const selectedReel =
    activeReel === null ? null : gymData.reels[activeReel];

  return (
    <div className="gx-site" id="home">
      {/* Announcement */}
      <div className="gx-announcement">
        <Sparkles size={13} />
        <span>{gymData.brand.announcement}</span>
        <span className="gx-announcement-dot">✳</span>
        <span>{gymData.brand.city}</span>
      </div>

      {/* Navigation */}
      <header className="gx-header">
        <Brand />

        <button
          className="gx-menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`gx-nav${menuOpen ? " gx-nav-open" : ""}`}>
          {gymData.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <button
            className="gx-button gx-button-gold gx-nav-button"
            type="button"
            onClick={() => openRegistration()}
          >
            Join the club <ArrowUpRight size={16} />
          </button>
        </nav>
      </header>

      <main>
        {/* Cinematic hero */}
        <section className="gx-hero">
          <VideoOrImage
            className="gx-hero-media"
            video={gymData.hero.video}
            mobileVideo={gymData.hero.mobileVideo}
            poster={gymData.hero.poster}
            mobilePoster={gymData.hero.mobilePoster}
            image={gymData.hero.image}
          />
          <div className="gx-hero-shade" />
          <div className="gx-hero-grain" />

          <div className="gx-hero-layout gx-container">
            <div className="gx-hero-copy">
              <Eyebrow>{gymData.hero.eyebrow}</Eyebrow>

              <h1>
                {gymData.hero.titleLineOne}
                <br />
                <span>{gymData.hero.titleLineTwo}</span>
                <br />
                <em>{gymData.hero.titleAccent}</em>
              </h1>

              <p>{gymData.hero.description}</p>

              <div className="gx-hero-actions">
                <button
                  type="button"
                  className="gx-button gx-button-gold"
                  onClick={() => openRegistration()}
                >
                  {gymData.hero.primaryButton}
                  <ArrowRight size={17} />
                </button>

                <a href="#club" className="gx-button gx-button-glass">
                  {gymData.hero.secondaryButton}
                  <ArrowDownRight size={17} />
                </a>
              </div>

              <div className="gx-hero-badge">
                <span className="gx-status-dot" />
                {gymData.hero.badge}
              </div>
            </div>

            <div className="gx-hero-vertical">
              <span>DISCIPLINE</span>
              <span className="gx-vertical-rule" />
              <span>PERFORMANCE</span>
            </div>
          </div>

          <div className="gx-hero-bottom gx-container">
            <a href="#club" className="gx-scroll-cue">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={15} />
            </a>

            <div className="gx-hero-stats">
              {gymData.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="gx-hero-corner">A / 001</div>
        </section>

        {/* Animated text marquee */}
        <section className="gx-marquee" aria-label="Our training values">
          <div className="gx-marquee-track">
            {[...gymData.marquee, ...gymData.marquee].map((word, index) => (
              <span key={`${word}-${index}`}>
                {word} <Sparkles size={15} />
              </span>
            ))}
          </div>
        </section>

        {/* Introduction */}
        <section className="gx-section gx-intro" id="club">
          <div className="gx-container gx-intro-grid">
            <div className="gx-intro-visual">
              <img
                className="gx-intro-main-image"
                src={gymData.introduction.image}
                alt="Fitness club training environment"
              />
              <img
                className="gx-intro-overlap-image"
                src={gymData.introduction.secondaryImage}
                alt="Strength training"
                loading="lazy"
              />
              <div className="gx-intro-stamp">
                <Dumbbell size={23} />
                <span>THE AUREX</span>
                <strong>STANDARD</strong>
              </div>
              <span className="gx-image-index">01 — THE ENVIRONMENT</span>
            </div>

            <div className="gx-intro-copy">
              <Eyebrow>{gymData.introduction.eyebrow}</Eyebrow>
              <h2>
                {gymData.introduction.title}
                <br />
                <em>{gymData.introduction.accent}</em>
              </h2>
              <p>{gymData.introduction.description}</p>

              <div className="gx-feature-list">
                {gymData.introduction.features.map((feature) => (
                  <div key={feature}>
                    <span><Check size={15} /></span>
                    {feature}
                  </div>
                ))}
              </div>

              <a href="#programs" className="gx-text-link">
                Discover our training <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="gx-section gx-programs" id="programs">
          <div className="gx-container">
            <SectionHeading
              eyebrow="FIND YOUR TRAINING STYLE"
              title="TRAIN WITH"
              accent="INTENTION."
              description="Every goal deserves a plan. Explore training experiences built around strength, movement and meaningful progress."
            />

            <div className="gx-program-grid">
              {gymData.programs.map((program) => {
                const Icon = iconMap[program.icon] || Dumbbell;

                return (
                  <article className="gx-program-card" key={program.id}>
                    <div className="gx-program-image">
                      <img
                        src={program.image}
                        alt={program.title}
                        loading="lazy"
                      />
                      <div className="gx-program-image-shade" />
                      <span className="gx-program-number">{program.number}</span>
                      <span className="gx-program-icon"><Icon size={21} /></span>
                      <span className="gx-program-category">{program.category}</span>
                    </div>

                    <div className="gx-program-copy">
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                      <ActionLink
                        className="gx-text-link"
                        message={`Hello ${gymData.brand.fullName}, I would like to enquire about ${program.title}.`}
                      >
                        Enquire about training <ArrowRight size={16} />
                      </ActionLink>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Immersive training experience */}
        <section className="gx-experience">
          <VideoOrImage
            className="gx-experience-media"
            image={gymData.experience.image}
            poster={gymData.experience.image}
          />
          <div className="gx-experience-shade" />

          <div className="gx-container gx-experience-content">
            <div className="gx-experience-copy">
              <Eyebrow>{gymData.experience.eyebrow}</Eyebrow>
              <h2>
                {gymData.experience.title}
                <br />
                <em>{gymData.experience.accent}</em>
              </h2>
              <p>{gymData.experience.description}</p>
              <a className="gx-button gx-button-gold" href="#gallery">
                Explore the atmosphere <ArrowRight size={17} />
              </a>
            </div>

            <div className="gx-experience-features">
              {gymData.experience.features.map((feature, index) => (
                <div key={feature}>
                  <span>0{index + 1}</span>
                  <strong>{feature}</strong>
                  <Check size={16} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section className="gx-section gx-membership" id="membership">
          <div className="gx-container">
            <SectionHeading
              eyebrow="COMMIT TO YOURSELF"
              title="YOUR WORK."
              accent="YOUR REWARD."
              description="Find a membership that fits your commitment. Contact our team to confirm current prices, availability and membership terms."
              centered
            />

            <div className="gx-membership-grid">
              {gymData.memberships.map((plan) => (
                <article
                  className={`gx-plan-card${plan.featured ? " gx-plan-featured" : ""}`}
                  key={plan.id}
                >
                  {plan.featured && (
                    <div className="gx-plan-badge">
                      <Sparkles size={13} /> {plan.label}
                    </div>
                  )}

                  <div className="gx-plan-topline">
                    <span>{plan.label}</span>
                    <span>{plan.duration}</span>
                  </div>

                  <h3>{plan.name}</h3>
                  <p className="gx-plan-description">{plan.subtitle}</p>

                  <div className="gx-plan-price">
                    <span>₹</span>
                    <strong>{formatPrice(plan.price)}</strong>
                  </div>
                  <p className="gx-plan-period">{plan.period}</p>

                  <div className="gx-plan-divider" />

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check size={15} /> {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`gx-button ${plan.featured ? "gx-button-gold" : "gx-button-outline"} gx-plan-button`}
                    type="button"
                    onClick={() => openRegistration(plan.id)}
                  >
                    Choose {plan.name} <ArrowRight size={16} />
                  </button>
                </article>
              ))}
            </div>

            <p className="gx-disclaimer">
              Membership prices are illustrative. Verify fees, taxes, included
              services and terms before publishing.
            </p>
          </div>
        </section>

        {/* Trainers */}
        <section className="gx-section gx-trainers" id="trainers">
          <div className="gx-container">
            <SectionHeading
              eyebrow="PEOPLE WHO PUSH YOU FORWARD"
              title="MEET YOUR"
              accent="COACHES."
              description="Great coaching combines knowledge, consistency and encouragement. Meet the team behind your training experience."
            />

            <div className="gx-trainer-grid">
              {gymData.trainers.map((trainer, index) => (
                <article className="gx-trainer-card" key={trainer.id}>
                  <div className="gx-trainer-photo">
                    <img src={trainer.image} alt={trainer.name} loading="lazy" />
                    <span className="gx-trainer-index">COACH / 0{index + 1}</span>
                    <ActionLink
                      className="gx-trainer-contact"
                      message={`Hello ${gymData.brand.fullName}, I would like to ask about training with ${trainer.name}.`}
                    >
                      <ArrowUpRight size={20} />
                    </ActionLink>
                  </div>

                  <div className="gx-trainer-copy">
                    <span>{trainer.role}</span>
                    <h3>{trainer.name}</h3>
                    <p>{trainer.bio}</p>
                    <div className="gx-trainer-speciality">
                      <span>{trainer.speciality}</span>
                      <span>{trainer.experience}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="gx-disclaimer">
              Replace example names, portraits, experience and biographies with
              your actual trainers and verified qualifications.
            </p>
          </div>
        </section>

        {/* Social reels */}
        <section className="gx-section gx-reels" id="reels">
          <div className="gx-container">
            <div className="gx-reels-heading">
              <div>
                <Eyebrow>THE ENERGY SPEAKS FOR ITSELF</Eyebrow>
                <h2>
                  INSIDE THE
                  <br />
                  <em>EVERYDAY GRIND.</em>
                </h2>
              </div>

              <a
                className="gx-social-link"
                href={gymData.contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={18} /> Follow our journey
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="gx-reels-grid">
              {gymData.reels.map((reel, index) => (
                <button
                  type="button"
                  className="gx-reel-card"
                  key={reel.id}
                  onClick={() => setActiveReel(index)}
                  aria-label={`Play ${reel.title}`}
                >
                  <img src={reel.poster} alt={reel.title} loading="lazy" />
                  <span className="gx-reel-shade" />
                  <span className="gx-reel-top">
                    <span>{reel.category}</span>
                    <span>{reel.duration}</span>
                  </span>
                  <span className="gx-reel-play"><Play size={20} fill="currentColor" /></span>
                  <span className="gx-reel-bottom">
                    <strong>{reel.title}</strong>
                    <small>{reel.description}</small>
                  </span>
                  <span className="gx-reel-number">0{index + 1}</span>
                </button>
              ))}
            </div>
            <p className="gx-disclaimer">
              These are reel-style preview cards. Add your own vertical MP4
              videos in gymData.reels to enable actual video playback.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="gx-section gx-gallery" id="gallery">
          <div className="gx-container">
            <SectionHeading
              eyebrow="TAKE A CLOSER LOOK"
              title="THE CLUB."
              accent="THE CULTURE."
              description="A glimpse into the environment where good habits are built and progress is earned."
            />

            <div className="gx-gallery-grid">
              {gymData.gallery.map((item, index) => (
                <button
                  type="button"
                  className={`gx-gallery-item gx-gallery-item-${index + 1}`}
                  key={item.id}
                  onClick={() => setActiveGallery(index)}
                  aria-label={`View ${item.title}`}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="gx-gallery-overlay" />
                  <span className="gx-gallery-label">{item.title}</span>
                  <span className="gx-gallery-arrow"><ArrowUpRight size={20} /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="gx-section gx-schedule" id="schedule">
          <div className="gx-container">
            <SectionHeading
              eyebrow="MAKE TIME FOR YOURSELF"
              title="YOUR WEEK."
              accent="YOUR PLAN."
              description="Choose a day to explore sample group classes. Ask the gym for confirmed class timings and reservations."
            />

            <div className="gx-schedule-panel">
              <div className="gx-day-tabs" role="tablist" aria-label="Class schedule">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <button
                    key={day}
                    type="button"
                    role="tab"
                    aria-selected={activeDay === day}
                    className={activeDay === day ? "active" : ""}
                    onClick={() => setActiveDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="gx-class-list">
                {classesForDay.length > 0 ? (
                  classesForDay.map((item, index) => (
                    <article className="gx-class-row" key={item.id}>
                      <div className="gx-class-time">
                        <Clock3 size={16} />
                        {item.time}
                      </div>

                      <span className="gx-class-number">0{index + 1}</span>

                      <div className="gx-class-copy">
                        <span>{item.category}</span>
                        <h3>{item.title}</h3>
                        <p>Coach {item.coach}</p>
                      </div>

                      <ActionLink
                        className="gx-class-book"
                        message={`Hello ${gymData.brand.fullName}, I would like to enquire about ${item.title} on ${item.day} at ${item.time}.`}
                      >
                        Enquire <ArrowRight size={15} />
                      </ActionLink>
                    </article>
                  ))
                ) : (
                  <div className="gx-no-classes">
                    <Clock3 size={23} />
                    <strong>No group classes listed</strong>
                    <p>Contact the gym to ask about available training times.</p>
                  </div>
                )}
              </div>

              <div className="gx-schedule-footer">
                <span><Clock3 size={15} /> Sample schedule — confirmation required</span>
                <ActionLink
                  className="gx-text-link"
                  message={`Hello ${gymData.brand.fullName}, please send me the latest class schedule.`}
                >
                  Get the full schedule <ArrowRight size={16} />
                </ActionLink>
              </div>
            </div>
          </div>
        </section>

        {/* Member experience / testimonials */}
        <section className="gx-section gx-testimonials" id="community">
          <div className="gx-container gx-testimonial-layout">
            <div className="gx-testimonial-intro">
              <Eyebrow>THE MINDSET THAT MATTERS</Eyebrow>
              <h2>
                PROGRESS IS
                <br />
                <em>PERSONAL.</em>
              </h2>
              <p>
                Every person has a different starting point. Our approach is
                built around showing up, improving your practice and finding
                what works for you.
              </p>
              <div className="gx-testimonial-mark">
                <Trophy size={25} />
                <span>CONSISTENCY IS THE REAL FLEX.</span>
              </div>
            </div>

            <div className="gx-testimonial-cards">
              {gymData.testimonials.map((item) => (
                <article className="gx-testimonial-card" key={item.id}>
                  <div className="gx-testimonial-stars">
                    {Array.from({ length: item.rating }, (_, index) => (
                      <Star key={index} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote>“{item.quote}”</blockquote>
                  <div className="gx-testimonial-person">
                    <span className="gx-testimonial-avatar">
                      <Users size={17} />
                    </span>
                    <span>
                      <strong>{item.name}</strong>
                      <small>{item.detail}</small>
                    </span>
                  </div>
                </article>
              ))}
              <p className="gx-disclaimer">
                These are sample brand statements, not verified customer
                testimonials. Replace with genuine reviews before publishing.
              </p>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="gx-section gx-location" id="location">
          <div className="gx-container gx-location-grid">
            <div className="gx-location-copy">
              <Eyebrow>YOUR NEXT TRAINING HOME</Eyebrow>
              <h2>
                COME FOR
                <br />
                <em>THE WORK.</em>
              </h2>
              <p>
                Visit the club, explore the facilities and talk with our team
                about the membership that suits your goals.
              </p>

              <div className="gx-location-detail">
                <span><MapPin size={20} /></span>
                <div>
                  <strong>Find the club</strong>
                  <p>{gymData.contact.address}</p>
                </div>
              </div>

              <div className="gx-location-detail">
                <span><Clock3 size={20} /></span>
                <div>
                  <strong>Opening hours</strong>
                  {gymData.contact.openingHours.map((item) => (
                    <p key={item.day}>
                      <span className="gx-hour-day">{item.day}</span>
                      {item.hours}
                    </p>
                  ))}
                </div>
              </div>

              <div className="gx-location-actions">
                <a
                  className="gx-button gx-button-gold"
                  href={gymData.contact.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions <ArrowUpRight size={16} />
                </a>

                <a
                  className="gx-button gx-button-outline"
                  href={`tel:+${gymData.contact.phone.replace(/\D/g, "")}`}
                >
                  Call the club <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <a
              className="gx-map-card"
              href={gymData.contact.mapUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the gym location in Google Maps"
            >
              <div className="gx-map-lines" />
              <div className="gx-map-marker"><MapPin size={26} /></div>
              <div className="gx-map-info">
                <span className="gx-map-icon"><Dumbbell size={19} /></span>
                <span>
                  <strong>{gymData.brand.fullName}</strong>
                  <small>{gymData.brand.city}</small>
                </span>
                <ArrowUpRight size={19} />
              </div>
            </a>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="gx-final-cta">
          <VideoOrImage
            className="gx-final-media"
            image={gymData.hero.image}
            poster={gymData.hero.poster}
          />
          <div className="gx-final-shade" />
          <div className="gx-final-content">
            <Eyebrow>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
            <h2>
              LESS TALK.
              <br />
              <em>MORE WORK.</em>
            </h2>
            <p>
              Make the first move. We will help you work out the next step.
            </p>
            <button
              type="button"
              className="gx-button gx-button-gold"
              onClick={() => openRegistration()}
            >
              Start your membership enquiry <ArrowRight size={17} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="gx-footer">
        <div className="gx-container">
          <div className="gx-footer-main">
            <div className="gx-footer-brand">
              <Brand footer />
              <p>
                {gymData.brand.tagline}
                <br />
                A place for purpose, progress and performance.
              </p>
              <a
                className="gx-instagram-link"
                href={gymData.contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={18} />
                Follow the club <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="gx-footer-links">
              <strong>EXPLORE</strong>
              {gymData.navigation.map((item) => (
                <a key={item.href} href={item.href}>{item.label}</a>
              ))}
            </div>

            <div className="gx-footer-links">
              <strong>CONTACT</strong>
              <a href={`tel:+${gymData.contact.phone.replace(/\D/g, "")}`}>
                {gymData.contact.phoneDisplay}
              </a>
              <a href={`mailto:${gymData.contact.email}`}>
                {gymData.contact.email}
              </a>
              <span>{gymData.contact.address}</span>
              <ActionLink
                className="gx-footer-whatsapp"
                message={`Hello ${gymData.brand.fullName}, I would like more information about the gym.`}
              >
                <MessageCircle size={16} /> Message on WhatsApp
              </ActionLink>
            </div>
          </div>

          <div className="gx-footer-bottom">
            <span>
              © {new Date().getFullYear()} {gymData.brand.fullName}. All rights reserved.
            </span>
            <span>SHOW UP. PUT IN THE WORK. REPEAT.</span>
          </div>
        </div>
      </footer>

      {/* Mobile sticky actions */}
      <div className="gx-mobile-bar">
        <ActionLink
          className="gx-mobile-whatsapp"
          message={`Hello ${gymData.brand.fullName}, I would like to enquire about membership.`}
        >
          <MessageCircle size={17} /> Enquire
        </ActionLink>
        <button
          type="button"
          className="gx-button gx-button-gold"
          onClick={() => openRegistration()}
        >
          Join the club <ArrowRight size={16} />
        </button>
      </div>

      {/* Registration modal */}
      {registrationOpen && (
        <div
          className="gx-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setRegistrationOpen(false);
            }
          }}
        >
          <section
            className="gx-registration-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gx-registration-title"
          >
            <button
              type="button"
              className="gx-modal-close"
              onClick={() => setRegistrationOpen(false)}
              aria-label="Close membership form"
            >
              <X size={21} />
            </button>

            <div className="gx-modal-header">
              <span className="gx-modal-icon"><Dumbbell size={23} /></span>
              <Eyebrow>YOUR NEXT CHAPTER</Eyebrow>
              <h2 id="gx-registration-title">
                MAKE YOUR
                <br />
                <em>FIRST MOVE.</em>
              </h2>
              <p>
                Share your details and continue to WhatsApp to confirm your
                membership with our team.
              </p>
            </div>

            <form className="gx-registration-form" onSubmit={submitRegistration}>
              <label>
                Full name *
                <input
                  name="name"
                  value={form.name}
                  onChange={updateForm}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Mobile number *
                <input
                  name="phone"
                  value={form.phone}
                  onChange={updateForm}
                  placeholder="Your contact number"
                  type="tel"
                  autoComplete="tel"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  name="email"
                  value={form.email}
                  onChange={updateForm}
                  placeholder="you@example.com"
                  type="email"
                  autoComplete="email"
                />
              </label>

              <label>
                Membership plan *
                <select
                  name="plan"
                  value={form.plan}
                  onChange={(event) => {
                    updateForm(event);
                    setChosenPlan(event.target.value);
                  }}
                  required
                >
                  {gymData.memberships.map((plan) => (
                    <option value={plan.id} key={plan.id}>
                      {plan.name} — ₹{formatPrice(plan.price)}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Primary fitness goal
                <select name="goal" value={form.goal} onChange={updateForm}>
                  <option>Build strength</option>
                  <option>Build muscle</option>
                  <option>Improve endurance</option>
                  <option>Improve general fitness</option>
                  <option>Weight management</option>
                  <option>Improve mobility</option>
                </select>
              </label>

              <label>
                Preferred start date
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={updateForm}
                  min={new Date().toLocaleDateString("en-CA")}
                />
              </label>

              <button
                type="submit"
                className="gx-button gx-button-gold gx-submit-button"
              >
                Continue to WhatsApp <ArrowRight size={17} />
              </button>

              {formNotice && (
                <p className="gx-form-notice" role="status">{formNotice}</p>
              )}

              <p className="gx-form-note">
                <ShieldCheck size={15} />
                This form opens WhatsApp with your details. It does not save
                your information to a database in this version.
              </p>
            </form>
          </section>
        </div>
      )}

      {/* Gallery lightbox */}
      {activeGallery !== null && (
        <div
          className="gx-lightbox"
          role="presentation"
          onClick={() => setActiveGallery(null)}
        >
          <button
            className="gx-lightbox-close"
            type="button"
            onClick={() => setActiveGallery(null)}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          <button
            className="gx-lightbox-arrow gx-lightbox-prev"
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveGallery(
                (activeGallery - 1 + gymData.gallery.length) %
                  gymData.gallery.length
              );
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <img
            src={gymData.gallery[activeGallery].image}
            alt={gymData.gallery[activeGallery].title}
            onClick={(event) => event.stopPropagation()}
          />

          <div className="gx-lightbox-caption">
            <span>{gymData.gallery[activeGallery].title}</span>
            <small>
              {String(activeGallery + 1).padStart(2, "0")} /{" "}
              {String(gymData.gallery.length).padStart(2, "0")}
            </small>
          </div>

          <button
            className="gx-lightbox-arrow gx-lightbox-next"
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveGallery(
                (activeGallery + 1) % gymData.gallery.length
              );
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      {/* Reel player */}
      {selectedReel && (
        <div
          className="gx-reel-modal"
          role="presentation"
          onClick={() => setActiveReel(null)}
        >
          <button
            type="button"
            className="gx-lightbox-close"
            onClick={() => setActiveReel(null)}
            aria-label="Close reel"
          >
            <X size={24} />
          </button>

          <div
            className="gx-reel-player"
            onClick={(event) => event.stopPropagation()}
          >
            {selectedReel.video ? (
              <video
                src={selectedReel.video}
                poster={selectedReel.poster}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <>
                <img src={selectedReel.poster} alt={selectedReel.title} />
                <div className="gx-reel-placeholder">
                  <Play size={27} />
                  <strong>{selectedReel.title}</strong>
                  <p>
                    Add a vertical MP4 URL to this reel in gymData.js to play
                    the video here.
                  </p>
                </div>
              </>
            )}

            <div className="gx-reel-player-caption">
              <span>{selectedReel.category}</span>
              <h3>{selectedReel.title}</h3>
              <p>{selectedReel.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

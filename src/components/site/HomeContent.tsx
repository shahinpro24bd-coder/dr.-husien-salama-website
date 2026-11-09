import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero1Asset from "@/assets/hero-1.jpg";
const hero1 = hero1Asset;
import hero2Asset from "@/assets/hero-2.jpg";
const hero2 = hero2Asset;
import hero3Asset from "@/assets/hero-3.jpg";
const hero3 = hero3Asset;
import about1Asset from "@/assets/ig-dr-portrait.jpg";
const about1 = about1Asset;
import about2Asset from "@/assets/ig-dr-microscope.jpg";
const about2 = about2Asset;
import buildingsAsset from "@/assets/ig-case-broken-file.jpg";
const buildings = buildingsAsset;
import { company, services } from "@/lib/site";
import { SectionTitle } from "@/components/site/Layout";
import { CtaBanner, Faq, Process, QuoteSection, ServicesGrid, WhoWeServe, WhyUs } from "@/components/site/Sections";
import amcImgAsset from "@/assets/ig-case-decay-rescue.jpg";
const amcImg = amcImgAsset;
import maintImgAsset from "@/assets/ig-case-molar-rct.jpg";
const maintImg = maintImgAsset;
import patientImgAsset from "@/assets/ig-dr-patient.jpg";
const patientImg = patientImgAsset;

import { T, Img, Icon, useEditable, useList, ItemTools, AddItem, safeImg } from "@/lib/editable";

const slideDefaults = [
  { img: hero1, step: "Saving Teeth", title: "Saving Your Tooth Is My Mission", text: "Dr. Husien Salama is a dentist in Baghdad who does everything possible to keep your natural teeth — with X-ray diagnosis, rubber dam isolation and careful, detailed treatment." },
  { img: hero2, step: "Root Canals", title: "Root Canals & Retreatment Done Right", text: "From first-time root canals to difficult retreatments with curved canals and broken instruments — treated from the root so the tooth can last." },
  { img: hero3, step: "Restorations", title: "Natural Smiles With E.max Lab Restorations", text: "Strong, tooth-coloured E.max inlays, onlays and crowns rebuild treated teeth and bring back a natural, healthy smile." },
];

const tabTitles = ["Root Canals", "Retreatments", "E.max Restorations", "Saved Teeth"];

const aboutFeatures = [
  { icon: "fa-tooth", text: "Root Canal Treatment" },
  { icon: "fa-redo", text: "Root Canal Retreatment" },
  { icon: "fa-gem", text: "E.max Lab Restorations" },
  { icon: "fa-first-aid", text: "Saving Broken Teeth" },
];

const audiences = [
  {
    img: amcImg, icon: "fa-tooth", title: "Patients in Pain", sub: "Toothache & Infection",
    text: "Deep decay, swelling or a tooth that hurts at night — we find the cause with X-rays and treat it at the root.",
  },
  {
    img: buildings, icon: "fa-redo", title: "Failed Root Canals", sub: "Retreatment",
    text: "Old root canals that still hurt or show infection on X-ray — including broken instruments and curved canals.",
  },
  {
    img: maintImg, icon: "fa-first-aid", title: "Teeth Told to Be Extracted", sub: "Second Opinion",
    text: "Before you lose a tooth, get it checked. Many broken or badly decayed teeth can still be saved.",
  },
  {
    img: patientImg, icon: "fa-map-marker-alt", title: "Patients From All Over Iraq", sub: "Baghdad & Provinces",
    text: "Patients travel from Baghdad and other provinces such as Anbar — we plan visits to finish treatment efficiently.",
  },
];


export function HomeContent() {
  const { edit, get, pick } = useEditable();
  const slides = useList("home.hero", slideDefaults);
  const features = useList("home.about.f", aboutFeatures);
  const count = slides.ids.length;
  const [pos, setI] = useState(0);
  const i = count ? Math.min(pos, count - 1) : 0;
  const [tabPos, setTab] = useState(0);
  const tabs = services.slice(0, 4).map((sv, n) => ({ title: tabTitles[n] ?? sv.title, img: sv.image, s: sv }));
  const tab = Math.min(tabPos, Math.max(tabs.length - 1, 0));
  useEffect(() => {
    if (edit || count < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % count), 6000);
    return () => clearInterval(t);
  }, [edit, count]);
  const sid = slides.ids[i] ?? 0;
  const s = slides.def(sid);
  const cur = tabs[tab]!; // services list is never empty (falls back to bundled services)
  return (
    <>
      {/* Hero */}
      <section className="hero">
        {slides.ids.map((id, n) => (
          <img key={id} data-cms-img={edit ? "slide" : undefined} className={`hero-bg ${n === i ? "is-active" : ""}`} src={safeImg(get(`home.hero.${id}.img`, slides.def(id).img), slides.def(id).img)} alt="" loading="eager" decoding="async" width={1920} height={1088} />
        ))}
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="row">
            <div className="col-lg-11 col-xl-9" key={i}>
              <span className="hero-kicker animated fadeInDown"><T k="home.hero.kicker" d="د. حسين سلامة · Dentist · Baghdad, Iraq" /></span>
              <h1 className="hero-title text-white animated fadeInUp"><T k={`home.hero.${sid}.title`} d={s.title} /></h1>
              <p className="hero-text animated fadeInUp"><T k={`home.hero.${sid}.text`} d={s.text} /></p>
              <div className="d-flex flex-wrap gap-3 animated fadeInUp">
                <Link to="/contact" className="btn btn-primary py-3 px-5"><T k="home.hero.btn1" d="Book an Appointment" line /></Link>
                <Link to="/contact" className="btn hero-btn-outline py-3 px-5"><T k="home.hero.btn2" d="Visit the Clinic" line /></Link>
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="btn hero-btn-wa py-3 px-4" aria-label="Chat on WhatsApp">
                  <i className="fab fa-whatsapp fs-5 me-2"></i><T k="home.hero.btn3" d="WhatsApp" line />
                </a>
              </div>
            </div>
          </div>
        </div>
        {edit && (
          <div className="cms-hero-pick d-flex flex-wrap gap-2">
            <button type="button" onClick={() => pick(`home.hero.${sid}.img`)}><i className="fa fa-image me-2"></i>Change slide {i + 1} background</button>
            <button type="button" onClick={() => { slides.add(); setI(count); }}><i className="fa fa-plus me-2"></i>Add slide</button>
            {count > 1 && <button type="button" onClick={() => { if (confirm("Remove this slide?")) { slides.remove(sid); setI(0); } }}><i className="fa fa-trash me-2"></i>Remove slide</button>}
          </div>
        )}
        <div className="hero-nav">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="d-flex gap-4">
              {slides.ids.map((id, n) => (
                <button key={id} type="button" onClick={() => setI(n)} className={`hero-step ${n === i ? "is-active" : ""}`}>
                  <span>{String(n + 1).padStart(2, "0")}</span>
                  <small className="d-none d-md-block"><T k={`home.hero.${id}.step`} d={slides.def(id).step} line /></small>
                </button>
              ))}
            </div>
            <div className="d-flex gap-2">
              <button type="button" className="hero-arrow" aria-label="Previous" onClick={() => setI((i + count - 1) % Math.max(count, 1))}><i className="fa fa-arrow-left"></i></button>
              <button type="button" className="hero-arrow" aria-label="Next" onClick={() => setI((i + 1) % Math.max(count, 1))}><i className="fa fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-5"></div>


      {/* About */}
      <div className="band py-5 ab-section">
        <div className="ab-gridbg" aria-hidden="true" />
        <div className="container position-relative">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="ab-media">
                <span className="ab-frame" aria-hidden="true" />
                <span className="why-tick why-tick-tl" aria-hidden="true" />
                <span className="why-tick why-tick-tr" aria-hidden="true" />
                <Img k="home.about.img1" d={about1} className="ab-img-main" alt="Dr. Husien Salama at Clear Dental Care" />
                <Img k="home.about.img2" d={about2} className="ab-img-sub" alt="Dr. Husien Salama treating a patient under the microscope" />
                <div className="ab-badge">
                  <span className="ab-badge-num"><T k="home.about.badgeNum" d="420+" line /></span>
                  <span className="ab-badge-text"><small><T k="home.about.badge1" d="Cases Shared" line /></small><strong><T k="home.about.badge2" d="On Instagram" line /></strong></span>
                </div>
                <span className="ab-vert" aria-hidden="true"><T k="home.about.vert" d="Dr. Husien Salama · Baghdad" line /></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-kicker"><span><T k="home.about.kicker" d="About Us" line /></span></div>
              <h1 className="display-5 mb-3"><T k="home.about.title" d="Your Dentist For Saving Teeth" /></h1>
              <p className="ab-lead mb-4"><T k="home.about.lead" d="I am Dr. Husien Salama (د. حسين سلامة), a dentist in Baghdad with a Diploma in Dental Treatment from the ADA. My work is built around one idea: saving the tooth before losing it." /></p>
              <p className="ab-text mb-4"><T k="home.about.text" d="At Clear Dental Care in Al-Mansour, every case starts with an X-ray and a clear diagnosis. Treatment is done under rubber dam isolation with proper sterilisation — because the outside of a tooth can look fine while the roots are infected." /></p>
              <div className="row g-3 mb-4">
                {features.ids.map((id) => {
                  const f = features.def(id);
                  return (
                    <div key={id} className="col-sm-6">
                      <div className="ab-check"><ItemTools list={features} id={id} /><Icon k={`home.about.f${id}.icon`} d={f.icon} /><span><T k={`home.about.f${id}`} d={f.text} /></span></div>
                    </div>
                  );
                })}
                <AddItem list={features} label="Add point" wrap={(b) => <div className="col-sm-6">{b}</div>} />
              </div>
              <div className="d-flex flex-wrap gap-3">
                <Link className="btn btn-primary py-3 px-5" to="/services"><T k="home.about.btn1" d="See All Treatments" line /></Link>
                <Link className="ab-btn-ghost btn py-3 px-4" to="/about"><T k="home.about.btn2" d="About the Doctor" line /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesGrid />
      <WhyUs />

      {/* Project tabs */}
      <div className="band project py-5">
        <div className="container">
          <SectionTitle k="home.proj" kicker="Real Cases" title="Real Teeth. Saved." />
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                {tabs.map((t, n) => (
                  <button key={t.title} type="button" onClick={() => setTab(n)}
                    className={`nav-link w-100 d-flex align-items-center text-start p-4 ${n < 3 ? "mb-4" : "mb-0"} ${tab === n ? "active" : ""}`}>
                    <h3 className="m-0">0{n + 1}. <T k={`home.proj.tab${n}`} d={t.title} line /></h3>
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row g-4">
                <div className="col-md-6" style={{ minHeight: 350 }}>
                  <div className="position-relative h-100">
                    <Img k={`services.${tab}.image`} d={cur.img} className="position-absolute img-fluid w-100 h-100" style={{ objectFit: "cover" }} alt={cur.title} />
                  </div>
                </div>
                <div className="col-md-6">
                  <h1 className="mb-3"><T k={`services.${tab}.title`} d={cur.s.title} /></h1>
                  <p className="mb-4"><T k={`services.${tab}.summary`} d={cur.s.summary} /></p>
                  {cur.s.items.slice(0, 3).map((it, j) => (
                    <p key={j}><Icon k="home.proj.checkIcon" d="fa-check" className="text-primary me-3" /><T k={`services.${tab}.items.${j}`} d={it} /></p>
                  ))}
                  <Link to="/projects" className="btn btn-primary py-3 px-5 mt-3"><T k="home.proj.btn" d="See Patient Cases" line /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who we serve */}
      <WhoWeServe audiences={audiences} />


      <Process />
      <CtaBanner k="home.cta" kicker="Don't Wait" title="The Right Treatment At The Right Time Changes Everything." text="Early treatment can decide the future of a tooth. If something hurts, swells or feels wrong, book a check-up before the problem grows." button="Book a Check-Up" />
      <QuoteSection />
      <Faq />
    </>
  );
}

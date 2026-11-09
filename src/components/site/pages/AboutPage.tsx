import { Link } from "@tanstack/react-router";
import hero1Asset from "@/assets/hero-1.jpg";
import about1Asset from "@/assets/ig-dr-clinic.jpg";
import about2Asset from "@/assets/ig-dr-microscope.jpg";
import buildingsAsset from "@/assets/buildings.jpg";
import hvacImgAsset from "@/assets/ig-case-molar-rct.jpg";
import elecImgAsset from "@/assets/ig-case-margin-elevation.jpg";
import plumbImgAsset from "@/assets/ig-case-emax-restoration.jpg";
import { PageHeader } from "@/components/site/Layout";
import { services } from "@/lib/site";
import { T, Img, Icon, useEditable, useList, ItemTools, AddItem, safeImg } from "@/lib/editable";

function PillarTags({ i, items }: { i: number; items: string[] }) {
  const list = useList(`about.pillar.${i}.tag`, items);
  return (
    <div className="abx-pillar-tags">
      {list.ids.map((id) => <span key={id}><T k={`about.pillar.${i}.tag.${id}`} d={list.def(id)} line />{list.edit && <ItemTools list={list} id={id} />}</span>)}
      <AddItem list={list} label="Tag" />
    </div>
  );
}

const hero1 = hero1Asset;
const about1 = about1Asset;
const about2 = about2Asset;
const buildings = buildingsAsset;

const pillars = [
  { letter: "D", word: "Diagnose", img: hvacImgAsset, text: "X-rays and a careful examination show the real problem — infection, bone loss or decay under old fillings.", items: ["Dental X-rays", "Examination", "Clear plan"] },
  { letter: "T", word: "Treat", img: elecImgAsset, text: "Root canals, retreatments and rebuilding broken teeth under rubber dam isolation with sterile instruments.", items: ["Root canals", "Retreatment", "Fibre posts"] },
  { letter: "R", word: "Restore", img: plumbImgAsset, text: "Strong, natural-looking E.max lab restorations protect the treated tooth and bring back a natural smile.", items: ["E.max inlays", "Onlays", "Crowns"] },
];

const approach = [
  { icon: "fa-comments", title: "Listen First", text: "We start by hearing what you feel — pain, sensitivity, swelling — and your dental history." },
  { icon: "fa-x-ray", title: "See Beneath", text: "X-rays show what the eye cannot: infection at the root, old treatments and hidden decay." },
  { icon: "fa-clipboard-list", title: "Explain the Plan", text: "You see your images and understand the options, visits and cost before we begin." },
  { icon: "fa-tooth", title: "Treat With Care", text: "Rubber dam isolation, sterile tools and step-by-step work — even in the hardest cases." },
  { icon: "fa-smile", title: "Follow Up", text: "A final X-ray and follow-up make sure the tooth heals and the result lasts." },
];

const clients = ["Toothache & Swelling", "Deep Decay", "Failed Root Canals", "Broken Instruments", "Curved Canals", "Broken Teeth", "Old Fillings", "Second Opinions", "Patients From Other Provinces"];

const values = [
  { icon: "fa-tooth", title: "Save the Tooth", text: "Extraction is the last option. Every effort goes into keeping your natural tooth." },
  { icon: "fa-balance-scale", title: "Honesty", text: "Sometimes the best treatment is no treatment — like arrested decay that only needs monitoring." },
  { icon: "fa-shield-alt", title: "Safety & Sterility", text: "Rubber dam isolation and correct sterilisation in every procedure." },
  { icon: "fa-search-plus", title: "Precision", text: "Attention to the smallest details, because they decide how long a treatment lasts." },
  { icon: "fa-graduation-cap", title: "Always Learning", text: "Modern techniques like deep margin elevation and band modification, shared with colleagues too." },
];

export function AboutPage() {
  const c = useEditable();
  const commitRaw = c.get("about.commit.image", about2);
  const commitImg = safeImg(commitRaw, about2);
  const pillarList = useList("about.pillar", pillars);
  const valueList = useList("about.value", values);
  const stepList = useList("about.step", approach);
  const clientList = useList("about.client", clients);
  const stepWord = c.get("about.stepWord", "Step");
  return (
    <>
      <PageHeader k="about" title="About the Doctor" crumb="About" image={hero1} />
      <div className="band py-5 ab-section">
        <div className="ab-gridbg" aria-hidden="true" />
        <div className="container position-relative">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="ab-media">
                <span className="ab-frame" aria-hidden="true" />
                <span className="why-tick why-tick-tl" aria-hidden="true" />
                <span className="why-tick why-tick-tr" aria-hidden="true" />
                <Img k="about.img1" d={about1} className="ab-img-main" alt="Dr. Husien Salama at Clear Dental Care, Baghdad" />
                <Img k="about.img2" d={about2} className="ab-img-sub" alt="Dr. Husien Salama treating under the dental microscope" />
                <span className="ab-vert" aria-hidden="true"><T k="about.vert" d="Dr. Husien Salama · Baghdad" line /></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-kicker"><span><T k="about.kicker" d="About Dr. Husien" line /></span></div>
              <h1 className="display-5 mb-3"><T k="about.title" d="د. حسين سلامة — The Dentist Who Saves Teeth" /></h1>
              <p className="ab-lead mb-4"><T k="about.lead" d="Dr. Husien Salama is a dentist in Baghdad, Iraq, holding a Diploma in Dental Treatment from the ADA. He treats patients at Clear Dental Care in Al-Mansour." /></p>
              <p className="ab-text mb-3"><T k="about.p1" d="His focus is saving teeth: root canal treatment, difficult retreatments, rebuilding broken teeth and protecting them with E.max lab restorations. Patients come to him from all over Baghdad and from other provinces." /></p>
              <p className="ab-text mb-4"><T k="about.p2" d="He believes the right treatment at the right time changes the future of a tooth — and that the outside of a tooth can look healthy while the roots are infected. That is why every case starts with X-rays and every treatment is done under rubber dam isolation with proper sterilisation." /></p>
              <Link className="btn btn-primary py-3 px-5" to="/contact"><T k="about.btn" d="Book With Dr. Husien" line /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="abx-marquee" aria-hidden="true">
        <div className="abx-marquee-track">
          {[...services, ...services].map((sv, i) => (
            <span key={i}><Icon k={`services.${i % services.length}.icon`} d={sv.icon} /><T k={`services.${i % services.length}.title`} d={sv.title} line /></span>
          ))}
        </div>
      </div>

      <section className="abx-mv">
        <div className="container">
          <div className="abx-mv-grid">
            <div className="abx-mv-card abx-mv-card--dark">
              <span className="abx-mv-word" aria-hidden="true"><T k="about.mission.word" d="Mission" line /></span>
              <span className="abx-mv-icon"><Icon k="about.mission.icon" d="fa-bullseye" /></span>
              <span className="ind-kicker"><T k="about.mission.kicker" d="What drives us" line /></span>
              <h2><T k="about.mission.title" d="Our Mission" line /></h2>
              <p><T k="about.mission.text" d="To save every tooth that can be saved — treating the cause, not just the symptom, so patients leave pain-free and happy with the result." /></p>
            </div>
            <div className="abx-mv-img">
              <Img k="about.mv.image" d={buildings} alt="Al-Mansour, Baghdad" />
              <span className="abx-mv-tag"><T k="about.mv.tag" d="Al-Mansour · Baghdad" line /></span>
            </div>
            <div className="abx-mv-card">
              <span className="abx-mv-word" aria-hidden="true"><T k="about.vision.word" d="Vision" line /></span>
              <span className="abx-mv-icon"><Icon k="about.vision.icon" d="fa-eye" /></span>
              <span className="ind-kicker"><T k="about.vision.kicker" d="Where we're going" line /></span>
              <h2><T k="about.vision.title" d="Our Vision" line /></h2>
              <p><T k="about.vision.text" d="To be the trusted name in Iraq for saving teeth — through careful work, honest advice and modern techniques shared openly with patients and colleagues." /></p>
            </div>
          </div>
        </div>
      </section>

      <section className="abx-pillars">
        <div className="container">
          <div className="abx-head">
            <span className="ind-kicker"><T k="about.pillars.kicker" d="How I Work" line /></span>
            <h2 className="sd-title text-white"><T k="about.pillars.title" d="Three Steps." line /> <em><T k="about.pillars.em" d="One Goal: Your Tooth." line /></em></h2>
          </div>
          <div className="abx-pillar-grid">
            {pillarList.ids.map((id) => {
              const pl = pillarList.def(id);
              return (
                <div key={id} className="abx-pillar">
                  <ItemTools list={pillarList} id={id} />
                  <Img k={`about.pillar.${id}.img`} d={pl.img} alt={pl.word} />
                  <span className="abx-pillar-shade" aria-hidden="true" />
                  <span className="abx-pillar-letter"><T k={`about.pillar.${id}.letter`} d={pl.letter} line /></span>
                  <div className="abx-pillar-body">
                    <h3><T k={`about.pillar.${id}.word`} d={pl.word} line /></h3>
                    <p><T k={`about.pillar.${id}.text`} d={pl.text} /></p>
                    <PillarTags i={id} items={pl.items} />
                  </div>
                </div>
              );
            })}
            <AddItem list={pillarList} label="Add step" />
          </div>
        </div>
      </section>

      <section className="abx-values">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="abx-sticky">
                <span className="ind-kicker"><T k="about.values.kicker" d="Core Values" line /></span>
                <h2 className="sd-title"><T k="about.values.title" d="What Guides Every Treatment" /></h2>
                <p><T k="about.values.lead" d="Five principles shape how Dr. Husien diagnoses, treats and follows up every patient." /></p>
                <span className="abx-values-big" aria-hidden="true">{String(valueList.ids.length).padStart(2, "0")}</span>
              </div>
            </div>
            <div className="col-lg-8">
              {valueList.ids.map((id, i) => {
                const v = valueList.def(id);
                return (
                  <div key={id} className="abx-value">
                    <ItemTools list={valueList} id={id} />
                    <span className="abx-value-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="abx-value-icon"><Icon k={`about.value.${id}.icon`} d={v.icon} /></span>
                    <div><h3><T k={`about.value.${id}.title`} d={v.title} line /></h3><p className="mb-0"><T k={`about.value.${id}.text`} d={v.text} /></p></div>
                    <i className="fa fa-arrow-right abx-value-arrow"></i>
                  </div>
                );
              })}
              <AddItem list={valueList} label="Add value" />
            </div>
          </div>
        </div>
      </section>

      <section className="abx-approach">
        <div className="container">
          <div className="abx-head text-center mx-auto">
            <span className="ind-kicker"><T k="about.approach.kicker" d="Our Approach" line /></span>
            <h2 className="sd-title"><T k="about.approach.title" d="Your Journey With Us" /></h2>
          </div>
          <div className="abx-path">
            {stepList.ids.map((id, i) => {
              const a = stepList.def(id);
              return (
                <div key={id} className="abx-step">
                  <ItemTools list={stepList} id={id} />
                  <span className="abx-step-dot"><Icon k={`about.step.${id}.icon`} d={a.icon} /></span>
                  <span className="abx-step-num">{c.edit ? <T k="about.stepWord" d="Step" line /> : stepWord} {String(i + 1).padStart(2, "0")}</span>
                  <h3><T k={`about.step.${id}.title`} d={a.title} line /></h3>
                  <p className="mb-0"><T k={`about.step.${id}.text`} d={a.text} /></p>
                </div>
              );
            })}
          </div>
          <AddItem list={stepList} label="Add step" wrap={(b) => <div className="mt-3 text-center">{b}</div>} />
        </div>
      </section>

      <section className="abx-clients">
        <div className="container">
          <div className="abx-clients-box">
            <div>
              <span className="ind-kicker"><T k="about.clients.kicker" d="Cases We Treat" line /></span>
              <h2 className="sd-title mb-0"><T k="about.clients.title" d="From simple decay to the hardest root canals" /></h2>
            </div>
            <div className="abx-chips">
              {clientList.ids.map((id) => <span key={id}><Icon k="about.client.icon" d="fa-check" /><T k={`about.client.${id}`} d={clientList.def(id)} line />{c.edit && <ItemTools list={clientList} id={id} />}</span>)}
              <AddItem list={clientList} label="Add" />
            </div>
          </div>
        </div>
      </section>

      <section className={`abx-commit ${c.edit ? "cms-img" : ""}`} style={{ backgroundImage: `url(${commitImg})` }}
        onClick={c.edit ? (e) => { if (e.target === e.currentTarget) c.pick("about.commit.image"); } : undefined}>
        <div className="container">
          <div className="abx-commit-inner">
            <Icon k="about.commit.icon" d="fa-quote-left" className="abx-quote" />
            <span className="ind-kicker"><T k="about.commit.kicker" d="Our Commitment" line /></span>
            <p className="abx-commit-text"><T k="about.commit.text" d="Saving the tooth is my mission. Every patient deserves an honest diagnosis, careful treatment and a result that makes them smile. — Dr. Husien Salama" /></p>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              <Link className="btn btn-primary py-3 px-5" to="/contact"><T k="about.commit.btn1" d="Book an Appointment" line /></Link>
              <Link className="btn ft-ghost py-3 px-5" to="/services"><T k="about.commit.btn2" d="See Treatments" line /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

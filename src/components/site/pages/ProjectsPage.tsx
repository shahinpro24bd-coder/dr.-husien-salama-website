import { Link } from "@tanstack/react-router";
import { useState } from "react";
import hero3Asset from "@/assets/ig-case-molar-rct.jpg";
import caseMolar from "@/assets/ig-case-molar-rct.jpg";
import caseDecay from "@/assets/ig-case-decay-rescue.jpg";
import caseFile from "@/assets/ig-case-broken-file.jpg";
import caseEmax from "@/assets/ig-case-emax-restoration.jpg";
import caseFront from "@/assets/ig-case-front-tooth.jpg";
import caseMargin from "@/assets/ig-case-margin-elevation.jpg";
import caseArrested from "@/assets/ig-case-arrested-caries.jpg";
import { PageHeader, SectionTitle } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/Sections";
import { T, Img, Icon, useEditable, useList, ItemTools, AddItem } from "@/lib/editable";

type Case = {
  slug: string; image: string; icon: string; title: string; property: string; sector: string;
  location: string; items: string[]; video?: string;
};

// Real cases and videos from Dr. Husien Salama's Instagram (@dr.husien.salama).
const cases: Case[] = [
  { slug: "retreatment", image: caseFile, icon: "fa-redo", sector: "Retreatment", property: "Upper second premolar", title: "Bypassing a Broken Instrument", location: "Baghdad",
    items: ["Old under-filled root canal (8 years)", "Severe curve, ledge & separated file", "Bypassed and sealed to 20/.04"] },
  { slug: "root-canal", image: caseMolar, icon: "fa-tooth", sector: "Root Canal", property: "Lower molar", title: "Infection Cleared From the Roots", location: "Baghdad",
    items: ["X-ray showed bone infection", "Canals cleaned to the root tip", "Tooth saved before it was lost"] },
  { slug: "retreatment", image: "/videos/retreatment-explained.jpg", video: "/videos/retreatment-explained.mp4", icon: "fa-video", sector: "Videos", property: "Why root canals fail", title: "Find the Cause Before Retreating", location: "Clear Dental Care",
    items: ["Knowing why it failed", "Treating the cause, not the result", "Keeping the tooth as long as possible"] },
  { slug: "emax-restorations", image: caseEmax, icon: "fa-gem", sector: "E.max", property: "Back teeth", title: "Decay Removed, Teeth Rebuilt", location: "Baghdad",
    items: ["Old decay and stains removed", "Teeth rebuilt with natural shape", "Natural colour and shine"] },
  { slug: "tooth-rescue", image: caseDecay, icon: "fa-first-aid", sector: "Saved Teeth", property: "Badly decayed molar", title: "A Real Rescue From Extraction", location: "Baghdad",
    items: ["Tooth almost lost to decay", "Root treatment & fibre post", "E.max lab restoration"] },
  { slug: "tooth-rescue", image: "/videos/difficult-case.jpg", video: "/videos/difficult-case.mp4", icon: "fa-video", sector: "Videos", property: "Difficult case", title: "Step by Step on Hard Cases", location: "Clear Dental Care",
    items: ["Planned, careful steps", "Attention to every detail", "A happy patient at the end"] },
  { slug: "root-canal", image: caseFront, icon: "fa-tooth", sector: "Root Canal", property: "Upper front tooth", title: "Front Tooth Root Canal", location: "Baghdad",
    items: ["Large infection on X-ray", "Canal cleaned and sealed", "Natural front tooth kept"] },
  { slug: "tooth-rescue", image: caseMargin, icon: "fa-first-aid", sector: "Saved Teeth", property: "Deep cavity", title: "Deep Margin Elevation", location: "Clinical tip",
    items: ["Band modification technique", "Raising a deep margin", "Ready for a lasting restoration"] },
  { slug: "tooth-rescue", image: "/videos/margin-elevation.jpg", video: "/videos/margin-elevation.mp4", icon: "fa-video", sector: "Videos", property: "Clinical tip", title: "Band Modification for Deep Margins", location: "Clear Dental Care",
    items: ["One of the most useful tricks", "Better seal on deep cavities", "Shared with colleagues"] },
  { slug: "fillings", image: caseArrested, icon: "fa-fill-drip", sector: "Fillings", property: "Arrested decay", title: "When No Filling Is the Best Filling", location: "Baghdad",
    items: ["Decay that has stopped (arrested)", "No drilling needed", "Monitored at check-ups"] },
  { slug: "fillings", image: "/videos/arrested-caries.jpg", video: "/videos/arrested-caries.mp4", icon: "fa-video", sector: "Videos", property: "Honest treatment", title: "Not Every Cavity Needs a Filling", location: "Clear Dental Care",
    items: ["Correct diagnosis first", "Minimal intervention", "Protecting healthy tooth structure"] },
];

function Scope({ id, items }: { id: number; items: string[] }) {
  const list = useList(`projects.${id}.scope`, items);
  return (
    <div className="pj-scope">
      {list.ids.map((sid) => <span key={sid}><T k={`projects.${id}.scope.${sid}`} d={list.def(sid)} line />{list.edit && <ItemTools list={list} id={sid} />}</span>)}
      <AddItem list={list} label="Add" />
    </div>
  );
}

export function ProjectsPage() {
  const c = useEditable();
  // Default case cards come from the doctor's Instagram; admins can add, remove and rewrite them.
  const list = useList("projects", cases);
  const cards = list.ids.map((id) => ({ id, ...list.def(id), sector: c.get(`projects.${id}.sector`, list.def(id).sector) }));
  const allWord = c.get("projects.filterAll", "All");
  const sectors = Array.from(new Set(cards.map((x) => x.sector.trim()).filter(Boolean)));
  const [filter, setFilter] = useState<string>("");
  const shown = c.edit || !filter ? cards : cards.filter((x) => x.sector.trim() === filter);
  return (
    <>
      <PageHeader k="projects" title="Patient Cases" crumb="Cases" image={hero3Asset} />
      <div className="band py-5">
        <div className="container">
          <SectionTitle k="projects.intro" kicker="Real Cases" title="Teeth Saved In Our Clinic" />
          <p className="text-center mx-auto mb-5" style={{ maxWidth: 800 }}>
            <T k="projects.intro.text" d="Real before-and-after X-rays, photos and videos shared by Dr. Husien Salama on Instagram — root canals, retreatments, rebuilt teeth and honest decisions about when not to drill." />
          </p>
          <div className="pj-filters" role="tablist">
            <button type="button" role="tab" aria-selected={!filter} className={`pj-filter ${!filter ? "is-active" : ""}`} onClick={() => setFilter("")}>
              {c.edit ? <T k="projects.filterAll" d="All" line /> : allWord}<span>{cards.length}</span>
            </button>
            {sectors.map((f) => (
              <button key={f} type="button" role="tab" aria-selected={filter === f} data-derived="sector"
                className={`pj-filter ${filter === f ? "is-active" : ""}`} onClick={() => setFilter(f)}>
                {f}<span>{cards.filter((x) => x.sector.trim() === f).length}</span>
              </button>
            ))}
          </div>
          {c.edit && <p className="text-center small text-muted cms-hint">Filter buttons are made from each case's category (the label on the photo).</p>}
          <div className="pj-grid">
            {shown.map((p, i) => (
              <article key={p.id} className="pj-card">
                <ItemTools list={list} id={p.id} />
                <div className="pj-media">
                  {p.video && !c.edit ? (
                    <video className="pj-video" src={p.video} poster={p.image} controls playsInline preload="none" aria-label={p.title} />
                  ) : (
                    <Img k={`projects.${p.id}.img`} d={p.image} alt={p.title} />
                  )}
                  {!p.video && <span className="pj-shade" aria-hidden="true" />}
                  <span className="pj-chip"><Icon k={`projects.${p.id}.icon`} d={p.icon} /><T k={`projects.${p.id}.sector`} d={list.def(p.id).sector} line /></span>
                  <span className="pj-num">{String(i + 1).padStart(2, "0")}</span>
                  {!p.video && (
                    <>
                      <Link to="/services/$slug" params={{ slug: p.slug }} className="pj-zoom" aria-label={`View ${p.title}`}>
                        <i className="fa fa-arrow-right"></i>
                      </Link>
                      <div className="pj-overlay-title">
                        <span><T k={`projects.${p.id}.property`} d={p.property} line /></span>
                        <h3><T k={`projects.${p.id}.title`} d={p.title} /></h3>
                      </div>
                    </>
                  )}
                </div>
                <div className="pj-body">
                  {p.video && <h3 className="pj-video-title"><T k={`projects.${p.id}.title`} d={p.title} /></h3>}
                  <div className="pj-meta">
                    <div><small><T k="projects.propertyLabel" d="Case" line /></small><strong><T k={`projects.${p.id}.property`} d={p.property} line /></strong></div>
                    <div><small><T k="projects.locationLabel" d="Where" line /></small><strong><T k={`projects.${p.id}.location`} d={p.location} line /></strong></div>
                  </div>
                  <Scope id={p.id} items={p.items} />
                  <Link to="/services/$slug" params={{ slug: p.slug }} className="pj-link">
                    <T k="projects.link" d="View Treatment" line /> <i className="fa fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </article>
            ))}
            <AddItem list={list} label="Add case" />
          </div>
        </div>
      </div>
      <CtaBanner k="projects.cta" kicker="Your Tooth Next" title="Want To Save Your Tooth Too?" text="Book a check-up with X-rays and get an honest answer about saving your tooth." button="Book an Appointment" />
    </>
  );
}

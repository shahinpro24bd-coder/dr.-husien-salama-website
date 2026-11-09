import { Link } from "@tanstack/react-router";
import buildingsAsset from "@/assets/hero-2.jpg";
import imgResAsset from "@/assets/ig-case-decay-rescue.jpg";
import imgComAsset from "@/assets/ig-case-broken-file.jpg";
import imgFitAsset from "@/assets/ig-case-front-tooth.jpg";
import imgFmAsset from "@/assets/ig-case-arrested-caries.jpg";
import imgMcAsset from "@/assets/ig-dr-patient.jpg";
import { PageHeader } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/Sections";
import { T, Img, Icon, useList, ItemTools, AddItem } from "@/lib/editable";

const list = [
  { img: imgResAsset, tag: "Toothache · Swelling", icon: "fa-tooth", title: "Patients In Pain", text: "Deep decay and infection treated at the root, so the pain stops and the tooth stays." },
  { img: imgComAsset, tag: "Retreatment · Broken Files", icon: "fa-redo", title: "Failed Root Canals", text: "Old root canals with infection, missed canals, ledges or separated instruments — retreated with care." },
  { img: imgFitAsset, tag: "Front Teeth · Smile", icon: "fa-smile", title: "Front Teeth & Smile", text: "Infected or damaged front teeth treated and restored to look natural again." },
  { img: imgFmAsset, tag: "Honest Advice", icon: "fa-balance-scale", title: "Second Opinions", text: "Not every dark spot needs a filling. Get an honest opinion before any treatment or extraction." },
  { img: imgMcAsset, tag: "Baghdad · Provinces", icon: "fa-map-marker-alt", title: "Patients From All Over Iraq", text: "Visits planned so patients travelling from other provinces finish treatment in as few trips as possible." },
];

export function IndustriesPage() {
  const items = useList("ind", list);
  return (
    <>
      <PageHeader k="industries" title="Who We Treat" crumb="Who We Treat" image={buildingsAsset} />
      <section className="ind-section">
        <span className="ind-grid-bg" aria-hidden="true" />
        <div className="container position-relative">
          <div className="ind-head">
            <div>
              <span className="ind-kicker"><T k="ind.kicker" d="Who We Treat" line /></span>
              <h2 className="ind-title"><T k="ind.title" d="Care For Every" /> <em><T k="ind.titleEm" d="Kind Of Case" line /></em></h2>
            </div>
            <p className="ind-lead"><T k="ind.lead" d="From a simple check-up to the most challenging retreatment, every patient gets the same careful diagnosis and attention to detail." /></p>
          </div>
          <div className="ind-bento">
            {items.ids.map((id, i) => {
              const l = items.def(id);
              return (
                <article key={id} className={`ind-card ind-card--${(i % 5) + 1}`}>
                  <ItemTools list={items} id={id} />
                  <Img k={`ind.${id}.img`} d={l.img} alt={l.title} className="ind-img" />
                  <span className="ind-shade" aria-hidden="true" />
                  <span className="ind-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="ind-body">
                    <span className="ind-icon"><Icon k={`ind.${id}.icon`} d={l.icon} /></span>
                    <span className="ind-tag"><T k={`ind.${id}.tag`} d={l.tag} line /></span>
                    <h3 className="ind-card-title"><T k={`ind.${id}.title`} d={l.title} /></h3>
                    <p className="ind-text"><T k={`ind.${id}.text`} d={l.text} /></p>
                  </div>
                  <span className="ind-corner" aria-hidden="true" />
                </article>
              );
            })}
            <AddItem list={items} label="Add case type" />
            <Link to="/contact" className="ind-card ind-card--cta">
              <span className="ind-kicker"><T k="ind.cta.kicker" d="Not listed?" line /></span>
              <h3 className="ind-card-title"><T k="ind.cta.title" d="Tell us about your tooth" /></h3>
              <span className="ind-cta-btn"><T k="ind.cta.btn" d="Get in touch" line /> <i className="fa fa-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>
      <CtaBanner k="ind.banner" title="Not Sure What You Need?" text="Book a check-up — Dr. Husien will examine your tooth, take X-rays and explain your options honestly." button="Book a Check-Up" />
    </>
  );
}

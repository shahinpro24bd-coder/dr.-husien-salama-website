import { Link } from "@tanstack/react-router";
import amcImgAsset from "@/assets/hero-3.jpg";
import { PageHeader, SectionTitle } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/Sections";
import { T, Icon, useList, ItemTools, AddItem } from "@/lib/editable";
import type { List } from "@/lib/editable";

const plans = [
  { icon: "fa-x-ray", name: "Check-Up & Diagnosis", for: "anyone with pain, sensitivity or who hasn't had a check-up recently.", items: ["Full dental examination", "Dental X-rays", "Checking old fillings and root canals", "Written treatment plan"] },
  { icon: "fa-tooth", name: "Single Tooth Rescue", for: "a painful, infected or broken tooth that needs saving.", items: ["Root canal or retreatment", "Fibre post / build-up if needed", "E.max lab restoration", "Final X-ray and follow-up"] },
  { icon: "fa-teeth", name: "Full Mouth Plan", for: "several teeth needing treatment — planned in as few visits as possible.", items: ["Complete X-ray assessment", "Root canals, retreatments and fillings", "E.max restorations", "Visits planned for patients from other provinces"] },
];

function PlanItems({ i, items }: { i: number; items: string[] }) {
  const list = useList(`amc.plan.${i}.item`, items);
  return (
    <>
      {list.ids.map((id) => (
        <p key={id} className="text-start position-relative"><ItemTools list={list} id={id} /><Icon k="amc.checkIcon" d="fa-check" className="text-primary me-3" /><T k={`amc.plan.${i}.item.${id}`} d={list.def(id)} /></p>
      ))}
      <AddItem list={list} label="Add line" />
    </>
  );
}

function Plans({ list }: { list: List<(typeof plans)[number]> }) {
  return (
    <>
      {list.ids.map((id) => {
        const p = list.def(id);
        return (
          <div key={id} className="col-lg-4" style={{ marginTop: 70 }}>
            <div className="fact-item text-center bg-light h-100 p-5 pt-0 position-relative">
              <ItemTools list={list} id={id} />
              <div className="fact-icon"><Icon k={`amc.plan.${id}.icon`} d={p.icon} className="fa-3x" /></div>
              <h3 className="mb-2"><T k={`amc.plan.${id}.name`} d={p.name} /></h3>
              <p className="text-primary mb-4"><T k={`amc.plan.${id}.for`} d={`Suitable for ${p.for}`} /></p>
              <PlanItems i={id} items={p.items} />
              <Link to="/contact" className="btn btn-primary py-3 px-5 mt-3"><T k={`amc.plan.${id}.btn`} d="Book This Plan" line /></Link>
            </div>
          </div>
        );
      })}
      <AddItem list={list} label="Add package" wrap={(b) => <div className="col-lg-4" style={{ marginTop: 70 }}>{b}</div>} />
    </>
  );
}

export function AmcPage() {
  const list = useList("amc.plan", plans);
  return (
    <>
      <PageHeader k="amc" title="Treatment Plans" crumb="Treatment Plans" image={amcImgAsset} />
      <div className="band py-5">
        <div className="container">
          <SectionTitle k="amc.intro" kicker="Treatment Plans" title="A Clear Plan For Every Smile" />
          <p className="text-center mx-auto mb-5" style={{ maxWidth: 800 }}>
            <T k="amc.intro.text" d="Every mouth is different. After an examination and X-rays, Dr. Husien prepares a plan that explains which teeth need treatment, how many visits it takes and what it costs — before anything starts. Patients from Anbar and other provinces have had five teeth treated in just two visits plus a fitting visit." />
          </p>
          <div className="row g-4 pt-4">
            <Plans list={list} />
          </div>
        </div>
      </div>
      <CtaBanner k="amc.cta" title="Get Your Personal Treatment Plan" text="Book a check-up with X-rays and leave with a clear, honest plan for saving your teeth." button="Book a Check-Up" />
    </>
  );
}

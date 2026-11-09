// Unique content for each treatment detail page (keyed by service slug).
export type ServiceDetail = {
  intro: string;
  stats: { value: string; label: string }[];
  signsTitle: string;
  signs: string[];
  benefits: { icon: string; title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "root-canal": {
    intro: "When decay or a crack reaches the nerve, bacteria infect the inside of the tooth and the bone around the root. A careful root canal removes that infection and seals the tooth — so you keep your own tooth instead of extracting it.",
    stats: [{ value: "X-Ray", label: "before & after" }, { value: "Dam", label: "rubber isolation" }, { value: "1–2", label: "visits usually" }],
    signsTitle: "When You May Need A Root Canal",
    signs: ["Pain that wakes you at night", "Long sensitivity to hot or cold", "Swelling of the gum or face", "Pain when biting", "A darkened tooth", "Infection seen on an X-ray"],
    benefits: [
      { icon: "fa-tooth", title: "Keep Your Tooth", text: "Nothing works better than your own natural tooth." },
      { icon: "fa-heart", title: "Pain Relief", text: "Removing the infection removes the source of the pain." },
      { icon: "fa-shield-alt", title: "Sterile Treatment", text: "Rubber dam and sterile tools keep bacteria out." },
    ],
    faqs: [
      { q: "Does a root canal hurt?", a: "It is done under local anaesthesia. Most patients feel far less pain than they expect — and the toothache goes away." },
      { q: "Why do you use a rubber dam?", a: "It isolates the tooth from saliva and bacteria during treatment, which is essential for a root canal to succeed." },
      { q: "Will I need a crown or E.max after?", a: "Back teeth often need a strong restoration like E.max to protect them. Dr. Husien will advise what your tooth needs." },
    ],
  },
  retreatment: {
    intro: "Sometimes an old root canal fails — canals were missed, the filling did not reach the end, or an instrument broke inside. Before retreating, we find the reason for the failure, then re-clean and re-seal the canals so the tooth can heal.",
    stats: [{ value: "Cause", label: "found first" }, { value: "Files", label: "bypassed safely" }, { value: "Root", label: "infection healed" }],
    signsTitle: "Signs An Old Root Canal Has Failed",
    signs: ["Pain in a tooth that was already treated", "Swelling or a pimple on the gum", "Dark area at the root tip on X-ray", "Short or poorly sealed old filling", "A broken instrument inside the canal", "Bad taste or discharge"],
    benefits: [
      { icon: "fa-search", title: "Treat the Cause", text: "We fix why it failed, not just the symptom." },
      { icon: "fa-tools", title: "Difficult Cases", text: "Curved canals, ledges and broken files handled step by step." },
      { icon: "fa-tooth", title: "Second Chance", text: "A failed tooth can often be saved instead of extracted." },
    ],
    faqs: [
      { q: "Can a tooth with a broken file inside be saved?", a: "Often, yes. In many cases the instrument can be bypassed or removed and the canal cleaned and sealed properly." },
      { q: "Is retreatment better than extraction?", a: "When the tooth is restorable, keeping it is usually the best option. An X-ray assessment will show whether retreatment makes sense." },
      { q: "How long does retreatment take?", a: "It depends on the difficulty. Many cases need one or two visits; complex ones may need more." },
    ],
  },
  "emax-restorations": {
    intro: "After a root canal or a large cavity, a tooth needs strong protection. E.max is a lithium-disilicate ceramic made in the dental lab — very strong, tooth-coloured and natural-looking — used for inlays, onlays and crowns.",
    stats: [{ value: "Lab", label: "made restoration" }, { value: "Natural", label: "colour & shine" }, { value: "Strong", label: "ceramic" }],
    signsTitle: "When E.max Is The Right Choice",
    signs: ["After a root canal on a back tooth", "Large old fillings that keep breaking", "A cracked or weakened tooth", "Dark or stained old restorations", "Wanting a natural-looking result", "Rebuilding several teeth"],
    benefits: [
      { icon: "fa-gem", title: "Beautiful", text: "Looks and shines like a natural tooth." },
      { icon: "fa-shield-alt", title: "Protective", text: "Holds weakened teeth together for the long term." },
      { icon: "fa-check-circle", title: "Precise Fit", text: "Made in the lab for an accurate, sealed fit." },
    ],
    faqs: [
      { q: "How many visits does E.max need?", a: "Usually a preparation visit and a fitting visit once the lab has made the restoration." },
      { q: "Is E.max strong enough for back teeth?", a: "Yes, E.max is a strong ceramic widely used for back teeth inlays, onlays and crowns." },
      { q: "Can E.max replace my old dark filling?", a: "Yes. Old fillings can be replaced with E.max for a natural, tooth-coloured result." },
    ],
  },
  "tooth-rescue": {
    intro: "Many patients are told their tooth must be extracted. Often, a badly broken or decayed tooth can still be saved — with root treatment, a fibre post, deep margin elevation and a lab restoration. Rescuing teeth is Dr. Husien's mission.",
    stats: [{ value: "Fibre", label: "post & core" }, { value: "DME", label: "deep margins" }, { value: "Saved", label: "from extraction" }],
    signsTitle: "Teeth That Can Often Be Saved",
    signs: ["A tooth broken down to the gum", "Decay under an old filling", "A tooth you were told to extract", "Cavities going below the gum line", "A front tooth that broke", "Weak walls after a root canal"],
    benefits: [
      { icon: "fa-tooth", title: "Natural Tooth Kept", text: "Your own root stays in the bone." },
      { icon: "fa-first-aid", title: "Modern Techniques", text: "Fibre posts, band modification and margin elevation." },
      { icon: "fa-balance-scale", title: "Honest Assessment", text: "We tell you clearly when a tooth can — or cannot — be saved." },
    ],
    faqs: [
      { q: "My dentist said extract — can you check?", a: "Yes. Book a check-up with X-rays and Dr. Husien will tell you honestly whether the tooth can be saved." },
      { q: "What is deep margin elevation?", a: "A technique that raises a cavity edge that sits deep under the gum, so the tooth can be sealed and restored properly." },
      { q: "What is a fibre post?", a: "A tooth-coloured post placed in a root-treated tooth to help hold the rebuilt tooth in place." },
    ],
  },
  fillings: {
    intro: "A good filling is more than filling a hole — it starts with the right diagnosis. Some dark spots are arrested (stopped) decay that is best left alone; others need careful cleaning and a natural tooth-coloured composite filling.",
    stats: [{ value: "White", label: "composite" }, { value: "Minimal", label: "intervention" }, { value: "Natural", label: "finish" }],
    signsTitle: "When You May Need A Filling",
    signs: ["A hole or dark spot on a tooth", "Food getting stuck between teeth", "Short sensitivity to sweets or cold", "An old filling that is cracked or leaking", "Rough edges felt with the tongue", "Decay seen on an X-ray"],
    benefits: [
      { icon: "fa-smile", title: "Invisible Repair", text: "Tooth-coloured material blends with your teeth." },
      { icon: "fa-tooth", title: "Save Tooth Structure", text: "We remove only what must be removed." },
      { icon: "fa-balance-scale", title: "No Unnecessary Drilling", text: "Arrested decay is monitored, not drilled." },
    ],
    faqs: [
      { q: "Does every cavity need a filling?", a: "No. Arrested caries — decay that has stopped — often only needs monitoring. The right treatment is not always a filling." },
      { q: "Can you replace my old silver fillings?", a: "Yes, old or failing fillings can be replaced with tooth-coloured composite or E.max." },
      { q: "How long does a filling take?", a: "Most fillings are done in a single visit." },
    ],
  },
  diagnosis: {
    intro: "The outside of a tooth can look healthy while infection hides at the roots. That is why every treatment starts with an examination and dental X-rays — so you get the correct diagnosis and a clear, honest plan.",
    stats: [{ value: "Full", label: "examination" }, { value: "Digital", label: "X-rays" }, { value: "Clear", label: "written plan" }],
    signsTitle: "Book A Check-Up If You Notice",
    signs: ["Pain or sensitivity in any tooth", "Bleeding or swollen gums", "Old treatment you are unsure about", "Bad breath or bad taste", "No check-up in the last year", "Before starting any big treatment"],
    benefits: [
      { icon: "fa-x-ray", title: "See the Truth", text: "X-rays show infection and decay the eye cannot." },
      { icon: "fa-clipboard-list", title: "Clear Plan", text: "Know the options, visits and cost before starting." },
      { icon: "fa-calendar-check", title: "Catch It Early", text: "Treating early saves teeth, time and money." },
    ],
    faqs: [
      { q: "Why do I need an X-ray?", a: "Many problems — infection at the root, decay between teeth, failed old root canals — only show on X-rays." },
      { q: "How often should I have a check-up?", a: "Generally once or twice a year, or sooner if you feel pain or notice a problem." },
      { q: "Will I get a treatment plan?", a: "Yes. After the examination you will receive a clear plan explaining what each tooth needs." },
    ],
  },
};

/** Detail content for a treatment; treatments added from the admin panel get a generic starting text. */
export function getServiceDetail(slug: string, title: string): ServiceDetail {
  return serviceDetails[slug] ?? {
    intro: `Tell your patients more about ${title}: what it is, who it is for and why they should choose Dr. Husien Salama.`,
    stats: [{ value: "X-Ray", label: "diagnosis first" }, { value: "Sterile", label: "treatment" }, { value: "Clear", label: "plan & cost" }],
    signsTitle: `When You Need ${title}`,
    signs: ["Describe a common problem here", "Add another sign patients notice", "Add one more reason to book"],
    benefits: [
      { icon: "fa-check-circle", title: "Careful Work", text: "Describe a benefit of this treatment." },
      { icon: "fa-clock", title: "Planned Visits", text: "Describe another benefit." },
      { icon: "fa-shield-alt", title: "Peace of Mind", text: "Describe one more benefit." },
    ],
    faqs: [{ q: `What does ${title} include?`, a: "Write the answer here." }],
  };
}

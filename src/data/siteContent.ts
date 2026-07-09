export type Language = "de" | "en";

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

const englishContent = {
  meta: {
    title: "Deeproot | Websites, systems and automation for growing businesses",
    description:
      "Deeproot builds websites, business systems, automation tools, CRM/ERP solutions and AI-powered tools that help companies work smarter."
  },
  brand: {
    name: "Deeproot",
    sidebarLabel: "YOUR PARTNER FOR GROWTH",
    sidebarHighlight: "DIGITAL FOUNDATIONS",
    sidebarText: "Websites, systems and smart tools that make daily work easier."
  },
  navigation: [
    "Overview",
    "Websites & Systems",
    "CRM / ERP",
    "Automation",
    "AI Tools",
    "Support & Security",
    "Projects",
    "About Deeproot",
    "Contact"
  ],
  hero: {
    crumb: "Overview",
    headline: "Websites and systems that make your business work smarter.",
    eyebrow: "Websites. Automation. Business tools.",
    text:
      "Deeproot builds the digital foundation your company needs: modern websites, internal systems, CRM tools and automation that save time, reduce chaos and help your business grow.",
    benefit: "Clear solutions for real business problems.",
    primaryCta: "Discuss a project",
    secondaryCta: "Get a consultation"
  },
  heroCards: [
    { title: "Business websites", text: "A modern online presence that explains your value and turns visitors into enquiries." },
    { title: "CRM / ERP systems", text: "One clear place to manage clients, work, offers, orders and daily processes." },
    { title: "Business automation", text: "Less manual work, fewer mistakes and more time for the work that matters." },
    { title: "AI tools for business", text: "Smart tools that help your team work faster without making things complicated." }
  ],
  servicesIntro: {
    eyebrow: "What we build",
    title: "Digital tools that solve everyday business problems.",
    text: "You do not need technical language to start. Tell us what slows your business down, and we turn it into a clear digital solution."
  },
  labels: {
    home: "Home",
    problem: "Problem",
    solution: "Solution",
    result: "Result",
    editHint: "Built for daily business work",
    notFoundTitle: "Page not found",
    notFoundText: "This Deeproot route does not exist.",
    backHome: "Back to overview"
  },
  services: [
    {
      title: "Websites for business",
      text: "We build fast, clear and premium websites that explain what you do and make it easier for customers to contact you.",
      benefit: "Better online presence and more trust from first contact."
    },
    {
      title: "Web applications",
      text: "We create browser-based tools for bookings, client portals, dashboards, workflows and custom business processes.",
      benefit: "Your team gets one place to work instead of many disconnected files."
    },
    {
      title: "CRM / ERP systems",
      text: "We build systems that help you manage clients, orders, tasks, offers, invoices and internal operations.",
      benefit: "Less chaos, clearer responsibilities and better client management."
    },
    {
      title: "Business automation",
      text: "We automate repeated manual work such as reports, notifications, data entry and process tracking.",
      benefit: "Save time and reduce mistakes in daily operations."
    },
    {
      title: "UI/UX design",
      text: "We design interfaces that are simple to understand, pleasant to use and focused on the user’s next step.",
      benefit: "Customers and employees can use your tools without confusion."
    },
    {
      title: "AI tools for business",
      text: "We create practical AI features for support, documents, search, planning and internal assistance.",
      benefit: "Use AI where it helps your team, without adding complexity."
    },
    {
      title: "Technical support",
      text: "We keep websites and systems stable, updated and ready for the next stage of your business.",
      benefit: "You have a technical partner after launch, not just a finished file."
    },
    {
      title: "Custom internal tools",
      text: "We build tools around the way your company actually works, from logistics dashboards to service workflows.",
      benefit: "Your software supports your process instead of forcing a generic one."
    }
  ],
  about: {
    crumb: "About Deeproot",
    title: "We build from the root of your business.",
    text: "Deeproot does not just create beautiful pages. We first understand your business, your process and the problems that cost time every day.",
    secondText: "Then we design and build a digital solution that is clear, reliable and ready to grow with your company."
  },
  process: {
    eyebrow: "How we work",
    title: "A clear process from idea to launch.",
    steps: [
      { title: "We understand your business", text: "We look at your goals, customers, daily work and current problems before suggesting a solution." },
      { title: "We plan the right solution", text: "You get a clear plan, realistic scope and a simple explanation of what will be built." },
      { title: "We design a clear user experience", text: "We create screens and flows that make the product easy for customers, employees or managers to use." },
      { title: "We build and test", text: "We develop the solution, test it carefully and keep you informed without hiding behind technical language." },
      { title: "We launch and support", text: "After launch, we help you improve, maintain and extend the system as your business grows." }
    ]
  },
  technologies: {
    eyebrow: "Technology without confusion",
    title: "Modern tools, explained in simple language.",
    text:
      "We use modern technologies, but the result matters more than the code. You do not need to understand frameworks, servers or databases. We take care of the technical side and explain decisions clearly.",
    items: ["Fast websites", "Secure systems", "Clean databases", "Cloud hosting", "Automation flows", "AI integrations"]
  },
  casesIntro: {
    crumb: "Projects",
    title: "Projects that show the business problem, the solution and the result.",
    text: "These examples show the kind of practical work Deeproot builds for service companies, logistics teams, shops and growing businesses."
  },
  cases: [
    {
      title: "Business website for a service company",
      problem: "The company looked outdated online and received too few qualified enquiries.",
      solution: "We created a clear premium website with service pages, strong calls to action and simple contact paths.",
      result: "Customers understood the offer faster and the company gained a stronger first impression."
    },
    {
      title: "CRM system for managing clients",
      problem: "Client information was spread across spreadsheets, emails and personal notes.",
      solution: "We built a simple CRM to track clients, offers, tasks, follow-ups and communication history.",
      result: "The team found information faster and handled client work with fewer missed steps."
    },
    {
      title: "Automation tool for daily work",
      problem: "Employees repeated the same admin tasks every day and lost hours on manual updates.",
      solution: "We automated reports, reminders and status updates around the existing workflow.",
      result: "The business reduced repetitive work and made daily operations easier to control."
    },
    {
      title: "Internal dashboard for business control",
      problem: "Managers had no clear overview of orders, workload and key business numbers.",
      solution: "We built a dashboard that connects important data and shows it in one simple view.",
      result: "The team made faster decisions with less guesswork and fewer status meetings."
    }
  ],
  why: {
    eyebrow: "Why Deeproot",
    title: "A technical partner who speaks business.",
    items: [
      "We explain technical things simply.",
      "We build clean solutions that can grow later.",
      "We care about design, usability and trust.",
      "We focus on business results, not just features.",
      "We support clients after launch.",
      "We turn messy processes into clear digital tools."
    ]
  },
  servicePages: {
    "software-development": {
      crumb: "Websites & Systems",
      title: "Websites & Systems",
      eyebrow: "Build once. Grow with it.",
      text: "We build modern websites and web systems that help your business look professional, handle work faster and give customers a better experience.",
      icons: ["Websites", "Customer portals", "Booking tools", "Internal systems"]
    },
    "system-integration": {
      crumb: "CRM / ERP",
      title: "CRM / ERP Systems",
      eyebrow: "One place for your business data.",
      text: "We connect clients, tasks, offers, orders and internal workflows in one clear system, so your team works with less confusion.",
      icons: ["Client management", "Orders", "Workflows", "Data sync"]
    },
    "cloud-solutions": {
      crumb: "Automation",
      title: "Business Automation",
      eyebrow: "Less manual work. More control.",
      text: "We automate repeated work such as reports, reminders, status updates and data movement, so your team saves time every week.",
      icons: ["Reports", "Notifications", "Workflows", "Cost control"]
    },
    "ai-data-engineering": {
      crumb: "AI Tools",
      title: "AI Tools for Business",
      eyebrow: "Practical AI that helps your team.",
      text: "We create AI-powered tools for documents, support, search, planning and internal assistance, with a focus on real usefulness.",
      icons: ["AI assistants", "Smart search", "Documents", "Automation"]
    },
    "cybersecurity-protection": {
      crumb: "Support & Security",
      title: "Support & Security",
      eyebrow: "Keep your systems stable and safe.",
      text: "We help maintain, monitor and protect your website or business system, so your digital foundation stays reliable after launch.",
      icons: ["Monitoring", "Updates", "Backups", "Protection"]
    }
  },
  contact: {
    crumb: "Contact",
    title: "Tell us what slows your business down.",
    text: "Share your idea, process problem or current website challenge. We will help you understand what can be improved and what a useful digital solution could look like.",
    button: "Contact Deeproot",
    fields: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "name@company.com",
      company: "Company",
      companyPlaceholder: "Company name",
      message: "Message",
      messagePlaceholder: "Tell us what you want to improve."
    },
    form: {
      sending: "Sending…",
      submitAgain: "Send another message",
      successTitle: "Message sent",
      successText: "Thank you! We have received your message and will get back to you shortly.",
      errorTitle: "Sending failed",
      errorText: "Something went wrong. Please try again or email us at info@deeproot.one.",
      required: "Please fill in this field.",
      invalidEmail: "Please enter a valid email address.",
      privacyNotice: "By submitting this form you agree that we may process your details to answer your enquiry.",
      privacyLink: "Privacy Policy"
    },
    cards: [
      ["Location", "Hamburg, Germany"],
      ["Email", "contact@deeproot.de"],
      ["Services", "Websites, systems, automation, AI"],
      ["Start", "Begin with a clear consultation"]
    ]
  },
  cta: {
    title: "Have an idea? Let’s turn it into a working digital solution.",
    text: "Tell us what you want to improve. We will help you find the simplest useful next step.",
    primary: "Discuss a project",
    secondary: "Start with an idea"
  },
  footer: {
    text: "Deeproot builds digital foundations for companies that want clearer processes, better websites and smarter tools.",
    links: ["Websites", "CRM / ERP", "Automation", "AI Tools", "Support"]
  },
  alternatives: {
    heroHeadlines: [
      "From website to automation — we build the digital foundation for your business.",
      "We build digital tools that save time and help your business grow.",
      "Your website, systems and workflows — built to work together."
    ],
    ctaTexts: [
      "Tell us what slows your business down — we’ll help you fix it with technology.",
      "Let’s build the digital foundation your business needs.",
      "Start with one idea. We’ll help turn it into a useful system."
    ]
  }
} as const;

export type SiteContent = Widen<typeof englishContent>;

const germanContent: SiteContent = {
  meta: {
    title: "Deeproot | Websites, Systeme und Automatisierung für wachsende Unternehmen",
    description:
      "Deeproot entwickelt Websites, Geschäftssysteme, Automatisierung, CRM/ERP-Lösungen und KI-gestützte Tools, die Unternehmen einfacher und smarter arbeiten lassen."
  },
  brand: {
    name: "Deeproot",
    sidebarLabel: "IHR PARTNER FÜR WACHSTUM",
    sidebarHighlight: "DIGITALE GRUNDLAGEN",
    sidebarText: "Websites, Systeme und smarte Tools, die den Arbeitsalltag einfacher machen."
  },
  navigation: [
    "Übersicht",
    "Websites & Systeme",
    "CRM / ERP",
    "Automatisierung",
    "KI-Tools",
    "Support & Sicherheit",
    "Projekte",
    "Über Deeproot",
    "Kontakt"
  ],
  hero: {
    crumb: "Übersicht",
    headline: "Websites und Systeme, die Ihr Unternehmen smarter arbeiten lassen.",
    eyebrow: "Websites. Automatisierung. Business-Tools.",
    text:
      "Deeproot baut die digitale Grundlage, die Ihr Unternehmen braucht: moderne Websites, interne Systeme, CRM-Tools und Automatisierungen, die Zeit sparen, Chaos reduzieren und Wachstum erleichtern.",
    benefit: "Klare Lösungen für echte Geschäftsprobleme.",
    primaryCta: "Projekt besprechen",
    secondaryCta: "Beratung erhalten"
  },
  heroCards: [
    { title: "Websites für Unternehmen", text: "Ein moderner Online-Auftritt, der Ihren Wert klar erklärt und Anfragen erleichtert." },
    { title: "CRM / ERP-Systeme", text: "Ein zentraler Ort für Kunden, Aufgaben, Angebote, Aufträge und tägliche Abläufe." },
    { title: "Automatisierung", text: "Weniger Handarbeit, weniger Fehler und mehr Zeit für wichtige Arbeit." },
    { title: "KI-Tools für Unternehmen", text: "Smarte Werkzeuge, die Ihr Team schneller machen, ohne alles komplizierter zu machen." }
  ],
  servicesIntro: {
    eyebrow: "Was wir bauen",
    title: "Digitale Werkzeuge, die alltägliche Geschäftsprobleme lösen.",
    text: "Sie müssen keine technischen Begriffe kennen. Sagen Sie uns, was Ihr Unternehmen bremst, und wir machen daraus eine klare digitale Lösung."
  },
  labels: {
    home: "Home",
    problem: "Problem",
    solution: "Lösung",
    result: "Ergebnis",
    editHint: "Gebaut für den Geschäftsalltag",
    notFoundTitle: "Seite nicht gefunden",
    notFoundText: "Diese Deeproot-Seite existiert nicht.",
    backHome: "Zur Übersicht"
  },
  services: [
    {
      title: "Websites für Unternehmen",
      text: "Wir bauen schnelle, klare und hochwertige Websites, die Ihr Angebot verständlich zeigen und Kunden leichter Kontakt aufnehmen lassen.",
      benefit: "Mehr Vertrauen und ein besserer erster Eindruck."
    },
    {
      title: "Webanwendungen",
      text: "Wir entwickeln browserbasierte Tools für Buchungen, Kundenportale, Dashboards, Workflows und individuelle Abläufe.",
      benefit: "Ihr Team arbeitet an einem Ort statt in vielen getrennten Dateien."
    },
    {
      title: "CRM / ERP-Systeme",
      text: "Wir bauen Systeme für Kunden, Aufträge, Aufgaben, Angebote, Rechnungen und interne Prozesse.",
      benefit: "Weniger Chaos, klare Zuständigkeiten und bessere Kundenbetreuung."
    },
    {
      title: "Automatisierung",
      text: "Wir automatisieren wiederkehrende Arbeit wie Reports, Erinnerungen, Dateneingaben und Status-Updates.",
      benefit: "Sie sparen Zeit und reduzieren Fehler im Tagesgeschäft."
    },
    {
      title: "UI/UX Design",
      text: "Wir gestalten Oberflächen, die einfach zu verstehen sind und Nutzer klar zum nächsten Schritt führen.",
      benefit: "Kunden und Mitarbeitende können Ihre Tools ohne Verwirrung nutzen."
    },
    {
      title: "KI-Tools für Unternehmen",
      text: "Wir entwickeln praktische KI-Funktionen für Support, Dokumente, Suche, Planung und interne Assistenz.",
      benefit: "KI hilft dort, wo sie wirklich Arbeit erleichtert."
    },
    {
      title: "Technischer Support",
      text: "Wir halten Websites und Systeme stabil, aktuell und bereit für die nächste Wachstumsphase.",
      benefit: "Sie haben auch nach dem Launch einen technischen Partner."
    },
    {
      title: "Interne Tools",
      text: "Wir bauen Werkzeuge passend zu Ihrem echten Arbeitsablauf, vom Logistik-Dashboard bis zum Service-Workflow.",
      benefit: "Ihre Software passt sich Ihrem Prozess an, nicht umgekehrt."
    }
  ],
  about: {
    crumb: "Über Deeproot",
    title: "Wir bauen von der Wurzel Ihres Unternehmens aus.",
    text: "Deeproot erstellt nicht nur schöne Seiten. Wir verstehen zuerst Ihr Geschäft, Ihre Prozesse und die Probleme, die täglich Zeit kosten.",
    secondText: "Danach gestalten und entwickeln wir eine digitale Lösung, die klar, zuverlässig und mit Ihrem Unternehmen skalierbar ist."
  },
  process: {
    eyebrow: "So arbeiten wir",
    title: "Ein klarer Prozess von der Idee bis zum Launch.",
    steps: [
      { title: "Wir verstehen Ihr Unternehmen", text: "Wir betrachten Ziele, Kunden, Tagesabläufe und aktuelle Probleme, bevor wir eine Lösung vorschlagen." },
      { title: "Wir planen die richtige Lösung", text: "Sie erhalten einen klaren Plan, einen realistischen Umfang und eine einfache Erklärung, was gebaut wird." },
      { title: "Wir gestalten eine klare Nutzererfahrung", text: "Wir erstellen Screens und Abläufe, die für Kunden, Mitarbeitende oder Manager leicht nutzbar sind." },
      { title: "Wir bauen und testen", text: "Wir entwickeln die Lösung, testen sorgfältig und erklären den Fortschritt ohne technische Nebelwand." },
      { title: "Wir launchen und unterstützen", text: "Nach dem Launch helfen wir bei Wartung, Verbesserung und Erweiterung, wenn Ihr Unternehmen wächst." }
    ]
  },
  technologies: {
    eyebrow: "Technologie ohne Verwirrung",
    title: "Moderne Tools, einfach erklärt.",
    text:
      "Wir nutzen moderne Technologien, aber das Ergebnis ist wichtiger als der Code. Sie müssen keine Frameworks, Server oder Datenbanken verstehen. Wir kümmern uns um die technische Seite und erklären Entscheidungen verständlich.",
    items: ["Schnelle Websites", "Sichere Systeme", "Klare Datenbanken", "Cloud Hosting", "Automatisierte Abläufe", "KI-Integrationen"]
  },
  casesIntro: {
    crumb: "Projekte",
    title: "Projekte, die Problem, Lösung und Ergebnis klar zeigen.",
    text: "Diese Beispiele zeigen, welche praktischen Lösungen Deeproot für Dienstleister, Logistikteams, Shops und wachsende Unternehmen baut."
  },
  cases: [
    {
      title: "Unternehmenswebsite für einen Dienstleister",
      problem: "Der Online-Auftritt wirkte veraltet und brachte zu wenige passende Anfragen.",
      solution: "Wir entwickelten eine klare Premium-Website mit Service-Seiten, starken Handlungsaufforderungen und einfachen Kontaktwegen.",
      result: "Kunden verstanden das Angebot schneller und das Unternehmen gewann einen stärkeren ersten Eindruck."
    },
    {
      title: "CRM-System für Kundenmanagement",
      problem: "Kundendaten lagen verteilt in Tabellen, E-Mails und persönlichen Notizen.",
      solution: "Wir bauten ein einfaches CRM für Kunden, Angebote, Aufgaben, Follow-ups und Kommunikationshistorie.",
      result: "Das Team fand Informationen schneller und bearbeitete Kundenanfragen mit weniger verpassten Schritten."
    },
    {
      title: "Automatisierung für tägliche Arbeit",
      problem: "Mitarbeitende wiederholten täglich dieselben Admin-Aufgaben und verloren Stunden durch manuelle Updates.",
      solution: "Wir automatisierten Reports, Erinnerungen und Status-Updates rund um den bestehenden Workflow.",
      result: "Das Unternehmen reduzierte Wiederholungsarbeit und konnte tägliche Abläufe leichter steuern."
    },
    {
      title: "Internes Dashboard für Unternehmenssteuerung",
      problem: "Manager hatten keinen klaren Überblick über Aufträge, Auslastung und wichtige Kennzahlen.",
      solution: "Wir bauten ein Dashboard, das wichtige Daten verbindet und einfach sichtbar macht.",
      result: "Das Team traf Entscheidungen schneller, mit weniger Rätselraten und weniger Statusmeetings."
    }
  ],
  why: {
    eyebrow: "Warum Deeproot",
    title: "Ein technischer Partner, der Business versteht.",
    items: [
      "Wir erklären technische Themen einfach.",
      "Wir bauen saubere Lösungen, die später wachsen können.",
      "Wir achten auf Design, Nutzbarkeit und Vertrauen.",
      "Wir denken in Geschäftsergebnissen, nicht nur in Funktionen.",
      "Wir unterstützen Kunden auch nach dem Launch.",
      "Wir machen aus unklaren Prozessen klare digitale Werkzeuge."
    ]
  },
  servicePages: {
    "software-development": {
      crumb: "Websites & Systeme",
      title: "Websites & Systeme",
      eyebrow: "Einmal sauber bauen. Danach wachsen.",
      text: "Wir bauen moderne Websites und Websysteme, die Ihr Unternehmen professionell zeigen, Arbeit schneller machen und Kunden eine bessere Erfahrung geben.",
      icons: ["Websites", "Kundenportale", "Buchungstools", "Interne Systeme"]
    },
    "system-integration": {
      crumb: "CRM / ERP",
      title: "CRM / ERP-Systeme",
      eyebrow: "Ein Ort für Ihre Geschäftsdaten.",
      text: "Wir verbinden Kunden, Aufgaben, Angebote, Aufträge und interne Abläufe in einem klaren System, damit Ihr Team mit weniger Verwirrung arbeitet.",
      icons: ["Kundenmanagement", "Aufträge", "Workflows", "Datensync"]
    },
    "cloud-solutions": {
      crumb: "Automatisierung",
      title: "Business-Automatisierung",
      eyebrow: "Weniger Handarbeit. Mehr Kontrolle.",
      text: "Wir automatisieren wiederkehrende Arbeit wie Reports, Erinnerungen, Status-Updates und Datenbewegung, damit Ihr Team jede Woche Zeit spart.",
      icons: ["Reports", "Benachrichtigungen", "Workflows", "Kostenkontrolle"]
    },
    "ai-data-engineering": {
      crumb: "KI-Tools",
      title: "KI-Tools für Unternehmen",
      eyebrow: "Praktische KI, die Ihrem Team hilft.",
      text: "Wir entwickeln KI-gestützte Tools für Dokumente, Support, Suche, Planung und interne Assistenz, immer mit Fokus auf echten Nutzen.",
      icons: ["KI-Assistenten", "Smarte Suche", "Dokumente", "Automatisierung"]
    },
    "cybersecurity-protection": {
      crumb: "Support & Sicherheit",
      title: "Support & Sicherheit",
      eyebrow: "Systeme stabil und sicher halten.",
      text: "Wir helfen bei Wartung, Monitoring und Schutz Ihrer Website oder Ihres Geschäftssystems, damit Ihre digitale Grundlage zuverlässig bleibt.",
      icons: ["Monitoring", "Updates", "Backups", "Schutz"]
    }
  },
  contact: {
    crumb: "Kontakt",
    title: "Sagen Sie uns, was Ihr Unternehmen bremst.",
    text: "Teilen Sie Ihre Idee, Ihr Prozessproblem oder die aktuelle Website-Herausforderung. Wir helfen Ihnen zu verstehen, was verbessert werden kann und wie eine sinnvolle digitale Lösung aussehen könnte.",
    button: "Deeproot kontaktieren",
    fields: {
      name: "Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      emailPlaceholder: "name@unternehmen.de",
      company: "Unternehmen",
      companyPlaceholder: "Unternehmensname",
      message: "Nachricht",
      messagePlaceholder: "Sagen Sie uns, was Sie verbessern möchten."
    },
    form: {
      sending: "Wird gesendet…",
      submitAgain: "Weitere Nachricht senden",
      successTitle: "Nachricht gesendet",
      successText: "Vielen Dank! Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.",
      errorTitle: "Senden fehlgeschlagen",
      errorText: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie an info@deeproot.one.",
      required: "Bitte füllen Sie dieses Feld aus.",
      invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      privacyNotice: "Mit dem Absenden dieses Formulars stimmen Sie zu, dass wir Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeiten dürfen.",
      privacyLink: "Datenschutzerklärung"
    },
    cards: [
      ["Standort", "Hamburg, Deutschland"],
      ["E-Mail", "info@deeproot.one"],
      ["Leistungen", "Websites, Systeme, Automatisierung, KI"],
      ["Start", "Beginnen Sie mit einer klaren Beratung"]
    ]
  },
  cta: {
    title: "Haben Sie eine Idee? Wir machen daraus eine funktionierende digitale Lösung.",
    text: "Sagen Sie uns, was Sie verbessern möchten. Wir helfen Ihnen, den einfachsten sinnvollen nächsten Schritt zu finden.",
    primary: "Projekt besprechen",
    secondary: "Mit einer Idee starten"
  },
  footer: {
    text: "Deeproot baut digitale Grundlagen für Unternehmen, die klarere Prozesse, bessere Websites und smartere Tools wollen.",
    links: ["Websites", "CRM / ERP", "Automatisierung", "KI-Tools", "Support"]
  },
  alternatives: {
    heroHeadlines: [
      "Von der Website bis zur Automatisierung: Wir bauen die digitale Grundlage für Ihr Unternehmen.",
      "Wir entwickeln digitale Tools, die Zeit sparen und Ihr Unternehmen wachsen lassen.",
      "Ihre Website, Systeme und Abläufe: so gebaut, dass alles zusammenarbeitet."
    ],
    ctaTexts: [
      "Sagen Sie uns, was Ihr Unternehmen bremst. Wir helfen, es mit Technologie zu lösen.",
      "Lassen Sie uns die digitale Grundlage bauen, die Ihr Unternehmen braucht.",
      "Starten Sie mit einer Idee. Wir machen daraus ein nützliches System."
    ]
  }
} as const;

export const localizedSiteContent = {
  de: germanContent,
  en: englishContent
} satisfies Record<Language, SiteContent>;

export const siteContent = germanContent;

import type { Language } from "@/src/data/siteContent";

export type LegalSlug = "impressum" | "datenschutz";

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalPage = {
  crumb: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export const legalContent: Record<Language, Record<LegalSlug, LegalPage>> = {
  de: {
    impressum: {
      crumb: "Impressum",
      title: "Impressum",
      intro: "Angaben gemäß § 5 DDG.",
      sections: [
        {
          heading: "Anbieter",
          paragraphs: [
            "DeepRoot",
            "Luhering 4e",
            "21147 Hamburg",
            "Deutschland"
          ]
        },
        {
          heading: "Vertreten durch",
          paragraphs: ["Geschäftsführer: Pavel Kinsfator"]
        },
        {
          heading: "Kontakt",
          paragraphs: ["Telefon: +49 (170) 1102651", "E-Mail: info@deeproot.one"]
        },
        {
          heading: "Umsatzsteuer-ID",
          paragraphs: ["Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: DE459122467"]
        },
        {
          heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
          paragraphs: ["Pavel Kinsfator, Lugering 4e, 21147 Hamburg"]
        },
        {
          heading: "Haftung für Inhalte",
          paragraphs: [
            "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
          ]
        },
        {
          heading: "Haftung für Links",
          paragraphs: [
            "Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."
          ]
        },
        {
          heading: "Urheberrecht",
          paragraphs: [
            "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."
          ]
        }
      ]
    },
    datenschutz: {
      crumb: "Datenschutz",
      title: "Datenschutzerklärung",
      intro:
        "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich sowie entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) und dieser Datenschutzerklärung.",
      sections: [
        {
          heading: "1. Verantwortlicher",
          paragraphs: [
            "Verantwortlich für die Datenverarbeitung auf dieser Website ist: DeepRoot, Luhering 4e, 21147 Hamburg, E-Mail: info@deeproot.one"
          ]
        },
        {
          heading: "2. Hosting und Server-Logfiles",
          paragraphs: [
            "Beim Aufruf dieser Website erhebt der Hosting-Anbieter automatisch Informationen in sogenannten Server-Logfiles (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und Betriebssystem). Diese Daten dienen der Sicherstellung eines störungsfreien Betriebs und der Verbesserung unseres Angebots. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)."
          ]
        },
        {
          heading: "3. Cookies",
          paragraphs: [
            "Diese Website verwendet notwendige Cookies, die für den technischen Betrieb erforderlich sind. Darüber hinaus setzen wir Statistik- und Marketing-Cookies nur ein, wenn Sie über unser Cookie-Banner eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO).",
            "Ihre Auswahl wird lokal in Ihrem Browser gespeichert. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookies Ihres Browsers löschen – das Banner erscheint dann erneut."
          ]
        },
        {
          heading: "4. Kontaktformular",
          paragraphs: [
            "Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO."
          ]
        },
        {
          heading: "5. Ihre Rechte",
          paragraphs: [
            "Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).",
            "Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu, in Hamburg: Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit."
          ]
        },
        {
          heading: "6. Speicherdauer",
          paragraphs: [
            "Personenbezogene Daten werden nur so lange gespeichert, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen."
          ]
        },
        {
          heading: "7. Änderungen dieser Datenschutzerklärung",
          paragraphs: [
            "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen."
          ]
        }
      ]
    }
  },
  en: {
    impressum: {
      crumb: "Legal Notice",
      title: "Legal Notice",
      intro: "Information in accordance with Section 5 of the German Telemedia Act (DDG).",
      sections: [
        {
          heading: "Provider",
          paragraphs: ["DeepRoot", "Luhering 4e", "21147 Hamburg", "Germany"]
        },
        {
          heading: "Represented by",
          paragraphs: ["Managing Director: Pavel Kinsfator"]
        },
        {
          heading: "Contact",
          paragraphs: ["Phone: +49 (170) 1102651", "Email: info@deeproot.one"]
        },
        {
          heading: "VAT ID",
          paragraphs: ["VAT identification number in accordance with Section 27 a of the German VAT Act: DE459122457"]
        },
        {
          heading: "Responsible for content",
          paragraphs: ["Pavel Kinsfator, Luhering 4e, 21147 Hamburg"]
        },
        {
          heading: "Liability for content",
          paragraphs: [
            "As a service provider we are responsible for our own content on these pages in accordance with general law. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity."
          ]
        },
        {
          heading: "Liability for links",
          paragraphs: [
            "Our website may contain links to external third-party websites over whose content we have no influence. The respective provider or operator of the linked pages is always responsible for their content."
          ]
        },
        {
          heading: "Copyright",
          paragraphs: [
            "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of use outside the limits of copyright law require the written consent of the respective author or creator."
          ]
        }
      ]
    },
    datenschutz: {
      crumb: "Privacy Policy",
      title: "Privacy Policy",
      intro:
        "We take the protection of your personal data very seriously and treat it confidentially and in accordance with the statutory data protection regulations (GDPR) and this privacy policy.",
      sections: [
        {
          heading: "1. Controller",
          paragraphs: [
            "The controller responsible for data processing on this website is: DeepRoot, Ruhering 4e, 21147 Hamburg, Germany, email: info@deeproot.one"
          ]
        },
        {
          heading: "2. Hosting and server log files",
          paragraphs: [
            "When you visit this website, the hosting provider automatically collects information in so-called server log files (e.g. IP address, date and time of the request, browser type and operating system). This data is used to ensure trouble-free operation and to improve our services. The legal basis is Art. 6 (1) (f) GDPR (legitimate interest)."
          ]
        },
        {
          heading: "3. Cookies",
          paragraphs: [
            "This website uses necessary cookies that are required for technical operation. In addition, we only use statistics and marketing cookies if you have given your consent via our cookie banner (Art. 6 (1) (a) GDPR).",
            "Your choice is stored locally in your browser. You can revoke your consent at any time by deleting your browser cookies – the banner will then appear again."
          ]
        },
        {
          heading: "4. Contact form",
          paragraphs: [
            "If you send us enquiries via the contact form, your details from the form, including the contact data you provide, will be stored by us for the purpose of processing the enquiry and in case of follow-up questions. We do not pass on this data without your consent. The legal basis is Art. 6 (1) (b) GDPR."
          ]
        },
        {
          heading: "5. Your rights",
          paragraphs: [
            "You have the right at any time to information about your stored personal data (Art. 15 GDPR), rectification (Art. 16 GDPR), erasure (Art. 17 GDPR), restriction of processing (Art. 18 GDPR), data portability (Art. 20 GDPR) and to object to processing (Art. 21 GDPR).",
            "You also have the right to lodge a complaint with the competent data protection supervisory authority; in Hamburg this is the Hamburg Commissioner for Data Protection and Freedom of Information."
          ]
        },
        {
          heading: "6. Storage period",
          paragraphs: [
            "Personal data is only stored for as long as is necessary for the purposes stated or as required by statutory retention periods."
          ]
        },
        {
          heading: "7. Changes to this privacy policy",
          paragraphs: [
            "We reserve the right to adapt this privacy policy so that it always complies with current legal requirements or to implement changes to our services."
          ]
        }
      ]
    }
  }
};

export const legalLinkLabels: Record<Language, Record<LegalSlug, string>> = {
  de: { impressum: "Impressum", datenschutz: "Datenschutz" },
  en: { impressum: "Legal Notice", datenschutz: "Privacy Policy" }
};

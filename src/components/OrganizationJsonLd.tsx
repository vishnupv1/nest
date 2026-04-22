import { SITE } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

/** LocalBusiness + TravelAgency JSON-LD for rich results and entity signals. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "TravelAgency"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE.name,
        legalName: SITE.fullName,
        url: SITE_URL,
        description: SITE.description,
        email: SITE.email,
        telephone: SITE.phone.join(", "),
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Wayanad",
          containedInPlace: { "@type": "State", name: "Kerala", containedInPlace: { "@type": "Country", name: "India" } },
        },
        knowsAbout: [
          "Wayanad tourism",
          "Kerala tourism",
          "eco tourism",
          "tour packages Wayanad",
          "Wayanad natural products",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${SITE.name} Wayanad`,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

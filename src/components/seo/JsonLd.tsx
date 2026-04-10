import React from 'react';

const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Chalapathi Institute of Pharmaceutical Sciences (CLPT)",
    "alternateName": "CLPT Guntur",
    "url": "https://chalapathipharmacy.in",
    "logo": "https://chalapathipharmacy.in/images/flogo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-863-2524124",
      "contactType": "admissions",
      "email": "principalclpt@gmail.com",
      "areaServed": "IN",
      "availableLanguage": ["en", "telugu"]
    },
    "sameAs": [
      "https://www.facebook.com/chalapathipharmacy/",
      "https://twitter.com/clptguntur",
      "https://www.linkedin.com/school/chalapathi-institute-of-pharmaceutical-sciences/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chalapathi Nagar, LAM",
      "addressLocality": "Guntur",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "522034",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.3698,
      "longitude": 80.4358
    },
    "description": "Best Pharmacy College in AP. Accredited with NAAC A+ Grade. Offering premium B.Pharm, M.Pharm, Pharm.D and Ph.D programs.",
    "award": "NAAC A+ Grade, NBA Accredited"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://chalapathipharmacy.in",
    "name": "Chalapathi Institute of Pharmaceutical Sciences",
    "description": "Leading pharmacy college in Andhra Pradesh providing excellence in pharmaceutical education.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://chalapathipharmacy.in/news?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default JsonLd;

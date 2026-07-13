import React from 'react';
import { Helmet } from 'react-helmet-async';
import { businessDetails } from '../config/businessDetails';

export default function SEO({ 
  title, 
  description, 
  keywords = [], 
  canonicalPath = "",
  schemaData = null,
  faqData = null
}) {
  const defaultTitle = `${businessDetails.name} | ${businessDetails.type}`;
  const displayTitle = title ? `${title} | ${businessDetails.name}` : defaultTitle;
  const displayDescription = description || "Sarvamangal IVF offers compassionate and premium fertility care, advanced IVF/IUI/ICSI treatments, and maternity support in Shyamal, Ahmedabad. Book a confidential consultation today.";
  
  const siteUrl = window.location.origin;
  const canonicalUrl = `${siteUrl}${canonicalPath || window.location.pathname}`;

  // Default JSON-LD schema for the Medical Clinic / Local Business
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": businessDetails.name,
    "alternateName": "Sarvamangal Fertility & Maternity Centre",
    "description": displayDescription,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": `${siteUrl}/hero-preview.jpg`,
    "telephone": businessDetails.phone,
    "email": businessDetails.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jyoti Complex, NH228, Shyamal Cross Road, Near Shyamal Flyover, Shyamal",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380013",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.0241",
      "longitude": "72.5274"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": businessDetails.rating.toString(),
      "reviewCount": businessDetails.reviewsCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Convert faqData into FAQPage JSON-LD schema
  const faqSchema = faqData ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{displayTitle}</title>
      <meta name="description" content={displayDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={displayDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:site_name" content={businessDetails.name} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={displayDescription} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultSchema)}
      </script>
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
}

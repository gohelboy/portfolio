import { Judson } from "next/font/google";
import "./globals.css";
import { getBaseUrl } from "./_utils/getBaseUrl";

const judson = Judson({ subsets: ["latin"], weight: ["400", "700"] });

// Dynamic metadata function to support multiple domains
export async function generateMetadata() {
  const baseUrl = getBaseUrl();

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Dwarkesh Gohel | Full Stack Developer & Designer Portfolio",
      template: "%s | Gohelboy Portfolio",
    },
    description:
      "Portfolio of Dwarkesh Gohel (Gohelboy) - Full Stack MERN Developer, Web Designer, Graphic Designer, and Game Developer. Specialized in React, Next.js, Node.js, and creative design solutions.",
    keywords: [
      "Dwarkesh Gohel",
      "gohelboy",
      "full stack developer",
      "MERN developer",
      "web developer",
      "web designer",
      "graphic designer",
      "game developer",
      "React developer",
      "Next.js developer",
      "Node.js developer",
      "freelancer",
      "portfolio",
      "web development",
      "UI/UX designer",
      "frontend developer",
      "backend developer",
    ],
    authors: [{ name: "Dwarkesh Gohel", url: baseUrl }],
    creator: "Dwarkesh Gohel",
    publisher: "Dwarkesh Gohel",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      siteName: "Gohelboy Portfolio",
      title: "Dwarkesh Gohel | Full Stack Developer & Designer Portfolio",
      description:
        "Portfolio of Dwarkesh Gohel (Gohelboy) - Full Stack MERN Developer, Web Designer, Graphic Designer, and Game Developer. Specialized in React, Next.js, Node.js, and creative design solutions.",
      images: [
        {
          url: `${baseUrl}/portfolio.png`,
          width: 1200,
          height: 630,
          alt: "Dwarkesh Gohel Portfolio - Full Stack Developer & Designer",
          type: "image/png",
        },
        {
          url: `${baseUrl}/me1.png`,
          width: 1200,
          height: 1200,
          alt: "Dwarkesh Gohel - Gohelboy",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Dwarkesh Gohel | Full Stack Developer & Designer Portfolio",
      description:
        "Portfolio of Dwarkesh Gohel (Gohelboy) - Full Stack MERN Developer, Web Designer, Graphic Designer, and Game Developer.",
      images: [
        {
          url: `${baseUrl}/portfolio.png`,
          width: 1200,
          height: 630,
          alt: "Dwarkesh Gohel Portfolio Preview",
        },
      ],
      creator: "@gohelboy",
      site: "@gohelboy",
    },
    alternates: {
      canonical: baseUrl,
    },
    category: "Portfolio",
    classification: "Portfolio Website",
    other: {
      "geo.region": "IN-GJ",
      "geo.placename": "Gujarat, India",
    },
  };
}

export default async function RootLayout({ children }) {
  const baseUrl = getBaseUrl();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={baseUrl} />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        {/* Additional Open Graph meta tags for better compatibility */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta
          property="og:title"
          content="Dwarkesh Gohel | Full Stack Developer & Designer Portfolio"
        />
        <meta
          property="og:description"
          content="Portfolio of Dwarkesh Gohel (Gohelboy) - Full Stack MERN Developer, Web Designer, Graphic Designer, and Game Developer. Specialized in React, Next.js, Node.js, and creative design solutions."
        />
        <meta property="og:image" content={`${baseUrl}/portfolio.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Dwarkesh Gohel Portfolio - Full Stack Developer & Designer"
        />
        <meta property="og:site_name" content="Gohelboy Portfolio" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={baseUrl} />
        <meta
          name="twitter:title"
          content="Dwarkesh Gohel | Full Stack Developer & Designer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Dwarkesh Gohel (Gohelboy) - Full Stack MERN Developer, Web Designer, Graphic Designer, and Game Developer."
        />
        <meta name="twitter:image" content={`${baseUrl}/portfolio.png`} />
        <meta
          name="twitter:image:alt"
          content="Dwarkesh Gohel Portfolio Preview"
        />
        <meta name="twitter:creator" content="@gohelboy" />
        <meta name="twitter:site" content="@gohelboy" />
        {/* LinkedIn specific */}
        <meta
          property="og:image:secure_url"
          content={`${baseUrl}/portfolio.png`}
        />
        {/* Additional SEO meta tags */}
        <meta name="author" content="Dwarkesh Gohel" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dwarkesh Gohel",
              alternateName: "Gohelboy",
              url: baseUrl,
              image: `${baseUrl}/me1.png`,
              sameAs: [
                // Add your social media links here when available
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
              address: {
                "@type": "PostalAddress",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "GTU",
                  description: "Master of Computer Applications (MCA)",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "BKMNU",
                  description: "Bachelor of Computer Applications (BCA)",
                },
              ],
              knowsAbout: [
                "Web Development",
                "Full Stack Development",
                "MERN Stack",
                "React",
                "Next.js",
                "Node.js",
                "Web Design",
                "Graphic Design",
                "Game Development",
                "UI/UX Design",
              ],
              description:
                "Full Stack MERN Developer, Web Designer, Graphic Designer, and Game Developer passionate about creating amazing digital experiences.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Gohelboy Portfolio",
              url: baseUrl,
              author: {
                "@type": "Person",
                name: "Dwarkesh Gohel",
              },
              description:
                "Portfolio website of Dwarkesh Gohel showcasing web development, design, and game development projects.",
            }),
          }}
        />
      </head>
      <body className={judson.className}>{children}</body>
    </html>
  );
}

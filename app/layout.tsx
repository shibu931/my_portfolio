import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import GridBackground from "@/components/GridBackground";
import { Poppins, Orbitron, Roboto } from "next/font/google";
import { Vortex } from "@/components/ui/Vortex";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron", // Important for Tailwind
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
});

const siteUrl = "https://www.hypexdev.com";
const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Shippu Kumar | Freelance Full Stack Developer ${currentYear}`,
    template: `%s | Shippu Kumar - Freelance Developer`,
  },
  description: `Professional freelance developer helping startups and SMEs build performant web applications. Next.js & React specialist offering flexible engagements & rapid prototyping. Available for new projects.`,
  keywords: [
    "freelance web developer",
    "contract developer",
    "remote tech partner",
    "website dekveloper",
    "startup developer",
    "web app development",
    "professional web developer",
    "seo services",
    "seo specialist",
    "website developer for hire",
  ],
  openGraph: {
    title: "Hire a Freelance Full Stack Developer",
    description:
      "End-to-end web development services for businesses and entrepreneurs. With also specialization in SEO and digital marketing. To top on Google search results.",
    url: siteUrl,
    siteName: "Hypexdev Freelance Services",
    images: [
      {
        url: "/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Freelance Developer Available for New Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Developer for Hire",
    description: "Professional freelance developer helping startups and SMEs build performant web applications. Next.js & React specialist offering flexible engagements & rapid prototyping. Available for new projects.",
    creator: "@hypexdev_com",
    images: ["/assets/twitter.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

const freelanceSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shippu Kumar",
  "alternateName": "Hypexdev",
  "url": siteUrl,
  "image": `${siteUrl}/profile.webp`,
  "jobTitle": "Freelance Full Stack Developer",
  "description": "Professional freelance developer helping startups and SMEs build performant web applications. Next.js & React specialist offering flexible engagements & rapid prototyping. Available for new projects.",
  "email": "shippu@hypexdev.com",
  "telephone": "+919319115745",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Laxmi Nagar",
    "addressRegion": "Delhi",
    "postalCode": "110092",
    "addressCountry": "Country"
  },
  "availableChannel": {
    "@type": "ContactPoint",
    "contactType": "project inquiry",
    "email": "shippu@hypexdev.com",
    "contactOption": "TollFree",
    "areaServed": "Worldwide",
    "availableLanguage": "English"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landing Page Designing",
          "description": "Designing and developing landing pages for your business"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Optimizing your website for search engines to improve visibility and ranking"
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="eEkeknD5LTOpf1fms3s50nIrsijCV88Iguar9trsoxo" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(freelanceSchema) }}
        />
      </head>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`${orbitron.variable} ${roboto.variable} ${poppins.variable} antialiased transition-colors dark:text-white dark:bg-[#0e081e]`}
        >
          <Navbar />
          {children}
          <Vortex/>
          {/* <GridBackground /> */}
        </body>
      </ThemeProvider>
    </html>
  );
}

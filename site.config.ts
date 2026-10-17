import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Sisters Sweets & Treats",
  tagline: "Custom buttercream cakes and decorated sugar cookies in Brampton, serving the GTA.",
  category: "Custom cakes and cookies",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://sisterssweetsandtreats.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#B8975A" },
    wordmark: "script",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton and the GTA",
    headline: "Custom cakes and treats for every celebration",
    subhead:
      "Buttercream cakes, wedding tiers, and decorated sugar cookies made to order. Send a DM with your date and idea to get started.",
    images: [
      { src: "/images/post-6.jpg", alt: "Heart shaped engagement cake with vintage piping" },
      { src: "/images/post-1.jpg", alt: "Two tier white wedding cake topped with raspberries" },
      { src: "/images/post-7.jpg", alt: "Heart shaped monogram sugar cookies" },
    ],
    secondaryCta: { label: "See the gallery", href: "#gallery" },
  },

  highlights: [
    "Custom buttercream cakes",
    "Wedding and celebration cakes",
    "Decorated sugar cookies",
    "Orders by Instagram DM",
  ],

  about: {
    title: "Sweets made for your occasion",
    body: [
      "Sisters Sweets & Treats creates custom cakes and treats for all occasions, from buttercream celebration cakes to wedding tiers and decorated sugar cookies.",
      "Based in Brampton and serving the GTA and surrounding areas. Message us on Instagram with your date, servings, and design idea.",
    ],
    image: { src: "/images/post-2.jpg", alt: "Three tier white wedding cake at a reception" },
  },

  menu: {
    label: "Menu",
    title: "What we make",
    intro: "Every order is custom. Share your date, size, and design idea for a quote.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing based on size, design, and date.",
    groups: [
      {
        title: "Cakes",
        note: "Quoted by DM",
        items: [
          { name: "Buttercream celebration cakes", description: "Birthdays, engagements, and special occasions." },
          { name: "Wedding and tiered cakes", description: "Classic tiers styled for your day." },
          { name: "Heart cakes", description: "Vintage piping and custom lettering." },
        ],
      },
      {
        title: "Cookies and treats",
        note: "Quoted by DM",
        items: [
          { name: "Decorated sugar cookies", description: "Monograms, florals, and event favours." },
          { name: "Custom cookie sets", description: "Themed sets for weddings, showers, and grads." },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at recent work",
    items: [
      {
        src: "/images/post-6.jpg",
        width: 1080,
        height: 1274,
        alt: "Heart shaped engagement cake with vintage piping and pink roses",
        caption: "Engagement heart cake",
      },
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 1353,
        alt: "Two tier white wedding cake with raspberry top",
        caption: "Wedding buttercream cake",
      },
      {
        src: "/images/post-2.jpg",
        width: 1080,
        height: 1123,
        alt: "Three tier white wedding cake with gold topper",
        caption: "Tiered wedding cake",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1440,
        alt: "Three tier wedding cake with cascading white roses",
        caption: "Floral wedding cake",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1153,
        alt: "Pink and white heart sugar cookies with monogram",
        caption: "Monogram cookies",
      },
      {
        src: "/images/post-8.jpg",
        width: 1080,
        height: 1440,
        alt: "Pink heart birthday cake with ribbon bows",
        caption: "Heart birthday cake",
      },
      {
        src: "/images/post-10.jpg",
        width: 1080,
        height: 1440,
        alt: "Wedding themed decorated sugar cookies on a plate",
        caption: "Wedding cookie set",
      },
      {
        src: "/images/post-4.jpg",
        width: 1080,
        height: 1920,
        alt: "Custom bridal shower drink cup label",
        caption: "Bridal shower treat",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "sisterssweetsandtreats_",
    embeds: [],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. Tap the button to open a starter message, then send it along with any inspo photos.",
    dmMessage:
      "Hi Sisters Sweets & Treats! I would like to place a custom order.\nDate needed:\nServings or size:\nFlavour:\nDesign idea:",
    links: [],
    note: "Please enquire early for weekends and wedding dates.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I order?",
      a: "Send a DM on Instagram with your date, servings or size, flavour, and design idea. You will get a quote back in the chat.",
    },
    {
      q: "What do you make?",
      a: "Custom buttercream cakes, wedding and celebration cakes, and decorated sugar cookies for all occasions.",
    },
    {
      q: "Where do you serve?",
      a: "We are based in Brampton and serve the GTA and surrounding areas.",
    },
  ],

  contact: {
    area: "Brampton, Ontario (serves the GTA)",
    socials: [],
  },

  seo: {
    title: "Sisters Sweets & Treats | Custom cakes and cookies in Brampton",
    description:
      "Custom buttercream cakes, wedding cakes, and decorated sugar cookies in Brampton, serving the GTA. Order by Instagram DM.",
    keywords: [
      "custom cakes Brampton",
      "wedding cakes Brampton",
      "buttercream cakes GTA",
      "decorated sugar cookies Brampton",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};

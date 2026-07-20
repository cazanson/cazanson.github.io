import type { UserConfig } from "../src/site.config";

const userConfig: UserConfig = {
  title: "Ca’ Zanson",
  description:
    "Welcome to my site. I'm Mark Johnson of the Theology Department at Marquette University",

  url: "https://cazanson.github.io",
  author: "Mark Johnson",

  logo: "/logo.svg",
  avatar: "/avatar.png",

  navigation: [
    { title: "Writing", url: "/posts" },
    { title: "Archive", url: "/archive" },
    { title: "About", url: "/about" },
  ],

  footerLinks: [
    { title: "RSS", url: "/rss.xml" },
    { title: "Archive", url: "/archive" },
    { title: "Source", url: "https://cazanson.github.io" },
    
  ],

  social: [
    {
      title: "GitHub",
      url: "https://github.com/cazanson/",
      icon: "github",
    },
    {
      title: "X",
      url: "https://x.com/",
      icon: "x",
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/",
      icon: "linkedin",
    },
    
  ],

  footerCredits: "Designed for reading. Built with Astro & Lipi",

  postsPerPage: 8,
  recentPosts: 6,
  relatedPosts: 4,

  showThemeToggle: true,
  showReadingTime: true,

  heroVariant: "default",

  annotation: "Medievalist. Thomist. Theology. Marquette.",
};

export default userConfig;
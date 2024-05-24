import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "MD AL AMIN HOSSAIN",
  initials: "ALAMIN",
  location: "Dhaka, Bangladesh, BD",
  locationLink: "https://www.google.com/maps/place/Dhaka",
  about:
    "Experienced developer specializing in C# and ASP.NET Core for financial institutions, excelling in capital market solutions and complex SQL with Oracle and MSSQL.",
  summary:
    "I am a seasoned developer with over nine years of experience, specializing in C# and ASP.NET Core for enterprise-grade software development in prestigious financial institutions. Holding an MSc in Computer Science and Engineering, I excel in creating capital market-related solutions and handling complex SQL queries with Oracle and MSSQL. My passion lies in developing scalable and efficient APIs and delivering robust software solutions tailored to the financial sector's unique challenges. Leveraging cutting-edge technologies, I drive innovation and efficiency, making me a valuable asset to any organization. ",
  avatarUrl: "https://avatars.githubusercontent.com/u/21221277?s=400&u=e8cb944f338bf99aa9f2a94428c9c2c46a0b4892&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+8801921414664",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/alaminmain",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alaminmain/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/alaminmain",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Jahangirnagar University",
      degree: "Master's Degree in Computer Science",
      start: "2013",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Investment Coporation of Bangladesh",
      link: "https://icb.gov.bd/",
      badges: ["On site"],
      title: "Programmer",
      logo: ParabolLogo,
      start: "2013",
      end: "Continue",
      description:
        "Worked in .NET platform development, rigorous testing, optimizing process flows, and designing efficient software backends with APIs and database queries.",
    },
    {
      company: "BrandTrader",
      link: "https://brandtrader.com",
      badges: ["Remote", "Part-time"],
      title: "Lead Developer & System Analyst",
      logo: ClevertechLogo,
      start: "2022",
      end: "Continue",
      description:
        "I lead the development team in building a data-driven B2B application that serves as a unified platform for aggregating bids and offers with negotiation capabilities. I design system features, create workflows for the entire application, and utilize technologies such as .NET Blazor, ABP Framework with Telerik, and Azure DevOps.",
    },
   
  ],
  skills: [
    "Dotnet",
    "Blazor",
    "SQL Server",
    "Oracle",
    "ABP Framework",
    "JavaScript",
    "TypeScript",
    "Angular",
    "Azure DevOps",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;

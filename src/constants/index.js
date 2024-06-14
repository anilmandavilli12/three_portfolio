import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  iu,
  twomr,
  python,
  propertypros,
  ecomm,
  healthcare
} from "../assets";

export const navLinks = [
  {
    id: "https://drive.google.com/file/d/1K6LFZJ6vdfVb9dXH9lKKAgDp93uBKEYA/view?usp=sharing",
    title:"My Resume"
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python
  }
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Indiana University",
    icon: iu,
    iconBg: "#383E56",
    date: "Aug 2023 - Dec 2023",
    points: [
      "Spearhead the development and maintenance of website for project “FZ Compressor Framework",
      "Collaborate with professors from 5 universities on research initiative with $3.2 million grant",
      "Develop skills in coding, project management and research methods",
    ],
  },
  {
    title: "Software Developer",
    company_name: "2MR Labs",
    icon: twomr,
    iconBg: "#E6DEDD",
    date: "May 2021 - July 2022",
    points: [
      "Created and integrated GraphQL APIs with front end using React Native, enhancing data accessibility and application efficiency",
      "Managed iOS and Android deployments using Google Cloud ,decreased app loading time by 40%",
      "Introduced “Events” feature, boosting user base by 30% and tripling event participation, implemented a 20+ metric-based ranking system, increasing user engagement by 25% and retention by 40%",
      "Reduced crash rates on both iOS and Android by 99.9%, accelerated reviews by 30%, promoted 15% increase in downloads and increased ratings by 20%.",
      "Introduced a dynamic newsfeed, increasing daily engagement by 20% and daily active users by 10%",
      "Built a CI/CD pipeline for 95% test coverage, integrated Sentry for error monitoring, and streamlined feedback management, reducing critical crashes by 50% and support times by 25%."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Estate",
    description:
      "Developed end-to-end Real Estate Marketplace app that advantages both customers (to buy/rent properties) and sellers (to post ads about the properties).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: propertypros,
    source_code_link: "https://github.com/AnilMandavilli594/RealEstate",
  },
  {
    name: "Simply Buy",
    description:
      "Web application that enables users to search for products, wishlist, add to cart or buy the products",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/AnilMandavilli594/SimplyBuy",
  },
  {
    name: "Health Care",
    description:
      "A comprehensive healthcare platform that streamlined appointment scheduling, record management, and real-time notifications.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: healthcare,
    source_code_link: "https://github.com/AnilMandavilli594/Health_Care",
  },
];

export { services, technologies, experiences, testimonials, projects };

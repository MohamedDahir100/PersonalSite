import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    angular,
    python,
    reactjs,
    go,
    nodejs,
    mongodb,
    git,
    java,
    mysql,
    cplusplus,
    vectorsolv,
    cra,
    snow_software,
    statcan,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
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
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Angular",
      icon: angular,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
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
      name: "C ++",
      icon: cplusplus,
    },
    {
      name: "GO",
      icon: go,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Canada Revenue Agency",
      icon: cra,
      iconBg: "#383E56",
      date: "Jan 2024 – Aug 2024",
      points: [
        "Developed efficient SQL queries and algorithms to predict tax entity behavior, handling large datasets from various sources and reducing audit workload by 30%.",
        "Refactored legacy algorithms and queries to leverage optimized SQL tables, resulting in a 50% reduction in code latency by restructuring inefficient data models and enhancing join operations.",
        "Partnered with Subject Matter Experts to implement an iterative development process, ensuring model accuracy and producing comprehensive reports on data inputs, algorithm logic, calculations, and final risk scores."
      ]
    },
    {
      title: "Full Stack Developer",
      company_name: "VectorSolv",
      icon: vectorsolv,
      iconBg: "#E6DEDD",
      date: "May 2023 – Aug 2023",
      points: [
        "Pioneered the development of a warranty table feature by working on both front-end and back-end components, reducing customer service support time by 40%, enhancing user experience, and boosting decision-making efficiency.",
        "Enhanced security by seamlessly integrating permission checks with Angular and NestJS, ensuring the utmost protection of confidential data and fostering trust in the product’s security framework.",
        "Revamped the management of distributor information within the Warranty Product by creating centralized dashboards with Angular and NestJS, transitioning from scattered data to a unified view that enhanced user engagement, comprehension, and decision-making."
      ]
    },
    {
      title: "Software Engineer",
      company_name: "Snow Software",
      icon: snow_software,
      iconBg: "#383E56",
      date: "Jan 2023 – Apr 2023",
      points: [
        "Engineered a customizable login attempt limiter for Snow Software’s Commander using Java, enhancing system security and reducing unauthorized access, while ensuring code quality through EasyMock testing.",
        "Architected a feature allowing users to set organization management limits via REST API, streamlining large-scale deployments and improving client management efficiency for enterprise users.",
        "Spearheaded bug resolution in collaboration with QA, addressing critical user-reported issues and reducing support tickets by 30%, leading to improved customer satisfaction."
      ]
    },
    {
      title: "Data Analyst",
      company_name: "Statistics Canada",
      icon: statcan,
      iconBg: "#E6DEDD",
      date: "May 2022 – Aug 2022",
      points: [
        "Designed a centralized SQL database to optimize data storage and accessibility, streamlining data management for the Customer Success team and accelerating data-driven decision-making processes.",
        "Created real-time interactive dashboards with Power BI and Power Automate, providing senior leadership with actionable insights, shaping Data Analytics as a service, and supporting the allocation of millions in funding."
      ]
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
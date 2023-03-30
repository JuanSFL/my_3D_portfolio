import {
    browardcollege,
    um,
    gpmobile,
    lenscraft,
    wirelessvision,
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
    meta,
    tesla,
    shopify,
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
      title: "Fullstack Web Development",
      icon: web,
    },
    {
      title: "Website Design",
      icon: mobile,
    },
    {
      title: "Backend Development",
      icon: backend,
    }
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
      name: "React JS",
      icon: reactjs,
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
  ];
  
  const experiences = [
    {
      title: "Sales Expert",
      company_name: "Wireless Vision",
      icon: wirelessvision,
      iconBg: "#383E56",
      date: "Jan 2018 - Mar 2020",
      points: [
        "On-site retail sales.",
        "Generated 50 leads per month.",
        "Consistently met or surpassed quotas of $10,000 in revenue sales per month.",
        "Verified customer personal information.",
        "Presented products to clients"
      ],
    },
    {
      title: "Student",
      company_name: "Broward College",
      icon: browardcollege,
      iconBg: "#E6DEDD",
      date: "Mar 2020 - Present Day",
      points: [
        "Decided to enroll in to college during pandemic.",
        "Learned how to manage my time more efficiently.",
        "Maintained a 3.4 GPA",
        "On course to obtain my AA in July 2023",
        "Majoring in Computational Science"
      ],
    },
    {
      title: "Eyecare Specialist",
      company_name: "Lenscrafters",
      icon: lenscraft,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Prescription eye-glasses sales.",
        "Provided exemplary customer service.",
        "Handle and follow up with any customer escalations..",
        "Receive and dispense RX lenses to customers.",
      ],
    },
    {
      title: "Mobile Expert",
      company_name: "GP Mobile",
      icon: gpmobile,
      iconBg: "#383E56",
      date: "May 2022 - Feb 2023",
      points: [
        "Responsible for opening and maintaining customer accounts",
        "Generating promising business leads.",
        "Meeting a monthly sales quota of $10,000 or more in revenue.",
        "Following up with past customers to see if there is any additional service that can be provided.",
      ],
    },
    {
      title: "Full stack Developer Certification",
      company_name: "University of Miami",
      icon: um,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Mar 2023",
      points: [
        "Learning fundamentals such as HTML, CSS, and JavaScript.",
        "Git Version Control",
        "Used both frontend and backend technologies such as Express.js, MySQL, MONGODB, React.JS and much more.",
        "Learning design principles and frameworks.",
        "Creating solo and group projects using the AGILE methodology.",
        
      ],
    },
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
import {
    MERN_Library,
    codegenie,
    weatherdash,
    socialapi,
    browardcollege,
    um,
    gpmobile,
    lenscraft,
    wirelessvision,
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
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
  
  const projects = [
    {
      name: "WeatherDASH",
      description:
        "A weather tracker that allows users to search and view a 5 day forecast for a city using the OpenWeatherMap API",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: weatherdash,
      source_code_link: "https://github.com/JuanSFL/Weather_Dashboard",
      deployed_link: "https://juansfl.github.io/Weather_Dashboard/"
    },
    {
      name: "Social Network API",
      description:
        "A backend application for a social network where users can add friends, share thoughts, and react to other thoughts",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
      ],
      image: socialapi,
      source_code_link: "https://github.com/JuanSFL/the-social-network-api",
      deployed_link: "https://files.fm/f/49cbms7gy"
    },
    {
      name: "Code Genie",
      description:
        "Social media application that lets users post and answer questions with a twist that ulitizes AI to answer questions on demand",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Open_AI",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: codegenie,
      source_code_link: "https://github.com/JuanSFL/Code_Genie",
      deployed_link: "https://glacial-beyond-25840.herokuapp.com/"
    },
    {
      name: "MERN Book Search Engine",
      description:
        "Full Stack MERN application powered by Google's book API that allows users to create an account, search for books, and add them to a 'favorites' list.",
      tags: [
        {
          name: "MERN Stack",
          color: "orange-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "REACT",
          color: "pink-text-gradient",
        },
        {
          name: "Node.Js",
          color: "orange-text-gradient",
        },
      ],
      image: MERN_Library,
      source_code_link: "https://github.com/JuanSFL/Code_Genie",
      deployed_link: "https://fathomless-sierra-13338.herokuapp.com/"
    },
  ];
  
  export { services, technologies, experiences, projects };
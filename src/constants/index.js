import complaince from "../assets/complaince.png";
import mechanical from "../assets/mechanical.png";
import erp from "../assets/erp.png";
import zotto from "../assets/zotto.png";

export const HERO_CONTENT = `I am a passionate MERN stack developer with hands-on experience in building 
responsive and scalable web applications. During my internship as a React.js Developer, I contributed to
 real-world projects where I focused on API integration, state management, and creating modular, reusable
  components.`;

export const ABOUT_TEXT = `I am a dedicated and enthusiastic React.js developer with hands-on experience 
 in building interactive and user-friendly web interfaces. During my internship, I worked extensively on API
 integration, dynamic form handling, and complex state management, which helped me gain a deeper 
 understanding of real-world application development. My focus lies in writing clean, maintainable code and
  creating responsive designs using modern tools like Tailwind CSS and React libraries. I enjoy working in 
  collaborative environments and constantly seek to learn and implement new technologies to enhance user 
  experiences. Currently, I’m looking for opportunities to contribute to meaningful projects and grow 
  further as a full-stack developer.`;

export const EXPERIENCES = [
  {
    year: "APR 2025 - JUL 2025",
    role: "React js Developer Intern",
    company: "Talentrise Technokrate",
    description: `Completed a frontend development internship at TalentRise Technokrate, where I worked 
    on building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React.js. 
    Gained hands-on experience in converting UI designs into functional components, integrating APIs, 
    debugging, and optimizing code. Also collaborated with the team on version control using Git and 
    participated in regular code reviews and discussions.`,
    technologies: ["HTML", "CSS", "Javascript", "React","Recoil","Tailwind"],
  },

];

export const PROJECTS = [
  {
    title: "Mechanical Admin Panel",
    image: mechanical ,
    description:
      "Worked on the Order Receive and Supplier Order modules of a Mechanical Admin Panel. My role was focused on the frontend, where I handled UI design, calculation logic, API integration, and routing. I used Recoil for state management and Axios to connect with backend APIs.",
    technologies: [ "React", "Tailwind Css", "Recoil","Formik & Yup","Axios"],
  },
  {
    title: "Zotto Super Admin & Branch Admin Panel",
    image: zotto, 
    description:
      "Developed multiple modules for both Super Admin and Branch Admin panels. In the Super Admin panel, I worked on features like sending notifications, product management, banner updates, and settings. In the Branch Admin panel, I contributed to building the dashboard api integration. Focused on frontend development with React, handled API integration, and used Recoil for state management.",
    technologies: [ "React", "Tailwind Css", "Recoil","Formik & Yup","Axios"],
  },
  {
    title: "Complaince Audit Panel",
    image: complaince, 
    description:
      "Worked on the UI development for various modules in the Compliance Audit Panel. Integrated Breadcrumb navigation across all modules for better UX, and handled API integration in one or two modules. Focused on writing clean UI using React.js and ensured consistency across pages.",
    technologies: [ "React", "Tailwind Css", "Recoil","Formik & Yup","Axios"],
  },
  {
    title: "ERP Panel",
     image: erp, 
    description:
      "Contributed to building an ERP system with a focus on UI development, including clean layouts, breadcrumb navigation, and loading indicators. Worked on API integration, implemented form validation logic, and handled dynamic forms for better user experience.",
    technologies:[ "React", "Tailwind Css", "Recoil","Formik & Yup","Axios"],
  },
];

export const CONTACT = {
  address: "Behind Anathaya, Vivek Nagar, Bikaner, Rajasthan, 334001",
  phoneNo: "+91 7877957238",
  email: "rohanwadhwa913@gmail.com",
};

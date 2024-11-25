import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Trong Doan Ngoc",
  initials: "DNT",
  url: "https://portfolio-dnt.vercel.app",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "To apply my expertise in front-end development with a focus on ReactJS and React Native to drive innovation and growth in a dynamic organization. I aim to create responsive, scalable applications and collaborate effectively within cross-functional teams, continuously advancing my skills to deliver exceptional, user-centered products.",
  summary:
    "Front-end developer with 2 years of experience in web (ReactJS) and mobile (React Native) applications for clients across Education, E-commerce, Blockchain, and Social Networking. Skilled in creating accessible, user-friendly interfaces and committed to delivering excellent user experiences.",
  avatarUrl: "/avatar.jpg",
  skills: [
    "React.js",
    "React Native",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "Node.js",
    "Git",
    "Bitbucket",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "trong.doanngoc2023@gmail.com",
    tel: "+84335764560",
    social: {
      Email: {
        name: "Send Email",
        url: "mailto:trong.doanngoc2023@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Phone: {
        name: "Call Me",
        url: "tel:+84335764560",
        icon: Icons.phone,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/doanngoctrong2001",
        icon: Icons.contact,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/uSerDnt",
        icon: Icons.github,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "BITECH DEVELOPMENT INVESTMENT CO.,LTD",
      badges: [],
      href: "https://store.bitechco.com/",
      location: "43 Đường Số 37, Khu đô Thị Vạn Phúc, Thủ Đức, Hồ Chí Minh",
      title: "Frontend Developer",
      logoUrl: "/bitech.png",
      start: "Sep 2023",
      end: "Nov 2024",
      description:
        "Specializes in the production and implementation of information technology products applied in the fields of Education & Healthcare.",
    },
    {
      company: "NAMI CORP",
      badges: [],
      href: "https://nami.exchange/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/nami.png",
      start: "Oct 2022",
      end: "Feb 2023",
      description:
        "Nami exchange is an online exchange where users can trade crypto currencies.",
    },
  ],
  education: [
    {
      school: "SaiGon Technology University (STU)",
      href: "https://www.stu.edu.vn/",
      degree: "Bachelor's degree of Information Technology",
      logoUrl: "/stu.jpg",
      start: "2019",
      end: "2023",
      description: "Studying Software Engineering GPA:3/4",
    },
    {
      school: "English Center",
      href: "",
      degree: "~ 450",
      logoUrl: "/toeic.jpg",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "BiEdu (Web - App)",
      href: "https://bi-edu.bitechco.com/",
      dates: "Sep 2023 - Present",
      active: true,
      description:
        "BiEdu Software is an educational platform that combines web and mobile applications, aimed at facilitating school management, teacher coordination, and seamless information exchange among students, teachers, and parents.",
      technologies: [
        "React Native",
        "React.js",
        "Javascript",
        ".Net",
        "SignalR",
        "MongoDB",
        "RabbitMQ",
      ],
      links: [
        {
          type: "Website",
          href: "https://bi-edu.bitechco.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Appstore",
          href: "/",
          icon: <Icons.appstore className="size-3" />,
        },
        {
          type: "CH Play",
          href: "/",
          icon: <Icons.chplay className="size-3" />,
        },
      ],
      image: "/biedu.jpg",
      video: "",
    },
    {
      title: "Bikids (Web - App)",
      href: "https://bikids.edu.vn/",
      dates: "Sep 2023 - Present",
      active: true,
      description:
        "An educational application designed to help schools manage student records, teacher information, tuition fee payments, child nutrition, and academic results.",
      technologies: [
        "React Native",
        "React.js",
        "Javascript",
        ".Net",
        "SignalR",
        "MongoDB",
        "RabbitMQ",
      ],
      links: [
        {
          type: "Website",
          href: "https://bikids.edu.vn/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Appstore",
          href: "/",
          icon: <Icons.appstore className="size-3" />,
        },
        {
          type: "CH Play",
          href: "/",
          icon: <Icons.chplay className="size-3" />,
        },
      ],
      image: "/bikid.jpg",
      video: "",
    },
    {
      title: "Nami Exchange (App)",
      href: "https://nami.exchange/",
      dates: "Oct 2022 - Feb 2023",
      active: true,
      description:
        "Nami exchange is an online exchange where users can trade crypto currencies.",
      technologies: [
        "React Native",
        "Next.js",
        "Typescript",
        "Node.js",
        "MySQL",
        "MongoDB",
        "Socket.io",
      ],
      links: [
        {
          type: "Website",
          href: "https://nami.exchange/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Appstore",
          href: "/",
          icon: <Icons.appstore className="size-3" />,
        },
        {
          type: "CH Play",
          href: "/",
          icon: <Icons.chplay className="size-3" />,
        },
      ],
      image: "/nami-web.jpg",
      video: "",
    },
    {
      title: "StyleBorrow",
      href: "https://dntbooking.vercel.app/",
      dates: "April 2024 - June 2024",
      active: true,
      description:
        "StyleBorrow is a webapp and mobile application project aimed at facilitating both clothing rental and sales services",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://dntbooking.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/styleborrow.jpg",
      video: "",
    },
    {
      title: "Jira-clone",
      href: "https://planningdev.vercel.app/",
      dates: "Nov 2024 - Present",
      active: true,
      description:
        "Developed a clone of Jira, a web application for project management and bug tracking.",
      technologies: [
        "Next.js",
        "Typescript",
        "Appwrite",
        "Hono.js",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://planningdev.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/uSerDnt/PlanningWeb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/jirra.jpg",
      video: "",
    },
    {
      title: "You want to see more of my projects?",
      href: "https://github.com/uSerDnt",
      dates: "Forever",
      active: true,
      description: "",
      technologies: [
        "React Native",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Firebase",
        "Magic UI",
        "Ant Design",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/uSerDnt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/contri.jpg",
      video: "",
    },
  ],
};

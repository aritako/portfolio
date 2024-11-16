import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Melo Atienza',
  initials: 'CA',
  url: 'https://dillion.io',
  location: 'San Francisco, CA',
  locationLink: 'https://www.google.com/maps/place/sanfrancisco',
  description:
    'A Software Engineer with a principles-based approach for building good products.',
  summary:
    'In 2020, I was filling up tons of paper forms for school and I thought to myself, _There has to be a better way to do this._ I always thought that we can streamline mundane tasks with software, so we can focus on the things that matter. Since then, this has been my motivating factor in building software.',
  tagline: 'Do it **Right.** Do it with **Purpose.**',
  avatarUrl: '/me.jpg',
  languages: [
    'React',
    'Next.js',
    'Javascript',
    'Typescript',
    'Python',
    'Postgres',
  ],
  technologies: [
    'Git',
    'Supabase',
    'Firebase',
    'Vercel',
    'MySQL',
    'MongoDB',
    'AWS Services',
    'Datadog',
  ],
  libraries: [
    'React',
    'NextJS',
    'Angular',
    'Ionic',
    'Capacitor',
    'Django',
    'TensorFlow',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'atienzabusiness@gmail.com',
    tel: '+63 929 294 2886',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/aritako',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/meloatienza/',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com',
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: 'Youtube',
        url: 'https://youtube.com',
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: 'Send Email',
        url: 'mailto:atienzbusiness@gmail.com',
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'Enstack',
      href: 'https://www.linkedin.com/company/enstack/posts/?feedView=all',
      badges: ['Part-Time', 'Hybrid'],
      location: 'BGC, Taguig',
      title: 'Software Engineering Consultant',
      logoUrl: '/enstack.webp',
      start: 'September 2024',
      description:
        'Developed an in-house internal admin dashboard to monitor company transactions, orders and inventory using Angular. \
        Migrated Kafka Producer to AWS SQS with AWS Lambda processor integration. \
        Resolved complex bugs involving out-of-sync products in an offline-first app, ensuring correct data synchronization across offline and online states. \
        ',
    },
    {
      company: 'Enstack',
      badges: ['Internship', 'On-Site'],
      href: 'https://www.linkedin.com/company/enstack/posts/?feedView=all',
      location: 'BGC, Taguig',
      title: 'Software Engineering Intern',
      logoUrl: '/enstack.webp',
      start: 'June 2024',
      end: 'August 2024',
      description:
        'Resolved critical live bugs in production, such as tracking API and AWS Lambda issues via Datadog and hotfixing frontend issues in an Ionic Angular-based app. \
        Optimized document AWS S3 uploader service of the app, reducing byte size of files by 97%. \
        Implemented new Report features in live app, using graphs and tables to visually display user data. \
        ',
    },
  ],
  education: [
    {
      school: 'University of the Philippines Diliman',
      href: 'https://upd.edu.ph/',
      degree: 'Bachelor of Science in Computer Science (BS CS)',
      badges: ['Magna Cum Laude Standing'],
      logoUrl: '/up.png',
      start: '2021',
      end: '2025',
    },
    {
      school: 'Lourdes School Quezon City',
      href: 'https://www.lsqc.edu.ph/',
      degree: 'High School Diploma',
      badges: ['With High Honors'],
      logoUrl: '/lsqc.png',
      start: '2016',
      end: '2021',
    },
  ],
  projects: [
    {
      title: 'SuperPot',
      href: 'https://mysuperpot.vercel.app/',
      dates: 'Apr 2024 - Jun 2024',
      active: true,
      description:
        "As our team's entry to [IoT Cup 2024](https://dcs.upd.edu.ph/news/iot-cup-2024/), we developed SuperPot, a smart pot that automatically waters your plants based on their needs. We won **Best Exhibit!**",
      technologies: [
        'Next.js',
        'Typescript',
        'Firebase',
        'TailwindCSS',
        'Internet of Things',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://mysuperpot.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/aritako/superpot',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/superpot.png',
      video: '',
    },
    {
      title: 'RollCall',
      href: 'https://github.com/aritako/rollcall',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Developed QR-based attendance system for students, and an attendance monitoring dashboard for teachers. A mobile app with native features. Made in fulfillment of my Software Engineering course.',
      technologies: ['Ionic', 'React', 'Capacitor', 'Supabase'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/aritako/rollcall',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/rollcall.png',
      video: '',
    },
  ],
  volunteering: [
    {
      title: 'Algolympics 2024 Project Manager',
      dates: 'December 2023 - April 2024',
      organization:
        'Association for Computing Machinery - UP Diliman Student Chapter Inc. (UP ACM)',
      description:
        'Algolympics 2024 is our annual intercollegiate programming competition. Collaborated with National Olympiad in Informatics (NOI) Problem Setters in preparing contest problems. Led steering committee in planning and executing the event. Increased participating teams by 33%, and participant count by 54%.',
      image: '/upacm.jpg',
      links: [
        {
          title: 'Facebook',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.facebook.com/upacm/',
        },
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://algolympics.upacm.net/2024/',
        },
      ],
    },
    {
      title: 'Tackle Public Relations Associate',
      dates: 'October 2023 - February 2024',
      organization: 'Association for Computer Science Majors (UP CURSOR)',
      description:
        'Tackle is the premier Tech Job Career Fair in UP Diliman. Communicated with nationwide student organizations to partner for the event.',
      image: '/cursor.png',
      links: [
        {
          title: 'Facebook',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.facebook.com/UPCURSOR/',
        },
        {
          title: 'Event Page',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.facebook.com/CURSOR.Tackle',
        },
      ],
    },
    {
      title: 'Head of Marketing',
      dates: 'September 2022 - July 2023',
      organization:
        'Association for Computing Machinery - UP Diliman Student Chapter Inc. (UP ACM)',
      description:
        "Engaged in professional communication with top tech companies' representatives and executives. Secured company partnerships through pitches and meetups. Increased funding for the organization by 20%.",
      image: '/upacm.jpg',
      links: [
        {
          title: 'Facebook',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.facebook.com/upacm/',
        },
      ],
    },
  ],
} as const;

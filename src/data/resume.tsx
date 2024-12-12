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
  current:
    'Currently, I am a a graduating Computer Science student from UP Diliman. I am working on my thesis under the Algorithms and Complexity Lab, with a focus on Bioinformatics, Community Detection, and Network Theory. \
  On the side, I am a Software Engineer at Enstack, where I fix bugs and develop internal tools and services for the company.',
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
      title: 'Software Engineering',
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
      school: 'UP Diliman DCS - Algorithms and Complexity Laboratory',
      href: 'https://aclab.dcs.upd.edu.ph/',
      degree: 'Undergraduate Researcher',
      badges: ['Thesis'],
      logoUrl: 'aclab.png',
      start: '2024',
      end: '2025',
      description:
        'My research is in the field of Bioinformatics, Community Detection, and Network Theory. I am currently working on a thesis which aims to develop a novel metric for identifying communities in gene coexpression networks of yeast cells.',
    },
    {
      school: 'University of the Philippines Diliman',
      href: 'https://upd.edu.ph/',
      degree: 'Bachelor of Science in Computer Science (BS CS)',
      badges: ['Magna Cum Laude Standing'],
      logoUrl: '/up.png',
      start: '2021',
      end: '2025',
      description:
        'Relevant Coursework: Software Engineering, Data Structures and Algorithms, Machine Learning, Database Systems, Operating Systems, Computer Networks, Automata and Complexity Theory.',
    },
    {
      school: 'Lourdes School Quezon City',
      href: 'https://www.lsqc.edu.ph/',
      degree: 'High School Diploma',
      badges: ['With High Honors'],
      logoUrl: '/lsqc.png',
      start: '2016',
      end: '2021',
      description:
        'Capstone Project: Giovanna, a web-based clinical records management system. Developed using pure HTML, CSS, Javascript, PHP, and MySQL. Won Best Capstone Project in school!',
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
    {
      title: 'Twitter Analysis on the "Golden Era"',
      href: 'https://meloatienza.wixsite.com/golden-era',
      dates: 'March 2023 - June 2023',
      active: true,
      description: 'Used Natural Language Processing to process API-scraped Tweets. \
      Clustered common topics via _Latent Dirichlet Allocation_ and _t-Distributed Stochastic Neighbor Embedding_.\
      Awarded as **Best Portfolio** in [Watch the Facts! Mini-Conference.](https://dcs.upd.edu.ph/news/watch-facts-mini-conference-data-science-and-disinformation-philippines/)',
      technologies: ['Python', 'Pandas', 'NumPy', 'NLTK', 'Matplotlib'],
      links: [
        {
          type: 'Website',
          href: 'https://meloatienza.wixsite.com/golden-era',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/aritako/cs132-g36',
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: '/golden-era.png',
      video: '',
    },
    {
      title: 'Neural Network Models for Electrodes',
      href: 'https://github.com/aritako/binary-signal-classification',
      dates: 'May 2024 - June 2024',
      active: true,
      description: 'Built, trained and tested MLP, CNN and RNN models via TensorFlow. \
      Conducted in-depth analysis between neural networks in performing binary classification\
      Performed Hyperparameter Tuning, achieving 99.22% accuracy on best chosen model.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/aritako/binary-signal-classification',
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: '/electrodes.png',
      video: '',
    }
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

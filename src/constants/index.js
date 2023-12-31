import {
    comingsoon,
    miro,
    datadog,
    american,
    shell,
    cloudnative,
    infrastructure,
    cloud,
    serverless,
    alessandro,
    fabrizio,
    orlando,
    meg,
    githubWhite,
    linkedinWhite,
    twitterWhite,
    producthuntWhite,
    logo
} from '../assets'


const navLinks = [
    {
        id: "how",
        title: "How it works",
    },
    {
        id: "pricing",
        title: "Pricing",
    },
    {
        id: "docs",
        title: "Docs",
        url: "https://docs.kubespaces.io"
    },
    {
        id: "about",
        title: "About",
    }
];

const socials = [
    {
        title: "github",
        icon: githubWhite,
        url: "https://github.com/kubespaces-io"
    },
    {
        title: "linkedin",
        icon: linkedinWhite,
        url: "https://www.linkedin.com/company/kubespaces-io"
    },
    {
        title: "twitter",
        icon: twitterWhite,
        url: "https://www.x.com/kubespaces"
    },
    {
        title: "producthunt",
        icon: producthuntWhite,
        url: "https://www.linkedin.com/company/kubespaces-io    "
    }
]

const navFooter = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "pricing",
        title: "Pricing",
    },
    {
        id: "community",
        title: "Community",
    }
]

const benefits = [
    {
        title: "CloudNative Technology",
        icon: cloudnative,
        description: "Committed to modern cloud approaches."
    },
    {
        title: "Infrastructure Freedom",
        icon: infrastructure,
        description: "Free from complex infrastructure management."
    },
    {
        title: "Cloud Integration",
        icon: cloud,
        description: "User-friendly experience for incorporating cloud services."
    },
    {
        title: "Serverless Approach",
        icon: serverless,
        description: "Straightforward and streamlined path into serverless adoption."
    },
];

const products = [
    {
        title: "Free Trial",
        icon: logo,
        points: [
            "14-day free trial, with no credit card required, full access to all features.",
            "Easily upgrade to a paid plan at any time, no need to reinstall or reconfigure.",
            "Connect to your identity provider to manage users and permissions.",
            "Use our scalable, secure, and reliable cloud infrastructure to run your workloads."
        ],
        price: "0,- $/month"
    },
    {
        title: "Gold",
        icon: logo,
        points: [
            "An infinitely scalable, secure, and reliable cloud infrastructure to run your workloads.",
            "Start small and scale up as your business grows.",
            "Get priority support from our team of experts.",
            "Major identity providers supported (Okta, Azure AD, Google, etc.)",
        ],
        price: "Pay as you go"
    },
    {
        title: "Platinum",
        icon: logo,
        points: [
            "Bring your own cloud infrastructure to run your workloads.",
            "Onboard your developers and teams to our platform.",
            "Work with us to build custom features and integrations.",
            "Dedicated support from our team of experts."
        ],
        price: "Call for a Quote"
    },
    {
        title: "Custom",
        icon: logo,
        points: [
            "Come join us as a partner to build the future of cloud-native development.",
            "Branded experience for your customers.",
            "Custom features and integrations.",
            "Be part of our roadmap and help shape the future of cloud-native development."
        ],
        price: "Call for a Quote"
    },
];

const clients = [
    {
        title: "Coming Soon",
        icon: comingsoon,
    },
    {
        title: "Coming Soon",
        icon: comingsoon,
    },
    {
        title: "Coming Soon",
        icon: comingsoon,
    },
    {
        title: "Coming Soon",
        icon: comingsoon,
    },
];

const team = [
    {
        name: "Alessandro Vozza",
        title: "CEO",
        image: alessandro,
        description: "I'm Alessandro, a software engineer and developer advocate living in Amsterdam."
    },
    {
        name: "Fabrizio Marras",
        title: "CIO",
        image: fabrizio,
        description: "I'm Fabrizio, experienced in steering projects from conception to successful realization, with a distinctive skill set that combines technical and creative domains."
    },
    {
        name: "Meg Stefouli",
        title: "CPO",
        image: meg,
        description: "I am Meg, a forward-thinking manager with extensive experience in stakeholder coordination, event organization and logistics planner."
    },
    {
        name: "Orlando Hutchings",
        title: "COO",
        image: orlando,
        description: "I'm Orlando, experienced operator with demonstrated success scaling startups from ideation to post-series B."
    },    
]

export { navLinks, navFooter, socials, benefits, clients, products, team };

import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Sghaier',
    lastName: 'Jihed',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Oral Surgeon',
    avatar: '/images/avatar.jpg',
    location: 'Tunisie',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/dr.sghaier_jihed?igsh=MWsweHNkd2h3Nm15bg==',
    },

    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:sghaier.jihed25@gmail.com ',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Oral Surgeon</>,
    subline: <>
        I am Dr. Jihed Sghaier, an oral and maxillofacial surgeon based in Tunisia. Welcome to my professional portfolio, where I share my work, expertise, and dedication to patient care.
    </>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>At the forefront of oral and maxillofacial surgery, Dr. Sghaier brings a blend of expertise, compassion, and innovation to every patient interaction. With years of experience in performing complex surgeries and a dedication to advancing dental health, Dr. [Name] has transformed countless smiles and improved lives.

            This portfolio showcases Dr. [Name]'s achievements, expertise, and commitment to patient care. Explore the journey of precision, care, and excellence that defines a true leader in oral surgery.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Military Hospital of Tunisia',
                timeframe: '202O -2023 ',
                role: 'Oral Surgeon',
                achievements: [
                    <>Performed over 50 complex oral and maxillofacial surgeries with a 95% success rate.</>,
                    <>Developed and implemented new surgical protocols, reducing patient recovery times by 20%.</>,
                    <>Trained junior surgeons and medical staff, improving the department's overall efficiency and knowledge base.</>

                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/2.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/3.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Monastir Dental Hospital',
                timeframe: '2023 - Present',
                role: 'Surgery Vanguard',
                achievements: [
                    <>Led advanced surgical procedures, including pioneering minimally invasive techniques in oral and maxillofacial surgery.</>,
                    <>Collaborated with interdisciplinary teams to enhance patient outcomes, achieving a 98% satisfaction rate.</>,
                    <>Published research on innovative dental surgical methods in reputed medical journals.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/30.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/31.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },

                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Faculty of Dental Medicine, Monastir',
                description: <>Studied advanced dental medicine and surgery, focusing on oral and maxillofacial techniques.</>,
            },
            {
                name: 'Farhat Hached High School, Msaken',
                description: <>Completed a Bachelor’s degree in Mathematics, developing strong analytical and problem-solving skills.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Oral and Maxillofacial Surgery',
                description: <>Specialized in a wide range of oral surgeries, including advanced dental implants, corrective jaw surgery, and facial trauma treatment.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/5.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/44.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Dental Implantology',
                description: <>Expert in the planning and placement of dental implants with a focus on achieving long-term success and minimal discomfort for patients.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/11.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/20.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Medical Research and Education',
                description: <>Skilled in conducting clinical research and providing educational materials on modern surgical techniques for the dental community.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/4.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/34.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
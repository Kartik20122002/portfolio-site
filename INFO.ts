
import youtubepro from "@/public/Projects/YoutubePro.png"
import gmanager from "@/public/Projects/Gmanager.png"
import texttools from "@/public/Projects/Text-Tools.png"

export const name = "Kartik Hatwar";
export const firstName = "Kartik";

export const currentDesignation = "Software Developer";

export const emailId = 'kartikhatwar98@gmail.com';

export const aboutme = "In my free time, I love reading fiction books, listening to music, and watching movies. I also enjoy trekking and find peace and comfort in the mountains. Besides these, I love swimming and dancing, and I'm always eager to develop new hobbies and excel at them. If I'm not engaged in any of these activities, you'll likely find me petting dogs."

export const tagline = "When I'm not on the laptop, I enjoy gaming, swimming, and petting dogs.";

export const expTagline = "I've been doing web development for about 4 years now, and I'm currently working in KPIT as Software Developer.";

export const experience = [
    {
        companyName : 'KPIT Technologies',
        role : 'Software Developer',
        skills : ['React.js' , 'Java' , 'Python']
    },
    {
        companyName : 'Gypssy',
        role : 'Front-End Developer',
        skills : ['Next.js' , 'Redux' , 'Tailwind CSS']
    },
    {
        companyName : 'Kalvee EdTech',
        role : 'Full Stack Developer',
        skills : ['React.js' , 'Tailwind CSS' , 'Typscript']
    }
]

export const skills = [
    { name: 'React Js', icon: '/Skills/react.ico' },
    { name: 'Firebase', icon: '/Skills/firebase.ico' },
    { name: 'Next Js', icon: '/Skills/nextjs.svg' },
    { name: 'Framer Motion', icon: '/Skills/framer.ico' },
    { name: 'Typescript', icon: '/Skills/typescript.ico' },
    { name: 'Node Js', icon: '/Skills/nodejs.ico' },
    { name: 'Git', icon: '/Skills/git.ico' },
    { name: 'Github', icon: '/Skills/github.ico' },
    { name: 'HTML', icon: '/Skills/html.ico' },
    { name: 'CSS', icon: '/Skills/css.ico' },
    { name: 'Javascript', icon: '/Skills/javascript.ico' },
    { name: 'DataBase', icon: '/Skills/database.ico' },
    { name: 'Java', icon: '/Skills/java.ico' },
    { name: 'Python', icon: '/Skills/python.ico' },
    { name: 'MongoDB', icon: '/Skills/mongodb.ico' },
    { name: 'Next Auth', icon: '/Skills/nextauth.png' },
    { name: 'Postman', icon: '/Skills/postman.ico' },
    { name: 'Redux', icon: '/Skills/redux.ico' },
    { name: 'SQL', icon: '/Skills/sql.ico' },
    { name: 'VS Code', icon: '/Skills/visual-studio-code.ico' },
    { name: 'Tailwind CSS', icon: '/Skills/tailwind-css.ico' },
]

export const projects = [
    {
        id: 0,
        name: "Youtube Pro",
        type : 'Progressive Web App',
        imgLink: youtubepro,
        desc : "Ad-Free Video Streaming and Downloading Platform, providing core features of YouTube. User can watch videos, channels, playlists, and can perform actions like subscribing, rating, comment, share, etc. Authenticated with Google Auth 2.0 for best security.",
        liveLink: 'https://youtubepro.vercel.app',
        gitLink : 'https://github.com/Kartik20122002/YouTube-2.0',
        stackUsed : ['Next.js','Tailwind CSS' , 'Typescript' , 'Framer Motion' , 'Next-Auth' ]
    },
    {
        id: 1,
        name: "Gmanager",
        type : 'Web App',
        imgLink: gmanager,
        desc : "Optimized Gmail PDF management through segregation by sender, enhancing navigation and retrieval efﬁciency for speciﬁc documents. Empowered users to create custom folders based on PDF attachments, promoting personalized content organization and efﬁcient workﬂows.Integrated PDF preview feature for immediate viewing, facilitating seamless downloading of PDFs as required enhancing user convenience and productivity. Validated by feedback from over 50 users.",
        liveLink : 'https://gmanager-gvl7.onrender.com/',
        gitLink : 'https://github.com/Kartik20122002/Gmanager',
        stackUsed : ['Node.js' , 'Express.js' , 'Passport.js' , 'EJS Template']
    },
    {
        id: 2,
        name: "Text-Tools",
        type : 'Web App',
        imgLink: texttools,
        desc : "Text-Tools is a Web-App to help users with various things such as Image to Text Translation, Paragraph Summarizer, Text to Speech,etc.With a User Account, Users can Sign up and save results in their account and directly download saved data to their local devices. Authenticated with JWT for best security.'",
        liveLink : 'https://texttools98.onrender.com/',
        gitLink : 'https://github.com/Kartik20122002/Text-Tools',
        stackUsed : ['Node.js' , 'Express.js', 'EJS Template']
    },

]
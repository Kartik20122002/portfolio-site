
import youtubepro from "@/public/Projects/YoutubePro.png"
import gmanager from "@/public/Projects/Gmanager.png"
import texttools from "@/public/Projects/Text-Tools.png"

export const name = "Kartik Hatwar";

export const firstName = "Kartik";

export const description = ""

export const emailId = 'kartikhatwar98@gmail.com';

export const tagline = "When I'm not on the laptop, I enjoy gaming, swimming, and petting dogs.";

export const expTagline = "I've been doing web development for about 3 years now, and I'm always eager to learn more in this fast paced industry.";

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
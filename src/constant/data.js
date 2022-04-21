/* eslint-disable import/no-anonymous-default-export */
import images from "./images";


const projects = [
    {
        name: "LinkedIn Clone with Authentication Function",
        description: "Responsive website clone of the popular online service provider using React.js, Styled Components, Redux and Firebase.",
        imgUrl: images.linkedin,
        github: "https://github.com/gemsolis/LinkedIn-Clone.git",
        site:"https://linkedin-clone-96766.web.app/home",

    },

    {
        name: "Netflix Clone using TMDB API",
        description: "Desktop version clone of the popular streaming service online using React.js, Sass, TMDB Api and Firebase.",
        imgUrl: images.netflix,
        github: "https://github.com/gemsolis/Netflix-Clone-React-Project.git",
        site:"https://netflix-clone-react-project.web.app",
    },

    {
        name: "Fully Responsive Restaurant Website— Gericth",
        description: "Responsive restaurant website built with React.js, Sass and Firebase.",
        imgUrl: images.restaurant,
        github: "https://github.com/gemsolis/Restaurant-Website-ReactJS.git",
        site:"https://restaurant-website-reactjs.web.app/",
    },

    {
        name: "Todo App —— Vanilla Js",
        description: "Simple Todo App just using Vanilla JS.",
        imgUrl: images.todoapp,
        github: "https://github.com/gemsolis/TODOAPP-Version-1.2.git",
        site:"https://todo-app-project-4d8ed.web.app",
    },

]

const composers = [
    {
        index: 1,
        question:"What application do you use to promote your music?",
        result1: "Spotify(57%)",
        result2: "Youtube(32%)",
        result3: "Others(11%)",
    },
    {
        index: 2,
        question:"Are these applications giving you enough exposure compared to the other genre?",
        result1: "Yes(16%)",
        result2: "No(17%)",
        result3: "Maybe(67%)",
    
    },

    {
        index: 3,
        question:"Would you like to consider a new platfrom that could give you more network?",
        result1: "Yes(83%)",
        result2: "No(17%)",
        result3: "Maybe(0%)",
    },
]

const listeners = [
    {
        index: 4,
        question:"How frequently do you listen to instrumentals?",
        result1: "Everyday(70%)",
        result2: "Once in a while(20)",
        result3: "Rarely(10%)",
    },

    {
        index: 5,
        question:"What are the reason why you listen to them?",
        result1: "Meditation(8/20)",
        result2: "Motivation(16/20)",
        result3: "Concentration(14/20)",
        result4: "Mental Health(14/20)",
        result5: "Entertainment(12/20)",
    },

    {
        index: 6,
        question:"What app do you use most of the time?",
        result1: "Spotify(40%)",
        result2: "Youtube(60%)",
        result3: "Others(0%)",
    },

    {
        index: 7,
        question:"Do you know any specific artist who produce this kind of music?",
        result1: "Yes(20%)",
        result2: "(80%)",

    },

    {
        index: 8,
        question:"What problem do you face when searching instrumental music online?",
        result1: "Ads Popup(20/20)",
        result2: "Inaccesible(14/20)",
        result3: "Limited(16/20)",
        result4: "None(4/20)",

    },
    {
        index: 9,
        question:"Would you like to consider a new platform with better features?",
        result1: "Yes(80%)",
        result2: "No(10%)",
        result3: "Maybe(10%)",
    },
]


export default { projects, composers, listeners };
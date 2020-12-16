import CalendappImage from '../static/projectImages/Calendapp.svg'
import ShopifyIcon from '../static/projectImages/Shopify.svg';
import HTML5Icon from '../static/icons/html.svg';
import JavaScriptIcon from '../static/icons/javascript.svg';
import CSSIcon from '../static/icons/css.svg';
import ReactIcon from '../static/icons/react-js.svg';
import NodeJSIcon from '../static/icons/node-js.svg';
import ExpressJSIcon from '../static/icons/expressjs.svg';
import MongoDBIcon from '../static/icons/mongodb.svg';
import jQueryIcon from '../static/icons/jquery.svg';
import LiquidIcon from '../static/icons/liquid.svg';

const data = [
    {
        id: 1,
        tech: [{icon: LiquidIcon, name:"Liquid"}, {icon: JavaScriptIcon, name:"JavaScript"}, {icon: HTML5Icon, name:"HTML"}, {icon: CSSIcon, name: "CSS"}, {icon: jQueryIcon, name: "jQuery"}],
        info: {
            type: "Web Developer",
            name: "P3 Media",
            description: "Developed various features for Shopify merchants. An extremely popular request was a gift with purchase feature, which generated over $1.5 million for a store within a couple hours. Improved site speed, and fixed numerous JavaScript and style bugs.",
        },
        repo: "",
        image: ShopifyIcon
    },
    {
        info:{
            type: "Scheduler App",
            name: "Calendapp",
            description: "Calendapp is a web application inspired by Calendly to allow users to schedule meetings more easily. Integrated with Google Calendar API to ensure there are no conflicts in schedule. Also includes a premium plan which allows a custom length of meeting. Default 60 minute length meetings for free.",
        },
        repo: "https://github.com/hatchways/team-carbonara",
        tech: [{icon: ReactIcon, name:"React"}, {icon: NodeJSIcon, name: "NodeJS"}, {icon:ExpressJSIcon, name: "Express"}, {icon: MongoDBIcon, name: "MongoDB"}],
        id: 2,
        image: CalendappImage
    },
]

export default data;
import backendImg from '../assets/backend.png'
import cloudImg from '../assets/cloud.png'
import databaseImg from '../assets/database.png'
import frontendImg from '../assets/ux.png'
const skillsData = [
    {
        s_no:1,
        s_name:'Frontend Development',
        s_image:frontendImg,
        s_description:"React.js — Working with the UI/UX team and implementing designs. In-depth knowledge of JavaScript, CSS, HTML, and familiar with TypeScript. Knowledge of REACT tools including React.js, Webpack, Redux and MobX."
    },
    {
        s_no:2,
        s_name:'Backend Development',
        s_image:backendImg,
        s_description:"Node.js — Developing high-performance applications by writing testable, reusable, and efficient code. Implementing effective security protocols, data protection measures, and storage solutions. Running diagnostic tests, repairing defects, and providing technical support."
    },
    {
        s_no:3,
        s_name:'Database Management',
        s_image:databaseImg,
        s_description:"NoSQL — MongoDB. Familiar with middleware libraries like Mongoose SQL — MySQL, PostgreSQL, DB2, Oracle DB. Familiar with middleware and ORM tools like Hibernate, Objection and Knex.js"
    },
    {
        s_no:4,
        s_name:'Cloud Technologies',
        s_image:cloudImg,
        s_description:"Amazon Web Services — S3, EC2, CloudFront, Route 53, IAM Google Cloud Platform"
    }
]

export default skillsData;
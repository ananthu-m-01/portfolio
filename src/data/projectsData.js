import ecoBinImg from '../assets/ecobin-bg.jpg';
import quizAppImg from '../assets/quiz-app-bg.jpg';
import todoListImg from '../assets/todo-bg.avif';

const projectsData = [
    {
        p_no: 1,
        p_name: 'EcoBin',
        p_image: ecoBinImg,
        p_description: 'A Python web application built using Django framework to automate waste management processes efficiently.',
        p_link: "https://github.com/ananthu-m-01/web-app-waste-management-system-django"
    },
    {
        p_no: 2,
        p_name: 'Quiz App',
        p_image: quizAppImg,
        p_description: 'An interactive React quiz application that delivers real-time score tracking and dynamic question rendering.',
        p_link: "https://github.com/ananthu-m-01/quiz-app"
    },
    {
        p_no: 3,
        p_name: 'E-commerce API',
        p_image: todoListImg,
        p_description: 'A Spring Boot backend API for an e-commerce application supporting RESTful services and CRUD operations.',
        p_link: "https://github.com/ananthu-m-01/Todolist-Application-SpringBoot"
    },
]

export default projectsData;

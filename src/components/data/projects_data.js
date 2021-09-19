import weather from '../../assets/projects_images/weather.png'
import tweeter from '../../assets/projects_images/tweeter.png'
import quiz from '../../assets/projects_images/quiz.png'
import todo from '../../assets/projects_images/todo.png'
import notes from '../../assets/projects_images/notes.png'
import fbMessanger from '../../assets/projects_images/fbMessanger.png'
import social from '../../assets/projects_images/social.png'
import Wapp from '../../assets/projects_images/Wapp.png'
import expense from '../../assets/projects_images/expense.png'
import amazon from '../../assets/projects_images/amazon.png'
import stock from '../../assets/projects_images/stock.png'

const data_projects = [
    // FYP project
    {
        name: 'A responive website of Pakistan Stock Market \n Prediction and analysis.\n ',
        image: stock,
        deployed_url: 'https://psx-flask-stock.herokuapp.com/hello',
        github_url: 'https://github.com/abdussa1am/flask-stock-prediction',
        category: ['fyp']
    },
    // MERN Stack Project

    {
        name: 'Social Media App using MERN Stack with functionlities of google sign in,jwt create account and sigin in,Create Post,Like Post ,Comment post,Delete Post',
        image: social,
        deployed_url: 'https://goofy-rosalind-cd0461.netlify.app/',
        github_url: 'https://github.com/syedasifali548/mern-socialmedia',
        category: ['mern']
    },
    // React js Projects
    {
        name: 'Messangin App with React and firebase firestore database',
        image: fbMessanger,
        deployed_url: 'https://fb-messenger-clone-72b2a.firebaseapp.com/',
        github_url: 'https://github.com/syedasifali548/FB-Messanger-Clone',
        category: ['react.js']
    },
    {
        name: 'AMAZONE CLONE with firebase firestore database,Firebase Authentication',
        image: amazon,
        deployed_url: 'https://sailaniweb.firebaseapp.com/',
        github_url: 'https://github.com/syedasifali548/amazonClone',
        category: ['react.js']
    },
    {
        name: 'Expense tracker with firebase firestore database',
        image: expense,
        deployed_url: 'https://expense-tracker-e6020.firebaseapp.com/',
        github_url: 'https://github.com/syedasifali548/Expense-Tracker',
        category: ['react.js']
    },




    

    {
        name: 'QUIZ APP using Javascript',
        image: quiz,
        deployed_url: 'https://quizapp-168af.web.app/',
        github_url: 'https://github.com/syedasifali548/QUIZ-APP',
        category: ['vanilla']
    },

    {
        name: 'WEATHER APP using Javascript',
        image: weather,
        deployed_url: 'https://weather-app-87522.firebaseapp.com/',
        github_url: 'https://github.com/syedasifali548/WEATHER_APP',
        category: ['vanilla']
    },

    {
        name: 'TODO APP using Javascript',
        image: todo,
        deployed_url: 'https://todo-application-67fac.firebaseapp.com/',
        github_url: 'https://github.com/syedasifali548/TODO-APPLICATION',
        category: ["vanilla"]
    },

    {
        name: 'TEXT NOTES MAKING APP using Javascript',
        image: notes,
        deployed_url: 'https://notes-making-app-82be3.firebaseapp.com/',
        github_url: 'https://github.com/syedasifali548/Notes-Making-App',
        category: ['vanilla']
    }
]

export default data_projects;
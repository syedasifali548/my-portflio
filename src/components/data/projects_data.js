import weather from '../../assets/projects_images/weather.png'
import tweeter from '../../assets/projects_images/tweeter.png'
import quiz from '../../assets/projects_images/quiz.png'
import todo from '../../assets/projects_images/todo.png'
import notes from '../../assets/projects_images/notes.png'
import fbMessanger from '../../assets/projects_images/fbMessanger.png'
import Wapp from '../../assets/projects_images/Wapp.png'

const data_projects = [
    {
        name: 'FACEBOOK MESSANGER CLONE with firebase firestore database',
        image: fbMessanger,
        deployed_url: 'https://fb-messenger-clone-72b2a.firebaseapp.com/',
        github_url: '',
        category: ['react.js']
    },

    {
        name: 'WHATSAPP CLONE with firebase firestore database and with google authentication',
        image: Wapp,
        deployed_url: 'https://whatsapp-clone-63a6d.firebaseapp.com/',
        github_url: '',
        category: ['react.js']
    },

    {
        name: 'TWEETER CLONE with firebase firestore database',
        image: tweeter,
        deployed_url: 'https://twitter-clone-c4e50.firebaseapp.com/',
        github_url: '',
        category: ['react.js']
    },

    

    {
        name: 'QUIZ APP using Javascript',
        image: quiz,
        deployed_url: 'https://quizapp-168af.web.app/',
        category: ['vanilla']
    },

    {
        name: 'WEATHER APP using Javascript',
        image: weather,
        deployed_url: 'https://weather-app-87522.firebaseapp.com/',
        category: ['vanilla']
    },

    {
        name: 'TODO APP using Javascript',
        image: todo,
        deployed_url: 'https://todo-application-67fac.firebaseapp.com/',
        github_url: '',
        category: ["vanilla"]
    },

    {
        name: 'TEXT NOTES MAKING APP using Javascript',
        image: notes,
        deployed_url: 'https://notes-making-app-82be3.firebaseapp.com/',
        github_url: '',
        category: ['vanilla']
    }
]

export default data_projects;
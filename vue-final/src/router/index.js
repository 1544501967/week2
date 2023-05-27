import VueRouter from 'vue-router';
import community from '../components/community';
import register from '../components/register';
import main  from '../components/main'
import blog from '../components/blog'
import user from '../components/user';
// import The from '../components/The'
import my from '../components/my'
import level from '../components/level';
import radio from '../components/radio';
import sleep from '../components/sleep';
import classify from '../components/classify'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:main
        },
        {
            path:'/blog',
            component:blog,
            children:[
                {
                    path:'/',
                    component:my
                },
                {
                    path:'/level',
                    component:level
                },
                {
                    path:'/radio',
                    component:radio
                },
                {
                    path:'/sleep',
                    component:sleep
                },
                {
                    path:'/classify',
                    component:classify
                }
            ]
        },
        {
            path:'/register',
            component: register

        },
        {
            path:'/community',
            component: community
        },
        {
            path:'/user',
            component:user
        }
    ]
})
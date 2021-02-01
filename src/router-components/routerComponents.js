import Home from "../components/Home";
import BuldNewLesson from "../components/scool-pages/BuldNewLesson";

const routerComponents = {
    home: {
        component: Home,
        path: '/',
    },
    newLesson: {
        component: BuldNewLesson,
        path: '/new-lesson',
    },

}

export default routerComponents

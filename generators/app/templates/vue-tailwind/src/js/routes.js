import Home from '../pages/Home';
import About from '../pages/About';

const routes = [
    { path: '/', component: Home, default: true },
    { path: '/about', component: About, default: true },
];

export default routes;
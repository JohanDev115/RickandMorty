import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact'
}

const router = async () => {
    const $header = null || document.querySelector('header');
    // const $footer = null || document.querySelector('footer');
    const $content = null || document.querySelector('#content');

    $header.innerHTML = await Header();
    // $footer.innerHTML = await Footer();
    $content.innerHTML = '';
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    $content.innerHTML = await render();
}

export default router; 
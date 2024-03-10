// routes.js
import Home from './components/Content/Home';
import Tasks from '../pages/Tasks/Tasks';
import Pomodoro from '../pages/Pomodoro/Pomodoro';
import Analytics from '../pages/Analytics/Analytics';
import Settings from '../pages/Settings/Settings';
import LandingPage from '../pages/LandingPage/LandingPage';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/tasks', exact: true, component: Tasks },
  { path: '/pomodoro', exact: true, component: Pomodoro },
  { path: '/analytics', exact: true, component: Analytics },
  { path: '/settings', exact: true, component: Settings },
  { path: '/landing-page', exact: true, component: LandingPage}
];

export default routes;

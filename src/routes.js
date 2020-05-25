import App from './App';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';

export default [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];
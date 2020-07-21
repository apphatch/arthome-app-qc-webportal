import { AuthLayout, Login, Register } from './';

export default {
  path: 'auth',
  component: AuthLayout,
  childRoutes: [
    { path: 'login', component: Login, isIndex: true, role: 'protected' },
    { path: 'register', component: Register, role: 'protected' },
  ],
  role: 'protected',
};

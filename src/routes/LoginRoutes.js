import { lazy } from 'react';

import MinimalLayout from 'layout/MinimalLayout';

const AuthLogin = lazy(() => import('pages/authentication/Login'))

const AuthRegister = lazy(() => import('pages/authentication/Register'))

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: '/register',
      element: <AuthRegister />
    }
  ]
};

export default LoginRoutes;

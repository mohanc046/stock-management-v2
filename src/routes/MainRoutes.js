import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';

const DashboardDefault = lazy(() => import('pages/dashboard'));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          element: <DashboardDefault />
        }
      ]
    }
  ]
};

export default MainRoutes;

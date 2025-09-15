import { RouterProvider } from 'react-router';
import { appRouter } from './app.router';

export const OpenNftApp = () => {
  return <RouterProvider router={appRouter} />;
};
import { RouterProvider } from 'react-router';
import { appRouter } from './app.router';

export const NftApp = () => {
  return <RouterProvider router={appRouter} />;
};


import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from '../pages/home';

const routers = createHashRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
]);

const Router = () => {
  return <RouterProvider router={routers} />;
};

export default Router;

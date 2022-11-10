import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddServices from './components/AddServices/AddServices';
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './components/Pages/Home/HomePage/HomePage';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Main from './layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: '/add-service',
          element: <AddServices></AddServices>
        },
        {
          path: '/service-details/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/service-details/${params.id}`)
        }
      ],

    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }

  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

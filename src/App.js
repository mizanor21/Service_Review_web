import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './components/Pages/Home/HomePage/HomePage';
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

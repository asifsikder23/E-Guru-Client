import { async } from '@firebase/util';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog';
import Courses from '../components/Courses';
import Data from '../components/Data';
import Error from '../components/Error';
import Faq from '../components/Faq';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Main from '../Layout/Main';



 export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch('http://localhost:5000/courses')
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/course/:id',
          loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
          element: <Data></Data>
          
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    }
  ]);
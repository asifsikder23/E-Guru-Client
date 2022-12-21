
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog';
import CourseCategory from '../components/CourseCategory';
import Courses from '../components/Courses';
import Data from '../components/Data';
import Error from '../components/Error';
import Faq from '../components/Faq';
import Home from '../components/Home';
import Login from '../components/Login';
import Primium from '../components/Primium';
import PrivateRoute from '../components/PrivateRoute';
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
          loader: () => fetch('https://b610-lerning-platform-server-side-asifsikder23.vercel.app/courses')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/course/:id',
          loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-asifsikder23.vercel.app/course/${params.id}`),
          element: <Data></Data>
          
        },
        {
          path: '/premium',
          element: <PrivateRoute><Primium></Primium></PrivateRoute>
          
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    }
  ]);
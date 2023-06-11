import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CourseCategories from './components/CourseCategories/CourseCategories';
import Course from './components/CourseContainer/CourseContainer';
import CourseContainer from './components/CourseContainer/CourseContainer';
import CourseDetails from './components/CourseDetails/CourseDetails';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';

function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: ()=>{
            return fetch("http://localhost:5000/course-categories")
          }
        },
        {
          path:"/courses",
          element:<Home></Home>,
          loader: ()=>{
            return fetch("http://localhost:5000/course-categories")
          }
        },
        {
          path:"/blog",
          element:<Blog></Blog>
        },
        {
          path:"/course-details/:id",
          element:<PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
          loader: (params)=>{
            return fetch(`http://localhost:5000/course-details/${params?.params?.id}`)
          }
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/course/:name/:id",
          loader:(params)=>{
            return fetch(`http://localhost:5000/course/${params.params.name}/${params.params.id}`)
          },
          element:<CourseContainer></CourseContainer>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;

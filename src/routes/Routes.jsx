import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home/Home";
import Category from '../pages/home/Category/Category'
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/news/news/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/LoginReg/Login";
import Register from "../pages/LoginReg/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Terms from "../pages/LoginReg/Terms";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/categories/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    },

    {
        path: '/categories',
        element: <Layout></Layout>,
        children: [
           
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])
export default router
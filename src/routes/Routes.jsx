import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home/Home";
import Category from '../pages/home/Category/Category'
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/news/news/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/LoginReg/Login";
import Register from "../pages/LoginReg/Register";


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
            }
        ]
    },
    {
        path: '/categories',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Category></Category>,
                loader: ()=> fetch(`http://localhost:5000/news`)
            },
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },{
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])
export default router
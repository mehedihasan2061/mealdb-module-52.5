import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Meal from "../components/Meal/Meal";
import Resturant from "../components/Resturant/Resturant";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',element:<Home></Home>
            },
            {
                path:'/home',element:<Home></Home>
            },
            {
                path: '/resturant',
                loader: () => {
                    return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
                },
                element:<Resturant></Resturant>
            },
            {
                path: '/resturant/:id',
                loader: ({ params }) => {
                    return fetch(
                      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
                    );
                },
                element:<Meal></Meal>
            },
            {
                path: '/about',
                element:<About></About>
            }
        ]
    }
])
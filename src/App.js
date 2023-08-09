import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from "./compodents/layer/header";
import Content1 from "./compodents/layer/content1";
import Content2 from "./compodents/layer/content2";
import Footer from "./compodents/layer/footer";

import Button from "./compodents/button";
import CardList from "./compodents/cardList";
import ChartList from "./compodents/chartList";

import ButtonAccordHwS4 from "./compodents/buttonAccordHwS4";
import ElementTabHwS4 from "./compodents/elementTabHwS4";

import SlideImage from "./compodents/sildeImage";
import LikeButtonAnimation from "./compodents/likeButtonAnimation";

import MusicOlayList from "./compodents/musicPlayList";

import Form from "compodents/form";

import HomeworksForm from "compodents/homeworksForm"
import HomeworkLoginForm from "compodents/homeworkLoginForm/createAccout"
import LoginAccout from "compodents/homeworkLoginForm/loginAccout"

import Login from "compodents/login"

import ProductList from "compodents/product/productList.jsx"
import AuthLayout from "compodents/layer/auth";
import NonAuthLayout from "compodents/layer/nonAuth";

import { axiosClient } from 'helper/axiosClient';
import { DEFAULT, LOCATION } from 'constants/index';

import NotFoundPage from 'pages/404';

import HomePages from "pages/home";
import { LoginPages } from "pages/login";
import { ProductsListPage } from "pages/products";
import  RegisterPages  from "pages/register.jsx";
import TodoPage from 'pages/todo';

import PlayListPages from 'pages/musicPlayList';
import { SlideImagesPages } from 'pages/images';


import "./App.css";


function App() {
  

  const navigate = useNavigate();

  const token = window.localStorage.getItem(DEFAULT.TOKEN);

  useEffect(() => {
    if (token) {
      axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      navigate(LOCATION.LOGIN);
    }
  }, [navigate, token]);

  return (
    // Bài tập todo list 

    // <div className="App">
    //   {/* <Header />  */}
    //   {/* <Footer />  */}
    //   {/* <Layout
    //     contentHeader="Xin chào, đây là header"
        
    //     contentFooter="Xin chào, đây là footer"
    //     >
    //     <Content1 />
        
    //     <Content2 />
    //     <Button
    //       icon={<i class="fa-brands fa-apple fa-xl" />}
          
    //       name="Continue with Apple"
          
    //       classes="bg-white"
    //     />
    //     <Button
    //       icon={<i class="fa-brands fa-apple fa-xl" />}
          
    //       name="Continue with Apple"
          
    //       classes1="bg-black"
    //     />
    //   </Layout>
    //     */}

    //   {/* <CardList /> */}

    //   {/* <ChartList />  */}
    //   {/* bài tập 1 */}
    //   {/* <ButtonAccordHwS4 />
    //   <ElementTabHwS4 />
    //   <SlideImage />
    //   <LikeButtonAnimation /> */}
      


    //   {/* list play */}
    //   {/* <MusicOlayList /> */}

    //   {/* <Form /> */}

    //   {/* bài tập về nhà form */}
    //   {/* <HomeworksForm /> */}

    //   {/* form login */}
    //   <Login />

    //   {/* <ProductList /> */}
    // </div>
    // bài tập homwork form login
    // <>
    //   <div className='container bg-muted'>
    //     <HomeworkLoginForm />
    //   </div>

    //   <div className='container bg-secondary'>
    //     <LoginAccout />
    //   </div>

    // </>


    <>
  
     {
        !token ? (
          <Routes>
            <Route path={LOCATION.HOME} element={<NonAuthLayout />} >
              <Route index path={LOCATION.LOGIN} element={<LoginPages />} />
              <Route path={LOCATION.REGISTER} element={<RegisterPages />} />
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path={LOCATION.HOME} element={<AuthLayout />}>
              <Route index element={<HomePages />} />
              <Route path={LOCATION.PRODUCT} element={<ProductsListPage />} />
              <Route path={LOCATION.MUSICPLAY} element={<PlayListPages />} />
              {/* <Route path={LOCATION.IMAGE} element={<SlideImagesPages />} /> */}
              {/* <Route path="cart-employee" element={<CartEmployeePage />} />
              <Route path="cart-manager" element={<CartManagerPage />} />
              <Route path="button-accordion" element={<ButtonAccordions />} /> */}
              <Route path={LOCATION.FORM} element={<Form />} />
              <Route path={LOCATION.TODO} element={<TodoPage />} />

            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )
      }
      
    </>


    //   <div className="App">
    //     <AuthLayout
    //       headerTitle="Xin chào, đây là header!"
    //     >
    //       <main className="container">
    //         Đã đăng nhập
    //       </main>
    //     </AuthLayout>

    //     <NonAuthLayout
    //       footerTitle="Xin chào, đây là footer!"
    //     >
    //       <main className="container">
    //         Chưa đăng nhập
    //       </main>
    //     </NonAuthLayout>
    //   </div>  

    
  );
}

export default App;

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './pages/App.tsx';
import EnterpriseMode from './pages/EnterpriseMode.tsx';
import Forms from './pages/Forms.tsx';
import Home from './pages/Home.tsx';
import LogIn from './pages/LogIn.tsx';
import ProductSimple from './pages/ProductSimple.tsx';
import Register from './pages/Register.tsx';
import UserMode from './pages/UserMode.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="user/:profile" element={<UserMode />} />
        <Route path="enterprise/:profile" element={<EnterpriseMode />} />
        <Route path="product/:productname" element={<ProductSimple />} />
      </Route>
      <Route path="/" element={<Forms />} >
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>,
)

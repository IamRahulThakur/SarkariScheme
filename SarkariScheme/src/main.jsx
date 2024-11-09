// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Categories from './components/CategoryWise/Categories.jsx';
import States from './components/States/States.jsx';
import Central from './components/CentralSchemes/Central.jsx';
import Schemes from './components/CategoriesScheme/Schemes.jsx';
import StateScheme from './components/StateSchemes/StateScheme.jsx';


const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="categories" element={<Categories />} />
      <Route path="central" element={<Central />} />
      <Route path="states" element={<States />} />
      <Route path="Schemes" element={<Schemes />} />
      <Route path="StateScheme" element={<StateScheme />} />
    </Route>
  )

);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Equipe from './pages/equipe.jsx';
import Previsao from './pages/previsao.jsx';
import Solucao from './pages/solucao.jsx';
import Problema from './pages/problema.jsx';
import Home from './pages/home.jsx'
import PageNotFound from './pages/pageNotFound.jsx';
import {createBrowserRouter, RouterProvider,Link} from 'react-router-dom'
import Contato from './pages/contato.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      { index: true, element: <Home/>},
      { path: 'problema', element: <Problema/>},
      { path: 'solucao', element: <Solucao/>},
      { path: 'previsao', element: <Previsao/>},
      { path: 'equipe', element: <Equipe/>},
      { path: 'contato', element: <Contato/>},
      { path: '*',element: <PageNotFound/>},
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>  
  </React.StrictMode>,
)

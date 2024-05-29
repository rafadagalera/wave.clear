import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Equipe from './pages/equipe.jsx';
import Previsao from './pages/previsao.jsx';
import Solucao from './pages/solucao.jsx';
import Problema from './pages/problema.jsx';
import Home from './pages/home.jsx'
import {createBrowserRouter, RouterProvider,Link} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      { index: true, element: <Home/>},
      { path: 'equipe', element: <Equipe/>},
      { path: 'previsao', element: <Previsao/>},
      { path: 'solucao', element: <Solucao/>},
      { path: 'problema', element: <Problema/>}

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>  
  </React.StrictMode>,
)

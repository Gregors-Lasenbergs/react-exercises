import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import MoreTasks from "./components/MoreTasks.tsx"
import EvenMoreTasks from './components/EvenMoreTasks.tsx'

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/moreTasks', element: <MoreTasks /> },
    { path: '/evenMoreTasks', element: <EvenMoreTasks /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

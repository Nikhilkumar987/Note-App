import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Terms from './components/Terms/Terms.jsx'
import NoteForm from  './components/NoteForm/NoteForm.jsx'
import { NoteContextProvider } from './Context/contex.jsx'
import NoteList from './components/NoteList/NoteList.jsx'
import Privacy from './components/Privacy/Privacy.jsx'
import SingleNote from './components/SingleNote/SingleNote.jsx'
// const router = createBrowserRouter({
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//         path: "",
//         element: <Home />
//   }
// ]
// })


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/noteForm' element={<NoteForm/>}/>
      <Route path='/noteList' element={<NoteList/>} />
      <Route path='/privacy' element={<Privacy/>} />
      <Route path="/notes/:id" element={<SingleNote />}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(

 <React.StrictMode>
   <NoteContextProvider>
    <RouterProvider router={router}/>
  </NoteContextProvider>
 </React.StrictMode>
)

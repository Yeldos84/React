import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './components/style.css'

import { Nav } from './components/HeaderBlog'
import { Profile } from './components/Profile'
import { AddPosts } from './components/AddPosts'

export const person = {
  username: "Yeldos",
  age: 40,
  address: "NY",
  status: "online",
  email: "email@email.com",
}



const initial = {
  title: "Blog",
  descriptions: "Lorem"
}

function App() {
  
  return (
    <>
      
      <div id='root'>
        <div id='main'>
          <div><Nav  title = {initial.title}/></div>
          <div><Profile username = {person.username} status = {person.status}
                                age = {person.age} address = {person.address} email = {person.email} /></div>

          <div><AddPosts/></div>
          
        </div>  
      </div>
      
    </>
  )
}

export default App


import './style.css'



import { Nav } from './HeaderBlog'
import { Profile } from './Profile'
import { AddPosts } from './AddPosts'
import { ProfilePhoto } from './ProfilePhoto'
import { Settings } from './Settings'

export const person = {
  username: "Yeldos",
  age: 40,
  address: "NY",
  status: "online",
  email: "email@email.com",
  photo: "car.jpg"
}


const initial = {
  title: "Blog",
  descriptions: "Lorem"
}

export function Home() {
  
  return (
    <>       
      <div id='root'>
        <div id='photo'><ProfilePhoto photo = {person.photo} username = {person.username} /></div>
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


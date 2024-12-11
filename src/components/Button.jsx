import  {person} from "../App"
import { useState } from 'react';
import { AddPosts } from './AddPosts'

export function ClickButton() {
    // let postCount = 1;
    const [count, setCount] = useState(1)   

    function counter() {
        return setCount(count + 1)
    };     
    function press(e){
        
        console.log(e.target); 
        
        const main = document.getElementById('main');
        const input = document.getElementById('post-input');
        console.log(input.value);

        
        

        let div = document.createElement('h5');
        let date = document.createElement('p');
        let img = document.createElement('button');
        img.textContent = '❤';
        img.style.borderRadius = '50%'
        date.textContent = `Date: ${new Date().toLocaleDateString('ru-RU')}  ${new Date().toLocaleTimeString('ru-RU')} Author: ${person.username}`
        if (input.value === '') {
            alert('Add text for post');
            input.style.backgroundColor = 'red';
        }
        else{
            counter()
            alert("Add new post?")
            input.style.backgroundColor = 'white';
            div.textContent = `Post #${count} : ${input.value}`;
            
            console.log(count);
            
            main.appendChild(div);
            main.appendChild(date);
            main.appendChild(img);
            input.value = '';
        }
        
        
        
        
        

    }
    
    return <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={press}>Click</button>;
}
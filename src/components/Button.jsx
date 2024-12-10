import  {person} from "../App"

import { AddPosts } from './AddPosts'

export function ClickButton() {
    let postCount = 1;         
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
            alert("Add new post?")
            input.style.backgroundColor = 'white';
            div.textContent = `Post #${postCount++}: ${input.value}`;
            main.appendChild(div);
            main.appendChild(date);
            main.appendChild(img);
            input.value = '';
        }
        
        
        
        
        

    }
    
    return <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={press}>Click</button>;
}
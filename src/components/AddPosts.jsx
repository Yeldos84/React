import './style.css'
import { ClickButton } from './Button'


export function AddPosts() {

    
              
    return <>  
        
        <div className="input-group mb-3">
            <input id='post-input' type="text" className="form-control" placeholder="What's new?" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
            {/* <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={}>Add post</button>    */}
           
        </div>
        
        <div><ClickButton/></div>
        
        
     </>;
}

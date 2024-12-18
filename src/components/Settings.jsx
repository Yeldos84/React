import './style.css'

export function Settings() {

    const main = document.getElementById('main').style.display = 'none';
    const photo = document.getElementById('photo').style.display = 'none';

    
              
    return <>  
        <div id='setdiv'>
        <a className="btn btn-primary" href="#" role="button">Link</a>
        <button className="btn btn-primary" type="submit">Button</button>
        <input className="btn btn-primary" type="button" value="Input"></input>
        <input className="btn btn-primary" type="submit" value="Submit"></input>
        <input className="btn btn-primary" type="reset" value="Reset"></input>
        </div>
        
        
     </>;
}

import './style.css'



export function ProfilePhoto(props) {
              
    return <>  
        
        <div className="card">
        <img src={props.photo} className="card-img-top" alt="photo"></img>
            <div className="card-body">
                <h5 className="card-title">{props.username}</h5>
                
                <a href="#" className="btn btn-primary">Edit</a>
            </div>
        </div>
        
     </>;
}

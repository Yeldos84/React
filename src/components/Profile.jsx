import './style.css'

// export const person = {
//     username: "Yeldos",
//     age: 40,
//     address: "NY",
//     status: "online",
//     email: "email@email.com"
//   }


export function Profile(props) {
              
    return <>  
        
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">Profile name: {props.username}</h5>
                <p className="card-text">Profile status: {props.status}</p>
            </div>
            <div className="card-footer text-muted">
                <p>age: {props.age}</p>
                <p>address: {props.address}</p>
                <p>email: {props.email}</p>
            </div>
            
        </div>
        
     </>;
}

import { useEffect, useState } from "react";


function Useeffect(){
    const [name,setname]= useState("");
   
    return(
        <>
        <div style={{display: 'flex' , margin:'2cm' } }>
            <button onClick={()=>setname('commet')} style={{padding: '20px' , margin: '20px' , backgroundColor: 'green'}}>comment</button>
            <button onClick={()=>setname('like')} style={{padding: '20px' , margin: '20px', backgroundColor: 'green' }}>like</button>
            <button onClick={()=>setname('share')} style={{padding: '20px' , margin: '20px', backgroundColor: 'green'}}>share</button>
        </div>
            <h1 style={{backgroundColor: 'red' , width: '4cm',  margin: '3cm', padding: '20px'}}>{name}</h1>
        </>
    )
}

export default Useeffect;
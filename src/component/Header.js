import React,{ useState} from 'react'

const Headers = () => {
  const [name,setName]=useState("lavanya")
  return (
    <div>
      <h2> my name is {name} </h2>
      <button onClick={()=>setName("sm")}>click here</button>
      
    </div>
  )
}

export default Header
import React from 'react'

export default function ServiceCard(props) {
  return (
    <>
    <div style={{
        backgroundColor:"pink",
        width:"450px",
        borderRadius:"20px"

    }}>

    <h1 style={{color:"black"}}>{props.title}</h1>
    <p style={{color:"blue",fontSize:"25px"}}>Description:{props.description}</p>

    </div>
    </>
  )
}

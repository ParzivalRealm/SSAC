import React, { useState, useEffect } from 'react';
import user_icon from './user.svg'

function Dropdown(props){
  const [toggled, setToggle] = useState(false);
  const [menu_elements, setMenu_elements] = useState("hi")
  const [visible, setVisibile] = useState("visible")

  var img =  `w-12 p-2 ${visible}`

  function Handleclick(args){
    setToggle(!args)
    if (toggled){
      setVisibile("visible")
    setMenu_elements("oli")
    } else{
      setVisibile("invisible")
      setMenu_elements("bye")
    }
  }

  return(
    <a onClick={() => Handleclick(toggled) }>
      <div className="flex content-end m-auto ">
        <p>{menu_elements}</p>
        <img src={user_icon} className= {img}></img>
      </div>
    </a>
  )
}



export default Dropdown
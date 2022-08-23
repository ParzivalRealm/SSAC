function Button(props){
  return(
    <div className="m-auto basis-1/8">
      <button className="border-solid border-2 bg-white border-blue-400 w-28 rounded-xl">{props.name}</button>
    </div>
  )
}

export default Button
import reddit_logo from './reddit_logo.svg'
import Searchbar from './Searchbar.js'
import Button from './Button.js'
import Dropdown from './Dropdown.js'

function Navbar(props){
  return(
    <div className="container bg-white max-w-screen-xl flex justify-around">
      <div className="flex basis-1/2">
        <img src={reddit_logo} className="p-2 w-14"></img>
        <span className="m-auto font-bold">Home</span>
      </div>
        <Searchbar/>
        <Button name="login"/>
        <Button name="Sign in"/>
        <Dropdown/>

    </div>
  );

}
export default Navbar
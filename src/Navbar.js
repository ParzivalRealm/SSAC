import reddit_logo from './reddit_logo.svg'
function Navbar(){
  return(
    <div className="container bg-white max-w-screen-xl">
      <div className="w-14 flex">
        <img src={reddit_logo} className="p-2"></img>
        <span className="m-auto font-bold">Home</span>
      </div>
    </div>
  );

}
export default Navbar
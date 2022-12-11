import {useLocation, useNavigate} from 'react-router-dom';

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
    function pathMathRoute(route) {
        if(route === location.pathname) {
            return true
        }
    }

  return <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
    <header className="flex items-center justify-between max-w-6xl px-3 mx-auto">
        <div>
            <img src="https://cdn.myanimelist.net/images/mal-logo-xsmall.png?v=1634263200" alt="logo" className="h-5 cursor-pointer" onClick={()=>{
                navigate("/")
            }}/>
        </div>
        <div>
            <ul className="flex space-x-10">
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-500"}`} onClick={()=>{
                navigate("/")
            }}>Home</li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/seiyuus") && "text-black border-b-red-500"}`} onClick={()=>{
                navigate("/seiyuus")
            }}>Seiyuu</li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/signin") && "text-black border-b-red-500"}`} onClick={()=>{
                navigate("/signin")
            }}>Signin</li>
            </ul>
        </div>
    </header>
  </div>;
}

export default Header;

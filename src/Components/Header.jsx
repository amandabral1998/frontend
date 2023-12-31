import "../CSS/Header.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart  , AiOutlineBars , AiOutlineClose} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const { auth, setAuth  , setSearch} = useContext(DataContext);
  const userData = JSON.parse(localStorage.getItem("user"));
  const [hamActive , setHamActive] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      // console.log(storedUserData);
      const userData = JSON.parse(storedUserData);
      setAuth(userData.name);
    }
  }, [setAuth]);
  return (
    <>
      <div className='header d-flex justify-content-around align-items-center '>
        <div className="ham-holder">

        
        <Link to={"/"} className='icon-link'>
          {" "}
          <div className='header-logo d-flex align-items-center'>
            <svg
              enableBackground='new 0 0 56.693 56.693'
              height='40.693px'
              id='Layer_1'
              version='1.1'
              viewBox='0 0 50.693 56.693'
              width='60px'
              xmlSpace='preserve'
              xmlns='http://www.w3.org/2000/svg'
             className="siteIcon">
              <g>
                <path
                  clipRule='evenodd'
                  d='M45.575,45.243c-0.24-0.002-0.486,0.055-0.715,0.162   c-0.26,0.104-0.523,0.223-0.77,0.328l-0.367,0.152l-0.477,0.189v0.006c-5.168,2.096-10.596,3.324-15.619,3.432   c-0.184,0.006-0.369,0.006-0.551,0.006c-7.898,0.004-14.343-3.66-20.848-7.27c-0.228-0.119-0.457-0.182-0.686-0.182   c-0.294,0-0.593,0.109-0.811,0.314c-0.219,0.205-0.349,0.504-0.347,0.807c-0.001,0.395,0.212,0.756,0.507,0.99   c6.104,5.299,12.793,10.223,21.788,10.227c0.176,0,0.354-0.004,0.535-0.008c5.721-0.129,12.195-2.061,17.217-5.217l0.029-0.02   c0.658-0.393,1.316-0.84,1.936-1.336c0.387-0.287,0.652-0.732,0.648-1.197C47.032,45.802,46.331,45.243,45.575,45.243z'
                  fillRule='evenodd'
                />
                <path
                  clipRule='evenodd'
                  d='M52.544,42.317v-0.002c-0.02-0.504-0.127-0.885-0.336-1.203l-0.021-0.029   l-0.025-0.031c-0.213-0.232-0.416-0.32-0.639-0.418c-0.658-0.254-1.617-0.389-2.773-0.393c-0.83,0-1.748,0.078-2.666,0.279   l-0.002-0.061l-0.928,0.309l-0.016,0.008l-0.523,0.17v0.023c-0.613,0.254-1.172,0.572-1.691,0.947   c-0.32,0.242-0.59,0.561-0.605,1.051c-0.008,0.266,0.127,0.572,0.354,0.754c0.223,0.182,0.484,0.242,0.713,0.242   c0.055,0,0.105-0.002,0.15-0.01l0.045-0.004l0.035-0.006c0.453-0.096,1.113-0.16,1.885-0.27c0.662-0.072,1.365-0.127,1.975-0.127   c0.432-0.002,0.818,0.027,1.084,0.086c0.133,0.027,0.232,0.062,0.289,0.09c0.018,0.008,0.031,0.016,0.039,0.021   c0.012,0.037,0.029,0.131,0.027,0.266c0.006,0.51-0.213,1.455-0.508,2.377c-0.289,0.924-0.641,1.85-0.875,2.465   c-0.055,0.143-0.09,0.297-0.09,0.467c-0.004,0.248,0.096,0.547,0.311,0.746c0.209,0.199,0.479,0.277,0.707,0.277h0.01   c0.342-0.004,0.631-0.139,0.881-0.334c2.352-2.115,3.168-5.488,3.201-7.389L52.544,42.317z'
                  fillRule='evenodd'
                />
                <path
                  clipRule='evenodd'
                  d='M31.046,19.657c-1.383,0.104-2.977,0.209-4.572,0.42   c-2.443,0.322-4.889,0.744-6.907,1.703c-3.932,1.594-6.59,4.995-6.59,9.989c0,6.273,4.038,9.461,9.141,9.461   c1.699,0,3.084-0.215,4.355-0.531c2.021-0.639,3.721-1.807,5.742-3.936c1.168,1.596,1.488,2.342,3.506,4.041   c0.531,0.211,1.062,0.211,1.486-0.105c1.277-1.064,3.51-2.979,4.678-4.039c0.533-0.426,0.426-1.064,0.105-1.592   c-1.166-1.49-2.338-2.766-2.338-5.637v-9.565c0-4.039,0.32-7.76-2.656-10.52c-2.443-2.23-6.27-3.082-9.246-3.082h-1.277   c-5.418,0.314-11.159,2.654-12.434,9.352c-0.213,0.852,0.426,1.168,0.852,1.273l5.95,0.744c0.641-0.105,0.957-0.639,1.064-1.166   c0.531-2.34,2.443-3.51,4.568-3.723h0.428c1.275,0,2.656,0.533,3.4,1.596c0.85,1.275,0.744,2.977,0.744,4.465V19.657z    M29.878,32.302c-0.744,1.484-2.021,2.441-3.404,2.766c-0.211,0-0.529,0.105-0.85,0.105c-2.336,0-3.719-1.809-3.719-4.465   c0-3.402,2.02-4.996,4.568-5.74c1.383-0.318,2.977-0.426,4.572-0.426v1.277C31.046,28.263,31.151,30.175,29.878,32.302z'
                  fillRule='evenodd'
                />
              </g>
            </svg>
          </div>
        </Link> 

        {!hamActive === true ? (
  <AiOutlineBars className="hamburger" onClick={() => setHamActive(!hamActive)} />
) : (
  <AiOutlineClose className="close-icon hamburger" onClick={() => setHamActive(!hamActive)} />
)}

        {/* <AiOutlineBars className="hamburger" onClick={()=> setHamActive(!hamActive)}/> */}
        </div>

      
        <div className={`icons d-flex gap-4 align-items-center  ${hamActive} ` }>
         
            <Link to={"/"} className='home-link '>
            <div className='icon d-flex  align-items-center'>
              <BiHomeAlt2 className='reacticons' />
              <span>Home</span>
              </div>
            </Link>
            
          

          <div className='icon search'>
            <div className='searchbox d-flex align-items-center'>
              <CiSearch className='reacticons searching' />
              <span>
                <input type='text' placeholder='Search Product' onChange={(e)=> setSearch(e.target.value)} />
              </span>
            </div>
          </div>

          <Link to={"/cart"} className='home-link'>
            <div className='icon cart d-flex  align-items-center'>
              <AiOutlineShoppingCart className='reacticons' />
              <span>Cart</span>
            </div>
          </Link>

          {!userData ? null : (
            <Link to={`/orderHistory/:${userData.id}`} className='home-link'>
              <div className='icon order'>
                <span>Order History</span>
              </div>
            </Link>
          )}

          {/* {console.log(userData.id)} */}

          {auth ? (
            <div
              className='user-name'
              onClick={() => {
                const confirm = window.confirm("Are you sure want to logout?");
                if (confirm) {
                  localStorage.removeItem("user");
                  setAuth("");
                  navigate('/')
                 
                }
              }}
            >
              {auth}
            </div>
          ) : (
            <div className='login-register'>
              <Link to={"/login"} className='user-link'>
                {" "}
                Login/Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;

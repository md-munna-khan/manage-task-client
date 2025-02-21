import { useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate()
  const {loading} =useAuth()
  const [isShow, setIsShow] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const handleToggleUser = ()=>{
    setIsHidden(!isHidden)
    setIsShow(false)
  }
  const { user,signOutUser} = useAuth();
  const handleSignOutUser = ()=>{
    signOutUser()
    navigate('/')
    window.scrollTo(0, 0)
  }
  return (
    <>
      <section className="shadow fixed left-0 w-full z-20 top-0 backdrop-blur bg-gray-50 bg-opacity-15 px-5 py-2">
       <div className="container px-0 md:px-5  mx-auto">
       <nav className="flex justify-between items-center">
          <div>
            <Link className={`logo flex items-center`} to="/">
         
              <h3 className="text-xl md:text-2xl font-medium md:font-semibold">
              Task Management </h3>
            </Link>
          </div>
          {/* <div className="menu lg:bg-white lg:shadow-sm lg:px-5 md:py-2 lg:rounded-md">
            <ul className={`lg:flex w-full text-sm text-center z-10 py-5 lg:py-0 lg:bg-transparent space-y-5 lg:space-y-0 left-0 right-0 mx-auto absolute lg:static flex-col justify-center lg:flex-row gap-5 items-center top-[70px] md:top-[80px]  ${isShow? 'block bg-white' : 'hidden'}`}>
              <li onClick={()=>{
                setIsShow(!isShow)
                window.scrollTo(0,0)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary" : ""} hover:text-secondary duration-100 flex justify-center items-center gap-1`
                  }
                  to="/">Home</NavLink></li>
              {user && 
                <li onClick={()=>{
                  setIsShow(!isShow)
                  window.scrollTo(0,0)
                }}>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "text-secondary" : ""} hover:text-secondary duration-100 flex justify-center items-center gap-1`
                    }
                    to="/add-blog"
                  >Add Blog</NavLink>
                </li>
              }
              <li onClick={()=>{
                setIsShow(!isShow)
                window.scrollTo(0,0)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary" : ""} hover:text-secondary duration-100 flex justify-center items-center gap-1`
                  }
                  to="/all-blogs"
                >All blogs</NavLink>
              </li>
              <li onClick={()=>{
                setIsShow(!isShow)
                window.scrollTo(0,0)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary" : ""} hover:text-secondary duration-100 flex justify-center items-center gap-1`
                  }
                  to="/features"
                >Featured Blogs</NavLink>
              </li>
              {user && 
                <li onClick={()=>{
                  setIsShow(!isShow)
                  window.scrollTo(0,0)
                }}>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "text-secondary" : ""} hover:text-secondary duration-100 flex justify-center items-center gap-1`
                    }
                    to="/wishlist"
                  >Wishlist</NavLink>
                </li>
              }
            </ul>
          </div> */}
          <div className="user-info flex gap-5 items-center font-medium">
            {user ? (
              <div className={`flex-col bg-slate-50 lg:bg-transparent absolute lg:static w-full lg:fit left-0 top-[48px] py-5 lg:py-0 gap-5 lg:flex-row justify-center lg:gap-4 items-center ${!isHidden ? 'flex' : 'hidden lg:flex'} `}>
                <div className="flex justify-center flex-col items-center">
                  <img referrerPolicy="no-referrer" className="w-[80px] min-h-[80px] lg:min-h-[35px] rounded-full p-1 md:p-0 bg-white object-cover border lg:w-9" src={user?.photoURL} alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} data-tooltip-tip="React-tooltip" />
                  <div onClick={()=> setIsHidden(true)} className="absolute lg:hidden top-5 border text-xl cursor-pointer lg:text-2xl bg-white hover:bg-slate-200 right-5"><RxCross1 /></div>
                </div>
                <button onClick={handleSignOutUser}
                style={{
                  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
                }}
                 className="px-3 border border-gray-400 bg-[#5C49D8] text-white cursor-pointer flex items-center gap-2 rounded-full shadow text-sm py-2 bg-secondary font-medium">Log Out <MdOutlineLogout className="text-lg" /></button>
              </div>
            ) : (
              <div className={`${loading? 'opacity-0' : 'opacity-100'} flex gap-2 md:gap-5`}>
                <Link className="border px-4 pb-1 rounded-full bg-[#5C49D8] text-white" to="/login">Log In</Link>
                {/* <Link className="border px-4 pb-1 rounded-full bg-[#5C49D8] text-white" to="/register">Register</Link> */}
              </div>
            )}
          </div>
          <div className="bar-icon flex items-center gap-4  ml-1 z-20 cursor-pointer lg:hidden text-xl">
          {user && <div title="User Details" onClick={handleToggleUser} className={`w-8 border overflow-hidden rounded-full bg-slate-50 inline-block lg:hidden`}>
            <img className="min-h-[30px] object-cover" src={user?.photoURL} alt="photoURL" />
          </div>
          }
          {/* <div className={`${!isShow? '' : 'text-secondary'}`} onClick={handleToggleBar}>
          {isShow? <RxCross1 />: <FaBarsStaggered />}
          </div> */}
          </div>
        </nav>
       </div>
      </section>
    </>
  );
};

export default Navbar;
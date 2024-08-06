'use client'
import { signIn, signOut } from "next-auth/react"


const Profile = ({session}) => {
    
console.log(session)
  return (
    <>
    {session ? 
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                            
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li
                        onClick={()=>{
                            signOut()
                        }}
                        ><a>Logout</a></li>
                    </ul>
                </div>
                :
                <div>

                <button className="btn btn-primary"
                onClick={()=>{
                    signIn()
                }}
                >SignIn</button>
                </div>
            }
    </>
  )
}

export default Profile
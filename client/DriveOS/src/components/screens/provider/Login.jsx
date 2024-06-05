import { useContext, useState } from "react";
import Txtinput from "../../../ui/Txtinput";
import { NavLink } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useNavigate } from "react-router-dom";



const Login = () =>{
const [email, setemail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(false)
const { signIn } = useContext(AuthContext)
const navigate = useNavigate();

const handleSubmit = async () => {
    setLoading(true)
    // validate email and password
    const message =  !email || !password
    ? 'Kindly fill all fields'
    : !email.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]{3,}(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      )
    ? 'invalid email format'
    : password.length < 8
    ? 'minimum password length should be 8 characters'
          : 'success';
    if (message === 'success') {
      try {
        const res = await signIn({email, password})
        if (res.success) {
          setLoading(false)
          toast.success(res.message)
          return navigate('/provider/dashboard')
        }
        setLoading(false)
        return toast.error(res.message)
      } catch (error) {
        setLoading(false)
        return toast.error('error digning in')
      }
    }
    setLoading(false)
    return toast.warn(message)
  }
 
<div className="flex flex-1">
<div className="flex-1 min-h-screen p-20 bg-[#1D3261] text-white">
  <div className="flex items-center justify-center mb-5">
    <img
      src="/logoss.png"
      alt="DriveSOS Logo"
      width={200}
      height={250}
    />
  </div>
  <div className="p-20 bg-[#f5ffff] rounded-lg">
    <div className="flex items-center justify-center mb-4">
      <h2 className="text-2xl font-bold text-[#1D3261]">Login</h2>
    </div>
    <div className="space-y-4 text-[#8E8E93]">
      <div className="">
        <Txtinput
          placeholder="Email"
          type="email"
          icon={<MailOutlineOutlinedIcon color="grey" className="w-4 h-4" />}
          onchange={(e)=>setemail(e.target.value)}
        />
      </div>
      <div className="">
        <Txtinput
          placeholder="Password"
          type="password"
          icon={<LockOutlinedIcon color="grey" className="w-4 h-4" />}
          onchange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <NavLink
          to="/login"
          className="text-[#1D3261] text-sm font-bold"
        >
          Forgot password?
        </NavLink>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-[#074EEB] text-white rounded-md px-10 py-2 hover:bg-blue-500"
          
        >
          {loading ? 'loading...' : 'Login'}
        </button>
      </div>
      <span className="text-[#8E8E93] text-sm flex justify-center">
        Don&rsquo;t have an account yet?
        <NavLink
          to="/signup"
          className="text-[#074EEB] hover:text-blue-200 ml-1"
        >
          Create one now!
        </NavLink>
      </span>
      
    </div>
  </div>
</div>
<div className="flex-[1.65] bg-[#F5FFFF]">
  <div className="flex flex-col justify-center items-center  p-8">
    <img
      src="/Auth Image.svg"
      alt="Login Image"
      width={400}
      height={450}
    />
    <div className="py-5">
      <h2 className="font-bold text-4xl text-[#1D3261]">
        Whatever service you need
      </h2>
      <h2 className="font-bold text-4xl text-[#1D3261]">On the road</h2>
      <h2 className="font-bold text-4xl text-[#1D3261]">On the go!</h2>
    </div>
  </div>
</div>
</div>
}


export default Login
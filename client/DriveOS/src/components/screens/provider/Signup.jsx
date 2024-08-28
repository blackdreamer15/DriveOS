import React, { useState } from "react";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import Txtinput from "../../../ui/Txtinput";



const Signup =() => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [services, setServices] = useState([
    { name: "Flat Tire Repairs", value: "service1" },
    { name: "Towing Service", value: "service2" },
    { name: "Mechanic Support", value: "service3" },
    { name:"Fuel Delivery", value:"service4" },
    { name:"Battery Jump Start" ,value:"service5"},
    { name:"Flat Tire Repair" ,value:"service5"}

  ]);
  const [tags, setTags] = useState([]);
  const [locSelect, setLocSelect] = useState(null);
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckboxChange = (item) => {
    setTags((prevTags) =>
      prevTags.includes(item.value)
        ? prevTags.filter((tag) => tag !== item.value)
        : [...prevTags, item.value]
    );
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== cPassword) {
      alert("Passwords do not match!");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: tags,
          password,
          confirm_password: cPassword,
        }),
        credentials: 'include', // Include credentials (cookies)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
        }
        // console.log('Success:', data);
        localStorage.setItem('token', data.token);
        return navigate("/dashboard");
        // navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (

    <div className="flex flex-1">
      <div className="flex-1 min-h-screen p-20 bg-[#1D3261] text-white flex flex-col justify-center items-center">
        <div className="flex items-center justify-center mb-5">
          <img
            src="/logoss.png"
            alt="DriveSOS Logo"
            width={200}
            height={250}
          />
        </div>
        <div className="justify-center">
          <h2 className="font-bold text-4xl">
            Register your business and become a
          </h2>
          <h2 className="font-bold text-4xl">Service Provider today!</h2>
          <h2 className="font-bold text-4xl">It&rsquo;s so easy!</h2>
        </div>
      </div>
      <div className="flex-[1.85] max-h-screen bg-[#f5ffff]">
          {error && <p className="text-red-500">{error}</p>}
        <form
          className="flex-col flex-1 space-y-5 px-4 h-full pt-10"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <label className="block text-[#1D3261] font-medium">
              Business Details
            </label>
            <div className="">
              <Txtinput
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Business Name"
                icon={<BusinessOutlinedIcon color="grey" className="w-4 h-4" />}
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <Txtinput
                  type="email"
                  placeholder="Business Email Address"
                  icon={<MailOutlineIcon color="grey" className="w-4 h-4" />}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <Txtinput
                  type="tel"
                  placeholder="Business Phone Number"
                  icon={<PhoneOutlinedIcon color="grey" className="w-4 h-4" />}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            </div>
            <div className=" space-y-5">
            <div className="text-[#1D3261] space-y-1">
              <label htmlFor="services" className="block font-medium">
                Services
              </label>
              <ul className="mt-2 flex flex-row flex-wrap space-x-5 items-center rounded-md px-3 py-2 mb-4 bg-[#F5FFFF] shadow">
                {services.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex flex-row space-x-1 items-center"
                    >
                      <input
                        type="checkbox"
                        name={item.name}
                        value={item.value}
                        checked={tags.includes(item.value)}
                        onChange={() => handleCheckboxChange(item)}
                        className="mr-2"
                      />
                      <span className="">{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="w-1/2">
                <Txtinput
                  type="password"
                  placeholder="Password"
                  label="Password"
                  icon={<LockOutlinedIcon color="grey" className="w-4 h-4" />}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <Txtinput
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  icon={<LockOutlinedIcon color="grey" className="w-4 h-4" />}
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#074EEB] text-white rounded-md px-10 py-2 hover:bg-blue-500 w-full"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign up'}
            {/* Sign up */}
          </button>
        </form>
        {show && (
          <MapInput
            selected={locSelect}
            setSelected={setLocSelect}
            close={() => setShow(false)}
          />
        )}
      </div>
    </div>

    
  );
};
 export default Signup;
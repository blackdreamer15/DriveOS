// import React, { useContext, useState } from "react";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import AdjustIcon from "@mui/icons-material/Adjust";
// import { Box } from "@mui/material";
// // import Txtinput from "../../components/ui/Txtinput";
// import Txtinput from "../../../ui/Txtinput";
// // import useSWR from "swr";
// import axios from "axios";
// //  import getBaseUrl from "../../utils/api";

// import { AuthContext } from "../../Context/AuthContext";

// import { toast } from "react-toastify";


// const Notifications = () => {
 
//   const [isLoading, setisLoading] = useState([]);
//   const [error, seterror] = useState([]);
//   const [data, setdata] = useState([]);
 

//   return (
//     <Box className="flex-1 flex flex-col space-y-5">
//       <div className="flex flex-row items-center justify-between">
//         <h3 className="text-2xl font-semibold text-slate-700">
//           Incoming Requests
//         </h3>

//       </div>
//       <div className="flex flex-col space-y-5">
       
//         {isLoading && <span>No new request available</span>}
//         {error && error}
//         {data?.data &&
//           data?.data.map((req, index) => {
//             return (
//               <div
//                 key={index}
//                 className="flex flex-row space-x-5 px-5 py-2 bg-[#f5ffff] rounded-2xl shadow items-center justify-between"
//               >
//                 <div className="flex flex-row space-x-20">
//                   <div>
//                     <h3 className="text-base font-normal text-slate-400">
//                       Name:
//                     </h3>
//                     <h3 className="text-base font-normal text-slate-400">
//                       Request type:
//                     </h3>
//                     <h3 className="text-base font-normal text-slate-400">
//                       Location:
//                     </h3>
//                   </div>
//                   <div>
//                     <h3 className="text-base font-normal text-slate-700">
//                     {req?.request?.userId?.name}
//                     </h3>
//                     <h3 className="text-base font-normal text-slate-700">
//                       {req?.request?.serviceType}
//                     </h3>
//                     <h3 className="text-base font-normal text-slate-700">
//                       {req?.request?.clientLoc?.description}
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="flex flex-row space-x-5 items-center">
//                   <button
//                     onClick={() => handleAccept({reqId:req?.request?._id, noticeId:req?._id})}
//                     className="px-5 py-1 text-[#f5ffff] border bg-blue-400 rounded-md  font-semibold"
//                   >
//                     Accept
//                   </button>
//                   <button 
//                   onClick={() => handleReject({reqId:req?.request?._id, noticeId:req?._id})}
//                   className="px-5 py-1 text-[#f5ffff] border bg-red-400 rounded-md  font-semibold">
//                     Decline
//                   </button>
//                 </div>
//               </div>
//             )
//           })}
//       </div>
//     </Box>
//   )
// }

// export default Notifications;

import React, { useContext, useState, useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Notifications = () => {
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("https://backendflow12-9a3b18291504.herokuapp.com/api/repair-requests", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, [token]);

  const handleAccept = async (request) => {
    try {
      toast.info('Kindly stay on this page while we process your request');
      const res = await axios.put(`https://backendflow12-9a3b18291504.herokuapp.com/api/repair-requests/${request.reqId}/accept`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.data.success) {
        return toast.warn(res.data.message);
      }
      toast.success('Request Accepted Successfully');
    } catch (error) {
      toast.error('We encountered an error processing your request');
      console.log("Error", error);
    }
  };

  const handleReject = async (request) => {
    try {
      toast.info('Kindly stay on this page while we process your request');
      const res = await axios.put(`https://backendflow12-9a3b18291504.herokuapp.com/api/repair-requests/${request.reqId}/decline`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.data.success) {
        return toast.warn(res.data.message);
      }
      toast.success('Request Declined Successfully');
    } catch (error) {
      toast.error('We encountered an error processing your request');
      console.log("Error", error);
    }
  };

  return (
    <Box className="flex-1 flex flex-col space-y-5">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-2xl font-semibold text-slate-700">
          Incoming Requests
        </h3>
      </div>
      <div className="flex flex-col space-y-5">
        {isLoading && <span>Loading requests...</span>}
        {error && <span>{error}</span>}
        {data?.length === 0 && <span>No new request available</span>}
        {data &&
          data.map((req, index) => (
            <div
              key={index}
              className="flex flex-row space-x-5 px-5 py-2 bg-[#f5ffff] rounded-2xl shadow items-center justify-between"
            >
              <div className="flex flex-row space-x-20">
                <div>
                  <h3 className="text-base font-normal text-slate-400">Name:</h3>
                  <h3 className="text-base font-normal text-slate-400">Request type:</h3>
                  <h3 className="text-base font-normal text-slate-400">Location:</h3>
                </div>
                <div>
                  <h3 className="text-base font-normal text-slate-700">
                    {req?.userId?.name}
                  </h3>
                  <h3 className="text-base font-normal text-slate-700">
                    {req?.serviceType}
                  </h3>
                  <h3 className="text-base font-normal text-slate-700">
                    {req?.location?.address}
                  </h3>
                </div>
              </div>
              <div className="flex flex-row space-x-5 items-center">
                <button
                  onClick={() => handleAccept({ reqId: req?._id })}
                  className="px-5 py-1 text-[#f5ffff] border bg-blue-400 rounded-md font-semibold"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject({ reqId: req?._id })}
                  className="px-5 py-1 text-[#f5ffff] border bg-red-400 rounded-md font-semibold"
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
      </div>
    </Box>
  );
};

export default Notifications;

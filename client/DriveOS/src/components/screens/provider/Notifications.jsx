import React, { useContext, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AdjustIcon from "@mui/icons-material/Adjust";
import { Box } from "@mui/material";
// import Txtinput from "../../components/ui/Txtinput";
import Txtinput from "../../../ui/Txtinput";
// import useSWR from "swr";
import axios from "axios";
//  import getBaseUrl from "../../utils/api";

import { AuthContext } from "../../Context/AuthContext";
// import { declineReq, acceptReq } from "../../services/notify";
import { toast } from "react-toastify";

// const fetchWithToken = (url, token) =>
//   axios
//     .get(url, { headers: { Authorization: "Bearer " + token } })
//     .then((res) => res.data);

const Notifications = () => {
  const { token } = useContext(AuthContext);
  const [reqs, setReqs] = useState([]);
  const { data, error, isLoading } = useSWR(
    [`${getBaseUrl()}/notify/get`, token],
    ([url, token]) => fetchWithToken(url, token),
    { refreshInterval: 90000 }
  );
  // if (error) console.log(error);
  // if (data) console.log(data.data);

  const handleAccept = async (data) => {
    try {
      toast.info('Kindly stay on this page while we process your request')
      const res = await acceptReq(data, token);
      console.log("accept", res);
      if (!res.success) {
        return toast.warn(res.message)
      }
      return toast.success('Request Accepted Successfully')
    } catch (error) {
      toast.error('We encountered an error processing your request')
      console.log("Error", error);
    }
  };




  const handleReject = async (data) => {
    try {
      toast.info('Kindly stay on this page while we process your request')
      const res = await declineReq(data, token);
      console.log("decline", res);
      if (!res.success) {
        return toast.warn(res.message)
      }
      return toast.success('Request Declined Successfully')
    } catch (error) {
      toast.error('We encountered an error processing your request')
      console.log("Error", error);
    }
  };

  return (
    <Box className="flex-1 flex flex-col space-y-5">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-2xl font-semibold text-slate-700">
          Incoming Requests
        </h3>

        {/* <div className="w-72">
          <Txtinput
            placeholder="Search personnel"
            type="text"
            icon={<SearchOutlinedIcon className="w-5 h-5 text-slate-400" />}
          />
        </div> */}
      </div>
      <div className="flex flex-col space-y-5">
        {/* notification card */}
        {isLoading && <span>No new request available</span>}
        {error && error}
        {data?.data &&
          data?.data.map((req, index) => {
            return (
              <div
                key={index}
                className="flex flex-row space-x-5 px-5 py-2 bg-[#f5ffff] rounded-2xl shadow items-center justify-between"
              >
                <div className="flex flex-row space-x-20">
                  <div>
                    <h3 className="text-base font-normal text-slate-400">
                      Name:
                    </h3>
                    <h3 className="text-base font-normal text-slate-400">
                      Request type:
                    </h3>
                    <h3 className="text-base font-normal text-slate-400">
                      Location:
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-base font-normal text-slate-700">
                    {req?.request?.userId?.name}
                    </h3>
                    <h3 className="text-base font-normal text-slate-700">
                      {req?.request?.serviceType}
                    </h3>
                    <h3 className="text-base font-normal text-slate-700">
                      {req?.request?.clientLoc?.description}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-row space-x-5 items-center">
                  <button
                    onClick={() => handleAccept({reqId:req?.request?._id, noticeId:req?._id})}
                    className="px-5 py-1 text-[#f5ffff] border bg-blue-400 rounded-md  font-semibold"
                  >
                    Accept
                  </button>
                  <button 
                  onClick={() => handleReject({reqId:req?.request?._id, noticeId:req?._id})}
                  className="px-5 py-1 text-[#f5ffff] border bg-red-400 rounded-md  font-semibold">
                    Decline
                  </button>
                </div>
              </div>
            )
          })}
      </div>
    </Box>
  )
}

export default Notifications;

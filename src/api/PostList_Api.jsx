import axios from "axios";
import API_URL from "./Api_url";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getPostData = () => {
  return axios
    .get(API_URL)
    .then(
      (response) => response.data,
      toast.success("Success", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    )
    .catch((e) => console.log(e));
};

export default getPostData;

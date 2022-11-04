import axios from "axios";
import API_URL from "./Api_url";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getPostData = (id) => {
  return axios
    .get(API_URL + id)
    .then(
      (response) =>
        response.data.status === "error" 
          ? toast("Post Not found", {
            position: "top-center",
            autoClose: 50,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          : response.data
      
    )
};

export default getPostData;

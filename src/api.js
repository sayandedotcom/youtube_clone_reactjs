import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCAZkmJKKD1ByfyyvezqVWv1ohIdarhVMY",
  },
});

export default request;

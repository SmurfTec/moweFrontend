import axios from "axios";
import { API_BASE } from "Configs/secrets";
const token = JSON.parse(localStorage.getItem("USER_CREDENTIALS"));
const accessToken = token?.accessToken;
const config = {
  headers: { Authorization: `Bearer ${accessToken}` },
};
export const UploadFileToServer = async (payload) => {
  const response = await axios.post(
    `${API_BASE}api/file/upload`,
    payload,config
  );
  console.log(`[UploadFileToServer][API_Response] - `, response.data.result);
  return (response.data?.result);
};
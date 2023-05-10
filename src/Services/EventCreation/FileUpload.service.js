import axios from "axios";
import { API_BASE } from "Configs/secrets";


export const UploadFileToServer = async (payload) => {
  const response = await axios.post(
    `${API_BASE}api/file/upload`,
    payload,
  );
  console.log(`[UploadFileToServer][API_Response] - `, response.data.result);
  return (response.data?.result);
};
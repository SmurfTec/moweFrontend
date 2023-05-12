import axios from "axios";
import { API_BASE } from "Configs/secrets";
const token = JSON.parse(localStorage.getItem("USER_CREDENTIALS"));
const accessToken = token?.accessToken;
const config = {
  headers: { Authorization: `Bearer ${accessToken}` },
};
export const CreateEvent = async (payload) => {
  const response = await axios.post(`${API_BASE}api/event/`, payload, config);
  console.log(`[CreateEvent][API_Response] - `, response.data.result);
  return response.data?.result;
};

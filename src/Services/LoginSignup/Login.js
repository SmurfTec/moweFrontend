import axios from "axios";
import { API_BASE } from "Configs/secrets";

/**
 * Sends an API request for user login
 * @method GET
 * @param {Object} payload {
    username: username,
    password: password,
    device: "Web",
  }
 * @returns
 */
export const RequestLogin = async (payload) => {
  const response = await axios.post(
    `${API_BASE}api/user/login`,
    payload,
  );
  console.log(`[RequestLogin][API_Response] - `, response.data.result);
  return (response.data?.result);
};
export const RequestSignUp = async (payload) => {
    const response = await axios.post(
      `${API_BASE}api/user/login`,
      payload,
    );
    console.log(`[RequestSignUp][API_Response] - `, response.data.result);
    return (response.data?.result);
  };
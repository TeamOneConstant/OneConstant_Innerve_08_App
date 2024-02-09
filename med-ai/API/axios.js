import axios from "axios";

const baseUrl = "https://med-ai-backend.vercel.app/api/v1";

const API = axios.create({ baseURL: baseUrl });

const getAPIWithToken = async () => {
  const APIWithToken = axios.create({ baseURL: baseUrl });
  APIWithToken.interceptors.request.use(async (req) => {
    const value = await AsyncStorage.getItem("user");
    let objToken = JSON.parse(value); // get token from local storage
    let { token } = objToken;
    const authToken = token;
    req.headers.Authorization = `Bearer ${authToken}`;
    return req;
  });
  return APIWithToken;
};

export { API, getAPIWithToken, baseUrl };

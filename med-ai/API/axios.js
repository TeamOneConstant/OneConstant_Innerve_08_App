import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "https://med-ai-backend.vercel.app/api/v1";

const API = axios.create({ baseURL: baseUrl });

const getAPIWithToken = async () => {
  const APIWithToken = axios.create({ baseURL: baseUrl });
  APIWithToken.interceptors.request.use(async (req) => {
    const value = await AsyncStorage.getItem("user");
    console.log(value);
    let objToken = JSON.parse(value);
    req.headers.Authorization = `Bearer ${objToken}`;
    return req;
  });
  return APIWithToken;
};

export { API, getAPIWithToken, baseUrl };

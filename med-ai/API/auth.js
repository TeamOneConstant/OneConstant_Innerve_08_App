// import { API, getAPIWithToken } from "./axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "./axios";
const baseUrl = "https://med-ai-backend.vercel.app/api/v1";

// const value = AsyncStorage.getItem("user");
// console.log(value);
// let objToken = JSON.parse(value);
// let authToken = "";
// let { token } = objToken;
// authToken = token;

async function loginWithPhoneNumber(mobile_number) {
  const body = {
    mobile_number: mobile_number,
  };
  const res = await API.post("/accounts/login", body);
  return res.data;
}

// async function completeProfileDetails(
//   full_name,
//   birth_date,
//   gender,
//   email,
//   address
// ) {
//   const body = {
//     full_name: full_name,
//     birth_date: birth_date,
//     gender: gender,
//     email: email,
//     address: address,
//   };

//   const res = await fetch(`${baseUrl}/accounts/profile-details`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${authToken}`,
//     },
//     body: JSON.stringify(body),
//   });

//   return await res.json();
// }

async function createAuthToken(mobile_number) {
  const body = { mobile_number: mobile_number, password: mobile_number };
  const res = await fetch(`${baseUrl}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
}

// async function completeProfileDetails(
// full_name,
// birth_date,
// gender,
// email,
// address
// ) {
// const body = {
//   full_name: full_name,
//   birth_date: birth_date,
//   gender: gender,
//   email: email,
//   address: address,
// };

//   const APIWithToken = await getAPIWithToken();
//   const res = await APIWithToken.post("/accounts/profile-details", body);
//   return res.data;
// }

// async function createAuthToken(mobile_number) {
//   const body = { mobile_number: mobile_number, password: mobile_number };
//   const res = await API.post("/token", body);
//   return res.data;
// }

// export { loginWithPhoneNumber, completeProfileDetails, createAuthToken };
export { loginWithPhoneNumber, createAuthToken };

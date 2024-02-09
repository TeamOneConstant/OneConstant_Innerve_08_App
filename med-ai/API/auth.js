import { API, getAPIWithToken } from "./axios";

async function loginWithPhoneNumber(mobile_number) {
  const body = {
    mobile_number: mobile_number,
  };
  const res = await API.post("/accounts/login", body);
  return res.data;
}

async function completeProfileDetails(
  full_name,
  birth_date,
  gender,
  email,
  address
) {
  const body = {
    full_name: full_name,
    birth_date: birth_date,
    gender: gender,
    email: email,
    address: address,
  };

  const APIWithToken = await getAPIWithToken();
  const res = await APIWithToken.post("/accounts/profile-details", body);
  return res.data;
}

async function createAuthToken(mobile_number) {
  const body = { mobile_number: mobile_number, password: mobile_number };
  const res = await API.post("/token", body);
  return res.data;
}

export { loginWithPhoneNumber, completeProfileDetails, createAuthToken };

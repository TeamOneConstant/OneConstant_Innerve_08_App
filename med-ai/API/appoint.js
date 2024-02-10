import { API, getAPIWithToken } from "./axios";

async function postAppointment(date, time, booking_for, name, age, gender) {
  const body = {
    date: date,
    time: time,
    booking_for: booking_for,
    name: name,
    age: age,
    gender: gender,
  };

  const APIWithToken = await getAPIWithToken();
  const res = await APIWithToken.post("/medical/appointment", body);
  return res.data;
}

async function getAppointment(id) {
  const body = {
    id: id,
  };

  const APIWithToken = await getAPIWithToken();
  const res = await APIWithToken.get("/medical/appointment", body);
  return res.data;
}

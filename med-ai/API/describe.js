import { API, getAPIWithToken } from "./axios";

async function predictDisease(symptoms) {
  const body = {
    symptoms: symptoms,
  };

  const APIWithToken = await getAPIWithToken();
  const res = await APIWithToken.post("/medical/predict-disease", body);
  return res.data;
}

async function uploadRecords(document) {
  const body = {
    document: document,
  };

  const APIWithToken = await getAPIWithToken();

  const res = await APIWithToken.post("/medical/upload-report", body);
  return res.data;
}

async function getDoctorList() {
  const APIWithToken = await getAPIWithToken();
  const res = await APIWithToken.get("/doctor/get-list");
  return res.data;
}

async function postUploadedInfo(mr_id, info) {
  const body = {
    mr_id: mr_id,
    info: info,
  };
  const APIWithToken = await getAPIWithToken();
  const res = await APIWithToken.post("/medical/report-ocr-info", body);
}

async function bookAppointment(
  docId,
  day,
  time,
  bookFor,
  name,
  gender,
  phone,
  age
) {
  const body = {
    docId: docId,
    day: day,
    time: time,
    booking_for: bookFor,
    name: name,
    gender: gender,
    phone: phone,
    age: age,
  };
  const APIWithToken = await getAPIWithToken();
  const res = await APIWithToken.post("/medical/appointment", body);
}
export {
  predictDisease,
  uploadRecords,
  getDoctorList,
  postUploadedInfo,
  bookAppointment,
};

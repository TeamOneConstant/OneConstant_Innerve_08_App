import { API, getAPIWithToken } from "./axios";
import UploadRecords from "./../Screens/description/UploadRecords";

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
export { predictDisease, uploadRecords, getDoctorList, postUploadedInfo };

import axios from "axios";
import { SERVER_URL } from "./config";
const path = `${SERVER_URL}/api/media`;

// 메인페이지 가져오기
export const getMediaAll = async () => {
  try {
    const res = await axios.get(`${path}/ym`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 날짜별 미디어 리스트 가져오기
export const getDayMedia = async () => {
  try {
    const res = await axios.get(`${path}/day`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 마이로그(볼 거예요 / 봤어요) 가져오기
export const getMedia = async () => {
  try {
    const res = await axios.get(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 로그 뷰(상세) 가져오기
export const getDteilMedia = async imedia => {
  try {
    const res = await axios.get(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 로그 등록
export const postMedia = async () => {
  try {
    const res = await axios.post(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 상태(볼 거예요 / 봤어요) 수정
export const patchIsSaw = async () => {
  try {
    const res = await axios.patch(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 수정
export const putMedia = async () => {
  try {
    const res = await axios.put(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 삭제
export const delMedia = async () => {
  try {
    const res = await axios.delete(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

import { API_URL } from "@/utils/urls";
import axios, { AxiosResponse } from "axios";

import queryString from "query-string";
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) => queryString.stringify(params),
  },
});
axiosClient.interceptors.request.use(
  async (config) => {
    // Kiểm tra xem đã có token trong localStorage chưa
    const token = localStorage.getItem("access_token");

    // Nếu có, thêm token vào header Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error?.message?.data ?? error);
  }
);
export async function getServerSideProps(context: any) {
  const { req } = context;
  const { user } = req.session || {}; // Tìm kiếm thông tin user trong session

  return {
    props: {
      user: user || null,
    },
  };
}

export default axiosClient;

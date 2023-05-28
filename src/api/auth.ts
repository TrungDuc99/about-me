import axiosClient from "./axios";

const auThenticateApi = {
  login: (params: { email: string; password: string }): Promise<any> => {
    const url = "login";
    return axiosClient.post(url, params);
  },
};
export default auThenticateApi;

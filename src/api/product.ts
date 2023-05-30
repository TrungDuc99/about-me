import axiosClient from "./axios";

const producteApi = {
  getAll: (): Promise<any> => {
    const url = "/product";
    return axiosClient.get(url);
  },
};
export default producteApi;

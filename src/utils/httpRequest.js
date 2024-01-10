import axios from "axios";

const request = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

const getJSON = async (path, options = {}) => {
  try {
    const response = await request.get(path, options);

    if (!response) throw new Error("API not invalid");

    return response.data;
  } catch (err) {
    throw err;
  }
};

export { request };
export default getJSON;

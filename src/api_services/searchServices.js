import { request } from "../utils/httpRequest";

const search = async (q, type = "less") => {
  try {
    const response = await request.get("users/search", {
      params: {
        q,
        type,
      },
    });

    if (!response) throw new Error("not result");

    return response.data;
  } catch (err) {
    throw err;
  }
};

export default search;

import axios from "axios";

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return { data: response.data.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

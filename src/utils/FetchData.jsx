import axios from "axios";

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);

    // Return the entire response.data object, assuming API responses may vary
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

import axios from 'axios';

const API_BASE_URL = 'https://sniperthink-backend-im7n.onrender.com/api';

export const submitInterest = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/interest`, data);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to submit. Please try again.'
    };
  }
};

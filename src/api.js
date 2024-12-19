import axios from 'axios';

export const sendCodeToServer = async (language, code) => {
  try {
    const response = await axios.post('http://localhost:5000/execute', {
      language,
      code
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return { status: 'error', error: 'Failed to send code to server' };
  }
};

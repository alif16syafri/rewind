import axios from 'axios';

const API_BASE_URL = 'YOUR_API_HERE';

const getHandler = async ({ path, params }) => new Promise(
  async (resolve, reject) => {
    try {
      const resp = await axios.request({
        method: 'GET',
        baseURL: API_BASE_URL,
        url: path,
        params,
      });
      resolve(resp);
    } catch (err) {
      reject(err);
    }
  },
);

export default {
  get: getHandler,
};

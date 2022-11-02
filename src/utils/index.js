const axios = require('axios');

const createOptions = (method, headers, body, authType = null, authToken = null) => {
  if (method === 'GET' || method === 'PUT' || method === 'DELETE') {
    const options = {
      method,
      headers: {...headers},
      body,
    };
    return options;
  }

  if (method === 'POST') {
    const options = {
      method,
      headers: {...headers},
      body,
    };
    return options;
  }
};

const makeAPICall = async (endpoint, method = 'GET', headers = null, body = null, auth_type = null, auth_token = null) => {
  const options = createOptions(method, headers, body, auth_type, auth_token);
  if (method === 'GET') {
    try {
      const response = await axios.get(endpoint, options);
      const responseData = response.data;
      return responseData;
    } catch (error) {
      return error.message;
    }
  }
  if (method === 'POST') {
    try {
      const response = await axios.post(endpoint, body, options);
      const responseData = response.data;
      return responseData;
    } catch (error) {
      return error.message;
    }
  }

  if (method === 'PUT') {
    try {
      const response = await axios.put(endpoint, body, options);
      const responseData = response.data;
      console.log(responseData);
      return responseData;
    } catch (error) {
      return error.message;
    }
  }

  if (method === 'DELETE') {
    try {
      const response = await axios.delete(endpoint, options);
      const responseData = response.data;
      return responseData;
    } catch (error) {
      return error.message;
    }
  }
};

module.exports = {
  makeAPICall,
  createOptions
};

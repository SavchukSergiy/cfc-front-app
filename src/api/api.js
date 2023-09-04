const BASE_URL = 'https://api.example.com'; // Замініть на вашу базову URL

export const fetchData = async (endpoint, params = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, params);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

export const postData = async (endpoint, data) => {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error posting data: ${error.message}`);
  }
};
import axios from 'axios';

const testApiKey = async () => {
  try {
    const response = await axios.post('https://api-free.deepl.com', new URLSearchParams({
      auth_key: '0d964948-56d9-4443-9ee2-0bed49c25abb:fx', // Ganti dengan API Key Anda
      text: 'Hello',
      target_lang: 'ES',
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    console.log('API Key is valid:', response.data);
  } catch (error) {
    console.error('Error with API Key:', error.response ? error.response.data : error.message);
  }
};

testApiKey();

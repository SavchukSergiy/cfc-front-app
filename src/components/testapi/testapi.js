import React, { useEffect, useState } from 'react';
import { ENDPOINTS } from 'api/endpoint.js';
import { fetchData, postData } from 'api.js';

function TestApi() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState('');

  useEffect(() => {
    fetchData(ENDPOINTS.GET_DATA)
      .then(result => {
        setData(result);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handlePostData = () => {
    postData(ENDPOINTS.POST_DATA, { newData })
      .then(result => {
        // Оновлюємо стан або робимо інші дії
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      {/* Відображення даних */}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* Форма для відправлення даних */}
      <input
        type="text"
        value={newData}
        onChange={e => setNewData(e.target.value)}
      />
      <button onClick={handlePostData}>Надіслати дані</button>
    </div>
  );
}

export default TestApi;
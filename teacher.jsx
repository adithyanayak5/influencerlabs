// TeacherScreen.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherScreen = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Fetch teachers from the backend API
    axios.get('/api/teachers')
      .then(response => setTeachers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Teacher Screen</h1>
      <table>
        <thead>
          <tr>
            <th>Teacher ID</th>
            <th>Name</th>
            {/* Add other fields as needed */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              {/* Display other fields */}
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherScreen;

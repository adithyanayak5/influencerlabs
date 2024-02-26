// StudentScreen.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentScreen = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from the backend API
    axios.get('/api/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Student Screen</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
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

export default StudentScreen;

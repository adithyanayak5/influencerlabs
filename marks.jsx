// MarksScreen.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarksScreen = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [marksData, setMarksData] = useState([]);

  useEffect(() => {
    // Fetch marks data based on selected students from the backend API
    axios.post('/api/marks', { selectedStudents })
      .then(response => setMarksData(response.data))
      .catch(error => console.error(error));
  }, [selectedStudents]);

  return (
    <div>
      <h1>Marks Screen</h1>
      {/* Implement search and select UI */}
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Teacher</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {marksData.map(mark => (
            <tr key={mark.studentId}>
              <td>{mark.studentId}</td>
              <td>{mark.name}</td>
              <td>{mark.class}</td>
              <td>{mark.teacher}</td>
              <td>{mark.subject}</td>
              <td>{mark.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarksScreen;

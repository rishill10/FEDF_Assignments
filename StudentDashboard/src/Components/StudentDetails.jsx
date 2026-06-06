import React from "react";

function StudentDetails({ students, deleteStudent }) {
  return (
    <div>
      <h2>Student List</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}

            <button
              onClick={() => deleteStudent(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(StudentDetails);
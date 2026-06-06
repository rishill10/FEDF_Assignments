import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

import StudentDetails from "./StudentDetails";

function StudentDashboard() {
  // useState
  const [students, setStudents] = useState([
    "Rishil",
    "Rahul",
    "Charan"
  ]);

  const [name, setName] = useState("");

  // useRef
  const inputRef = useRef();

  // Auto focus when component loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // useEffect
  useEffect(() => {
    document.title = `Students: ${students.length}`;
  }, [students]);

  // Add student
  const addStudent = () => {
    if (name.trim() !== "") {
      setStudents([...students, name]);
      setName("");
    }
  };

  // useCallback
  const deleteStudent = useCallback((index) => {
    setStudents((prevStudents) =>
      prevStudents.filter((_, i) => i !== index)
    );
  }, []);

  // useMemo
  const totalStudents = useMemo(() => {
    return students.length;
  }, [students]);

  const totalCharacters = useMemo(() => {
    return students.reduce(
      (total, student) => total + student.length,
      0
    );
  }, [students]);

  return (
    <div>
      <h2>Student Dashboard</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <button
        onClick={() => inputRef.current.focus()}
      >
        Focus Input
      </button>

      <p>Total Students: {totalStudents}</p>

      <p>
        Total Characters in Names: {totalCharacters}
      </p>

      <StudentDetails
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default StudentDashboard;
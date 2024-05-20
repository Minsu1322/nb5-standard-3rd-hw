export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((stu) => stu.age >= 18);

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map((stu) => (
          <li
            key={stu.name}
            onClick={() =>
              alert(`이름:${stu.name} / 나이:${stu.age} / 성적:${stu.grade}`)
            }
          >
            {stu.name} : {stu.age}- {stu.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

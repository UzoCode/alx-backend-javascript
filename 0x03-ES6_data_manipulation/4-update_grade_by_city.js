export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((els) => els.location === city)
    .map((person) => {
      const grades = newGrades.filter((els) => els.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}

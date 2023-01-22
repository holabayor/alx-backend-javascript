export default function getStudentIdsSum(students) {
  return students.reduce((accumalator, student) => accumalator + student.id, 0);
}

export default function createIteratorObject(report) {
  return (function* iterator() {
    for (const employees of Object.values(report.allEmployees)) {
      for (const emp of employees) {
        yield emp;
      }
    }
  }());
}

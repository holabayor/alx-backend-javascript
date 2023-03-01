export default class StudentsController {
   static getAllStudents(request, response) {
    response.statusCode = 200;
    response.write('This is a list of our students\n');
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!major.includes(['CS', 'SWE'])){
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(path).then
    response.statusCode = 200;
    response.write('This is a list of our students\n');
  }
}

module.exports = StudentsController;

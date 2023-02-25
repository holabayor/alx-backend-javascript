class StudentsController {
  constructor(studentsService) {
    this.studentsService = studentsService;
  }

  static getAllStudents(request, response) {
    response.statusCode = 200;
    response.write('This is a list of our students\n');
  }

  static getAllStudentsByMajor(request, response) {
    // major = request
    response.statusCode = 200;
    response.write('This is a list of our students\n');
  }
}

module.exports = StudentsController;

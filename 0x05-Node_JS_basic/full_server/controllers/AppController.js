class AppController {
  static getHomepage(request, response) {
    response.statusCode = 200;
    response.write('Hello Holberton School!');
  }
}

module.exports = AppController;

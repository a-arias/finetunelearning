const Page = require('./page');

class StudentDashboard extends Page {

  constructor() {
    super()
  }

  open() {
    super.open('/studentDashboard')
  }

}
module.exports = StudentDashboard;

const Page = require('./page');

class StudentProfile extends Page {

  constructor() {
    super()
  }

  open() {
    super.open('/studentProfile')
  }

}
module.exports = StudentProfile;

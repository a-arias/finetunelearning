const Page = require('./page');

class TeaherProfilePage extends Page {

  constructor() {
    super()
  }

  open() {
    super.open('/teacherProfilePage')
  }

}
module.exports = TeaherProfilePage;

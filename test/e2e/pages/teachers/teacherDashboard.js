const Page = require('./page');

class TeaherDashPage extends Page {

  constructor() {
    super()
  }

  open() {
    super.open('/teacherDashboard')
  }

}
module.exports = TeaherDashPage;

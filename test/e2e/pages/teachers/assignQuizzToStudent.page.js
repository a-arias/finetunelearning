const Page = require('./page');

class AssignsQuizz extends Page {

  constructor() {
    super()
  }

  open() {
    super.open('/assignsQuizz')
  }

}
module.exports = AssignsQuizz;

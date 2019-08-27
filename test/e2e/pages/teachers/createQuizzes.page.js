const Page = require('./page');

class CreateQuizz extends Page {

  constructor() {
    super()
  }

  open() {
    super.open('/createQuizz')
  }

}
module.exports = CreateQuizz;

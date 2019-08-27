const Page = require('./page');

class RespondToQuizz extends Page {

  constructor() {
    super()
  }

  open() {
    super.open('/respondToQuizz')
  }

}
module.exports = RespondToQuizz;

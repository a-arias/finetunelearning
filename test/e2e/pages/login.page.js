const Page = require('./page');

class LoginPage extends Page {

  constructor() {
    super()
  }

  open() {
    super.open('/login')
  }

  /**############ Define Elements ###############*/
  get signInButton() {return $('#signInButton');}
  get emailInput() {return $('#identifierId');}
  get passwordInput() {return $('#password');}
  get welcomeMessage() {return $('#welcomeMessage');}
  get userLoggedIn() {return $('#userName');}
  get expiredAccountText() {return $('#expiredAccountText');}


  /**
   * Click sign in button in FineTunelearnign platform
   */
  clickSignInButton() {
    this.signInButton.click();
  }

  /**
   * Fills Email field with param
   * Param: Email
   */
  fillEmailField(email) {
    this.emailInput.setValue(email);
  }

  /**
   * Click Next button
   */
  clickNextButton() {
    this.nextButton.click();
  }

  /**
   * Perform complete login using login page methods
   * Param: Password
   */
  fillPasswordInput(password) {
    this.PasswordField.setValue(password);
  }

  /**
   * Wait for user logged in element to be present on the page
   */
  userLoggedInText() {
    this.userLoggedIn.waitForExist();
  }

  /**
   * Wait for user logged in element to be present on the page
   */
  ExpiredAccountMessage() {
    this.expiredAccountText.waitForExist();
  }

  //################## Complex methods   ############
  /**
   * Perform complete login using login page methods
   */
  login(email, password) {
    this.fillEmailField(email);
    this.fillPasswordField(password);
    this.clickSignInButton();

    this.welcomeMessage.waitForExist();
  }
}

module.exports = LoginPage;

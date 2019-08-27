import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { loginPage } from '../pages/login.page';
import { data } from '../../data/Context';

Given(/^I'm on the login page$/, () => {
    loginPage.open();
});

Given(/^An already logged in student$/, () => {
    loginPage.open();
    loginPage.login(data.userData.student.user,data.userData.student.password);
});

When(/^I log in with a default student$/, () => {
    loginPage.login(data.userData.student.user,data.userData.student.password);
});

When(/^I log in with an expired student$/, () => {
    loginPage.login(data.userData.expiredStudent.user,data.userData.expiredStudent.password);
});

Then(/^show user name '(.+)' on the site$/, (userName) => {
    assert.equal(loginPage.userLoggedInText.getText(), userName);
});

When(/^I log in with an expired teacher$/, () => {
    loginPage.login(data.userData.expirecTeacher.user,data.userData.expirecTeacher.password);
});

When(/^show expired account message on the site$/, () => {
    loginPage.ExpiredAccountMessage();
    assert.equal(loginPage.ExpiredAccountMessage.getText(), 'You are trying to login with expired account. Please try again.');
});
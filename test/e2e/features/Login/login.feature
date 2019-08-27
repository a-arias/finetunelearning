Feature: Normal login
    In order to test login of fineTune platform
    As a Registered user
    I want to specify the logins of the different kind of users

    Scenario: Login with a default Student account
        Given I'm on the login page
        When I log in with a default student
        Then show user name 'Abraham Student' on the site

    Scenario: Login with an expired Student account
        Given I'm on the login page
        When I log in with an expired student
        Then show expired account message on the site

    Scenario: Login with a default Teacher account
        Given I'm on the login page
        When I log in with a default teacher
        Then show user name 'Jack Teacher' on the site

    Scenario: Login with an expired Teacher account
        Given I'm on the login page
        When I log in with an expired teacher
        Then show expired account message on the site

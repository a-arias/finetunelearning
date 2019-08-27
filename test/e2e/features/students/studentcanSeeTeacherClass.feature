Feature: Student is present on Teacher class
    As a student logged in
    I want to be able to see teacher's class
    so that I can see all the class quizzes

    Background:
        Given An already logged in student
        And student sign up for teacher 'Jack Teacher' class

    Scenario: Student is able to see the teacher's class
        When student search for 'Math' class
        Then The student is able to see the 'Math' class in the list

    Scenario: Student is able to access to teacher's class
        When student search for 'Math' class
        Then the student is able to access to 'Math' class page
        And  the student can see all the quizzes from the teacher's class

    Scenario: Student is not able to see the teacher's class
        When student search for 'Math' class
        Then The student is not able to see the 'Math' class in the list


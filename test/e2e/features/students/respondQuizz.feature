Feature: Student can respond teachers quizzes
    As a student logged in
    I want to respond teacher quizzes
    so that I can get better grades

    Background:
        Given An already logged in student
        And student sign up for teacher 'Jack Teacher' class

    Scenario: Student can send partial quizz respond
        When student search for 'Math' class
        Then the student is able to access to 'Math' class page
        And  the student can see all the quizzes from the teacher's class
        When student click firt quizz from the list
        When student responds some questions from the quizz
        Then studen can send the quizz answers to be graded

    Scenario: Student can full quizz respond
        When student search for 'Math' class
        Then the student is able to access to 'Math' class page
        And  the student can see all the quizzes from the teacher's class
        When student click firt quizz from the list
        When student responds all questiongs from the quizz
        Then studen can send the quizz answers to be graded
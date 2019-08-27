Feature: Teacher can create a new quizz and assign it to student
    As a teacher logged in
    I want to create a new quizze
    so that I can assign it to students

    Background:
        Given An already logged in teacher

    Scenario: Teacher can create a new 'Geometry' quizz
        When teacher navigates to quizz creation page
        And  teacher creates a new quizz
        Then teacher can see successfull quizz creation message

    Scenario: Teacher can create a new 'Algebra' quizz
        When teacher navigates to quizz creation page
        And  teacher creates a new quizz
        Then teacher can see successfull quizz creation message

    Scenario: Teacher can assing a quizz to student
        When teacher navigates to student list
        And  teacher selects student 'Abraham Student'
        And  teacher assign 'Algebra' quizz to 'Abraham Student'
        Then teacher can see successfull confirmation assignment message

Feature: Teacher can grade students quizzes
    As a teacher logged in
    I want to grade student's quizzes
    so that I can ​calculte total​ ​grade​ ​accumulated​ ​over​ ​a​ ​semester

    Background:
        Given An already logged in teacher

    Scenario: Teacher can grade 'Geometry' quizz
        When teacher navigates to quizz list page
        And  teacher open 'Geometry' quizz from 'Abraham Student' student
        And  teacher grade quizz answers
        Then teacher can see successfully graded quizz message on the page 
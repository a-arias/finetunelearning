Feature: Teacher can calculate ​each​ ​student's​ ​total​ ​grade​ ​accumulated​ ​over​ ​a​ ​semester
    As a teacher logged in
    I want to calculate​ ​each​ ​student's​ ​total​ ​grade​ ​accumulated​ ​over​ ​a​ ​semester
    so that I can publish the results on my profile page

    Background:
        Given An already logged in teacher
 
    Scenario Outline: teacher verifies total semester's grades for <quizz1> and <quizz2>
        When teacher navigates to student's grades list
        And  teacher add <quizz1> and <quizz2> divided by 2
        Then the semester grade should be <semester grade>
    
    Examples: 
      student name      | quizz1  | quizz2   |  semester grade  |
     "Abraham Student"  | 100     |     100  |   100            |    
     "Julian Student"   | 50      |     100  |   75             |   
     "nancy Student"    | 60      |     100  |   80             |  
     "claudia Student"  | 80      |     100  |   90             |   
        
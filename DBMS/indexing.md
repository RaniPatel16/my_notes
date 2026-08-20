DROP TABLE IF EXISTS Student;

CREATE TABLE Student (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT
);
INSERT INTO Student VALUES
(1, 'A', 85),
(2, 'B', 92),
(3, 'C',  75),
(4, 'D', 88),
(5, 'E',  65);

SELECT * FROM Student;
CREATE INDEX idx_student_marks
ON Student(marks);

SHOW INDEX FROM Student;
CREATE INDEX idx_student_name
ON Student(name);
EXPLAIN SELECT * FROM Student WHERE marks > 50;
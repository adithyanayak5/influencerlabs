// student.php

$studentsFile = 'students.json';

function getStudents() {
    global $studentsFile;
    $studentsData = file_get_contents($studentsFile);
    return json_decode($studentsData, true);
}

function addStudent($student) {
    global $studentsFile;
    $students = getStudents();
    $students[] = $student;
    file_put_contents($studentsFile, json_encode($students));
}

function updateStudent($studentId, $updatedData) {
    global $studentsFile;
    $students = getStudents();
    foreach ($students as &$student) {
        if ($student['id'] == $studentId) {
            $student = array_merge($student, $updatedData);
            break;
        }
    }
    file_put_contents($studentsFile, json_encode($students));
}

function deleteStudent($studentId) {
    global $studentsFile;
    $students = getStudents();
    $students = array_filter($students, function ($student) use ($studentId) {
        return $student['id'] != $studentId;
    });
    file_put_contents($studentsFile, json_encode(array_values($students)));
}

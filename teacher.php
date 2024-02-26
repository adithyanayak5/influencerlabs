// teacher.php

$teachersFile = 'teachers.json';

function getTeachers() {
    global $teachersFile;
    $teachersData = file_get_contents($teachersFile);
    return json_decode($teachersData, true);
}

function addTeacher($teacher) {
    global $teachersFile;
    $teachers = getTeachers();
    $teachers[] = $teacher;
    file_put_contents($teachersFile, json_encode($teachers));
}

function updateTeacher($teacherId, $updatedData) {
    global $teachersFile;
    $teachers = getTeachers();
    foreach ($teachers as &$teacher) {
        if ($teacher['id'] == $teacherId) {
            $teacher = array_merge($teacher, $updatedData);
            break;
        }
    }
    file_put_contents($teachersFile, json_encode($teachers));
}

function deleteTeacher($teacherId) {
    global $teachersFile;
    $teachers = getTeachers();
    $teachers = array_filter($teachers, function ($teacher) use ($teacherId) {
        return $teacher['id'] != $teacherId;
    });
    file_put_contents($teachersFile, json_encode(array_values($teachers)));
}

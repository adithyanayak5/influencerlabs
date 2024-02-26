$marksFile = 'marks.json';

function getMarks() {
    global $marksFile;
    $marksData = file_get_contents($marksFile);
    return json_decode($marksData, true);
}

function addMark($mark) {
    global $marksFile;
    $marks = getMarks();
    $marks[] = $mark;
    file_put_contents($marksFile, json_encode($marks));
}

function updateMark($studentId, $updatedData) {
    global $marksFile;
    $marks = getMarks();
    foreach ($marks as &$mark) {
        if ($mark['studentId'] == $studentId) {
            $mark = array_merge($mark, $updatedData);
            break;
        }
    }
    file_put_contents($marksFile, json_encode($marks));
}

function deleteMark($studentId) {
    global $marksFile;
    $marks = getMarks();
    $marks = array_filter($marks, function ($mark) use ($studentId) {
        return $mark['studentId'] != $studentId;
    });
    file_put_contents($marksFile, json_encode(array_values($marks)));
}

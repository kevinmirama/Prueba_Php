<?php
header('Content-Type: application/json');
include 'conexion.php';

$sql = "SELECT * FROM tareas";
$result = $conn->query($sql);

$tareas = [];
while ($row = $result->fetch_assoc()) {
    $tareas[] = $row;
}

echo json_encode($tareas);

$conn->close();
?>
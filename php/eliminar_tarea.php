<?php
header('Content-Type: application/json');
include 'conexion.php';

$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];

$sql = "DELETE FROM tareas WHERE id = $id";
if ($conn->query($sql)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => $conn->error]);
}

$conn->close();
?>
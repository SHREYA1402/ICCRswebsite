<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method:GET,POST ');
header("Access-Control-Allow-Headers: X-Requested-With ");

$conn = mysqli_connect('localhost', 'root', '', 'filemanagement');
$sql = "SELECT * FROM files";
$result = mysqli_query($conn, $sql);
$json_data =array();

while($row = mysqli_fetch_assoc($mysqli))
{
    $json_data[]= $row;

}
echo json_encode(['result'=> $json_data])

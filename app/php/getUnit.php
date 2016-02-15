<?php
require_once("SiteConfigVars.php");

$myDbPass = getConfigValue("dbPass_w_menu");
$myDbHost = getConfigValue("dbHost_w_menu");
$myDbName = "w_menu";
$myDbUser = "w-menu";

$conn = new mysqli($myDbHost, $myDbUser, $myDbPass, $myDbName);

$units = array();

// check connection
if ($conn->connect_error) {
  trigger_error('Database connection failed: '  . $conn->connect_error, E_USER_ERROR);
}

$sql='SELECT Unit_name FROM Units WHERE 1';
$rs=$conn->query($sql);

if($rs === false) {
  trigger_error('Wrong SQL: ' . $sql . ' Error: ' . $conn->error, E_USER_ERROR);
} else {
  $rows_returned = $rs->num_rows;
}

$rs->data_seek(0);
while($row = $rs->fetch_assoc()){
    $units = push($row['Unit_name'])
}

$rs->free();
$conn = null;

return json_encode($units);
?>

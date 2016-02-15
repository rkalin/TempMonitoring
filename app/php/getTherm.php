<?php
require_once("SiteConfigVars.php");

$myDbPass = getConfigValue("dbPass_w_menu");
$myDbHost = getConfigValue("dbHost_w_menu");
$myDbName = "w_menu";
$myDbUser = "w-menu";

$conn = new mysqli($myDbHost, $myDbUser, $myDbPass, $myDbName);

$therms = array();

// check connection
if ($conn->connect_error) {
  trigger_error('Database connection failed: '  . $conn->connect_error, E_USER_ERROR);
}

$sql='SELECT Therm_serial FROM Thermometer WHERE Common_name = NULL';
$rs=$conn->query($sql);

if($rs === false) {
  trigger_error('Wrong SQL: ' . $sql . ' Error: ' . $conn->error, E_USER_ERROR);
} else {
  $rows_returned = $rs->num_rows;
}

$rs->data_seek(0);
while($row = $rs->fetch_assoc()){
    $therms = push($row['Therm_serial'])
}

$rs->free();
$conn = null;

return json_encode($therms);
?>

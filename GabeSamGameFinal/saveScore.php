<?php


$guid='e45bb8c0-c66c-44c5-86cf-24244ab1dff4';
$name=$_POST['name'];
$score=$_POST['score'];
if (strpos($name, $guid) !== false){
$name=str_replace($guid,'',$name);
require_once('db.php');
$conn=new PDO('mysql:host='.$host.';dbname='.$dbname,$user,$password);

$conn -> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

$paramStatement=$conn->prepare('INSERT INTO scores (name, score) VALUES(:name, :score);');
$paramStatement->execute(array(':name' => $name, ':score' => $score));
$conn=null;}
?>
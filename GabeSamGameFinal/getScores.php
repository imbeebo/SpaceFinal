<?php

require_once('db.php');
$conn=new PDO('mysql:host='.$host.';dbname='.$dbname,$user,$password);


$sql = "SELECT name, score FROM scores ORDER BY score desc LIMIT 20;";
$result=$conn->query($sql);

echo '<span>Top 20 Scoreboard</span><table>
        <tr><th>Name</th><th>Score</th></tr>';
foreach($result as $row){
  echo '<tr><td>'. $row['name'] .'</td><td>'. $row['score'] .'</td></tr>';
}
echo '</table>';

$conn=null;
?>
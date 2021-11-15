<?php

$dbhost = "locathost";
$dbuser = "test";
$dbpass = "que puta es luca que no viene"; 
$dbname = "test";
 $conn = "mysqli_connect"($dbhost, $dbuser, $dbpass, $dbname);
if (!$conn)
{
    die("Sin conexion: ".mysqli_connect_error());
}

$nombre = $_POST{"txusuario"};
$pass = $_POST{"txpassword"};

$squery = mysqli_querry ($conn, "SELECT * FROM login WHERE usuario = '".$nombre."' and password = '".$pass."'");
$nr = mysqli_num_rows($squery);

if($nr == 1)
{
    //header("Location: pagina.php)
    echo "bienvenido! Que haremos hoy?" .$nombre
}
else if ($nr == 0)
{
    echo "no ingreso";
}

?> 
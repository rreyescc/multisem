<?php
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$para      = 'j24ym26@gmail.com';
$titulo    = 'Solicitud de Información';
$mensaje   = '<body>
                 <strong>Nombre:</strong> '.$nombre.'<br>
                 <strong>Teléfono:</strong> '.$telefono.'<br>
                 <strong>Correo:</strong> '.$correo.'<br>
                 <strong>Mensaje:</strong> '.$mensaje.'<br>
              </body>';

$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
$cabeceras .= 'From: perumultisem <webmaster@perumultisem.com>' . "\r\n";

mail($para, $titulo, $mensaje, $cabeceras);
?>
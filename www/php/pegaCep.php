<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-  requested-with');

$cep = $_GET['cep'];

include('correios.class.php');

if(isset($_GET['cep'])){
	$correios = Correios::cep($_GET['cep']);
	$correios = json_encode($correios[0]);
		die($correios);
}elseif(isset($_GET['codigo_rastreio'])){
	die(json_encode(Correios::rastreio($_GET['codigo_rastreio'])));
}else{
	die('informe parametro GET cep ou codigo_rastreio');
}

?>

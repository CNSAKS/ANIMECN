<?php

require_once "db.php";

if(isset($_GET['action']) && !empty($_GET['action'])) {
		$action = $_GET['action'];
		$db=new db("CNSAKS");
		$db->conectar_base_datos();
		switch($action) {
			case 'getAll'       : $db->getAnime();break;
			case 'getAnimeById' : $idAnime = $_GET['id'];
							      $db->getAnimeById($idAnime);
							      break;
			case 'putUser'      : $db->putUser($_GET['user'],$_GET['email'],$_GET['pass']);break;
			case 'changeUser'   : $db->changeUser($_GET['id'],$_GET['passAnt'],$_GET['pass'],$_GET['email']);break;
			case 'getUser'      : $db->getUser($_GET['user'],$_GET['pass']);break;
			case 'getList'      : $db->getList($_GET['user']);break;
			case 'addAnime'		: $db->addAnime($_GET['idAnime'],$_GET['idUsuario'],$_GET['score'],$_GET['chapters']);$db->avgAnime($_GET['idAnime']);break;
			case 'editAnime'	: $db->editAnime($_GET['idAnime'],$_GET['idUsuario'],$_GET['score'],$_GET['chapters']);$db->avgAnime($_GET['idAnime']);break;
			case 'deleteAnime'  : $db->deleteAnime($_GET['idAnime'],$_GET['idUsuario']);$db->avgAnime($_GET['idAnime']);break;
			case 'isAuth'       : $db->isAuth();break;
			case 'logout'		: $db->logout();break;
			
		}
	}

	
	
	
	
?>
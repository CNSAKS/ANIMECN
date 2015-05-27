<?php
	//ini_set('error_reporting', E_ALL|E_STRICT);
    //ini_set('display_errors', 1);
	/**
    	*Clase que gestiona la conexion con la base de datos
    */
class db
{
	/**
		* ip del servidor
	*/
	private $servidor="localhost";
	/**
		* nombre del usuario
	*/
	private $usuario="CNSAKS";
	/**
		* password del usuario
	*/
	private $pass="123456";
	/**
		* base de datos a la que vamos a acceder
	*/
	private $base_datos="AnimeCN";
	/**
		* descriptor a la conexión con la base de datos
	*/
	public $descriptor;
	/**
		* boolean que nos indica si ha habido exito al conectar o no
	*/
	private $conectado;
	/**
		* información del error o conexión habilitada
	*/
	private $info;
	function __construct()
	{
		if(func_num_args()==1){
			$this->usuario = func_get_arg(0);
			$this->conectado=false;
			$this->info="";
		}elseif(func_num_args()==2){
			$this->usuario = func_get_arg(0);
			$this->pass = func_get_arg(1);
			$this->conectado=false;
			$this->info="";			
		}
	}
	
	/**
		* Realiza la conexión con la base de datos devolviendo el estado de la misma
		*
		* @return conectado boolean
	*/	
	public function conectar_base_datos()
	{
		$this->descriptor = new mysqli($this->servidor, $this->usuario, $this->pass, $this->base_datos);
		if ($this->descriptor->connect_errno) {
    		$this->$info="Fallo al contenctar a MySQL: (" . $this->descriptor->connect_errno . ") " . $this->descriptor->connect_error;
			$this->conectado=false;
		}else{
			$this->info="Conectado al servidor MySQL: " .$this->descriptor->host_info;
			$this->conectado=true;
			$this->descriptor->query("SET NAMES 'utf8'");
		}
		
		return $this->conectado;
	}
	
	/**
		* Devuelve el estado de la conexión actual
		*
		* @return info string
	*/	
	public function getInfo(){
		return $this->info;
	}
	
	/**
		* Devuelve todos los animes en un JSON
		*
		* @return JSON return_arr
	*/	
	public function getAnime(){
		$return_arr = array();
	    
		if($resultado = $this->descriptor->query("SELECT * FROM AnimeEsEs")){
			for ($num_fila = 0; $num_fila < $resultado->num_rows; $num_fila++) {
				$resultado->data_seek($num_fila);
				$row = $resultado->fetch_assoc();
				$row_array['id'] = $row['idAnime'];
				$row_array['name'] = $row['name'];
				$row_array['cover'] = $row['cover'];
				$row_array['year'] = $row['year'];
				$row_array['chapters'] = $row['totalChapters'];
				$row_array['summary'] = $row['summary'];
			
				array_push($return_arr,$row_array);
			}
			
		}else{
			 printf("Error: %s\n", $this->descriptor->error);
		}
		echo json_encode($return_arr);
	}
	
	/**
		* Devuelve el anime seleccionado en un JSON
		*
		* @param int id id del anime seleccionado
		*
		* @return JSON return_arr
	*/
	
	public function getAnimeById($id){
		$return_arr = array();
	    
		if($resultado = $this->descriptor->query("SELECT * FROM AnimeEsEs where idAnime=".$id)){
			for ($num_fila = 0; $num_fila < $resultado->num_rows; $num_fila++) {
				$resultado->data_seek($num_fila);
				$row = $resultado->fetch_assoc();
				$row_array['id'] = $row['idAnime'];
				$row_array['name'] = $row['name'];
				$row_array['cover'] = $row['cover'];
				$row_array['year'] = $row['year'];
				$row_array['chapters'] = $row['totalChapters'];
				$row_array['summary'] = $row['extendedSummary'];
				$row_array['director'] = $row['director'];
				$row_array['studio'] = $row['studio'];
				$row_array['mainCharacter1'] = $row['mainCharacter1'];
				$row_array['mainCharacter2'] = $row['mainCharacter2'];
				$row_array['mainCharacter3'] = $row['mainCharacter3'];
				$row_array['mainCharacter4'] = $row['mainCharacter4'];
				$row_array['seiyuuMC1'] = $row['seiyuuMC1'];
				$row_array['seiyuuMC2'] = $row['seiyuuMC2'];
				$row_array['seiyuuMC3'] = $row['seiyuuMC3'];
				$row_array['seiyuuMC4'] = $row['seiyuuMC4'];
				$row_array['opening'] = $row['opening'];
				$row_array['score'] = $row['score'];
				$row_array['type'] = $row['type'];
				
			
				array_push($return_arr,$row_array);
			}
			
		}else{
			 printf("Error: %s\n", $this->descriptor->error);
		}
		echo json_encode($return_arr);
	}
	
	/**
		* Añade un usuario a la base de datos
		*
		* @param str user  nombre del usuario
		* @param str email email del usuario
		* @param str pass  password del usuario
		*
		* @return JSON return_arr
	*/
	
	public function putUser($user,$email,$pass){
		$return_arr = array();
		if($resultado = $this->descriptor->query("INSERT INTO Usuarios (Usuario,Email,Password) VALUES ('$user','$email','$pass')")){
			$row_array['error'] = "";
			$row_array['msgOK'] = "Registro completado exitosamente";
			array_push($return_arr,$row_array);
		}else{
			$row_array['error'] = "El usuario '".$user."' ya se encuentra registrado";
			$row_array['msgOK'] = "";
			array_push($return_arr,$row_array);
		}
		echo json_encode($return_arr);
	}
	
	/**
		* Edita la informacion de un usuario en la base de datos
		*
		* @param int id      id del usuario a cambiar
		* @param str passAnt antigua password del usuario
		* @param str pass    nueva password del usuario
		* @param str email   nuevo email del usuario
		*
		* @return JSON return_arr
	*/
	
	public function changeUser($id,$passAnt,$pass,$email){
		$return_arr = array();
		
		if($resultado = $this->descriptor->query("SELECT idUsuario, Password, Email FROM Usuarios WHERE idUsuario = '$id' AND Password = '$passAnt'")){
			if($resultado->num_rows > 0){
				for ($num_fila = 0; $num_fila < $resultado->num_rows; $num_fila++) {
					$resultado->data_seek($num_fila);
					$row = $resultado->fetch_assoc();
					
					if(!empty($pass)){
						$passUpdate = $pass;
					}else{
						$passUpdate = $row['Password'];
					}
					
					if(!empty($email)){
						$emailUpdate = $email;
					}else{
						$emailUpdate = $row['Email'];
					}
					
					if($resultadoUpd = $this->descriptor->query("UPDATE Usuarios SET Password = '$passUpdate', Email = '$emailUpdate' WHERE idUsuario = '$id'")){
						$row_array['error'] = "";
						$row_array['msgOK'] = "Los datos se han guardado exitosamente";
						array_push($return_arr,$row_array);
					}else{
						$row_array['error'] = "Se ha encontrado un problema al intentar realizar la operacin, vuelva a intentarlo mas tarde";
						$row_array['msgOK'] = "";
						array_push($return_arr,$row_array);
					}
				}
			}else{
				$row_array['error'] = "La contraseña proporcionada no se encuentra en la base de datos, los cambios no se han guardado";
				$row_array['msgOK'] = "";
				array_push($return_arr,$row_array);
			}
		}
		echo json_encode($return_arr);
	}
	
	/**
		* Inicia sesion si los datos pasados son correctos
		*
		* @param str user nombre del usuario que intenta acceder
		* @param str pass password del usuario que intenta acceder
		*
		* @return JSON return_arr
	*/
	
	public function getUser($user, $pass){
		$return_arr = array();
		if($resultado = $this->descriptor->query("SELECT idUsuario, Usuario FROM Usuarios WHERE Usuario = '$user' AND Password = '$pass'")){
			if($resultado->num_rows > 0){
				for ($num_fila = 0; $num_fila < $resultado->num_rows; $num_fila++) {
					$resultado->data_seek($num_fila);
					$row = $resultado->fetch_assoc();
					$row_array['error'] = "";
					$row_array['msgOK'] = "Sesión iniciada";
					$row_array['idUsuario'] = $row['idUsuario'];
					$row_array['usuario'] = $row['Usuario'];
					session_start();
    				$_SESSION["autentificado"]= "SI";
					$_SESSION["id"]= $row['idUsuario'];
					$_SESSION["user"]= $row['Usuario'];
					array_push($return_arr,$row_array);
				}
			}else{
				$row_array['error'] = "El usuario y contraseña proporcionados no se encuentran en la base de datos";
				$row_array['msgOK'] = "";
				array_push($return_arr,$row_array);
			}
		}else{
			$row_array['error'] = "Ha habido un error al intentar iniciar sesion";
			$row_array['msgOK'] = "";
			array_push($return_arr,$row_array);
		}
		echo json_encode($return_arr);
	}
	
	/**
		* Obtiene la lista de animes de un usuario
		*
		* @param int user id del usuario propietario de la lista
		*
		* @return JSON return_arr
	*/
	
	public function getList($user){
		$return_arr = array();
		if($resultado = $this->descriptor->query("SELECT idAnime,name, score, type, chaptersViewed, chaptersTotal FROM UsuarioList WHERE idUsuario = '$user'")){
			for ($num_fila = 0; $num_fila < $resultado->num_rows; $num_fila++) {
				$resultado->data_seek($num_fila);
				$row = $resultado->fetch_assoc();
				$row_array['idAnime'] = $row['idAnime'];
				$row_array['name'] = $row['name'];
				$row_array['score'] = $row['score'];
				$row_array['type'] = $row['type'];
				$row_array['chapters'] = $row['chaptersViewed']." / ".$row['chaptersTotal'];
				array_push($return_arr,$row_array);
			}
		}else{
			$row_array['error'] = "Ha habido un error al intentar acceder a su lista";
			$row_array['msgOK'] = "";
			array_push($return_arr,$row_array);
		}
		echo json_encode($return_arr);
	}
	
	/**
		* Añade un anime a la lista de un usuario
		*
		* @param int idAnime   id del anime
		* @param int idUsuario id del usuario
		* @param int score     score del anime proporcionado por el usuario
		* @param int chapters  capitulos visualizados por el usuario
		*
		* @return JSON return_arr
	*/
	
	public function addAnime($idAnime,$idUsuario,$score,$chapters){
			$return_arr = array();
			if($resultado = $this->descriptor->query("SELECT name, type, totalChapters FROM AnimeEsEs WHERE idAnime = '$idAnime'")){
				for ($num_fila = 0; $num_fila < $resultado->num_rows; $num_fila++) {
					$resultado->data_seek($num_fila);
					$row = $resultado->fetch_assoc();
					$nameAnime = $row['name'];
					$typeAnime = $row['type'];
					$chaptersAnime = $row['totalChapters'];
					if($resultado2 = $this->descriptor->query("INSERT INTO UsuarioList (idAnime,idUsuario,name,score,type,chaptersViewed,chaptersTotal) VALUES ('$idAnime','$idUsuario','$nameAnime','$score','$typeAnime','$chapters','$chaptersAnime')")){
						$row_array['error'] = "";
						$row_array['msgOK'] = "Registro completado exitosamente";
						array_push($return_arr,$row_array);
					}else{
						$row_array['error'] = "Ha habido un error al intentar registrar el anime 2";
						$row_array['msgOK'] = "";
						array_push($return_arr,$row_array);
					}
				}
			}else{
				$row_array['error'] = "Ha habido un error al intentar registrar el anime";
				$row_array['msgOK'] = "";
				array_push($return_arr,$row_array);
			}
			echo json_encode($return_arr);
	}
	
	/**
		* Edita un anime de la lista de un usuario
		*
		* @param int idAnime   id del anime
		* @param int idUsuario id del usuario
		* @param int score     score del anime proporcionado por el usuario
		* @param int chapters  capitulos visualizados por el usuario
		*
		* @return JSON return_arr
	*/
	
	public function editAnime($idAnime,$idUsuario,$score,$chapters){
			$return_arr = array();
			if($resultadoUpd = $this->descriptor->query("UPDATE UsuarioList SET score = '$score', chaptersViewed = '$chapters' WHERE idUsuario = '$idUsuario' AND idAnime = '$idAnime'")){
				$row_array['error'] = "";
				$row_array['msgOK'] = "Los datos se han guardado exitosamente";
				array_push($return_arr,$row_array);
			}else{
				$row_array['error'] = "Se ha encontrado un problema al intentar realizar la operacin, vuelva a intentarlo mas tarde";
				$row_array['msgOK'] = "";
				array_push($return_arr,$row_array);
			}
			echo json_encode($return_arr);
	}
	
	/**
		* Elimina un anime de la lista de un usuario
		*
		* @param int idAnime   id del anime
		* @param int idUsuario id del usuario
		*
		* @return JSON return_arr
	*/
	
	public function deleteAnime($idAnime,$idUsuario){
			$return_arr = array();
			if($resultadoUpd = $this->descriptor->query("DELETE FROM UsuarioList WHERE idAnime = '$idAnime' AND idUsuario = '$idUsuario'")){
				$row_array['error'] = "";
				$row_array['msgOK'] = "Los datos se han eliminado exitosamente";
				array_push($return_arr,$row_array);
			}else{
				$row_array['error'] = "Se ha encontrado un problema al intentar realizar la operacin, vuelva a intentarlo mas tarde";
				$row_array['msgOK'] = "";
				array_push($return_arr,$row_array);
			}
			echo json_encode($return_arr);
	}
	
	/**
		* Realiza una media del score de un anime proporcionado por todos los usuarios y lo inserta en la informacion del anime
		*
		* @param int idAnime   id del anime
		*
		* @return JSON return_arr
	*/
	
	public function avgAnime($idAnime){
			$resultado = $this->descriptor->query("SELECT AVG(score) FROM UsuarioList WHERE idAnime = '$idAnime'");
				for ($num_fila = 0; $num_fila < $resultado->num_rows; $num_fila++) {
					$resultado->data_seek($num_fila);
					$row = $resultado->fetch_assoc();
					$scoreAnime = $row['AVG(score)'];
					$resultadoUpd = $this->descriptor->query("UPDATE AnimeEsEs SET score = '$scoreAnime' WHERE idAnime = '$idAnime'");
				}
	}
	
	/**
		* COmprueba si se ha iniciado sesion
		*
		* @return JSON return_arr
	*/
	
	public function isAuth(){
		$return_arr = array();
		session_start();
		if (isset($_SESSION["autentificado"])) {
			if ($_SESSION["autentificado"] != "SI") {
				$row_array['error'] = "Debe Iniciar sesion para acceder a esa pestaña";
				array_push($return_arr,$row_array);
			}else{
				$row_array['error'] = "";
				$row_array['id'] = $_SESSION["id"];
				$row_array['user'] = $_SESSION["user"];
				array_push($return_arr,$row_array);
			}	
		}else{
			$row_array['error'] = "Debe Iniciar sesion para acceder a esa pestaña";
		    array_push($return_arr,$row_array);
		}
		echo json_encode($return_arr);
	}
	
	/**
		* Cierra la sesion
		*
		* @return JSON return_arr
	*/
	
	public function logout(){
		session_start();
		session_destroy();
		$return_arr = array();
		$row_array['msgOK'] = "Se ha cerrado la sesión";
		array_push($return_arr,$row_array);
		echo json_encode($return_arr);
	}
	
}


function isAuth(){
	$.ajax({
	  url: "/php/controller.php",
	  type: "GET",
	  contentType: "application/json; charset=utf-8",
	  dataType: "json",
	  data:{action: 'isAuth'},  
	  success: function(result){
		$("#navButtonsDiv").empty();
		if(result[0].error != ""){
		var loginDiv =	'<a class="btn btn-default nav-buttons" id="loginBtn">Login</a>';
			loginDiv += '<a class="btn btn-default nav-buttons" id="registroBtn">Registro</a>';
			$("#navButtonsDiv").append(loginDiv);
			returnBack();
			
			$("#loginBtn").click(function(){
				$("#modalLogin").modal("show");
			});
			
		    $("#registroBtn").click(function(){
				$("#modalRegistro").modal("show");
			});
			
		}else{
		var loginDiv =	'<a class="btn btn-default nav-buttons span-user" id="settingsBtn">'+result[0].user+'</a>';
			loginDiv += '<a class="btn btn-default nav-buttons" id="logoutBtn">Log Out</a>';
			$("#navButtonsDiv").append(loginDiv);
			
			$("#settingsBtn").click(function(){
                $("#modalSettingsID").val(result[0].id);
				$("#modalSettingsUsuario").val(result[0].user);
				$("#modalSettings").modal("show");
			})
			
			$("#logoutBtn").click(function(){
				$.ajax({
					  url: "/php/controller.php",
					  type: "GET",
					  contentType: "application/json; charset=utf-8",
					  dataType: "json",
					  data:{action: 'logout'},  
					  success: function(result){
						$.noty.closeAll();
						var n = noty({text: result[0].msgOK});
						isAuth();
					  }
				});
			})
		}
	  }
	});

}

function returnBack(){
	$(".nav-tabs li").removeClass("active");
	$("#homeNav").addClass("active");
	$(".tab-content div").removeClass("active");
	$("#homeDiv").addClass("active");
	$(".tabs").removeAttr("style");
}

$('#modalRegistro').on('shown.bs.modal', function () {
  $('#modalRegistroUsuario').focus()
})

$('#modalLogin').on('shown.bs.modal', function () {
  $('#modalLoginUsuario').focus()
})

$('#modalRegistro').on('hidden.bs.modal', function () {
  $("#formRegistro")[0].reset();
  $("#modalRegistroUsuarioDiv").removeClass("has-success").addClass("has-error");
  $("#modalRegistroIconoUsuario").removeClass("glyphicon-ok").addClass("glyphicon-remove");
  $("#modalRegistroEmailDiv").removeClass("has-success").addClass("has-error");
  $("#modalRegistroIconoEmail").removeClass("glyphicon-ok").addClass("glyphicon-remove");
  $("#modalRegistroPassDiv").removeClass("has-success").addClass("has-error");
  $("#modalRegistroIconoPass").removeClass("glyphicon-ok").addClass("glyphicon-remove");
})

$('#modalSettings').on('hidden.bs.modal', function () {
	$("#formSettings")[0].reset();
	$("#modalSettingsPassAntDiv").removeClass("has-success").addClass("has-error");
	$("#modalSettingsIconoPassAnt").removeClass("glyphicon-ok").addClass("glyphicon-remove");
    $("#modalSettingsEmailDiv").removeClass("has-success").addClass("has-error");
	$("#modalSettingsIconoEmail").removeClass("glyphicon-ok").addClass("glyphicon-remove");
	$("#modalSettingsPassDiv").removeClass("has-success").addClass("has-error");
	$("#modalSettingsIconoPass").removeClass("glyphicon-ok").addClass("glyphicon-remove");
});

$('#modalLogin').on('hidden.bs.modal', function () {
	$("#formLogin")[0].reset();
});

$('#modalAdd').on('hidden.bs.modal', function () {
	$("#formAdd")[0].reset();
	$("#modalAddAnime").empty();
	$("#modalAddScoreDiv").removeClass("has-success").addClass("has-error");
	$("#modalAddIconoScore").removeClass("glyphicon-ok").addClass("glyphicon-remove");
	$("#modalAddCapitulos").empty();
});

$('#modalEdit').on('hidden.bs.modal', function () {
	$("#formEdit")[0].reset();
	$("#modalEditScoreDiv").removeClass("has-error").addClass("has-success");
	$("#modalEditIconoScore").removeClass("glyphicon-remove").addClass("glyphicon-ok");
	$("#modalEditCapitulos").empty();
});

$( document ).ready(function() {   
	
	$(document).submit(function( event ) {
	  event.preventDefault();
	});
	
	$('.tab-pane').css('max-height',$(window).height()-46);
	
	$(window).resize(function(){
		$('.tab-pane').css('max-height',$(window).height()-46);
	})
	

	
	isAuth();
	
	/**
	*  Validaciones y registro
	*/
	
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	
	var registroUsuario = false;
	var registroEmail = false;
	var registroPassword = false;
	var registroCorrecto = true;
	
	$("#modalRegistroUsuario").bind("change paste keyup", function() {
		if(/^[a-zA-Z0-9]+$/.test($("#modalRegistroUsuario").val())){
			$("#modalRegistroUsuarioDiv").removeClass("has-error").addClass("has-success");
			$("#modalRegistroIconoUsuario").removeClass("glyphicon-remove").addClass("glyphicon-ok");
			registroUsuario = true
		}else{
			$("#modalRegistroUsuarioDiv").removeClass("has-success").addClass("has-error");
			$("#modalRegistroIconoUsuario").removeClass("glyphicon-ok").addClass("glyphicon-remove");
			registroUsuario = false;
		}
		
	})
	
	$("#modalRegistroEmail").bind("change paste keyup", function() {
		if(/^[a-zA-Z0-9]+@(gmail.com)$/.test($("#modalRegistroEmail").val())){
			$("#modalRegistroEmailDiv").removeClass("has-error").addClass("has-success");
			$("#modalRegistroIconoEmail").removeClass("glyphicon-remove").addClass("glyphicon-ok");
			registroEmail = true;
		}else{
			$("#modalRegistroEmailDiv").removeClass("has-success").addClass("has-error");
			$("#modalRegistroIconoEmail").removeClass("glyphicon-ok").addClass("glyphicon-remove");
			registroEmail = false;
		}
		
	})
	
	$("#modalRegistroPass").bind("change paste keyup", function() {
		if(/^[a-zA-Z0-9]+$/.test($("#modalRegistroPass").val())){
			$("#modalRegistroPassDiv").removeClass("has-error").addClass("has-success");
			$("#modalRegistroIconoPass").removeClass("glyphicon-remove").addClass("glyphicon-ok");
			registroPassword = true;
		}else{
			$("#modalRegistroPassDiv").removeClass("has-success").addClass("has-error");
			$("#modalRegistroIconoPass").removeClass("glyphicon-ok").addClass("glyphicon-remove");
			registroPassword = false;
		}
		
	})
	
	$("#modalRegistroSave").click(function(){
		var textoError = "Los siguientes campos son necesarios: "
		registroCorrecto = true;
		if(!registroUsuario){
			textoError += "</br>Usuario";
			registroCorrecto = false;
		}
		if(!registroEmail){
			textoError += "</br>Email";
			registroCorrecto = false;
		}
		if(!registroPassword){
			textoError += "</br>Password";
			registroCorrecto = false;
		}
		
		if(registroCorrecto){
			$.ajax({
				  url: "/php/controller.php",
				  type: "GET",
				  contentType: "application/json; charset=utf-8",
				  dataType: "json",
				  data:{action: 'putUser',
				  		user:   $("#modalRegistroUsuario").val(),
						email:  $("#modalRegistroEmail").val(),
						pass:   $("#modalRegistroPass").val()},  
				  success: function(result){
					$.noty.closeAll()
					if(result[0].error != ""){
						var n = noty({text: result[0].error});
					}else{
						var n = noty({text: result[0].msgOK});
						$("#modalRegistro").modal("hide");
					}
				  }
				});
		}else{
			$.noty.closeAll()
			var n = noty({text: textoError});
		}
	})
	
	/**
	*  Login
	*/
	
	$("#modalLoginSave").click(function(){
		$.ajax({
			  url: "/php/controller.php",
			  type: "GET",
			  contentType: "application/json; charset=utf-8",
			  dataType: "json",
			  data:{action: 'getUser',
					user:   $("#modalLoginUsuario").val(),
					pass:   $("#modalLoginPassword").val()},  
			  success: function(result){
				$.noty.closeAll()
				if(result[0].error != ""){
					var n = noty({text: result[0].error});
				}else{
					var n = noty({text: result[0].msgOK});
					isAuth();
					$("#modalLogin").modal("hide");
				}
			  }
			});
	})
	
	/**
	*  Settings
	*/
	
	var settingsPassAnt = false;
	var settingsEmail = false;
	var settingsPassword = false;
	var settingsCorrecto = true;
	
	$("#modalSettingsPassAnt").bind("change paste keyup", function() {
		if(/^[a-zA-Z0-9]+$/.test($("#modalSettingsPassAnt").val())){
			$("#modalSettingsPassAntDiv").removeClass("has-error").addClass("has-success");
			$("#modalSettingsIconoPassAnt").removeClass("glyphicon-remove").addClass("glyphicon-ok");
			settingsPassAnt = true
		}else{
			$("#modalSettingsPassAntDiv").removeClass("has-success").addClass("has-error");
			$("#modalSettingsIconoPassAnt").removeClass("glyphicon-ok").addClass("glyphicon-remove");
			settingsPassAnt = false;
		}
		
	})
	
	$("#modalSettingsPass").bind("change paste keyup", function() {
		if(/^[a-zA-Z0-9]+$/.test($("#modalSettingsPass").val())){
			$("#modalSettingsPassDiv").removeClass("has-error").addClass("has-success");
			$("#modalSettingsIconoPass").removeClass("glyphicon-remove").addClass("glyphicon-ok");
			settingsPassword = true;
		}else{
			$("#modalSettingsPassDiv").removeClass("has-success").addClass("has-error");
			$("#modalSettingsIconoPass").removeClass("glyphicon-ok").addClass("glyphicon-remove");
			settingsPassword = false;
		}
		
	})
	
	$("#modalSettingsEmail").bind("change paste keyup", function() {
		if(/^[a-zA-Z0-9]+@(gmail.com)$/.test($("#modalSettingsEmail").val())){
			$("#modalSettingsEmailDiv").removeClass("has-error").addClass("has-success");
			$("#modalSettingsIconoEmail").removeClass("glyphicon-remove").addClass("glyphicon-ok");
			settingsEmail = true;
		}else{
			$("#modalSettingsEmailDiv").removeClass("has-success").addClass("has-error");
			$("#modalSettingsIconoEmail").removeClass("glyphicon-ok").addClass("glyphicon-remove");
			settingsEmail = false;
		}
		
	})
	
	$("#modalSettingsSave").click(function(){
		var textoErrorSettings = "Los siguientes campos son necesarios: "
		settingsCorrecto = true;
		if(!settingsPassAnt){
			textoErrorSettings += "</br>Password</br>";
			settingsCorrecto = false;
		}else{
			textoErrorSettings = "";
		}
		if(!settingsEmail && !settingsPassword){
			textoErrorSettings += "Al menos es necesario uno de los siguientes campos:</br>Nueva Password</br>Nuevo Email";
			settingsCorrecto = false;
		}
		
		if(settingsCorrecto){
			$.ajax({
				  url: "/php/controller.php",
				  type: "GET",
				  contentType: "application/json; charset=utf-8",
				  dataType: "json",
				  data:{action:  'changeUser',
				  		id:      $("#modalSettingsID").val(),
						passAnt: $("#modalSettingsPassAnt").val(),
						pass:    $("#modalSettingsPass").val(),
						email:   $("#modalSettingsEmail").val()},  
				  success: function(result){
					$.noty.closeAll()
					if(result[0].error != ""){
						var n = noty({text: result[0].error});
					}else{
						var n = noty({text: result[0].msgOK});
						$("#modalSettings").modal("hide");
					}
				  }
				});
		}else{
			$.noty.closeAll()
			var n = noty({text: textoErrorSettings});
		}
	})
	
	/**
	*  Anime List
	*/
	
	var correctScore = false;
	var correctScoreEdit = false;
	var idUserList;
	
	$("#modalAddScore").bind("change paste keyup", function() {
		if(/(^[0-9]$)|(^[0-9]\.{1}[0-9]{1,2}$)|(^10$)/.test($("#modalAddScore").val())){
			$("#modalAddScoreDiv").removeClass("has-error").addClass("has-success");
			$("#modalAddIconoScore").removeClass("glyphicon-remove").addClass("glyphicon-ok");
			correctScore = true;
		}else{
			$("#modalAddScoreDiv").removeClass("has-success").addClass("has-error");
			$("#modalAddIconoScore").removeClass("glyphicon-ok").addClass("glyphicon-remove");
			correctScore = false;
		}
		
	})
	
	$("#modalEditScore").bind("change paste keyup", function() {
		if(/(^[0-9]$)|(^[0-9]\.{1}[0-9]{1,2}$)|(^10$)/.test($("#modalEditScore").val())){
			$("#modalEditScoreDiv").removeClass("has-error").addClass("has-success");
			$("#modalEditIconoScore").removeClass("glyphicon-remove").addClass("glyphicon-ok");
			correctScoreEdit = true;
		}else{
			$("#modalEditScoreDiv").removeClass("has-success").addClass("has-error");
			$("#modalEditIconoScore").removeClass("glyphicon-ok").addClass("glyphicon-remove");
			correctScoreEdit = false;
		}
		
	})
	
	$("#addBtn").click(function(){
		
		$.ajax({
		  url: "/php/controller.php",
		  type: "GET",
		  contentType: "application/json; charset=utf-8",
		  dataType: "json",
		  data:{action:  'getAll'},  
		  success: function(result){
			var toAppendAnime = "";
			var toAppendChapters = "";
			for(var y = 0;y<result.length;y++){
				toAppendAnime += '<option value="'+result[y].id+'">'+result[y].name+'</option>';
			}
			var z =0;
			for(var z;z<result[0].chapters;z++){
				toAppendChapters += '<option value="'+z+'">'+z+'</option>';
			}
			toAppendChapters += '<option value="'+z+'" selected>'+z+'</option>';
			$("#modalAddCapitulos").append(toAppendChapters);
			$("#modalAddAnime").append(toAppendAnime);
		  }
		});
		$("#modalAdd").modal("show");
	});
	
	$("#modalAddAnime").change(function() {
	  $.ajax({
		  url: "/php/controller.php",
		  type: "GET",
		  contentType: "application/json; charset=utf-8",
		  dataType: "json",
		  data:{action:  'getAnimeById',
				id:      $("#modalAddAnime").val()},  
		  success: function(result){
			$("#modalAddCapitulos").empty();
			var toAppendChapters;
			var y = 0;
			for(var y;y<result[0].chapters;y++){
				toAppendChapters += '<option value="'+y+'">'+y+'</option>';
			}
			toAppendChapters += '<option value="'+y+'" selected>'+y+'</option>';
			$("#modalAddCapitulos").append(toAppendChapters);
		  }
		});
	});
	
	$("#modalAddSave").click(function(){
		if(correctScore){
			$.ajax({
				  url: "/php/controller.php",
				  type: "GET",
				  contentType: "application/json; charset=utf-8",
				  dataType: "json",
				  data:{action:     'addAnime',
				  		idAnime:    $("#modalAddAnime").val(),
						idUsuario:  idUserList,
						score:      $("#modalAddScore").val(),
						chapters:   $("#modalAddCapitulos").val()},  
				  success: function(result){
					$.noty.closeAll()
					if(result[0].error != ""){
						var n = noty({text: result[0].error});
					}else{
						var n = noty({text: result[0].msgOK});
						$("#modalAdd").modal("hide");
						$('#tableAnimeList').bootstrapTable("refresh",{
							url: "/php/controller.php?action=getList&user="+idUserList
						});
					}
				  }
				});
		}else{
			$.noty.closeAll()
			var n = noty({text: "El score indicado no es correcto"});
		}
	});
	
	$("#animeList").click(function(){
		$.ajax({
			  url: "/php/controller.php",
			  type: "GET",
			  contentType: "application/json; charset=utf-8",
			  dataType: "json",
			  data:{action: 'isAuth'},  
			  success: function(result){
				$.noty.closeAll()
				if(result[0].error != ""){
					returnBack();
					var n = noty({text: result[0].error});
				}else{
					idUserList = result[0].id;
					$.ajax({
					  url: "/php/controller.php",
					  type: "GET",
					  contentType: "application/json; charset=utf-8",
					  dataType: "json",
					  data:{action: 'getList',
					  		user:   idUserList},  
					  success: function(result){
						$('#tableAnimeList').bootstrapTable('destroy');
						$('#tableAnimeList').bootstrapTable({
							data: result
						});
					  }
					});
				}
			  }
			});
	});
	
	$("#tableAnimeList").on("click-row.bs.table", function(row, $element) {
	  
	  $("#modalEdit").modal("show");
	  
	  $("#modalEditID").val($element.idAnime);
	  $("#modalEditAnime").val($element.name);
	  if($element.score == 10.00){
		  $("#modalEditScore").val(10);
	  }else{
		  $("#modalEditScore").val($element.score);
	  }
	  var chaptersFormatted = $element.chapters.split(" / ");
	  var toAppendEditChapters
	  for(var x = 0;x<=chaptersFormatted[1];x++){
	 	if(chaptersFormatted[0] == x){
			toAppendEditChapters += '<option value="'+x+'" selected>'+x+'</option>';
		}else{
			toAppendEditChapters += '<option value="'+x+'">'+x+'</option>';
		}
      }
	  $("#modalEditCapitulos").append(toAppendEditChapters);
	});
	
	$("#modalEditSave").click(function(){
		if(correctScoreEdit){
			$.ajax({
				  url: "/php/controller.php",
				  type: "GET",
				  contentType: "application/json; charset=utf-8",
				  dataType: "json",
				  data:{action:     'editAnime',
				  		idAnime:    $("#modalEditID").val(),
						idUsuario:  idUserList,
						score:      $("#modalEditScore").val(),
						chapters:   $("#modalEditCapitulos").val()},  
				  success: function(result){
					$.noty.closeAll()
					if(result[0].error != ""){
						var n = noty({text: result[0].error});
					}else{
						var n = noty({text: result[0].msgOK});
						$("#modalEdit").modal("hide");
						$('#tableAnimeList').bootstrapTable("refresh",{
							url: "/php/controller.php?action=getList&user="+idUserList
						});
					}
				  }
				});
		}else{
			$.noty.closeAll()
			var n = noty({text: "El score indicado no es correcto"});
		}
	});
	
	$("#delBtn").click(function(){
		var toDelete = $('#tableAnimeList').bootstrapTable('getSelections');
		if(toDelete.length > 0){
			noty({
				text: '¿Estas seguro de eliminar los animes seleccionados?',
				buttons: [
					{addClass: 'btn btn-primary', text: 'Si', onClick: function($noty) {
							$noty.close();
							for(var z = 0; z < toDelete.length;z++){
								$.ajax({
								  url: "/php/controller.php",
								  type: "GET",
								  contentType: "application/json; charset=utf-8",
								  dataType: "json",
								  data:{action:     'deleteAnime',
										idAnime:    toDelete[z].idAnime,
										idUsuario:  idUserList},
								  success: function(result){
									$.noty.closeAll()
									if(result[0].error != ""){
										var n = noty({text: result[0].error});
									}else{
										var n = noty({text: result[0].msgOK});
										$('#tableAnimeList').bootstrapTable("refresh",{
											url: "/php/controller.php?action=getList&user="+idUserList
										});
									}
								  }
								});
							}
						}
					},
					{addClass: 'btn btn-danger', text: 'No', onClick: function($noty) {
							$noty.close();
						}
					}
				]
			});
		}else{
			noty({
				text: 'Para poder eliminar primero debes seleccionar uno o varios animes'
			});
		}
	});
	
	/**
	*  Home, navegacion y mas detalles
	*/
	
	$(".tabs").click(function(){
		$(".tabs").removeAttr("style")
		$(this).css("color","#dd4b39")
		$(this).css("border-bottom","3px solid #dd4b39")
	});
	
	$.ajax({
      url: "/php/controller.php",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
	  data:{action: 'getAll'},  
	  success: function(result){
			var row = 0;
			var toAppend ="";
			for(var i = 0;i<result.length;i++){
				if(row == 0){
					toAppend += '<div class="row same-height">';
					row++;
				}else{
					row++;
				}
				toAppend += '<div class="col-sm-6 col-md-4">'
				toAppend +=	'<div class="thumbnail">'
				toAppend +=	'<img class="imgCover" src="img/'+result[i].cover+'" alt="'+result[i].name+'" width="350" height="262.5">'
				toAppend +=	'<div class="caption">'
				toAppend +=	'<h4>'+result[i].name+'</h4>'
				toAppend +=	'<p>Capitulos: '+result[i].chapters+'</p>'
				toAppend +=	'<p>Año: '+result[i].year+'</p>'
				toAppend +=	'<p>Sinopsis: '+result[i].summary+'</p>'
				toAppend +=	'<button class="btn btn-default pull-right detallesAnime" id="'+result[i].id+'">Ver más</button>'
				toAppend +=	'<div style="clear:both"></div>'
				toAppend +=	'</div>'
				toAppend +=	'</div>'
				toAppend +=	'</div>'
				if(row == 3){
					toAppend += "</div>";
					row = 0;
				}
				
			}
			$("#container").append(toAppend);
			$("#container").append('<div style="clear:both"></div>');
			
			$(".detallesAnime").click(function(){
				
				$.ajax({
				  url: "/php/controller.php",
				  contentType: "application/json; charset=utf-8",
				  dataType: "json",
				  data:{action: 'getAnimeById',
				  		id:     $(this).attr("id")},  
				  success: function(result){
					var resultAjax = result[0];
					$("#modalDetalles").modal("show");
					$("#first").empty();
					var toAppend =	'<div class="col-md-5">'
					    toAppend +=	'<img src="img/'+resultAjax.cover+'" alt="'+resultAjax.name+'" class="img-rounded" width="300" height="300">'
						toAppend +=	'</div>'
						toAppend +=	'<div class="caption col-md-7">'
						toAppend +=	'<h3>'+resultAjax.name+'</h3>'
						toAppend +=	'<table id="detailsTable">'
						toAppend +=	'<tr><td><p><strong>Numero de capitulos:</strong></td><td> '+resultAjax.chapters+'</p></td></tr>'
						toAppend +=	'<tr><td><p><strong>Año de publicacion:</strong></td><td> '+resultAjax.year+'</p></td></tr>'
						toAppend +=	'<tr><td><p><strong>Puntuacion de los usuarios:</strong></td><td> '+resultAjax.score+'</p></td></tr>'
						toAppend +=	'<tr><td><p><strong>Director:</strong></td><td> '+resultAjax.director+'</p></td></tr>'
						toAppend +=	'<tr><td><p><strong>Estudio:</strong></td><td> '+resultAjax.studio+'</p></td></tr>'
						toAppend +=	'<tr><td><p><strong>Tipo:</strong></td><td> '+resultAjax.type+'</p></td></tr>'
						toAppend +=	'</table>'
						toAppend +=	'</div>'
						toAppend +=	'<div style="clear:both"></div>'
						toAppend +=	'<div class="moreDetails">'
						toAppend +=	'<p><strong>Sinopsis:</strong> '+resultAjax.summary+'</p>'
						toAppend +=	'<div style="clear:both"></div>'
						toAppend +=	'</div>'
						
						/**
						*  Calculamos cuanta informacion de personajes hay disponible
						*/
						
						$(".carousel-indicators").empty();
						$(".carousel-inner").empty();
						if(resultAjax.mainCharacter1 != null){
						  var MC = resultAjax.mainCharacter1.split(";;");
						  var toCarMenu = '<li data-target="#quote-carousel" data-slide-to="0" class="active"></li>'
						  $(".carousel-indicators").append(toCarMenu);
						  <!-- Quote 1 -->
						  var toCar = '<div class="item active">'
					          toCar += '<div class="row">'
							  toCar += '<div class="col-md-3 text-center">  '
						      toCar += '<img class="img-rounded" src="img/'+MC[2]+'" style="width: 100px;height:100px;">'
						      toCar += '</div>'
						      toCar += '<div class="col-md-9">'
						      toCar += '<p>'+MC[1]+'</p>'
						      toCar += '<small>'+MC[0]+'</small></br>'
							  toCar += '<small><strong>Doblado por: </strong>'+resultAjax.seiyuuMC1+'</small>'
						      toCar += '</div>'	
							  toCar += '</div>'
						      toCar += '</div>'	
							
						  $(".carousel-inner").append(toCar);
						
						}
						if(resultAjax.mainCharacter2 != null){
						  var MC = resultAjax.mainCharacter2.split(";;");
						  
						  var toCarMenu = '<li data-target="#quote-carousel" data-slide-to="1"></li>'
						  $(".carousel-indicators").append(toCarMenu);
						  <!-- Quote 1 -->
						   var toCar = '<div class="item">'
					          toCar += '<div class="row">'
							  toCar += '<div class="col-md-3 text-center">  '
						      toCar += '<img class="img-rounded" src="img/'+MC[2]+'" style="width: 100px;height:100px;">'
						      toCar += '</div>'
						      toCar += '<div class="col-md-9">'
						      toCar += '<p>'+MC[1]+'</p>'
						      toCar += '<small>'+MC[0]+'</small></br>'
							  toCar += '<small><strong>Doblado por: </strong>'+resultAjax.seiyuuMC2+'</small>'
						      toCar += '</div>'	
							  toCar += '</div>'
						      toCar += '</div>'	
							
						  $(".carousel-inner").append(toCar);
						
						}
						if(resultAjax.mainCharacter3 != null){
						  var MC = resultAjax.mainCharacter3.split(";;");
						  
						  var toCarMenu = '<li data-target="#quote-carousel" data-slide-to="2"></li>'
						  $(".carousel-indicators").append(toCarMenu);
						  <!-- Quote 1 -->
						   var toCar = '<div class="item">'
					          toCar += '<div class="row">'
							  toCar += '<div class="col-md-3 text-center">  '
						      toCar += '<img class="img-rounded" src="img/'+MC[2]+'" style="width: 100px;height:100px;">'
						      toCar += '</div>'
						      toCar += '<div class="col-md-9">'
						      toCar += '<p>'+MC[1]+'</p>'
						      toCar += '<small>'+MC[0]+'</small></br>'
							  toCar += '<small><strong>Doblado por: </strong>'+resultAjax.seiyuuMC3+'</small>'
						      toCar += '</div>'	
							  toCar += '</div>'
						      toCar += '</div>'	
							
						  $(".carousel-inner").append(toCar);
						}
						if(resultAjax.mainCharacter4 != null){
						  var MC = resultAjax.mainCharacter4.split(";;");
						  
						  var toCarMenu = '<li data-target="#quote-carousel" data-slide-to="3"></li>'
						  $(".carousel-indicators").append(toCarMenu);
						  <!-- Quote 1 -->
						   var toCar = '<div class="item">'
					          toCar += '<div class="row">'
							  toCar += '<div class="col-md-3 text-center">  '
						      toCar += '<img class="img-rounded" src="img/'+MC[2]+'" style="width: 100px;height:100px;">'
						      toCar += '</div>'
						      toCar += '<div class="col-md-9">'
						      toCar += '<p>'+MC[1]+'</p>'
						      toCar += '<small>'+MC[0]+'</small></br>'
							  toCar += '<small><strong>Doblado por: </strong>'+resultAjax.seiyuuMC4+'</small>'
						      toCar += '</div>'	
							  toCar += '</div>'
						      toCar += '</div>'	
							
						  $(".carousel-inner").append(toCar);
						}
						

						$('#quote-carousel').carousel({
						  pause: true,
				          interval: 5000,
						});
					$("#first").append(toAppend);
				  }
				});
			});
      }
	});
	
	
});

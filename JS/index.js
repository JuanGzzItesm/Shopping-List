
function newbox(){

		//Declaracion de elementos que se necesitan para la lista
	
		let nuevo = $("#nuevoitem").val();

		let bullet = document.createElement("li");

		let itemL = document.createTextNode(nuevo);

		let listo = document.createElement("button");

		let formato = document.createElement("div");

		let borrar = document.createElement("button");


// Agregar el formato de los botones


		$(borrar).text("DELETE");

		$(borrar).addClass("borrar");

		$(listo).text("CHECK");

		$(listo).addClass("listo");



//Realizar un append a cada uno de los elementos de acuerdo con el formato requerido, primero los bullet y despues los botones


		$(bullet).append(itemL);

		$(bullet).append(formato)

		$(bullet).append(listo);

		$(bullet).append(borrar);

		$("ul").append(bullet);


//Eventos de click para cada uno de los botones, uno de ellos hace toggle a la funcion rayado que marca el elemento en la lista y el otro lo elimina


		$(listo).click(function(e){

			$(bullet).toggleClass("rayado")

		 console.log("SE LOGRO");

		});

		$(borrar).click(function(e){

			$(bullet).remove();

		 console.log("SE LOGRO");
	});

//PRIMER PRUEBA REALIZADA ANEXO COMO EVIDENCIA

		//$("ul").append("<li type = 'none'> <form class = 'cuadro'> <fieldset> <div class = 'norayado'><p>" + nuevo + "</p><button type='submit' class ='listo'> CHECK </button> <button type='submit' class ='borrar'> DELETE </button></div></fieldset></form></li>");



		 //if ($(this).parent().attr("class") == ("norayado")){

		 	//	console.log("YA ES RAYADO");
		 	//	$(this).parent().removeClass("norayado");
		 	//	$(this).parent().addClass("rayado");
		 	//	break;

		 //}else{


		 	//$(this).parent().removeClass("rayado");
		 	//console.log("PRUEBA A QUIIIII");
		 	//break;
		 //}


		 

		 //console.log($(this).parent().parent().parent());

		 //if ($(this).parent().parent().parent().attr("class") == ("norayado")){

		 	//console.log("NO RAYADO");
		 	//$(this).parent().parent().parent().addClass("rayado");

		 //}else{

		 	//console.log("RAYADO");
		 	//$(this).parent().parent().parent().removeClass("rayado");
		 //}


		 	

		 //if($(this).closest("li").attr("class") == ("norayado")){

		 

		 	//$(this).closest("li").addClass("rayado");

		 //}else{

		 	//console.log("2")

		 	//$(this).closest("li").addClass("norayado");
		 	
		 //}
		 
		 

		// $(this).closest("li").addClass("rayado");	 

		 	
			//$(this).toggleClass("rayado");

		
		//});
		

}




function init(){

	$('#submit').click(function(e){

		 e.preventDefault();
		 newbox();
	});

}

init();


								
							//funcion que extrae datos del formulario

									function getformData(){
									var formData = {};

									var customerNameproject = $("#customer-nameproject").val();
									var customerName = $("#customer-name").val();
									var customerDescript = $("#customer-descript").val();
									var customerMail = $("#customer-mail").val();
									var customerPhone = $("#customer-phone").val();
									formData.customerNameproject = customerNameproject;
									formData.customerName = customerName;
									formData.customerDescript = customerDescript;
									formData.customerMail = customerMail;
									formData.customerPhone = customerPhone;
									console.log(formData);
									$("input").val("");

									  } 

									$("submit-button").on("click" ,function(){

									getformData()		
									} )

								//listener que se activa al dar click en un boton, esto da paso a una funcion que recaba datos de un array

								$("#getPourposes").on("click" ,function() {
									
									getPourposes();
								}
													 
													 )

									var projectArray = [

										{customerImage:"img/1775915-avatar/png/034-punk.png",
										customerName: "Horacio Farina Macedo",	
										customerNameproject: "SARATOGA",
										customerDescript: "Ultrasecreto",
										customerMail: "comanch@gmail.com",
										customerPhone: "5523685955"},

										{customerImage:"img/1775915-avatar/png/012-cowboy.png",
										customerName: "Heruviel Molina Arranco",
										customerNameproject: "TESLATOR",
										customerDescript: "Iformativa acerca de un negocio del campo de la electrónica",
										customerMail: "ighthing@teslator.com",
										customerPhone: "5523654189"},

										{customerImage:"",
										customerName: "Sergio Bustamante Ortega",
										customerNameproject: "TERROFORMA",
										customerDescript: "Area Construcci[on,materiales alta tecnologia",
										customerMail: "jarmstrongl@hotmail.com",
										customerPhone: "5542116822"},

										{customerImage:"img/1775915-avatar/png/010-general.png",
										customerName: "Eder Martínez Palacios",
										customerNameproject: "VAZQUEZ & PlYMOUTH",
										customerDescript: "Abogacía",
										customerMail: "dazanic@vazply.com",
										customerPhone: "525578562234"},

										{customerImage:"img/1775915-avatar/png/016-DJ.png",
										customerName: "Federico Lira Pantoja",
										customerNameproject: "PANCRAS",
										customerDescript: "Esparcimiento y diversión",
										customerMail: "hjhonoe@pancras.com",
										customerPhone: "5526367118"},

										{customerImage:"img/1775915-avatar/png/013-cyclist.png",
										customerName: "Noel Verstegen",
										customerNameproject: "STARK BARR",
										customerDescript: "Búsquedas comercial",
										customerMail: "versteguen@starkbarr.com",
										customerPhone: "5595257214"},
										
										{customerImage:"img/1775915-avatar/png/026-lady.png",
										customerName: "Varsia Nemes Olvera",
										customerNameproject: "OVLITEK",
										customerDescript: "Reputación redes sociales",
										customerMail: "varolve@ovlitek.com",
										customerPhone: "55785632"},
										
										{customerImage:"",
										customerName: "Mars Molina García",
										customerNameproject: "XENGEN",
										customerDescript: "Médico biológico",
										customerMail: "resstjoan@xengen.com",
										customerPhone: "554462321789"}



									]
									
									
									//esta variable representa el formulario en html de donde se habilitan unas etiquetas 
									//para depositar la informacion

									var projectPourposeHtml = `<div class="col-lg-3">
																	<div class="card my-2">

																			<div class="card-body">
																				<h5 class="card-title">Desarrollo de Sitio</h5>
																				<h6 class="card-subtitle mb-2 text-muted">Luis E. Nieves</h6>
																					<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat 				magnam temporibus provident id 						quas quisquam qui quae dolorum beatae 				facilis, assumenda inventore, quo laboriosam nam at adipisci tempore aspernatur 						voluptate.</p>
																					<p>luengual@hotmail.com</p>
																					<p>5541783245</p>
																					<p>Habilidades requeridas:
																					<span class="badge badge-primary">Diseño Web</span>
																					<span class="badge badge-primary">Retoque Digital</span>
																					<span class="badge badge-primary">3D</span></p>	
																						<a href="#" class="crd-link">Otro Link</a>
																				</div>
																				</div>
		
		


}																	</div>`
									
	
		//esn esta funcion se conjugan todas las aariba mencionadas para recuperar datos 
		//un array y posteriormente recuperarlos y mostrarlos en una link de app web.
									
	function getPourposes (){
		//$("#pourpuse-wrapper").empty(); se encarga da vaciar las cards cada vez que se renueva la pagina con F5
		$("#pourpuse-wrapper").empty();
	projectArray.forEach(function(value, index){
		console.log(value);
		var customerImage = value.customerImage;
		var customerNameproject = value.customerNameproject;
			var customerName = value.customerName;
				var customerDescript = value.customerDescript;
					var customerMail = value.customerMail;
						var customerPhone = value.customerPhone;

		var projectPourposeHtml = `<div class="col-lg-3">
																	<div class="card my-2">

																			<div class="card-body">
																		<img src=${customerImage} class="card-img-top" alt="...">
																				<h5 class="card-title">${customerNameproject}</h5>
																				<h6 class="card-subtitle mb-2 text-muted">${customerName}</h6>
																					<p class="card-text">${customerDescript}</p>
																					<p>${customerMail}</p>
																					<p>${customerPhone}</p>
																					<p>Habilidades requeridas:
																					<span class="badge badge-primary">Diseño Web</span>
																					<span class="badge badge-primary">Retoque Digital</span>
																					<span class="badge badge-primary">3D</span></p>	
																						<a href="#" class="crd-link">Otro Link</a>
																				</div>
																				</div>
																			</div>`
		
		$("#pourpuse-wrapper").append(projectPourposeHtml);



	})
		
		
	}

    
	






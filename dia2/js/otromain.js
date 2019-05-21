
const config = {
		'otrotit': 'ESTO ES PARA VENTA',
		'slogan' : 'Ahí te va el Costal!!!',
	'imageCard': 'img/1775915-avatar/png/018-farmer.png',
		'image' :'img/antarctic_fondo.jpg',
		'hipster': 'COMPRAR'


}
$('#Encabez').html(config.otrotit),
$('#imagetopone').css('background-image',`url(${config.image})`),
$('.fraseHipster > h6').html(config.slogan),

//el atruibuto img src no puede ser modificado,se sugiere
//construir en css la posición de las imagenes
$('#hipster > img ').attr('src',config.imageCard)





var customerCard = `<div class="col-3 project d-flex justify-content-center align-items-center">

					<img src="img/1775915-avatar/png/024-labour.png" style="width:340px;height:340px;" class="img-fluid">
					<div id="submit-labourbutton"  class="btn btn-primary"  onclick="">Opcionar</div>		</div>`


function getCardimages () {

	var customerImage = value.customerImage;

	var customerCard = `<div class="col-3 project d-flex justify-content-center align-items-center">

					<img src=${customerImage} style="width:340px;height:340px;" class="img-fluid">
					<div id="submit-labourbutton"  class="btn btn-primary"  onclick="">Opcionar</div>		</div>`


}

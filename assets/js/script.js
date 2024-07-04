
// Fancybox
Fancybox.bind("[data-fancybox]");

AOS.init();

let imagenesConZoom = document.querySelectorAll('.clsph img');

imagenesConZoom.forEach(imagen => {
  imagen.addEventListener('mouseover', () => {
    imagen.style.transform = 'scale(1.2)'; // Cambia el factor de escala aquí
  });

  imagen.addEventListener('mouseout', () => {
    imagen.style.transform = 'scale(1)'; // Regresa al tamaño original
  });
});

function abrirPaginaCompra(nombreCamara) {
  let url = urlsCamaras[nombreCamara]; // Obtiene la URL del objeto urlsCamaras

  if (url) { // Verifica si la URL existe
    window.open(url, '_blank');
  } else {
    console.error("No se encontró una URL para la cámara:", nombreCamara);
    // Puedes mostrar un mensaje de error al usuario si lo deseas
  }
}

const urlsCamaras = {
  rep01: "https://www.jessops.com/p/fujifilm/quicksnap-flash-400-single-use-camera-pack-of-3-203090",
  rep02: "https://www.jessops.com/p/kodak/ektar-h35-film-camera-in-brown-200991", 
  rep03: "https://www.jessops.com/p/ilford/ilfocolor-rapid-black-single-use-camera-27-exposures-204601" 
  // Agrega más cámaras según sea necesario
};

$(document).ready(function() {
  $.getJSON({
    url: 'camaras.json',
    success: function(respuesta) {
      $.each(respuesta, function(index, cam) {
        var html = '<div class="col-4">';
        html += '<div class="card">';
        html += '<img src="' + cam.image + '" class="card-img-top" alt="' + cam.name + '">';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">' + cam.id + '.- ' + cam.name + '</h5>';
        html += '</div>';
        html += '</div>';
        html += '</div>';

        $('#camaras').append(html);
      });
    },
    error: function() {
      $('#camaras').html('No hay camaras disponibles');
    }
  });
});

// Habilitación popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

let cambio = document.getElementById('cambiar')

cambio.addEventListener('click', function(){
  datoTitulo = document.getElementById('datoTitulo').value
  datoParrafo = document.getElementById('datoParrafo').value
  
  const popover = bootstrap.Popover.getOrCreateInstance('#example') 

  // setContent cambia el contenido del popover
  popover.setContent({
    '.popover-header': datoTitulo,
    '.popover-body': datoParrafo
  })
  
});



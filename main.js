// Capturar los controles y foto
const inputs = document.querySelectorAll( '#controles input' );
let foto = document.getElementById('imagen');

// Escuchar los cambios de los controles
inputs.forEach(input => {
  input.addEventListener('change', detectarCambios);
  input.addEventListener ('mousemove', detectarCambios);
})

// Agregar 'px' al final del espaciado y desenfoque de variables
function detectarCambios() {
  
  const suffix = (this.name === 'colorMarco' ? '' : 'px');  
  //Otra forma:  const suffix = this.dataset.sizing || '';
    
    document.documentElement.style.setProperty(
      `--${this.name}`, this.value + suffix
    )
}

// Cambiar fotos
let num = 1;
function cambiarFoto() {
  
  num++;

  if( num > 3 ) {
    num = 1;
  }
  
  foto.src = 'foto' + num + '.jpg';


  // Cambiar entre 2 imagenes
  /*if ( foto.src.match('foto2')){
    foto.src="foto1.jpg";
  } else {
    foto.src="foto2.jpg";
  }
  */
}


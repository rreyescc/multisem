
$(document).ready(function(){

    $("#btnContacto").on("click", enviarCorreo);


    function enviarCorreo(){

        if(validarFormulario()){
            var jsonData = {};
            jsonData.nombre = getElementNombre().val();
            jsonData.telefono = getElementTelefono().val();
            jsonData.correo = getElementCorreo().val();
            jsonData.mensaje = getElementMensaje().val();

            $.ajax({
                url: 'email.php',
                type: 'POST',
                data: jsonData,
                success: function(response) {
                    limpiarFormulario();
                    mostrarMensajeExito();
                }
            });
        }
    }

    function limpiarFormulario(){
        getElementNombre().val('');
        getElementTelefono().val('');
        getElementCorreo().val('');
        getElementMensaje().val('');
    }

    function mostrarMensajeExito(){
        $('#alert').html(obtenerMensajeExito());
        setTimeout(function(){
            $('.alert').alert('close').fadeOut('slow');
        }, 5000);
    }

    function obtenerMensajeExito(){
        var htmlMensaje = '<div class="alert alert-success" role="alert">';
        htmlMensaje += 'Gracias por escribirnos, en breve nos pondremos en contacto con usted.';
        htmlMensaje += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
        htmlMensaje += '<span aria-hidden="true">&times;</span>';
        htmlMensaje += '</button>';
        htmlMensaje += '</div>';

        return htmlMensaje;
    }
    
    function validarFormulario(){
        return validarNombre() &&
               validarTelefono() &&
               validarCorreo();
    }

    function validarNombre(){
        getElementNombre().removeClass('is-invalid');
        if(getElementNombre().val().trim() == ''){
            getElementNombre().addClass('is-invalid');
            return false;
        }
        return true;
    }

    function validarTelefono(){
        getElementTelefono().removeClass('is-invalid');
        if(getElementTelefono().val().trim() == ''){
            getElementTelefono().addClass('is-invalid');
            return false;
        }
        return true;
    }

    function validarCorreo(){
        getElementCorreo().removeClass('is-invalid');
        if(getElementCorreo().val().trim() == ''){
            getElementCorreo().addClass('is-invalid');
            return false;
        }
        return true;
    }

    function getElementNombre(){
        return $('#nombre');
    }

    function getElementTelefono(){
        return $('#telefono');
    }

    function getElementCorreo(){
        return $('#correo');
    }

    function getElementMensaje(){
        return $('#mensaje');
    }
});

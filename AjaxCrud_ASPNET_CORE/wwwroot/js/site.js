// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//function para el loader
$(function () {
    $('#loaderbody').addClass('hide');

    $(document).bind('ajaxStart', function () {
        $('#loaderbody').removeClass('hide');
    }).bind('ajaxStop', function () {
        $('#loaderbody').addClass('hide');
    });
});

//Función para mostrar el popup
showInPopup = (url,title) => {
    $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
            $("#form-modal .modal-body").html(res);
            $("#form-modal .modal-title").html(title);
            $("#form-modal").modal('show');//función modal de bootstrap con el parámetro show para mostrar el modal
        }
    })
}

//función que se utiliza para la creación o actualización en la vista de AddOrEdit
jQueryAjaxPost = form => {
    try {
        $.ajax({
            type: 'POST',
            url: form.action,
            data: new FormData(form), // Estoy enviando los datos del formulario al servidor de la url(es decir al actionresult del controlador)
            contentType: false,
            processData: false,
            success: function (res) {
                alert(res)
                if (res.isValid) {
                    $('#view-all').html(res.html);
                    $("#form-modal .modal-body").html('');
                    $("#form-modal .modal-title").html('');
                    $("#form-modal").modal('hide');
                    // jquery junto las funciones notify.js ubicado en la carpeta JS
                    //$.notify('submitted successfully', { globalPosition: 'top center', className='success' }) --> ME SALE ERROR
                    
                }
                else
                    $("#form-modal .modal-body").html(res.html);
            },
            error: function (err) {
                console.log(err);
            }
        })
    } catch (e) {
        console.log(e)
    }

    //to prevent default form submit event
    return false;
}

//Función que se utiliza para eliminar
jQueryAjaxDelete = form => {
    if (confirm('Are you sure to delete this record ? ')) {
        try {
            $.ajax({
                type: 'POST',
                url: form.action,
                data: new FormData(form),
                contentType: false,
                processData: false,
                success: function (res) {
                    $("#view-all").html(res.html);
                    // $.notify('deleted successfully', { globalPosition: 'top center', className='success' }) --> Me sale error
                },
                error: function (err) {
                    console.log(err);
                }
            })

        } catch (e) {
            console.log(e)
        }
    }
    //to prevent default form submit event
    return false;
}
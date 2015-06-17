$(document).ready(function () {

    status('Choose a file :)');

    var timerId;
    timerId = setInterval(function () {
        if ($('#userPhotoInput').val() !== '') {
            clearInterval(timerId);

            $('#uploadForm').submit();
        }
    }, 500);

    $('#uploadForm').submit(function () {
        status('uploading the file ...');

        miau();

        $(this).ajaxSubmit({
            dataType: 'text',

            error: function (xhr) {
                status('Error: ' + xhr.status);
            },

            success: function (response) {

                try {
                    response = $.parseJSON(response);
                }
                catch (e) {
                    status('Bad response from the server.');
                    $('#uploadForm')[0].reset();
                    location.reload();
                    return;
                }

                if (response.error) {
                    status('Oops, something bad happened');
                    return;
                }

                var imageUrlOnServer = response.path;
                $('#uploadForm')[0].reset();
                location.reload();
                status('Success, file uploaded to:' + imageUrlOnServer);
            }
        });

        return false;
    });

    function status(message) {
        $('#status').text(message);
    }
});

function miau(){
    if($('#id').val() == ''){
        alert("Ingresa un nombre primero.");
        $('#uploadForm')[0].reset();
        location.reload();
    }
}
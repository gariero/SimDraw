$(document).ready(function () {

    $('#typesDroplist').change(function () {
        if ($(this).val() == 1) {
            $('#shapeSelect').prop("disabled", false);
        } else {
            $('#shapeSelect').prop("disabled", true);
        }
    });

});

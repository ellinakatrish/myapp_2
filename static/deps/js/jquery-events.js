// Когда html документ готов (прорисован)
$(document).ready(function () {
    //we take an element from the markup by id - notifications from django
    var notification = $('#notification');
    // In 7 secons the message is gone
    if (notification.length > 0) {
        setTimeout(function () {
            notification.alert('close');
        }, 7000);
    }

    // При клике по значку корзины открываем всплывающее(модальное) окно
    $('#modalButton').click(function () {
        $('#exampleModal').appendTo('body');

        $('#exampleModal').modal('show');
    });

    // Собыите клик по кнопке закрыть окна корзины
    $('#exampleModal .btn-close').click(function () {
        $('#exampleModal').modal('hide');
    });

    //Event handler for radio button to choose the delivery method
    $("input[name='requires_delivery']").change(function() {
        var selectedValue = $(this).val();
        // Hiding or display the delivery address input
        if (selectedValue === "1") {
            $("#deliveryAddressField").show();
        } else {
            $("#deliveryAddressField").hide();
        }
    });

});
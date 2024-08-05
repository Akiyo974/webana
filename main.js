$(document).ready(function () {
    // Vérifier le mode initial et appliquer la classe correspondante
    const isNightMode = localStorage.getItem('nightMode') === 'true';
    if (isNightMode) {
        $('body').addClass('night-mode').removeClass('day-mode');
        $('#toggle-switch').prop('checked', true);
    } else {
        $('body').addClass('day-mode').removeClass('night-mode');
        $('#toggle-switch').prop('checked', false);
    }

    // Gérer le basculement du mode
    $('#toggle-switch').on('change', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('night-mode').removeClass('day-mode');
            localStorage.setItem('nightMode', true);
        } else {
            $('body').addClass('day-mode').removeClass('night-mode');
            localStorage.setItem('nightMode', false);
        }
    });
});

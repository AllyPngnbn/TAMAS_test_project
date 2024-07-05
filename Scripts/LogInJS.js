
$(document).ready(function () {
    $('#login').click(function () {
        let un_input = $('#username').val();
        let pass_input = $('#password').val();

        if ((un_input != '') && (pass_input != '')) {
            alert('You have successfully logged in!')
        }
    });
})
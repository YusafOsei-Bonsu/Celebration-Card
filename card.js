// Shorthand for $( document ).ready()
$(function() {
    let submitBtn = document.querySelector('#submit-btn');

    submitBtn.addEventListener("click", function() {
        // Hides form
        $('#card-form').hide();
        
        // Prevents webpage from refreshing
        event.preventDefault();
        event.stopPropagation();
    });
});
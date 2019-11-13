// Shorthand for $( document ).ready()
$(function() {
    let submitBtn = document.querySelector('#submit-btn');

    submitBtn.addEventListener("click", function() {
        // Hides form
        $('#card-form').hide();
        
        fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {
            let image = `<img class="beach-image" src="${response.url}" alt="beach image"/>`
            console.log(image);
            $('main').append(image);
        });

        // Prevents webpage from refreshing
        event.preventDefault();
        event.stopPropagation();
    });
});
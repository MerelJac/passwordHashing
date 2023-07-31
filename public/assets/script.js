const submitBtn = document.querySelector('input[type="submit"]');


submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('clicked');
});
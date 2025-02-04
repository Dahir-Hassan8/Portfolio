
const imageWrappers = document.querySelectorAll('.image-wrapper');

imageWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', function () {
        const link = wrapper.getAttribute('data-link');
        window.open(link, '_blank'); // Open link in a new tab
    });
});

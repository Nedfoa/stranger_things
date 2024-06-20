const ImageA = document.getElementById('img-a');
const ImageB = document.getElementById('img-b');
const ImageC = document.getElementById('img-c');
const ImageD = document.getElementById('img-d');

ImageA.addEventListener('mouseover', function() {
    ImageA.style.opacity = '1';
    ImageB.style.opacity = '0.1';
});
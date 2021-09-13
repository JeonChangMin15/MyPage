const image = document.querySelector('img');
let point = 'present';

image.addEventListener('click', () => {
    if(point === 'present') {
        image.src = 'highschool.jpeg';
        point = 'highschool';
    } else {
        image.src = 'myimage.jpeg';
        point = 'present';
    }
});
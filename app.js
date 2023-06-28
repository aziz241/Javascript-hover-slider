"use strict";

const photos = document.querySelectorAll('.photo');


photos.forEach(function (item) {
    item.addEventListener('mouseover', function (e) {

        if (e.target.classList.contains('active')) {

            e.target.classList.remove('active');
        }
        else {
            remove();
            e.target.classList.add('active');

        }

    });

    item.addEventListener('mouseout', function (e) {
        e.target.classList.remove('active');
    });

});



function remove() {
    photos.forEach(function (item) {

        item.classList.remove('active');

    });

}

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByClassName('btn-menu');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', click_menu);
    }

    var buttons2 = document.getElementsByClassName('btn-random');
    for (var i = 0; i < buttons2.length; i++) {
        buttons2[i].addEventListener('click', click_to_menu);
    }

    var buttons3 = document.getElementsByClassName('btn-random');
    for (var i = 0; i < buttons3.length; i++) {
        buttons3[i].addEventListener('click', click_menus);
    }

    document.getElementById('random-btn').addEventListener('click', random);
});

function click_menu(event) {
    event.preventDefault();
    var el = event.target;
    if (el.id === 'btn-1') {
        window.location.href = '/';
    } else if (el.id === 'btn-2') {
        window.location.href = '/compliment';
    } else if (el.id === 'btn-3') {
        window.location.href = '/for_you';
    }
}


function click_to_menu(event) {
    event.preventDefault();
    var el = event.target;
    if (el.id === 'menu-btn') {
        window.location.href = '/';
    } else if (el.id === 'three-btn') {
        window.location.href = '/for_you';
    }
}

function click_menus(event) {
    event.preventDefault();
    var el = event.target;
    if (el.id === 'btn-1') {
        window.location.href = '/';
    } else if (el.id === 'btn-2') {
        window.location.href = '/compliment';
    }
}

function random(event) {
    event.preventDefault();
    const el = document.getElementById('random-text');

    const compliments = [
        'Ты самая лучшая!',
        'Если весь мир будет против тебя - я не встану к тебе спиной',
        'С днём рождения',
        'Верь в себя!',
        'Слушай своё сердце',
        'Каждая частичка тебя, делает мир лучше',
        'Пожалуйста, не потеряй своё волшебство, иначе мир будет слишком тёмным',
        'Будь счастлива'
    ];

    const randomIndex = Math.floor(Math.random() * compliments.length);
    el.innerHTML = compliments[randomIndex];
}

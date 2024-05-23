function scrollFooter(scrollY, heightFooter) {
    console.log(scrollY);
    console.log(heightFooter);

    if (scrollY >= heightFooter) {
        $('footer').css({
            'bottom': '0px'
        });
    } else {
        $('footer').css({
            'bottom': '-' + heightFooter + 'px'
        });
    }
}
function bajarPaginadelTodo() {
    const abajo = document.body.scrollHeight;
    window.scrollTo({ top: abajo, behavior: 'smooth' });
}

function bajarPagina(idSection) {
    const section = document.getElementById(idSection);
    if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const middlePosition = sectionTop + (sectionHeight / 2) - (window.innerHeight / 2);
        window.scrollTo({ top: middlePosition, behavior: 'smooth' });
    }
}

$(document).ready(function () {
    var windowHeight = $(window).height(),
        footerHeight = $('footer').height(),
        heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    // Definiendo el tamaño del elemento para animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height': heightDocument + 'px'
    });

    // Definiendo el tamaño de los elementos header y contenido
    $('header').css({
        'height': windowHeight + 'px',

    });

    $('.wrapper-parallax').css({
        'margin-top': windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // Al hacer scroll
    window.onscroll = function () {
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top': '-' + scroll + 'px'
        });

        $('header').css({
            'background-position-y': 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
});
function toggleMoreButtons() {
    var moreButtons = document.querySelector('.more-buttons');
    moreButtons.classList.toggle('show');
  }

  document.addEventListener('click', function(event) {
    var moreButtons = document.querySelector('.more-buttons');
    var button = event.target.closest('.button-container button');
    if (!moreButtons.contains(event.target) && !button) {
      moreButtons.classList.remove('show');
    }
  });
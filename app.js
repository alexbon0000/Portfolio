$(document).ready(function () {
    $(window).scroll(function () {
        // проверяет, прокручено ли окно более чем на 500 пикселей, добавляет/удаляет сплошной класс
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});


$(document).ready(function () {
    // Добавить плавную прокрутку ко всем ссылкам
    $("a").on('click', function (event) {

        // Убедитесь, что this.hash имеет значение, прежде чем переопределять поведение по умолчанию.
        if (this.hash !== "") {
            // Предотвратить стандартное поведение щелчка якоря
            event.preventDefault(); 

            // Хранить хэш
            var hash = this.hash;

            //  Использование метода jQuery animate() для плавной прокрутки страницы
            //  Необязательное число (800) указывает количество миллисекунд, которое требуется для прокрутки до указанной области.
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Добавить решетку (#) к URL-адресу после завершения прокрутки (поведение при нажатии по умолчанию)
                window.location.hash = hash;
            });
        } // Конец, если
        
    
    });
});

function al2(){
    var element = 
    document.getElementById("sub");
    element.classList.remove("change");
    element.classList.add("change2");
    var element = 
    document.getElementById("subhtml");
    element.classList.remove("html");
    element.classList.add("html2"); 
    var element = 
    document.getElementById("sub2");
    element.classList.remove("change");
    element.classList.add("change2");
    var element = 
    document.getElementById("subcss");
    element.classList.remove("css");
    element.classList.add("css2"); 
    var element = 
    document.getElementById("sub3");
    element.classList.remove("change");
    element.classList.add("change2");
    var element = 
    document.getElementById("subjs");
    element.classList.remove("javascript");
    element.classList.add("javascript2");
}

function al(){
    var element = 
    document.getElementById("sub");
    element.classList.remove("change2");
    element.classList.add("change");
    var element = 
    document.getElementById("subhtml");
    element.classList.remove("html2");
    element.classList.add("html"); 
    var element = 
    document.getElementById("sub2");
    element.classList.remove("change2");
    element.classList.add("change");
    var element = 
    document.getElementById("subcss");
    element.classList.remove("css2");
    element.classList.add("css"); 
    var element = 
    document.getElementById("sub3");
    element.classList.remove("change2");
    element.classList.add("change");
    var element = 
    document.getElementById("subjs");
    element.classList.remove("javascript2");
    element.classList.add("javascript");
}

let btn_ver_mas_list = document.querySelectorAll(".btn_ver_mas");
let span_text_list = document.querySelectorAll(".span_text");
let btn_ver_menos_list = document.querySelectorAll(".btn_ver_menos");

btn_ver_mas_list.forEach(function (btn_ver_mas, index) {
    btn_ver_mas.addEventListener("click", function () {
        span_text_list[index].classList.add("mostrar");
        btn_ver_mas.classList.add("ocultar");
    });
});

btn_ver_menos_list.forEach(function (btn_ver_menos, index) {
    btn_ver_menos.addEventListener("click", function () {
        span_text_list[index].classList.remove("mostrar");
        btn_ver_mas_list[index].classList.remove("ocultar");
    });
});

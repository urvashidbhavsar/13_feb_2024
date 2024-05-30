// perform element = button
// target class = nav 

$(document).ready(function () {
    $("#btn").click(function () {
        let icon = $("#icon");
        $(".nav").toggleClass("new-nav")

        if ($(".nav").hasClass("new-nav")) {
            icon.removeClass("bi-list");
            icon.addClass("bi-x")
        } else {
            icon.removeClass("bi-x")
            icon.addClass("bi-list");
        }
    })
})

$(window).scroll(function () {
    $curr = $(this).scrollTop();
    if ($curr > 0) {
        $("header").addClass("headerFix")
    } else {
        $("header").removeClass("headerFix")
    }
})
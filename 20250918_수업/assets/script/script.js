// $(document).ready(function () {
//     $("button").click(function () {
//     $("h2").hide();
//     })
// });

// $(document).ready(function () {
//     $("button").click(function () {
//         $(".title").hide();
//     })
// });

// $(document).ready(function () {
//     $("button").click(function () {
// $("#tit").hide();
// $("h2, child").hide();
// $("[href]").hide();
// $("[href='https://naver.com/']").hide();
// $(this).hide();
// $("*").hide();
//         $(":button").hide();
//     });
// });

//이벤트

// $(function () {
//click
// $(".btn").click(function () {
//     $(".title").css("background-color", "blue")
// });

//ddlclick
// $(".btn").ddlclick(function () {
//     $(".title").css("background-color", "blue")
// });

//mouseenter
// $(".title").mouseenter(function () {
//     $(this).css("background-color", "yellow")
// });

//mouseleave
// $(".title").mouseleave(function () {
//     $(this).css("background-color", "pink")
// });

//hover
// $(".title").hover(function () {
//     $(this).css("background-color", "red")
// });

//mousedown
//     $(".title").mousedown(function () {
//         $(this).css("background-color", "red")
// });

//mouseup
// $(".title").mouseup(function () {
//     $(this).css("background-color", "skyblue")

//focus, blur, change
// $(".input-box").focus(function () {
//     $(this).css("background-color", "skyblue")
// });
// $("[type='text']").blur(function () {
//     $(this).css("background-color", "yellow")
// });

// $(".input-box").change(function () {
//     $(this).css("background-color", "blue")
// });
// });

//on
$(function () {
    // $(".event").click(function () {
    //     $(this).css("color", "red")
    // });
    // $(".event").mouseenter(function () {
    //     $(this).css("background-color", "black")
    // });
    // $(".event").mouseleave(function () {
    //     $(this).css("background-color", "yellow")
    // });
    // $(".event").on({
    //     click: function () {
    //         $(this).css("background-color", "red")
    //     },
    //     mouseenter: function () {
    //         $(this).css("background-color", "blue")
    //     },
    //     mouseleave: function () {
    //         $(this).css("background-color", "black")
    //     }

    // })

    $(".event").on("mouseenter mouseleave", function () {
        $(this).toggleClass("on");
    })

});


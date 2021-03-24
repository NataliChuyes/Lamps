$(function() {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $("#quiz-modal .quiz-checkout").on("click", function() {
        $.ajax({
            type: "POST",
            url: "/quiz/result",
            data: $("#quiz-modal__form").serialize(),
            success: function(result) {
                $("#quiz-modal .alert-danger").css("display", "none");
                $(".quiz-success").css("display", "block");
                $(".quiz-final").css("display", "none");
                yaCounter48978671.reachGoal('FORM_HELP');
                fbq('track', 'Lead');
            },
            error: function(result) {
                $("#quiz-modal .alert-danger").text("Заполните все поля");
                $("#quiz-modal .alert-danger").css("display", "block");
            }
        });
    });

    $("#quiz-modal .btn-send").on("click", function() {

        $("#quiz-modal .alert").css("display", "none");

        if (!$("#quiz-modal__form")[0].checkValidity()) {
            $("#quiz-modal .alert").css("display", "block");
            return;
        }

        $.ajax({
            type: "POST",
            url: "/quiz/next",
            data: $("#quiz-modal__form").serialize(),
            success: function(result) {
                if (result.final) {
                    $("#quiz-modal .quiz-final").css("display", "block");
                    $("#quiz-modal #quiz-options").css("display", "none");
                    $("#quiz-modal .modal-header__items__step").css("display", "none");
                    $("#quiz-modal .modal-footer").css("display", "none");
                    return;
                }

                var item = "" +
                    "<div class=\"col-md-6\">\n" +
                    "   <div class=\"option__item\">\n" +
                    "     <input type=\"radio\" required id=\"option{{$option->id}}\" value='{{$option->text}}' name=\"answer\">\n" +
                    "     <label for=\"option{{$option->id}}\">{{$option->text}}</label>\n" +
                    "   </div>\n" +
                    "</div>";

                let header = "<div class=\"col-12\">\n" +
                    "             <div class=\"option__head\">" + result.item.title + "</div>\n" +
                    "           </div>";

                let options = $("#quiz-options");
                $(options).empty();

                $(options).append(header);

                result.options.forEach(function(option) {
                    $(options).append(item.replace("{{$option->text}}", option.text).replace("{{$option->id}}", option.id).replace("{{$option->id}}", option.id).replace("{{$option->text}}", option.text));
                });

                $("#quiz-step").text(result.step);
            }
        });
    });

    $("#quiz-modal .btn-back").on("click", function() {

        $.ajax({
            type: "POST",
            url: "/quiz/back",
            data: $("#quiz-modal__form").serialize(),
            success: function(result) {
                if (result.final) {
                    $("#quiz-modal .quiz-final").css("display", "block");
                    $("#quiz-modal #quiz-options").css("display", "none");
                    $("#quiz-modal .modal-header__items__step").css("display", "none");
                    $("#quiz-modal .modal-footer").css("display", "none");
                    return;
                }

                var item = "" +
                    "<div class=\"col-md-6\">\n" +
                    "   <div class=\"option__item\">\n" +
                    "     <input type=\"radio\" required id=\"option{{$option->id}}\" value='{{$option->text}}' name=\"answer\">\n" +
                    "     <label for=\"option{{$option->id}}\">{{$option->text}}</label>\n" +
                    "   </div>\n" +
                    "</div>";

                let header = "<div class=\"col-12\">\n" +
                    "             <div class=\"option__head\">" + result.item.title + "</div>\n" +
                    "           </div>";

                let options = $("#quiz-options");
                $(options).empty();

                $(options).append(header);

                result.options.forEach(function(option) {
                    $(options).append(item.replace("{{$option->text}}", option.text).replace("{{$option->id}}", option.id).replace("{{$option->id}}", option.id).replace("{{$option->text}}", option.text));
                });

                $("#quiz-step").text(result.step);
            }
        });
    });

    $('#order-product-modal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget);
        var header = button.data('header');
        var modal = $(this);

        modal.find('#order-header').text(header);
        modal.find('input[name="lamp"]').val(header);

        modal.find('.alert-danger').hide();
        modal.find('.alert-success').hide();

        let form = $('#order-product-modal');
        form.find('.form-control').removeClass('input-with-error');
        form.find('.form-control').val('');

        let colors = $(button).parents(".catalog__items__item").find(".catalog__items__item__options__color").clone();
        $(colors).find("div").on("click", function(e) {
            $(this).parents(".catalog__items__item__options__color").find("div").removeClass("active");
            $(this).addClass("active");
            $("#order-product-modal input[name='color']").val($(this).data("color"));
        });

        if ($(colors).find("div").first()) {
            $(colors).find("div").first().addClass("active");
            $("#order-product-modal input[name='color']").val($(colors).find("div").first().data("color"));
        }

        $("#order-product-modal .form-group.colors").html('');
        $("#order-product-modal .form-group.colors").append("<label>Цвет</label>");
        $("#order-product-modal .form-group.colors").append(colors);
    });

    $('#order-product-modal .btn-send').click(function(e) {
        e.preventDefault();

        $('#order-product-modal .alert-danger').hide();
        $('#order-product-modal .alert-success').hide();

        let form = $('#order-product-modal__form');
        $(form).find('.form-control').removeClass('input-with-error');

        if (!$(form)[0].checkValidity()) {
            $(form)[0].reportValidity();
            return;
        }

        $.post($(form).attr('data-url'), $(form).serialize(),
            function(result) {

                if (result.errors) {

                    let alertBox = $('#order-product-modal .alert-danger');
                    $(alertBox).html('');

                    for (let field in result.errors) {
                        $(form).find('.form-control[name=' + field + ']').addClass('input-with-error');
                        result.errors[field].forEach(function(error) {
                            $(alertBox).append(error + '</br>');
                        });
                    }

                    $(alertBox).show();
                } else {
                    $('#order-product-modal__form .form-control').val('');
                    $('#order-product-modal .alert-success').show();
                    $('#order-product-modal').modal('hide');
                    $('#thanks').modal('show');
                    yaCounter48978671.reachGoal('FORM_BUY');
                    fbq('track', 'SubmitApplication');
                }
            }, 'json');
    });


    $('#create-request-modal .btn-send').click(function(e) {
        e.preventDefault();

        $('#create-request-modal .alert-danger').hide();
        $('#create-request-modal .alert-success').hide();

        let form = $('#create-request-modal__form');
        $(form).find('.form-control').removeClass('input-with-error');

        if (!$(form)[0].checkValidity()) {
            $(form)[0].reportValidity();
            return;
        }

        $.post($(form).attr('data-url'), $(form).serialize(),
            function(result) {

                if (result.errors) {

                    let alertBox = $('#create-request-modal .alert-danger');
                    $(alertBox).html('');

                    for (let field in result.errors) {
                        $(form).find('.form-control[name=' + field + ']').addClass('input-with-error');
                        result.errors[field].forEach(function(error) {
                            $(alertBox).append(error + '</br>');
                        });
                    }

                    $(alertBox).show();
                } else {
                    $('#create-request-modal__form .form-control').val('');
                    $('#create-request-modal .alert-success').show();
                    $('#create-request-modal').modal('hide');
                    $('#thanks').modal('show');
                    yaCounter48978671.reachGoal('FORM_CALLBACK');
                    fbq('track', 'Lead');
                }
            }, 'json');
    });


    $(".catalog__items__show_more").on("click", function() {
        $(".catalog__items__item").css("display", "block");

        $(this).css("display", "none");
    });

    $('#page-contact form').on("submit", function(e) {

        e.preventDefault();

        $('#page-contact .alert-danger').hide();
        $('#page-contact .alert-success').hide();

        let form = $('#page-contact form');

        if (!$(form)[0].checkValidity()) {
            $(form)[0].reportValidity();
            return;
        }

        $.post($(form).attr('data-url'), $(form).serialize(),
            function(result) {

                if (result.errors) {

                    let alertBox = $('#page-contact .alert-danger');
                    $(alertBox).html('');

                    for (let field in result.errors) {
                        $(form).find('input[name=' + field + ']').addClass('input-with-error');
                        result.errors[field].forEach(function(error) {
                            $(alertBox).append(error + '</br>');
                        });
                    }

                    $(alertBox).show();
                } else {
                    $('#page-contact input').val('');
                    $('#page-contact .alert-success').show();
                }
            }, 'json');
    });

    $("#instagram-frame").on("click", function() {
        let total = $(".instagram__wrapper");
        let hidden = $(".instagram__wrapper:not('.active')");
        for (var i = 0; i < 4; i++) {
            let item = $(".instagram__wrapper:not('.active')").first();
            if (item) {
                $(item).addClass("active");
            }
        }
    });

    $(".catalog__items__item__image_additional img").on("click", function(e) {
        let img = $(this).data("img");
        let main = $(this).parents(".catalog__items__item").find(".catalog__items__item__image_main img");
        $(main).attr("src", img);

        $(main).attr("href", $(this).parents(".catalog__items__item__image_additional").attr("href"));
        e.preventDefault();
        e.stopPropagation();
    });

    $("#button-to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height()) {
            $("#button-to-top").addClass("active");
        } else {
            $("#button-to-top").removeClass("active")
        }
    });

    $(document).on('shown.bs.modal', function() {
        fbq('track', 'InitiateCheckout');
    });

});
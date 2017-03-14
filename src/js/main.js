
$(document).ready(function () {
    var steps = $("form").children(".step");
    var numberSteps =  $(".step-number");
    $(steps[0]).show();
    $(numberSteps[0]).addClass("change");


    $('#email').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
              /*  $(this).css({'border' : '1px solid #569b44'});
                $('#valid').text('Верно');*/
            } else {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#valid').text('в адресной строке должен быть символ "@"');
            }
        } else {
            $(this).css({'border' : '1px solid #ff0000'});
            $('#valid').text('Поле email должно быть формата "abcd@abc.abc"');
        }
    });


    var current_step = 0;
    var current_stepNumber = 0;
    $("a.next").click(function () {
        if (current_step == steps.length - 2) {
            $(this).hide();
            $("form input[type=submit]").show();

        }

        $("a.back").show();
        current_step++;
        changeStep(current_step);

        current_stepNumber++;
        changeNumberStep(current_stepNumber);
    });

    $("a.back").click(function () {
        if (current_step == 1) {
            $(this).hide();
        }


        $("form input[type=submit]").hide();
        $("a.next").show();
        current_step--;
        changeStep(current_step);
        current_stepNumber--;
        changeNumberStep(current_stepNumber)
    });

    function changeStep(i) {
        $(steps).hide();
        $(steps[i]).show();
    }
    function changeNumberStep(i){
       $(numberSteps ).removeClass("change");
        $(numberSteps[i] ).addClass("change");
    }



    var jsonResponse = $.getJSON("src/countries.json");
    jsonResponse.then(function (data) {
        for (var item in data) {
            $('.country').append('<option value="' + item + '">' + data[item] + '</option>');
        }
    });
    var jsonResponseSec = $.getJSON("src/cities.json");
    jsonResponseSec.then(function (data) {
        for (var item in data) {
            if (data[item].country === 1) {
                $('.cities').append('<option value="' + item + '">' + data[item].name + '</option>');
            }
        }
    });




    $('#vk').change(function () {
        if (this.checked) {
            $('.social-input_vk').addClass("itemshow");
        }
        else{
            $('.social-input_vk').removeClass("itemshow");
        }
    });
    $('#fb').change(function () {
        if (this.checked) {
            $('.social-input_fb').addClass("itemshow");
        }
        else{
            $('.social-input_fb').removeClass("itemshow");
        }
    });
    $('#tw').change(function () {
        if (this.checked) {
            $('.social-input_tw').addClass("itemshow");
        }
        else{
            $('.social-input_tw').removeClass("itemshow");
        }
    });
    $('#ok').change(function () {
        if (this.checked) {
            $('.social-input_ok').addClass("itemshow");
        }
        else{
            $('.social-input_ok').removeClass("itemshow");
        }
    });
});
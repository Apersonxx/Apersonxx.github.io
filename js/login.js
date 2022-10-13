$(function () {
    (function create_code() {
        function shuffle() {
            var arr = ['1', 'r', 'Q', '4', 'S', '6', 'w', 'u', 'D', 'I', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', '2', 's', 't', '8', 'v', '7', 'x', 'y', 'z', 'A', 'B', 'C', '9', 'E', 'F', 'G', 'H', '0', 'J', 'K', 'L', 'M', 'N', 'O', 'P', '3', 'R', '5', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            return arr.sort(function() {
                return(Math.random() - .5);
            });
        };
        shuffle();

        function showAuthCode() {
            var ar1 = '';
            var code = shuffle();
            for(var i = 0; i < 6; i++) {
                ar1 += code[i];
            };
            $(".form-horizontal .authCode").text(ar1);
        };
        showAuthCode();
        $(".form-horizontal .authCode").click(function() {
            showAuthCode();
        });
    })();
    // 邮箱
    $(".form-horizontal #inputEmail3").blur(function() {
        emaliReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if($(this).val() == "") {
            $(this).addClass("errorInput");
            $(this).next().css({"display": "block","color" : "red"}).html("邮箱不能为空!");
            return;
        } else if(!emaliReg.test($(this).val())) {
            $(this).addClass("errorInput");
            $(this).next().css({"display": "block","color" : "red"}).html("请输入正确的邮箱!");
        } else {
            $(this).addClass("correctInput");
            $(this).next().empty();
        }
    });

// 注册界面密码栏失去焦点
    $(".form-horizontal #inputPassword3").blur(function() {
        pwd0 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if($(this).val() == ""){
            $(this).removeClass("errorInput");
            $(this).next().css({"display": "block","color" : "red"}).html("密码不能为空！");
        }else if(!pwd0.test($(this).val())) {
            $(this).addClass("errorInput");
            $(this).removeClass("errorInput");
            $(this).next().css({"display": "block","color" : "red"}).html("请输入至少6位包含数字或字母的密码！");
        } else {
            $(this).removeClass("errorInput");
            $(this).addClass("correctInput");
            $(this).next().empty();
        }
    });
        // 验证码输入框失去焦点
        $(".form-horizontal #authCode").blur(function() {
            var code1 = $('.form-horizontal #authCode').val().toLowerCase();
            var code2 = $(".form-horizontal .authCode").text().toLowerCase();
            if($('.form-horizontal #authCode').val() == "") {
                $('.form-horizontal #authCode').removeClass("errorInput");
                $(this).next().css({"display": "block","color" : "red"}).html("验证码不能为空！");
                return;
            } else if(code1 != code2) {
                $(this).addClass("errorInput");
                $(this).removeClass("errorInput");
                $(this).next().css({"display": "block","color" : "red"}).html("验证码输入错误！");
            } else {
                $(this).removeClass("errorInput");
                $(this).next().empty();
                $(this).addClass("correctInput");
            }
        })
});
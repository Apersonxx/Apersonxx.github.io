// 邮箱
$(".form-horizontal #inputEmail2").blur(function() {
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
$(".form-horizontal #inputPassword1").blur(function() {
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

// 注册界面确认密码失去焦点
$(".form-horizontal #inputPassword2").blur(function() {
    var pwd1 = $('.form-horizontal #inputPassword1').val();
    var pwd2 = $(this).val();
    if(pwd1 == "") {
        $(this).removeClass("errorInput");
        $(this).next().html({"display": "block","color" : "red"});
        $(this).addClass("errorInput");
        return;
    } else if(pwd1 != pwd2) {
        $(this).addClass("errorInput");
        $(this).removeClass("correctInput");
        $(this).next().css({"display": "block","color" : "red"}).html("两次密码输入不一致！");
    } else {
        $(this).removeClass("errorInput");
        $(this).addClass("correctInput");
        $(this).next().empty();
    }
});
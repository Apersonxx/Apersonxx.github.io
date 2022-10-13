$(function(){
    $("#lamuBtn").eq(0).click(function(){$("html,body").animate({scrollTop :0}, 800);return false;});
    $("#leimuBtn").eq(0).click(function(){$("html,body").animate({scrollTop : $(document).height()}, 800);return false;});
});
// 搜索
var oInp = document.getElementById('search');
var oList = document.getElementById('list');
oInp.onkeyup = function(){
    oList.innerHTML = "";
    oList.style.display="block";
    var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
    var cb = "cb";
    var data = {"wd" : this.value};
    jsonp(url, data, cb, function(res){
        res.s.forEach(ele =>{
            var li = document.createElement("li");
            li.onmouseenter = function(){
                this.style.backgroundColor = "pink";
                this.style.color = "white";
            };
            li.onmouseleave = function(){
                this.style.backgroundColor = "";
                this.style.color = "";
            };
            li.onclick=function(){
                oInp.value=this.innerText;
                oList.style.display="none";

            };
            li.innerHTML = `${ele}`;
            oList.appendChild(li);
        });
        if($('#search').val() ==''){
            $('#list').css('display','none')
        }

    })
};

$(".footer").css("left", "0");
$(".footer").css("transition", "left 1s");

$("#del_btn").on("click", function () {
    $(".footer").css("left", "-100%");
    $(".footer").css("transition", "left 1s")
});
$("#down_app").mouseover(function () {
    $("#down_app").css("color", "pink");
    $(".down_app").css("top", "6rem");
    $(".down_app").css("left", "20%");
    $(".down_app").css("transition", "left 1s");
});
$("#down_app").mouseout(function () {
    $("#down_app").css("color", "#fff");
    $(".down_app").css("left", "12%");
    $(".down_app").css("top", "-21rem")
});
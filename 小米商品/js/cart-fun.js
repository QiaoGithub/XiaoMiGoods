/**
 * Created by Administrator on 2018/10/27.
 */
var down=$('.down');
var up=$('.up');
var txt=$('.txt');
var del=$('.del');
var price=$('.price');
var count=$('.count');
var selectedNum=$('#selected-num');

//已选择的商品数量
(function changedSelected(){
    var content=parseInt(selectedNum.html());
    var selected=$('.J_select');
    var checked = $('input:checked').length;
})();


//封装总价
function AllPrice(){
    var all_price=0;
    $(".J_select").each(function(){
        if($(this).prop("checked")){
            var len=$(this).parents("tr").find(".count").html();
            // console.log(len);
            all_price+=parseInt(len);
            // console.log(all_price);
            $(".bigNum").html(all_price);
        }
    });
};

var num;
$.each(up,function(index,dom){
    dom.onclick=function(){
        var Cnt=count.eq(index).text();
        num=parseInt(txt.eq(index).val());
        num++;
        txt.eq(index).val(num);
        total(index,num,Cnt);
        AllPrice()
    }
});
$.each(down,function(index,dom){
    dom.onclick=function(){
        var Cnt=count.eq(index).text();
        num=parseInt(txt.eq(index).val());
        if(num>0){
            num--;
            txt.eq(index).val(num);
            total(index,num,Cnt);
            AllPrice()
        }else{
            return;
        }
    }
});

$.each(del,function(index,dom){
    dom.onclick=function(){
        del.eq(index).parent().parent().css('display','none');
        $('.J_select').eq(index).prop('checked',false);
        AllPrice()
    }
});

function total(index,num,Cnt){
    Cnt=parseInt(price.eq(index).text())*num;
    count.eq(index).text(parseInt(Cnt));
}


//全选功能
$('.J_select_all').click(function(){
    if($(this).is(':checked') == false){
        $('.J_select').prop('checked',false);
    }else{
        $('.J_select').each(function(){
            if($(this).is(':checked') == false){
                $(this).prop('checked',true);
            }
        });
    }
    AllPrice();
});
$('.J_select').click(function(){
    if($('.J_select_all').is(':checked')){
        $('.J_select_all').prop('checked',false);
    }else{
        var checked = $('input:checked').length;
        var checkbox = $('input[type="checkbox"]').length;
        if(parseInt(checked) == parseInt(checkbox)-1){
            $('.J_select_all').prop('checked',true);
        }
    }
    AllPrice()
});



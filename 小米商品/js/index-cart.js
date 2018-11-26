// /**
//  * Created by Administrator on 2018/10/26.
//  */

//选择物品版本
var stepItem=$('.step-item');
var priceList=$('.price-list');
var btnInc=$('.btn-inc');
var cartContent=$('.cart-content');
var cartList=$('.cart-list');
var goodsNum=$('.goods-num');



$.each(stepItem,function (index,dom) {
    dom.onclick=function () {
        stepItem.removeClass('choose');
        stepItem.eq(index).addClass('choose');
        priceList.removeClass('Block');
        priceList.eq(index).addClass('Block');
    };
});


// //加入购物车
var num=1;
var count=$('.J_select').length;


btnInc.on('click',function(){
    //取商品信息
    var choose=$('.choose');
    var imgSrc=choose.find('a').find('img').attr('src');
    var name=choose.find('a').find('span').text();
    var price=choose.find('a').find('span').attr('data');
    //存储商品信息cookie
    var userData = {
        goodsName:name,
        goodsPrice:price,
        goodsImg:imgSrc
    };
    $.cookie('userData'+count,JSON.stringify(userData),{path:'/'});
    count++;

    cartContent.addClass('None');

    goodsNum.text(num++);

    var $trs = $(".item-table>tr");
        for(var i=0;i<$trs.length;i++){
            var $gtds = $trs.eq(i).children();
            var gName = $gtds.eq(1).html();
            if(gName==name){
                var NUM =parseInt($gtds.eq(2).find('span').eq(1).html());
                NUM++;
                $gtds.eq(2).find('span').eq(1).html(NUM);
                return;
            }
        }
    var li='<li class="cart-item"><table><thead class="item-table"><tr>'+
        "<td><img src="+imgSrc+"></td>"+
        "<td class='name'>"+name+"</td>"+
        "<td><span>"+price+"</span>"+"元×"+
        "<span>"+1+"</span>"+
        "</td>"+
        '</tr></thead></table></li>';
    cartList.append($(li));
});
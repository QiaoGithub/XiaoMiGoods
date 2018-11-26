/**
 * Created by Administrator on 2018/10/30.
 */


for(var count=0;count<99;count++){
    var userData = $.cookie('userData'+count);
    if(userData){
        //JSON.parse() 将字符串解析为对象
        userData = JSON.parse(userData);
    };
    var practice=$('.practice');
    var goodsName=userData.goodsName;
    var goodsPrice=userData.goodsPrice;
    var goodsImg=userData.goodsImg;
    if(practice.length>0){
        var praNumber=practice.length;
        var timer=0;
        console.log(praNumber);
        $.each(practice,function(i){
            if(practice.eq(i).html()==goodsName) {
                var num = parseInt(practice.eq(i).parent().find('.txt').val());
                var price = parseInt(practice.eq(i).parent().find('.price').html());
                // console.log(practice.eq(i).parent().find('.txt').val());
                // var count=parseInt(practice.eq(i).parent().find('.count').html());
                // console.log(count);
                // console.log(price);
                num++;
                var count = +num * price;
                // console.log(practice.eq(i).parent().find('.count').html(count));
                practice.eq(i).parent().find('.count').html(count);
                practice.eq(i).parent().find('.txt').val(num);

            }else{
                timer++;
            }



            if(timer==praNumber){
                var li='<tr>'+
                    '<td>'+
                    '<input type="checkbox" name="praise[]" class="J_select" value=""/>'+
                    '</td>'+
                    '<td>'+
                    '<img src='+goodsImg+' alt=""/>'+
                    '</td>'+
                    '<td class="practice">'+goodsName+
                    '</td>'+
                    '<td>'+
                    '<span class="price">'+goodsPrice+'</span>'+
                    '</td>'+
                    '<td>'+
                    '<button class="down">-</button><input type="text" class="txt" value="1" readonly="readonly"/><button class="up">+</button>'+
                    '</td>'+
                    '<td>'+
                    '<span class="count">'+goodsPrice+'</span>'+
                    '</td>'+
                    '<td>'+
                    '<button class="del">删除</button>'+
                    '</td>'+
                    '</tr>';
                $('#tbody').append($(li));



            }



            var down=$('.down');
            var up=$('.up');
            var txt=$('.txt');
            var del=$('.del');
            var price=$('.price');
            var count=$('.count');
            var selectedNum=$('#selected-num');

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

            var NUM;
            $.each(up,function(index,dom){
                dom.onclick=function(){
                    var Cnt=count.eq(index).text();
                    NUM=parseInt(txt.eq(index).val());
                    NUM++;
                    txt.eq(index).val(NUM);
                    total(index,NUM,Cnt);
                    AllPrice()
                }
            });
            $.each(down,function(index,dom){
                dom.onclick=function(){
                    var Cnt=count.eq(index).text();
                    NUM=parseInt(txt.eq(index).val());
                    if(NUM>0){
                        NUM--;
                        txt.eq(index).val(NUM);
                        total(index,NUM,Cnt);
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

            function total(index,NUM,Cnt){
                Cnt=parseInt(price.eq(index).text())*NUM;
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




        });

        //
        // var li='<tr>'+
        //     '<td>'+
        //     '<input type="checkbox" name="praise[]" class="J_select" value=""/>'+
        //     '</td>'+
        //     '<td>'+
        //     '<img src='+goodsImg+' alt=""/>'+
        //     '</td>'+
        //     '<td class="practice">'+goodsName+
        //     '</td>'+
        //     '<td>'+
        //     '<span class="price">'+goodsPrice+'</span>'+
        //     '</td>'+
        //     '<td>'+
        //     '<button class="down">-</button><input type="text" class="txt" value="1" readonly="readonly"/><button class="up">+</button>'+
        //     '</td>'+
        //     '<td>'+
        //     '<span class="count">'+goodsPrice+'</span>'+
        //     '</td>'+
        //     '<td>'+
        //     '<button class="del">删除</button>'+
        //     '</td>'+
        //     '</tr>';
        // $('#tbody').append($(li));





    }else{
        var li='<tr>'+
            '<td>'+
            '<input type="checkbox" name="praise[]" class="J_select" value=""/>'+
            '</td>'+
            '<td>'+
            '<img src='+goodsImg+' alt=""/>'+
            '</td>'+
            '<td class="practice">'+goodsName+
            '</td>'+
            '<td>'+
            '<span class="price">'+goodsPrice+'</span>'+
            '</td>'+
            '<td>'+
            '<button class="down">-</button><input type="text" class="txt" value="1" readonly="readonly"/><button class="up">+</button>'+
            '</td>'+
            '<td>'+
            '<span class="count">'+goodsPrice+'</span>'+
            '</td>'+
            '<td>'+
            '<button class="del">删除</button>'+
            '</td>'+
            '</tr>';
        $('#tbody').append($(li));




        var down=$('.down');
        var up=$('.up');
        var txt=$('.txt');
        var del=$('.del');
        var price1=$('.price');
        var count1=$('.count');
        var selectedNum=$('#selected-num');

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

        var NUM;
        $.each(up,function(index,dom){
            dom.onclick=function(){
                var Cnt=count1.eq(index).text();
                NUM=parseInt(txt.eq(index).val());
                NUM++;
                txt.eq(index).val(NUM);
                total(index,NUM,Cnt);
                AllPrice()
            }
        });
        $.each(down,function(index,dom){
            dom.onclick=function(){
                var Cnt=count1.eq(index).text();
                NUM=parseInt(txt.eq(index).val());
                if(NUM>0){
                    NUM--;
                    txt.eq(index).val(NUM);
                    total(index,NUM,Cnt);
                    AllPrice()
                }else{
                    return;
                }
            }
        });

        $.each(del,function(index,dom){
            dom.onclick=function(){
                del.eq(index).parent().parent().css('display','none');
                $.cookie('userData'+index,null);
                $('.J_select').eq(index).prop('checked',false);
                AllPrice()
            }
        });

        function total(index,NUM,Cnt){
            Cnt=parseInt(price1.eq(index).text())*NUM;
            count1.eq(index).text(parseInt(Cnt));
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




    }
}


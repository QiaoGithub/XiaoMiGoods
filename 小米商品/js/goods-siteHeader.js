/**
 * Created by Administrator on 2018/10/23.
 */
var itemOneMenu=$('#item-one-menu');
var navItemFirst=$('#nav-item-first');

navItemFirst.on('mouseover',function(){
    itemOneMenu.addClass('one-category-active')
});
itemOneMenu.on('mouseover',function(){
    itemOneMenu.addClass('one-category-active')
});
navItemFirst.on('mouseout',function(){
    itemOneMenu.removeClass('one-category-active')
});


var headerContainer=$('#header-container');
var navItem=$('.nav-item');
navItem.eq(0).on('mouseover',function(){
    headerContainer.addClass('header-container');
});
navItem.eq(0).on('mouseout',function(){
    headerContainer.removeClass('header-container');
});

var searchText=$('.search-text')[0];
var searchHotWords=$('.search-hot-words');
var searchMenu=$('.search-menu')[0];
var headerNavMenu=$('.header-nav-menu')[0];
var navList=$('.nav-list');


searchText.onfocus=function(){
    searchHotWords[0].style.display='none';
    searchHotWords[1].style.display='none';
    searchMenu.style.display='block';
};

searchText.onblur=function(){
    searchHotWords[0].style.display='inline-block';
    searchHotWords[1].style.display='inline-block';
    searchMenu.style.display='none';
};

for(var i=0;i<navList.length-2;i++){
    headerNavMenu.onmouseover=navList[i].onmouseover=function(){
        headerNavMenu.style.display='block';
    };
    headerNavMenu.onmouseout=navList[i].onmouseout=function(){
        headerNavMenu.style.display='none';
    }
}
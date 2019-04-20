const trendingBtn = $('.trending');
const randomBtn =  $('.random');
const searchBtn = $('.search');
const showMoreBtn = $('.showMore');
const searchhInput = $('.searchInput > input');
const main = $('main');
let active = $('.active');
let timesMore = 2;

$(document).ready(function(){
    getTrending();
    $('.showMore').click(()=>{
        console.log('o')
        showMoreTrending(25,timesMore);
    });
    
    trendingBtn.click((event)=>{
        event.preventDefault();
        getTrending();
    });

    searchBtn.click((event)=>{
        event.preventDefault();
        if(searchhInput.val()){
        getSearch(searchhInput.val());
        searchhInput.val(val => val = '');
    }});
    
    randomBtn.click((event)=>{
        event.preventDefault();
        getRandom();
    });
});


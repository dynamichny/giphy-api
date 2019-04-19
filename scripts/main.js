const box = $('.giphyHere');
const trendingBtn = $('.trending');
const randomBtn =  $('.random');
const searchBtn = $('.search');
const showMoreBtn = $('.showMore');
const searchhInput = $('.searchInput > input')


let active = $('.active');
let gifs = [];
let timesMore = 1;

$(document).ready(function(){
    getTrending();
    showMoreBtn.click(()=>{
        timesMore ++;
        showMoreTrending(25,timesMore);
    });
    
    trendingBtn.click((event)=>{
        event.preventDefault();
        box.empty();
        getTrending();
    });

    searchBtn.click((event)=>{
        event.preventDefault();
        if(searchhInput.val()){
        box.empty();
        searchFnc(searchhInput.val());
    }});
    
    randomBtn.click((event)=>{
        event.preventDefault();
        box.empty();
        getRandom();
    });
});


const box = $('.giphyHere');
const trendingBtn = $('.trending');
const randomBtn =  $('.random');
const searchBtn = $('.search');
const showMoreBtn = $('.showMore');
let active = $('.active');

let howMany = 25;
let timesMore = 1;

$(document).ready(function(){
    getTrending(howMany);
    showMoreBtn.click(()=>{
        timesMore ++;
        showMoreTrending(howMany, timesMore);
    });
    trendingBtn.click(getTrending(howMany));    
});


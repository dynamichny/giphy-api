const box = $('.giphyHere');
const trendingBtn = $('.trending');
const randomBtn =  $('.random');
const searchBtn = $('.search');
const showMoreBtn = $('.showMore');
let active = $('.active');

let gifs = [];
let timesMore = 1;

$(document).ready(function(){
    getTrending();
    showMoreBtn.click(()=>{
        timesMore ++;
        showMoreTrending();
    });
    trendingBtn.click(getTrending());    
});


function getTrending(howMany = 25){
    main.empty();
    $('.active').removeClass('active');
    trendingBtn.addClass('active');
    main.append('<ul class="giphyHere"></ul>');
    $('.giphyHere').css('display','grid');
    var trending = $.get(`https://api.giphy.com/v1/gifs/trending?api_key=Af0zo6RfjwQnVOH4K6nXmBvN4IOQ3Jbu&limit=${howMany}&rating=G`);
    trending.done(function(data) {
        let gifs = data.data;
        gifs.forEach(gif=>{
            if(gif.images.original.url){
                let newGif = document.createElement('li');
                newGif.innerHTML = `<img src="${gif.images.original.url}" onclick="showPic('${gif.images.original.url}')">`;
                $('.giphyHere').append(newGif);            
            } 
        });
        main.append('<button class="showMore" onclick="showMoreTrending(25,timesMore)">Show More</button>')
    });
}

function getRandom(){
    $('main').empty();
    $('.active').removeClass('active');
    randomBtn.addClass('active');
    var random = $.get(`https://api.giphy.com/v1/gifs/random?api_key=Af0zo6RfjwQnVOH4K6nXmBvN4IOQ3Jbu&tag=&rating=G`);
    random.done(function(data) {
        let e = data.data;
        if(e.images.original.url){
            $('main').append(`<img src="${e.images.original.url}" class="randomImg" onclick="showPic('${e.images.original.url}')">`);            
        }     
    });
}

function getSearch(val, howMany = 25){
    $('main').empty();
    main.append('<ul class="giphyHere"></ul>');
    $('.active').removeClass('active');
    searchBtn.addClass('active');
    $('.giphyHere').css('display','grid');
    var search = $.get(`https://api.giphy.com/v1/gifs/search?api_key=Af0zo6RfjwQnVOH4K6nXmBvN4IOQ3Jbu&q=${val}&limit=${howMany}&offset=0&rating=G&lang=en`);
    search.done(function(data) {
        let gifs = data.data;
        gifs.forEach(gif=>{
            if(gif.images.original.url){
                let newBox = document.createElement('li');
                newBox.innerHTML = `<img src="${gif.images.original.url}" onclick="showPic('${gif.images.original.url}')">`;
                $('ul').append(newBox);
            } 
        });
    });
}


function showMoreTrending(howMany = 25, times){
    timesMore+=1;
    let trending = $.get(`https://api.giphy.com/v1/gifs/trending?api_key=Af0zo6RfjwQnVOH4K6nXmBvN4IOQ3Jbu&limit=${howMany*times}&rating=G`);
    trending.done(function(data) {
        let gifs = data.data;
        gifs = gifs.slice(howMany*(times-1),howMany*times);
        gifs.forEach(gif=>{
            if(gif.images.original.url){
            let newBox = document.createElement('li');
            newBox.innerHTML = `<img src="${gif.images.original.url}" class="partOf" onclick="showPic('${gif.images.original.url}')">`;
            $('.giphyHere').append(newBox);
            }
        });
    });
}


function showPic(e){
    let show = document.createElement('div');
    show.classList.add('showPic');
    show.innerHTML = `<img src="${e}">`;
    $('body').append(show);
    $('.showPic').click(function(){
        $('.showPic').remove();
    });
}












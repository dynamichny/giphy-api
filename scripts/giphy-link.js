//work well
function getTrending(howMany = 25){
    let active = $('.active');
    active.removeClass('active');
    trendingBtn.addClass('active');
    var trending = $.get(`https://api.giphy.com/v1/gifs/trending?api_key=Af0zo6RfjwQnVOH4K6nXmBvN4IOQ3Jbu&limit=${howMany}&rating=G`);
    trending.done(function(data) {
        let gifs = data.data;
        gifs.forEach(e=>{
            if(e.images.original.url){
                let newBox = document.createElement('li');
                newBox.innerHTML = `<img src="${e.images.original.url}" onclick="showPic('${e.images.original.url}')">`;
                box.append(newBox);            } 
        
        });
    });
}
//need to rebuild
function showMoreTrending(howMany = 25, timesMore){
    let trending = $.get(`https://api.giphy.com/v1/gifs/trending?api_key=Af0zo6RfjwQnVOH4K6nXmBvN4IOQ3Jbu&limit=${howMany*timesMore}&rating=G`);
    trending.done(function(data) {
        box.empty();
        let gifs = data.data;
        gifs.forEach(e=>{
            if(e.images.original.url){
            let newBox = document.createElement('li');
            newBox.innerHTML = `<img src="${e.images.original.url}" class="partOf" onclick="showPic('${e.images.original.url}')">`;
            box.append(newBox);
            }
    })
    });
}
//working well
function showPic(e){
    let show = document.createElement('div');
    show.classList.add('showPic');
    show.innerHTML = `<img src="${e}">`;
    $('body').append(show);
    $('.showPic').click(function(){
        $('.showPic').remove();
    });
}
//work well
function searchFnc(val, howMany = 25){
    let active = $('.active');
    active.removeClass('active');
    searchBtn.addClass('active');
    var search = $.get(`https://api.giphy.com/v1/gifs/search?api_key=Af0zo6RfjwQnVOH4K6nXmBvN4IOQ3Jbu&q=${val}&limit=${howMany}&offset=0&rating=G&lang=en`);
    search.done(function(data) {
        let gifs = data.data;
        gifs.forEach(e=>{
            if(e.images.original.url){
                let newBox = document.createElement('li');
                newBox.innerHTML = `<img src="${e.images.original.url}" onclick="showPic('${e.images.original.url}')">`;
                box.append(newBox);            } 
        
        });
    });
}

function getRandom(){
    let active = $('.active');
    active.removeClass('active');
    randomBtn.addClass('active');
    var random = $.get(`https://api.giphy.com/v1/gifs/random?api_key=Af0zo6RfjwQnVOH4K6nXmBvN4IOQ3Jbu&tag=&rating=G`);
    random.done(function(data) {
        let gifs = data.data;
        gifs.forEach(e=>{
            if(e.images.original.url){
                let newBox = document.createElement('li');
                newBox.innerHTML = `<img src="${e.images.original.url}" onclick="showPic('${e.images.original.url}')">`;
                box.append(newBox);            } 
        
        });
    });
}

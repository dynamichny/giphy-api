function getTrending(howMany = 25){
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

function showPic(e){
    let show = document.createElement('div');
    show.classList.add('showPic');
    show.innerHTML = `<img src="${e}">`;
    $('body').append(show);
    $('.showPic').click(function(){
        console.log('click')
        $('.showPic').remove();
    });
}


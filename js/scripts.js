$(document).ready(function(){

    //Progress bars
    let containerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(containerA, {
        color: '#3da0ff',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#cd9dfa'},
        to: { color: '#6eb8ff'},
        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value()*561);
            circle.setText(value);
        }
    });

    let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB, {
        color: '#3da0ff',
        strokeWidth: 8,
        duration: 1200,
        from: { color: '#cd9dfa'},
        to: { color: '#6eb8ff'},
        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value()*382);
            circle.setText(value);
        }
    });

    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC, {
        color: '#3da0ff',
        strokeWidth: 8,
        duration: 800,
        from: { color: '#cd9dfa'},
        to: { color: '#6eb8ff'},
        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value()*83);
            circle.setText(value);
        }
    });

    let containerD = document.getElementById("circleD");
    let circleD = new ProgressBar.Circle(containerD, {
        color: '#3da0ff',
        strokeWidth: 8,
        duration: 2300,
        from: { color: '#cd9dfa'},
        to: { color: '#6eb8ff'},
        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value()*9999);
            circle.setText('+' + value);
        }
    });

    //Loader 
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop();
        if(scroll > (dataAreaOffset.top - 500)&& stop==0) {
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);
            stop = 1;
        } 
    });

    //Parallax
    setTimeout(function() {
        $('#data-area').parallax({imageSrc: 'img/recife.jpg'})
    }, 500);

    //filtro portfólio
    $('.filter-btn').on('click', function() {
        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type=='home-btn'){
            tipoBoxes('home', boxes);
        } else if(type=='time-btn'){
            tipoBoxes('time', boxes);
        } else if(type=='photo-btn'){
            tipoBoxes('photo', boxes);
        } else if(type=='geek-btn'){
            tipoBoxes('geek', boxes);
        } else if(type=='party-btn'){
            tipoBoxes('party', boxes);
        } else {
            tipoBoxes('all', boxes);
        }
    });

    function tipoBoxes(type, boxes){
        if(type=='all'){
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)){
                    $(this).fadeOut(500);
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }
    
});
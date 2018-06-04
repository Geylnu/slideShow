init()
setAutoPlay(6000)

function setAutoPlay(time){
    let n = 0
    let img = $('.img')
    let id = window.setInterval(setSlide,time)

    $(document).on('visibilitychange',(e)=>{
        if(document.visibilityState === 'visible'){
            id = window.setInterval(setSlide,time)
        }else{
            window.clearInterval(id)
        }
    })

    function setSlide(){
        moveLeft(`.img:nth-child(${n%img.length+1})`)
            .one('transitionend', (e)=>{moveRight(e.currentTarget)})
            if(n%img.length === img.length-1){n=-1}
            moveMiddle(`.img:nth-child(${n%img.length+2})`)
            n++
    }

    function moveLeft($node){
        return  $($node).removeClass('middle').addClass('left')
    }

    function moveRight($node){
        return  $($node).removeClass('left').addClass('right')
    }

    function moveMiddle($node){
        return $($node).removeClass('right').addClass('middle')
    }
}

function init(){
    let img = $('.img')
    for(let i=0 ;i<img.length;i++){
        if(i===0){img.eq(i).addClass('middle')}
        else{
            img.eq(i).addClass('right')
        }
    }
}
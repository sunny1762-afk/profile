document.addEventListener("DOMContentLoaded",()=>{

    const tap = document.querySelector('.tap');
    setInterval(() => {
        tap.classList.remove('on');
        void tap.offsetWidth; // 리플로우 강제 (애니메이션 리셋)
        tap.classList.add('on');
    }, 3000);

    const hero = document.querySelector(".hero")
    if(hero){
        hero.classList.add("on")
    }

    // 위로 스크롤
    const btnTop = document.querySelector(".btn-top")
    if(btnTop){
        btnTop.addEventListener("click",()=>{
            window.scrollTo({top:0,behavior:"smooth"})
        })
    }

    // 스티커 제목 연해지기
    const detailTitle = document.querySelector(".detail-title")
    if(detailTitle){
        window.addEventListener("scroll",()=>{
            let windowHeight = window.innerHeight
            let scrollValue = window.scrollY
            console.log(scrollValue)
            let opacity = 1.1 - (scrollValue / windowHeight*3)
            opacity = Math.max(0.3, Math.min(1, opacity))
            detailTitle.style.opacity = opacity
        })
    }
    


    // 전체메뉴버튼
    const btnMenu = document.querySelector(".btn-menu")
    const allMenu = document.querySelector(".all-menu")
    let statusMenu = false
    const btnImg = document.querySelector(".btn-img")
    const modal = document.querySelector(".modal")

    btnMenu.addEventListener('click',()=>{
        if(statusMenu){
            //메뉴닫기->삼선모양으로 바뀌어야함
            allMenu.classList.remove("on")
            modal.classList.remove("on")
            btnMenu.classList.remove("open")
            btnImg.setAttribute('src','./img/btn-menu.svg')
            statusMenu = false
        }else{
            //메뉴열기->x모양으로 바뀌어야함
            allMenu.classList.add("on")
            modal.classList.add("on")
            btnMenu.classList.add("open")
            btnImg.setAttribute('src','./img/btn-close.svg')
            statusMenu = true
        }
    })
    modal.addEventListener('click',()=>{
            allMenu.classList.remove("on")
            modal.classList.remove("on")
            btnMenu.classList.remove("open")
            btnImg.setAttribute('src','./img/btn-menu.svg')
            statusMenu = false
        })

    // const profile = document.querySelector(".profile")
    // let profileTop = profile.offsetTop
    // window.addEventListener("resize",()=>{
    //     profileTop = profile.offsetTop
    // })

    window.addEventListener('scroll',()=>{
        allMenu.classList.remove("on")
        modal.classList.remove("on")
        btnMenu.classList.remove("open")
        btnImg.setAttribute('src','./img/btn-menu.svg')
        statusMenu = false
    })


})
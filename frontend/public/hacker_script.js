//nItem=-1
//interval=[null, null, null, null]
nl = document.getElementsByClassName('NavItem');
heroSect = document.getElementById('Hero');
hero = document.getElementById('heroText');
heroLetters = document.getElementsByClassName('heroLetter')
floaters = []
i=0
Array.from(heroLetters).forEach((hl, i)=>{
    hl.style.display = 'inline-block'
    floaters[i] = []
    for (j = 0; j<10; j++){
        let float = document.createElement('object');
        float.data = '/star.svg'
        float.classList.add('floaters', 'l'+i);
        hero.appendChild(float)
        floaters[i].push(float)
    }
    hl.onmouseover = event=>{
        hl.style.color='grey'
        for (j = 0; j<10;j++){
            let float = floaters[i][j]
            float.style.left = Math.random()*100+'%'
            float.style.top = Math.random()*100+'%'
            float.style.opacity = 1;
        }
    }
    hl.onmouseleave = event=>{
        hl.style.color='white'
        for (j = 0; j<10;j++){
            let float = floaters[i][j]
            float.style.opacity = 0;
            float.style.left = -10+"%"
            float.style.top = -10+"%"
        }
    }
})
/*hero.addEventListener('mouseover', n=>{
    //alert('something works')
    hero.style.cssText='color: grey';
})

//Mouse Hover
const blob=document.getElementById("blob")

window.onpointermove=event=>{
    const {clientX,clientY} = event

    blob.animate(
    {
        left:`${clientX}px`,
        top:`${clientY}px`
    },{duration:2000,fill:"forwards"})
}*/

//Parallax
heroText = document.getElementById('')
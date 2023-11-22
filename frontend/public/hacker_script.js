const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
nItem=-1
let interval=[null, null, null, null]
nl = document.getElementsByClassName('NavItem');
/*Array.from(nl).forEach((n)=>{n.onmouseover = event=>{
    nItem = (nItem+1)%4
    let iterations = [0, 0, 0, 0]
    clearInterval(interval[nItem])
    interval[nItem]= setInterval(()=>{
        event.target.innerText=event.target.innerText.split("")
          .map((letter,index)=>{
        if(index<iterations[nItem]){
                return event.target.dataset.value[index]
            }
        return letters[Math.floor(Math.random()*26)]
    })
        .join("")

        if(iterations[nItem]>=event.target.dataset.value.length){
            clearInterval(interval[nItem])
        }iterations[nItem]+=1/3
    },60)

} });*/

//Mouse Hover
const blob=document.getElementById("blob")

window.onpointermove=event=>{
    const {clientX,clientY} = event

    blob.animate(
    {
        left:`${clientX}px`,
        top:`${clientY}px`
    },{duration:2000,fill:"forwards"})
}

//Parallax
heroText = document.getElementById('')
observerX = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

hiddenelements= document.querySelectorAll(".hidden")
hiddenelements.forEach((el)=>observerX.observe(el))
const hiddenElements=document.querySelectorAll('.hidden')
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('shown')
        }
        else{
            entry.target.classList.remove('shown')
        }
    })
})

hiddenElements.forEach((el)=>observer.observe(el))

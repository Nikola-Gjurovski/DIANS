// let divs=document.querySelectorAll('.coords');
// let search=document.getElementById('src')
// document.getElementById('search-bar').addEventListener('submit',e=>{
// e.preventDefault();   
// let text=search.value.toLowerCase()
// console.log(text)
// divs.forEach((items)=>{
// const slug = items.getAttribute("data-card-id").split(" ")[2];
// console.log(slug)
// if(slug.includes(text)){
//     items.style.opacity=1 
//     items.style.display='block'
// }
// else{
//     items.style.opacity=0
//     items.style.display='none'
//     console.log(search.value)
// }
// })

// })
export const sr=(slug,text,items)=>{
    if(slug.includes(text)){
        items.style.opacity=1 
        items.style.display='block'
    }
    else{
        items.style.opacity=0
        items.style.display='none'
   
    }
}
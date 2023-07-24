const mdark = document.querySelector('#mdark');
const body = document.querySelector ('body');
mdark.addEventListener('click', e=>{
    body.classList.toggle('dark');
})


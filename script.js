const body=document.querySelector('body')
const container =document.querySelector('.container')
const sun = document.querySelector('.sun');
const day_mountain = document.querySelector('.day_mountain');
const bird = document.querySelector('.bird');



let i =0;

container.addEventListener('click',()=>{
    i++
    let p=i%2
    if(p==1){
        body.style.backgroundColor='black'
        container.classList.add('night')
        sun.classList.add('moon')
        day_mountain.classList.add('night_mountain')
        bird.classList.add('star')


    }
    else{
        body.style.backgroundColor='white'
        container.classList.remove('night')
        sun.classList.remove('moon')
        day_mountain.classList.remove('night_mountain')
        bird.classList.remove('star')

    }

})
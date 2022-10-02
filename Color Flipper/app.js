const colors = ['Red','Green','#F15025','rgba(133,122,200)'];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click',function(){
    const random = RandomNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
})

function RandomNumber()
{
    return Math.floor(Math.random()*colors.length);
}
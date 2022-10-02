//on page being loaded
let counter =0;
show(counter);

//on clicking the buttons
function navigate(flag){
    counter +=flag;
    show(counter);
}

function show(count){
    let slides = document.getElementsByClassName('slide');

    for(let x of slides){
        x.style.display = "none";
    }
    if(count < 0)
    {
        count = slides.length - 1; counter =slides.length-1;
        
    }
    if(count >= slides.length)
    {
        count = 0; counter = 0;
    }

    slides[count].style.display = "block";
}
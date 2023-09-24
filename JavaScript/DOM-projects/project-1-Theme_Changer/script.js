const panel = document.querySelectorAll(".color")
const body = document.querySelector('body')
// console.log(panel);
panel.forEach(function(color){
    // console.log(e);
    color.addEventListener('click',function (e){
        // console.log(e);
        if(e.target.id=='orange'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id=='white'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id=='green'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id=='yellow'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id=='purple'){
            body.style.backgroundColor = e.target.id
        }
    });
});
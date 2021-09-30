alert('An RGB color value is specified with: rgb(red, green, blue).Each parameter (red, green, and blue) defines the intensity of the color as an integer between 0 and 255. For example, rgb(0, 0, 255) is rendered as blue, because the blue parameter is set to its highest value (255) and the others are set to 0.'
)

var box=document.querySelectorAll('.o')
var color=[]
var n=6
color= generate(n)
var picked= color[Math.floor((Math.random() * n))]
var win= document.querySelector('#win')
var pick= document.querySelector('#picked')
var resetBTN= document.getElementById('reset')
var easybtn = document.getElementById('easybtn')
var hardbtn = document.getElementById('hardbtn')
var head= document.getElementById('heading')
pick.textContent= picked
hardbtn.classList.add('glow')




//this is a listener for the easy button
easybtn.addEventListener('click',function(){
    n=3;
    reset(n);
    this.classList.add('glow')
    hardbtn.classList.remove('glow')

})

//this is a listener for the hard button
hardbtn.addEventListener('click',function(){
    n=6;
    reset(n);

})



//this is the reset button click listener
resetBTN.addEventListener('click', function(){

    reset(n)
    
})


//this is the reset function
function reset(n){
    head.style.backgroundColor= 'steelblue'
    color=[]
    color= generate(n);
    picked= color[Math.floor((Math.random() * n))];
    pick.textContent= picked;
    win.textContent=''
    for(var i=0;i<color.length;i++){
        box[i].style.backgroundColor = color[i]
    }
    //if the easy mode is selected
    if (n==3){
        
        for(var i=3;i<6;i++){
            box[i].style.display = 'none'
        }
        easybtn.classList.add('glow')
        hardbtn.classList.remove('glow')
    }

    //if the hard button is selected
    else{
        for(var i=3;i<6;i++){
            box[i].style.display = 'block'
    }
    hardbtn.classList.add('glow')
    easybtn.classList.remove('glow')
}

}


//this generates colors

function generate(n){
    for(var i=0; i<n;i++){
        var r = Math.floor((Math.random() * 256))
        var g = Math.floor((Math.random() * 256))
        var b = Math.floor((Math.random() * 256))
        var col= `rgb(${r}, ${g}, ${b})`
        color.push(col)
    }
    return color

        
    
}



//this runs when the player clicks the boxes
for(var i=0;i<color.length;i++){
    box[i].style.backgroundColor = color[i];
    box[i].addEventListener('click',function(){
        this.style.transition = '0.6s'
        
        if (this.style.backgroundColor == picked){

            //This text appears
            win.textContent = 'YOU WIN'

            //this runs to make every box the same color as the picked
            for(var i=0;i<color.length;i++){
                box[i].style.backgroundColor = picked;
            }

            //this changes the background color of the upper portion
            head.style.backgroundColor = picked;


            
            
            
        }
        else{
            win.textContent='WRONG'
            this.style.backgroundColor = 'rgb(42, 43, 46)'

        }
    })
}






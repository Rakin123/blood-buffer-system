var kcX, kcY, qcX, qcY
var originalKcX
var selectedMolec

var distanceQ
var temp2
var qcHolder


var initialVal

var kcMoving = false;





function setup() {
    const container = document.getElementById('simBg');
    var canvas = createCanvas(container.offsetWidth -30, windowHeight*0.35);
    console.log(width,height, windowWidth)
    canvas.parent('simBg'); // Set the parent of the canvas to the div




    // at 35degree kc value
    initialVal = width *0.68

    kcX = initialVal
    qcX = -1000
}

function draw() {
    selectedMolec = document.getElementById('myDropdown');

    temp2 = selectedMolec.selectedIndex
    
    //addConcentration(selectedMolec.selectedIndex)



    clear(); // Clear the canvas on each frame
    //rect(mouseX, mouseY, 500, 50);
    
    //console.log(width, height)// 906.24 247.45

    //bar
    rectMode(CENTER)
    fill("white")
    rect(width/2, height/2, width -35, height/3)

    fill("blue")

    // 0
    text("0",(width/2)-(width -35)/2 -3, height/5)
    rect((width/2)-(width -35)/2, height/2, 2,height/2)



    //kc value
    fill("green")
    text("kc",kcX-3, height/5)
    rect(kcX, height/2,2,height/2)


    //Qc value
    fill("red")
    text("qc",qcX -3, height/5)
    rect(qcX, height/2,2,height/2)


    //original kc value

    if(kcMoving){
        fill("violet")
        text("kc original",initialVal-28, 4*height/5)
        rect(initialVal, height/2,2,height/2)
    }
    

    


      
      // // Set the canvas size to match the div's dimensions
      // resizeCanvas(divWidth, divHeight);
      // console.log(132)
      // // Draw the rectangle in the center of the div
      // background(255); // Clear the canvas
      // rectMode(CENTER);
      // fill("Black")
      // stroke()
      // rect(divWidth, divHeight, 50, 50);


      distanceQ = qcX - ((width/2)-(width -35)/2)
      console.log(qcX)



      

  }



  function addConcentration(option1){
    // if(option == "0"){
    //     console.log(true, c)

    // }else{
    //     console.log(false, c)
    // }

    if(option1 != "0"){
        if(option1 == "1"){
            return
        }
    }
  }



  var delta = ["C", "A", "V"]
  var change = "C"
  var typeChange = ["add", "remove"]

for(var v = 0; v<2; v++){
    for(var i= 0; i <2; i++){
    var temp;
    temp = typeChange[i]+delta[v]



    const button = document.getElementById(temp);
    

    button.addEventListener('click', function() {
        
        var check123 = button.id[button.id.length-1]
        console.log(check123)

        if(!(qcX >(width/2)+(width -35)/2 )){
        if(check123 === "C"){
            if(temp2 !== 0){
                if(button.id === "addC"){
                    if((temp2 ===3 || temp2 === 4)){
                        if(qcX === -1000){
                            qcX = kcX - 1
                        }
                        qcX += ((width/2)-(width -35)/2)
                        qcX *= 0.80
                        console.log("hey", qcX, qcX *0.85)
                    }else{
                        if(qcX === -1000){
                            qcX = kcX + 1
                        }
                        qcX *= 1.05
                        //qcX += 0.2 * 2**(distanceQ-300)
                    }
                }else if(button.id === "removeC"){
                    if((temp2 ===3 || temp2 === 4)){
                        if(qcX === -1000){
                            qcX = kcX + 1
                        }
                        qcX *= 1.05
                    }else{
                        
                        if(qcX === -1000){
                            qcX = kcX - 1
                        }
                        qcX += ((width/2)-(width -35)/2)
                        qcX *= 0.80
                        console.log("hey", qcX, qcX *0.85)
                    }
    
    
                }
            }


        }else if(check123 === "A"){
            console.log("bro")
            if(qcX === -1000){
                qcX = kcX +0.1
            }
            

            // Assuming the reaction is exothermic
            if(button.id === "removeA"){
                qcX += ((width/2)-(width -35)/2)
                qcX *= 0.87
                console.log("hiksdh")
            }else{
                qcX += ((width/2)-(width -35)/2)
                qcX *= 1.05
            }

            //kcMoving = true

        }else if(check123 === "V"){
            if(qcX === -1000){
                qcX = kcX + 0.1
            }

            if(button.id === "removeV"){   
                qcX += ((width/2)-(width -35)/2)
                qcX *= 1.05
            }else{
                qcX += ((width/2)-(width -35)/2)
                qcX *= 0.80
            }
            
        }

        
        }else{
            qcX =(width/2)+(width -35)/2
        }
            



        
        console.log(button.id, temp2 === 0);
        // Perform actions or call functions when the button is clicked
    });

  }
}

const resetButton = document.getElementById("resetB");
    

resetButton.addEventListener('click', function() {
    resetAll();
})






function resetAll(){
    qcX = -1000;
    kcX = initialVal;
    kcMoving = false
  }
  

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("button").click(function(){
var computer= Math.random();
var user= $("input").val();  
    $("#userChoice").text(user);
    
    if(computer >.66 && computer<.99) {
        $("#computerChoice").html("paper"); 
    computer="paper";
        
    }
    else if(computer <.66 && computer >.33){
        $("#computerChoice").html ("rock");
      computer="rock";  
    }
    else if(computer <.33 && computer >.0) {
        $("#computerChoice").html ("scissors");
        computer="scissors"; 
    }
    if (computer==="paper" && user==="paper"){
        $("#result").text("YOU TIED!!!");
    }    
    else if(computer==="paper" && user==="rock"){
        $("#result").text("COMPUTER WINS YOU LOSE")
    }    
       else if(computer==="paper" && user==="scissors"){
        $("#result").text("YOU WIN! YOU'RE THE GREATEST")
    }    
       else if(computer==="scissors" && user==="rock"){
        $("#result").text("YOU WIN! YOU'RE THE GREATEST")
    }    
        else if(computer==="scissors" && user==="paper"){
        $("#result").text("COMPUTER WINS YOU LOSE")
    }
        else if(computer==="scissors" && user==="scissors"){
        $("#result").text("YOU TIED!!!")
    }
        else if(computer==="rock" && user==="rock"){
        $("#result").text("YOU TIED!!!")
    }
    else if(computer==="rock" && user==="scissors"){
        $("#result").text("COMPUTER WINS YOU LOSE")
    }
    else if(computer==="rock" && user==="paper"){
        $("#result").text("YOU WIN YOU LITTTT!")
        $("#result").html("<p>YOU WIN YOU LITTTTT!</p>"+"<img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/12/10/09/rock.jpg?w968h681'>")
    }
    
});

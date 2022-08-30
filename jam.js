let screen1 = document.getElementById("value1");
let screen2 = document.getElementById("value2");
buttons = document.querySelectorAll("button");
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText == "Calculate")
        {  
            buttonText=document.getElementById("sign").innerHTML;
            let b_result = screen1.value + buttonText + screen2.value;
            // b_result += buttonText;
            // b_result += screen2.value;
       
            answer = eval(b_result);
            document.getElementById("resultid").innerHTML=answer;
        }
        else{
            document.getElementById("sign").innerHTML = buttonText;
        }
    
    })
} 
let numOne, numTwo, SignOp, signC, signCE, lastClick, signEgal, resultField, memoryField, alertMessage;



document.addEventListener('DOMContentLoaded', function() {

    numOne = document.querySelectorAll('.number');
    signC = document.querySelector('#signC');
    signCE = document.querySelector('#signCE');
    SignOp = document.querySelectorAll('.signOP');
    lastClick = document.querySelector('#lastClick');
    signEgal = document.querySelector('#signEgal');
    resultField = document.querySelector('#resultField');
    alertMessage = document.querySelector('#alertMessage');

    console.log(alertMessage);

    /* listeners to all the numbers
    Stock the value 

    */
    numOne.forEach(function(e) {
        e.addEventListener('click', function(e) {

            numOne = e.target.value;
            numOne = numOne.toString();

            lastClick.value = lastClick.value + numOne ;
            //console.log(numOne);
        });
    });

    // add event listeners to all the signs
    SignOp.forEach(function(e) {

        e.addEventListener('click', function(e) {
            SignOp = e.target.value;
            //console.log(SignOp);
            lastClick.value = lastClick.value + SignOp;
            memoryField = lastClick.value

            checkNumber()

        });
    });


    // add event listener to the clear button
    signC.addEventListener('click', function() {
        cleanInput()    
    })


    // add event listener to the clearAll button
    signCE.addEventListener('click', function() {
        lastClick.value = lastClick.value.slice(0, -1);
        retourNormal()
    })


    //listener click on result button
    signEgal.addEventListener('click', function() {
        console.log(resultField.value);
        resultEquation();
    })
    
});


function cleanInput(){
    lastClick.value = "";
    resultField.value = "";
    alertMessage.classList.add("normalMessage");
    alertMessage.innerHTML = "merci de saisir un nombre";
}

function retourNormal(){

    if(lastClick.value.length <= 8){
        // alertMessage.classList.remove("redAlert");
        alertMessage.classList.add("normalMessage");
        alertMessage.innerHTML = "merci de saisir un nombre";
    }

    
}



function checkNumber(){

    if(lastClick.value.length > 8){
        
        alertMessage.classList.add("redAlert"); 
        alertMessage.innerHTML = "Vous ne pouvez pas rentrer plus de 8 chiffres";
        
    
    }

    memoryField = lastClick.value
    lastClick.value = eval(lastClick.value);
    numOne = lastClick;
    console.log(numOne);


}

function resultEquation(){

    lastClick.value = eval(lastClick.value);
    resultField.value = lastClick.value;
    lastClick.value = memoryField + numOne;
    console.log(numOne);

}







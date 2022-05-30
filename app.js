let numONe, numTwo, SignOp, signC, signCE, lastClick;



document.addEventListener('DOMContentLoaded', function() {

    numONe = document.querySelectorAll('.number');
    signC = document.querySelector('#signC');
    signCE = document.querySelector('#signCE');
    SignOp = document.querySelectorAll('.signOP');
    lastClick = document.querySelector('#lastClick');


    numONe.forEach(function(e) {
        e.addEventListener('click', function(e) {
            numONe = e.target.value;
            lastClick.value = numONe;
            console.log(numONe);
        });
    });


   

    SignOp.forEach(function(e) {
        e.addEventListener('click', function(e) {
            SignOp = e.target.value;
            console.log(SignOp);
        });
    });


    signC.addEventListener('click', function() {
        lastClick.value = "0";     
    })






    
});
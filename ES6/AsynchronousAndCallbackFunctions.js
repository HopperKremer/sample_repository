//Asynchronous Functions
function add(a,b){
    var c = a+b
    console.log(c)
}
function multiplication(c,d){
    var e = c*d
    setTimeout(
        () => {
        console.log(e)}, 5000
    )
}

multiplication(10,20);
add(11,20)
//Call Back Functions

//12. Call Back Functions

function callBackFunction(fnSms, fnEmail) {
    console.log("Call Back Functions");
  
    fnSms();
    fnEmail();
  }
  
  callBackFunction(
    () => console.log("SMS"),
    () => console.log("Email")
  );
  
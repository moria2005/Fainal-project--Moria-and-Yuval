function check(){
    let srt= document.getElementById("text1").value;
 }
 function isEven(){
     let srt= document.getElementById("text1").value;
     if(srt.length%2===0){
         document.getElementById("output").innerHTML += "זוגי <br/>"
     }
     else{
         document.getElementById("output").innerHTML += "אי זוגי <br/>"
     }
 }
 function space(){
     let srt= document.getElementById("text1").value;
     let count=0;
     for(let i = 0; i< srt.length;i++){
         if(srt[i]===" "){
             count++;
         }
     }
     document.getElementById("output").innerHTML += "יש במחרוזת <br/>" + count +"רווחים ";
     let tav ="ה";
     checkTav(tav,srt);
 }
 function checkTav(tav,srt){
     let count=0;
    for(let i=0; i<srt.length;i++){
        if(srt[i]==tav){
            count++;
        }
    }
     document.getElementById("output").innerHTML += count;
 }
 function evenStr(){
     let srt= document.getElementById("text1").value;
     for(let i = 0; i< srt.length;i+=2){
         document.getElementById("output").innerHTML += srt[i];
     }
     document.getElementById("output").innerHTML += "<br/>";
 }
function oddStr() {
    let srt = document.getElementById("text1").value;
    for (let i = 1; i < srt.length; i += 2) {
        document.getElementById("output").innerHTML += srt[i];
    }
    document.getElementById("output").innerHTML += "<br/>";
}
function revers(){
    let srt= document.getElementById("text1").value;
    for(let i = srt.length-1; i >= 0 ; i--){
        document.getElementById("output").innerHTML += srt[i];
    }
}
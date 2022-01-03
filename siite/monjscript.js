       function blink(a){
    if(a.style.visibility=="visible"){
        a.style.visibility="hidden";
    }else{
        a.style.visibility="visible";
    }
}
function ana(a){
    if(a.style.visibility=="visible"){
        a.style.visibility="hidden";
    }
}

function requiredElement() {
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var email = document.getElementById("gmail");
    var tel= document.getElementById("tel");
    var gender = document.getElementsByName('age');
    var genValue = false;
    var i=0;

    if(nom.value== "") {
  document.getElementById('nomerreur').innerHTML="*entrez votre Nom*",
  //setInterval('blink(nomerreur)',400);
    document.getElementById("nom").style.backgroundColor="#ec407a",
    document.getElementById("nom").focus(),i++;
    //nom.focus();
    return false;
    
    }
    if(prenom.value == ""){
    document.getElementById('prenomerreur').innerHTML="*entrez votre prenom*";
    //setInterval('blink(prenomerreur)',400);
    document.getElementById("prenom").style.backgroundColor="#ec407a";
    document.getElementById("prenom").focus(),i++;
    //document.getElementById("prenom").focus();
    
    return false;
    }
    
    if(tel.value=="+212") {
        document.getElementById('telerreur').innerHTML="*entrez votre numero*";
       // setInterval('blink(telerreur)',400);
        document.getElementById("tel").style.backgroundColor="#ec407a";
        document.getElementById("tel").focus(),i++;
        return false;
        }
    if(gmail.value == "") {
    
    document.getElementById("gmail").style.backgroundColor="#ec407a";
    document.getElementById('gmailerreur').innerHTML="*entrez votre Email*";
    //setInterval('blink(gmailerreur)',400);
    document.getElementById("gmail").focus(),i++;
    return false;
    }
    if(date.value == ""&&date1.value == "") {
    
        document.getElementById("date").style.backgroundColor="#ec407a";
        document.getElementById("date1").style.backgroundColor="#ec407a";
       
        
        document.getElementById('prenderreur').innerHTML="*veuillez precisez la date de loacation*";
        //setInterval('blink(prenderreur)',400);
        document.getElementById("date").focus();
        document.getElementById("date1").focus(),i++;
        return false;
        }
        for(var j=0; j<gender.length;j++){
         if(gender[j].checked == true){
             genValue = true;    
           }
          }
         if(!genValue){
           document.getElementById('age1').innerHTML="*l'age est obligatoire*";
          setInterval('blink(age)',400);
            return false;
        }

    if(i==0){
        return true;
    }else{
        return false;
    }
}


function validateForm(){
    if (!requiredElement()){
    return false;
    }
    else{
    confirm("votre demande est prise en charge !

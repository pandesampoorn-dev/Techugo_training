function ask(question, yes, no){
    if(confirm(question)) 
        yes();
    else
        no();

}

function ok(){
    alert("agreed.");
}

function cancel(){
    alert("canceled");
}

ask("do you agree?", ok, cancel);
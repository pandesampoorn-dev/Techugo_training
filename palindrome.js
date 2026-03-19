function palindrome(str){

    reversed="";

     for(let i=str.length-1; i>=0;i--){
        reversed+=str[i];
    }

    if(str===reversed)
        alert("palindrome");
    else
        alert("not palindrome");
}

palindrome(prompt("enter str:"));
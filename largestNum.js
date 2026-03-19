function largest(arr){
    let lar=0;

    for(let i in arr){
        if(arr[i]>lar){
            lar=arr[i];
        }
    }
    alert(lar);
}

largest([5,8,2,9,12,3]);
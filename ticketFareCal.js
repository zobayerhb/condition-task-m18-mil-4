const age = 15;
let price = 800;

if ( age < 10 ){
    console.log("Your ticket full free");
}else if( age >= 20 && age < 60){
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}else if( age >= 60 ){
    // 15% discount
    const discount = price * 15 / 100;
    const payAmount = price -discount;
    console.log(payAmount);
}else{
    console.log("You will pay" , price , "tk")
}
// هنا سوف تنشئ دالة calculate 
function calculate() {
    let height = document.getElementById("height"). value;
    let weight = document.getElementById("weight"). value;
     //Error Message (Alert)


     let BMI=weight / (height * height);
     let status = "";
     if (height ==""||weight =="") {
alert("قم بالتأكيد من تعبئة جميع بياناتك المطلوبة ");
return;  
}
     if(BMI < 18.5){
       status="تعاني من نقص في الوزن ";
     } else if(BMI<25){
       status="وزنك صحي";
     } else if(BMI<30){
       status="تعاني من زيادة في الوزن ";
     } else{
       status="تعاني من السمنةالمفرطة";
     }
 
     BMI=BMI.toFixed(2);// Optional
     document.getElementById("result").innerHTML= BMI;
     document.getElementsByClassName("comment")[0].innerHTML=status;
 }
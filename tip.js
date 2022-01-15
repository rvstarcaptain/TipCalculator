function onclickme(){
    let  billamount=document.getElementById("bill-amount").value;
   let tipperc =document.getElementById("tip-percentage").value;
   let totaltip = billamount*(tipperc/100);
   let totalbillamount = totaltip;
   let finalresult= totaltip+Number(billamount);
   console.log(document.getElementById("tip-amount").value=totalbillamount)
   console.log(document.getElementById("total-amount").value=finalresult)
}
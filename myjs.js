

function calc(){
    var fname=document.getElementById("AA").value;
    var lname=document.getElementById("AB").value;
    var sal =document.getElementById("AC").value;
    var tax =document.getElementById("AD").value;
    var ban =document.getElementById("AE").value;
   
    var jan =parseInt(document.getElementById("BA").value);
    var feb =parseInt(document.getElementById("BB").value);
    var mar =parseInt(document.getElementById("BC").value);
    var apr =parseInt(document.getElementById("BD").value);
    var may =parseInt(document.getElementById("BE").value);
    var jun =parseInt(document.getElementById("BF").value);
    var jul =parseInt(document.getElementById("BG").value);
    var aug =parseInt(document.getElementById("BH").value);
    var sep =parseInt(document.getElementById("BI").value);
    var oct =parseInt(document.getElementById("BJ").value);
    var nov =parseInt(document.getElementById("BK").value);
    var dec =parseInt(document.getElementById("BL").value);
    if(sal.length>0 && tax.length>0 && fname.length>0 && lname.length>0 && ban.length>0 )
    {
        var totalsal= sal-((tax/100)*sal);
        var permon= (totalsal/12);
        var taxpermon= (sal-totalsal)/12;
        var tbank = ((ban/100)*totalsal);
        var pbank = (tbank/12);
        var xbn = (totalsal-tbank);
        var mspt = (jan+feb+mar+apr+may+jun+jul+aug+sep+oct+nov+dec);
        var msvd = (xbn-mspt);
        var avgsppm= (mspt/12);
        var avgsvpm= (msvd/12);

        document.getElementById("result2").innerHTML=fname+" "+lname+"<br>"+"PER ANNUM ="+sal+"<br>"+"PER ANNUM AFTER TAX ="+totalsal.toString()+"<br>"+"SALARY PER MONTH ="+permon.toString()
        +"<br>"+"TAX PER MONTH ="+taxpermon.toString()+"<br>"+" TOTAL MONEY IN BANK ="+tbank.toString()+"<br>"+"PERMONTH BANK SAVING ="+pbank.toString()
        +"<br>"+"TOTAL MONEY IN HAND PER ANNUM ="+xbn.toString()+"<br>"+"TOTAL MONEY SPENT ="+mspt.toString()+"<br>"+" REMAINING MONEY="+msvd.toString()
        +"<br>"+"AVERAGE MONEY SPENT PER MONTH ="+avgsppm.toString()+"<br>"+"AVERAGE MONEY SAVED PER MONTH ="+avgsvpm.toString();
     
        
    }
    else
    {
        alert("Not entered any values");
    }
    

}
/*+"<br>"+" ="+.toString();*/
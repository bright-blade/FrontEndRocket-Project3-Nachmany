// --------------VALEDATION---------------//
// ------required--------
function validaRed(x,y){
    if(x.length <= 1){
            // document.querySelector("#id_first_invalid").style.display = "block";
            document.getElementById("id_"+y+"_invalid").classList.remove("d-none");
            document.getElementById("id_p_"+y).classList.add("red");
            document.getElementById("id_"+y+"_name").classList.add("red");
    }else{
            // document.querySelector("#id_first_invalid").style.display = "none";
            document.getElementById("id_"+y+"_invalid").classList.add("d-none");
            document.getElementById("id_p_"+y).classList.remove("red");
            document.getElementById("id_"+y+"_name").classList.remove("red");
    } 
}
function validaFirst(){
    let x = document.querySelector("#id_first_name").value;
    let y = document.querySelector("#id_first_name").id;
    validaRed(x,y.slice(3,-5));
}
function validaLast(){
    let x = document.querySelector("#id_last_name").value;
    let y = document.querySelector("#id_last_name").id;
    validaRed(x,y.slice(3,-5));
}
function validaCompany(){
    let x = document.querySelector("#id_company_name").value;
    let y = document.querySelector("#id_company_name").id;
    validaRed(x,y.slice(3,-5));
}
function validaStructure(){
    let x = document.querySelector("#id_structure_name").value;
    let y = document.querySelector("#id_structure_name").id;
    validaRed(x,y.slice(3,-5));
}
function validaAssociation(){
    let x = document.querySelector("#id_association_name").value;
    let y = document.querySelector("#id_association_name").id;
    validaRed(x,y.slice(3,-5));
}
// -----------validate of date---------//
function redDate(y){
    var d =document.querySelector("#id_date_of_birdh_"+y).value;
    let year = d.slice(0,4);
    let month = d.slice(5,7);
    let day = d.slice(8,10);

    const today = new Date();
    const toY = today.getFullYear()-18;
    const toM = today.getMonth()+1;
    const toD = today.getDate();
        
    if(year < toY ){
        document.getElementById("id_dbo_invalid_"+y).classList.add("d-none");
        document.getElementById("id_dbo_label_"+y).classList.remove("red");
        document.getElementById("id_date_of_birdh_"+y).classList.remove("red");
    }else if(year == toY && month < toM){
        document.getElementById("id_dbo_invalid_"+y).classList.add("d-none");
        document.getElementById("id_dbo_label_"+y).classList.remove("red");
        document.getElementById("id_date_of_birdh_"+y).classList.remove("red");
    }else if(year == toY && month == toM && day <= toD){
        document.getElementById("id_dbo_invalid_"+y).classList.add("d-none");
        document.getElementById("id_dbo_label_"+y).classList.remove("red");
        document.getElementById("id_date_of_birdh_"+y).classList.remove("red");
    }else{
        document.getElementById("id_dbo_invalid_"+y).classList.remove("d-none");
        document.getElementById("id_dbo_label_"+y).classList.add("red");
        document.getElementById("id_date_of_birdh_"+y).classList.add("red");
}
};

function validaDOB_1(){
    let x = document.querySelector("#id_date_of_birdh_1").value;
    let y = document.querySelector("#id_date_of_birdh_1").id;
    redDate(y.slice(17 ,18));
}
function validaDOB_2(){
    let x = document.querySelector("#id_date_of_birdh_2").value;
    let y = document.querySelector("#id_date_of_birdh_2").id;
    redDate(y.slice(17 ,18));
}
function validaDOB_3(){
    let x = document.querySelector("#id_date_of_birdh_3").value;
    let y = document.querySelector("#id_date_of_birdh_3").id;
    redDate(y.slice(17 ,18));
}
// ---------------full name dosn't to long
function longF(){
    let f = document.querySelector("#id_first_name").value;
    let l = document.querySelector("#id_last_name").value;
    let x = 26 -  l.length;
    let y = 26 -  f.length;
    document.querySelector("#id_first_name").maxLength = x ;
    document.querySelector("#id_last_name").maxLength = y ;
    if( (f.length + l.length) == 26 ){
    //     alert("Full name length is longer than 26 characters.")
    }
}
function longC(){
    let f = document.querySelector("#id_company_name").value;
    let l = document.querySelector("#id_structure_name").value;
    let x = 26 -  l.length;
    let y = 26 -  f.length;
    document.querySelector("#id_company_name").maxLength = x ;
    document.querySelector("#id_structure_name").maxLength = y ;
    if( (f.length + l.length) == 26 ){
            // alert("Full name length is longer than 26 characters.")
    }
}
function longA(){
let f = document.querySelector("#id_association_name").value;
    if( (f.length) == 20 ){
            // alert("Please enter no more than 20 characters.")
    }
}
// -------------validate of part 2----------------//
function validaEmail(){
    let inputText = document.querySelector("#id_email_name");
    let x = inputText.value;
    let y = inputText.id;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    validaRed(x,y.slice(3,-5));
    if(x.match(mailformat)){
            document.getElementById("id_email_invalid_cor").classList.add("d-none");
    }else{
            document.getElementById("id_email_invalid_cor").classList.remove("d-none");
    }
}

function validaPhone(){
    let x = document.querySelector("#id_phone_name").value;
    let y = document.querySelector("#id_phone_name").id;
    validaRed(x,y.slice(3,-5));
    phoneNumTest();
}

function phoneNumTest(){
    var phone = document.querySelector("#id_phone_name");
    let y = phone.id.slice(3,-5)
        const phoneType = /^\(?[0-9])$/;
        if(phoneType.test(phone)){
            document.getElementById("id_"+y+"_invalid2").classList.add("d-none");
            document.getElementById("id_p_"+y).classList.remove("red");
            document.getElementById("id_phone_name").classList.remove("red");
        }else{
            document.getElementById("id_"+y+"_invalid2").classList.remove("d-none");
            document.getElementById("id_p_"+y).classList.add("red");
            document.getElementById("id_phone_name").classList.add("red");
        } 
}
function validaAdress(){
    let x = document.querySelector("#id_address_name").value;
    let y = document.querySelector("#id_address_name").id;
    validaRed(x,y.slice(3,-5));
}
function validaCity(){
    let x = document.querySelector("#id_city_name").value;
    let y = document.querySelector("#id_city_name").id;
    validaRed(x,y.slice(3,-5));
}
function validaZip(){
    let x = document.querySelector("#id_zip_name").value;
    let y = document.querySelector("#id_zip_name").id;
    validaRed(x,y.slice(3,-5));
}
function validaAdressDel(){
    let x = document.querySelector("#id_address_del_name").value;
    let y = document.querySelector("#id_address_del_name").id;
    validaRed(x,y.slice(3,-5));
}
function validaCityDel(){
    let x = document.querySelector("#id_city_del_name").value;
    let y = document.querySelector("#id_city_del_name").id;
    validaRed(x,y.slice(3,-5));
}
function validaZipDel(){
    let x = document.querySelector("#id_zip_del_name").value;
    let y = document.querySelector("#id_zip_del_name").id;
    validaRed(x,y.slice(3,-5));
}
function validaAnswer(){
    let x = document.querySelector("#id_answer_name").value;
    let y = document.querySelector("#id_answer_name").id;
    validaRed(x,y.slice(3,-5));
    y = y.slice(3,-5);
    if(x.length <= 4){
        document.getElementById("id_"+y+"_invalid").classList.remove("d-none");
        document.getElementById("id_p_"+y).classList.add("red");
        document.getElementById("id_"+y+"_name").classList.add("red");
}else{
        document.getElementById("id_"+y+"_invalid").classList.add("d-none");
        document.getElementById("id_p_"+y).classList.remove("red");
        document.getElementById("id_"+y+"_name").classList.remove("red");
} 

}







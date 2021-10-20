window.onload = function(){
        console.log("js working");
        dateOnCard();
        cardCount();
        // let i = 0;
        // console.log(i);
        // document.getElementById("p-"+i).classList.toggle("d-none");

}

function menu(){
        let element = document.getElementById("id_nav");
        element.classList.toggle("d-none");
}

// -----------Scroll through pages---------------//

var p = 0;
function next(){
        document.getElementById("p-"+p).classList.add("d-none");
        p++;
        document.getElementById("p-"+p).classList.remove("d-none");
        if(p>0){
                document.getElementById("id_btn").classList.remove("d-none");  
        }
        if(p == 3){
                document.getElementById("id_continue").classList.add("d-none");  
                // validaPart_2();  
        }
        if(p == 2){
                document.getElementById("id_per_dtl").classList.add("d-none");  
                document.getElementById("id_my_dtl").classList.remove("d-none");
                // validaPart_1();  
        } else{
                document.getElementById("id_per_dtl").classList.remove("d-none");  
                document.getElementById("id_my_dtl").classList.add("d-none");   
        }
        if(p == 1 || p == 2 ){
                document.getElementById("id_1_2").classList.remove("d-none");
                console.log("in page_1_2")
        }else{
                document.getElementById("id_1_2").classList.add("d-none");
                console.log("not in page_1_2")
        }
        
}

function pre(){
        document.getElementById("p-"+p).classList.add("d-none");
        p--;
        document.getElementById("p-"+p).classList.remove("d-none");
        if(p>0){
                document.getElementById("id_btn").classList.remove("d-none");  
        }else{
                document.getElementById("id_btn").classList.add("d-none");  
                
        }
        if(p == 3){
                document.getElementById("id_continue").classList.add("d-none");  
        }else{
                document.getElementById("id_continue").classList.remove("d-none");  
                
        }
        if(p == 2){
                document.getElementById("id_per_dtl").classList.add("d-none");  
                document.getElementById("id_my_dtl").classList.remove("d-none");  
        } else{
                document.getElementById("id_per_dtl").classList.remove("d-none");  
                document.getElementById("id_my_dtl").classList.add("d-none");   
        }
        if(p == 1 || p == 2 ){
                document.getElementById("id_1_2").classList.remove("d-none");
        }else{
                document.getElementById("id_1_2").classList.add("d-none");
        }
        
}
// ----------- add Card ---------------//
function addNewCard(){
        document.querySelector("#id_label_sec").classList.remove("d-none");
        document.querySelector("#id_added").classList.remove("d-none");
        document.querySelector("#id_label_custom_2").classList.remove("d-none");
        document.querySelector("#id_add_card").classList.add("d-none");
        document.querySelector("#id_one_or_two").innerHTML = "2";
        
}
function deleteNewCard(){
        document.querySelector("#id_label_sec").classList.add("d-none");
        document.querySelector("#id_added").classList.add("d-none");
        document.querySelector("#id_label_custom_2").classList.add("d-none");
        document.querySelector("#id_add_card").classList.remove("d-none");
        document.querySelector("#id_one_or_two").innerHTML = "1";
        
}
// ----------- change gender ---------------//
function onMrMis(){
        document.querySelector("#id_per_dtl").innerHTML = "personal details <p>&#8212;</p>";
        document.querySelector("#id_dtl_of_prsn").classList.remove("d-none");
        document.querySelector("#id_cprt").classList.add("d-none");
        document.querySelector("#id_associ").classList.add("d-none");
        document.querySelector("#id_card_account").classList.add("d-none");
        empty();
        changeFN();
        changeLN();
        changeCos();

}
function onCorporate(){
        document.querySelector("#id_per_dtl").innerHTML = "corporate information <p>&#8212;</p>";
        document.querySelector("#id_dtl_of_prsn").classList.add("d-none");
        document.querySelector("#id_cprt").classList.remove("d-none");
        document.querySelector("#id_associ").classList.add("d-none");
        document.querySelector("#id_card_account").classList.remove("d-none");
        empty();
        changeCom();
        changeStrc();
        changecoscom();
}
function onAssociation(){
        document.querySelector("#id_per_dtl").innerHTML = "association information <p>&#8212;</p>";
        document.querySelector("#id_dtl_of_prsn").classList.add("d-none");
        document.querySelector("#id_cprt").classList.add("d-none");
        document.querySelector("#id_associ").classList.remove("d-none");
        document.querySelector("#id_card_account").classList.remove("d-none");
        empty();
        changeAssc();
        changecoscom();
}
// --------card's changes---------//
function changeFN(){
        let f = document.getElementById("id_first_name").value;
        document.getElementById("id_f_name_card").innerHTML = f;
}
function changeLN(){
        let f = document.getElementById("id_last_name").value;
        document.getElementById("id_l_name_card").innerHTML = f;
}
function changeCos(){
        let f = document.getElementById("id_custom").value;
        document.getElementById("id_cstm_card").innerHTML = f;
}
// +++ Company
function changeCom(){
        let f = document.getElementById("id_company_name").value;
        document.getElementById("id_f_name_card").innerHTML = f;
}
function changeStrc(){
        let f = document.getElementById("id_structure_name").value;
        document.getElementById("id_l_name_card").innerHTML = f;
}
function changecoscom(){
        let f = document.getElementById("id_here_1").value;
        document.getElementById("id_cstm_card").innerHTML = f;
}
// +++ Association
function changeAssc(){
        let f = document.getElementById("id_association_name").value;
        document.getElementById("id_f_name_card").innerHTML = f ;
}
// +++ empty
function empty(){
        document.getElementById("id_f_name_card").innerHTML = "";
        document.getElementById("id_l_name_card").innerHTML = "";
        document.getElementById("id_cstm_card").innerHTML = "";
}
// +++ date on th card
function dateOnCard(){
        let x,y,z;
        const d = new Date();
        y = d.getFullYear();
        x= y-1998;
        z= d.getMonth() + 1,
        document.getElementById("id_date").innerHTML = z+"/"+x;
}

function cardCount(){
        let count = document.querySelector("#id_select").value;
        document.querySelector("#id_indicate").innerHTML =
         '<div class="me-3 me-md-0 col-8  col-md-6 pe-md-2"><label for="">Indicate here the desired customization</label><input id="id_here_1" type="text" oninput="changecoscom()"></div><div id="id_card_label" class="col-4 col-md-6 ps-md-2"><p class="mb-0">IBAN UK</p><label for="id_uk-1"><input id="id_uk-1" class="class_uk" type="radio" name="flag"><span class="uk_span pointer"></span></label><label for="id_french-1"><input id="id_french-1" class="class_fr" type="radio" name="flag" ><span class="french_span pointer"></span></label></div>';

        for(i=2 ; i<=count ; i++){
                document.querySelector("#id_indicate").innerHTML +=
                 '<div class="me-3 me-md-0 col-8  col-md-6 pe-md-2"><label for="">Indicate here the desired customization</label><input id="id_here_'+i+'" type="text"></div><div id="id_card_label'+i+'" class="col-4 col-md-6 ps-md-2"><p class="mb-0">IBAN UK</p><label for="id_uk-'+i+'"><input id="id_uk-'+i+'" class="class_uk" type="radio" name="flag'+i+'"><span class="uk_span pointer"></span></label><label for="id_french-'+i+'"><input id="id_french-'+i+'" class="class_fr" type="radio" name="flag'+i+'"><span class="french_span pointer"></span></label></div>'
        }
}




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
            alert("Full name length is longer than 26 characters.")
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
            alert("Full name length is longer than 26 characters.")
        }
    }
    function longA(){
        let f = document.querySelector("#id_association_name").value;
        if( (f.length) == 20 ){
            alert("Please enter no more than 20 characters.")
        }
    
    }
function redDate(y){
    var d =document.querySelector("#id_date_of_birdh_1").value;
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

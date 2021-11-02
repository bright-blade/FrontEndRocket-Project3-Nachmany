function mailDetails() {
    document.querySelector("#id_full_address").innerHTML = document.querySelector("#id_address_name").value;
    let city = document.querySelector("#id_city_name").value+" ";
    let zipy = document.querySelector("#id_zip_name").value;
    document.querySelector("#id_full_city").innerHTML = city+zipy;
    document.querySelector("#id_state").innerHTML = document.querySelector("#id_country").value;
    
}
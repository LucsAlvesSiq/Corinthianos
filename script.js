check1 = "2"
check2 = "3"


function habilitar(id){
    if(check1 != id){
        document.getElementById("cbx"+check2).checked = false;

        check2 = check1;
        check1 = id

        document.getElementById("cbx"+check1).checked = true;
        document.getElementById("cbx"+check1).checked = true;
    }
}
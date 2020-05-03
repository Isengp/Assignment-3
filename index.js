function ajax(){
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
       
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var Glist = response.list;
            var output="<table>";
            for (var i=0;i<Glist.length;i++){

                output += "<tr> <td>" + Glist[i].SlNo + "</td><td>" +
                    Glist[i].Item + "</td><td>" +
                    Glist[i].Quantity + "</td><td>" +
                    Glist[i].Unit + "</td><td>" +
                    Glist[i].Section + "</td><td>" +
                    Glist[i].Notes + "</td></tr>";
            }
            output += "</table>";
            document.getElementById("demo").innerHTML = output;
        }
    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
    }

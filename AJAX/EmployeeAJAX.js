function getData(){
    console.log("starting the method, creating xml object");
    let xmlObj= new XMLHttpRequest(); //created request object.
    console.log("xml object is created");

    //defining what to do after data is recieved in XMLobject.
    xmlObj.onload = function(){
        console.log("data parsing");
        let empObj = JSON.parse(this.responseText);
        console.log("data parsed successfully");

        let tableBody=document.getElementById("d1")
        for(let e of empObj){
            let newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${e.id}</td><td>${e.ename}</td><td>${e.epost}</td>
            <td>${e.esalary}</td><td>${e.eaddress}</td><td>${e.ecompany}</td>
            <td><button type="button" class="btn btn-danger" onclick="deleteEmp(${e.id})">Delete</button></td>`
            tableBody.appendChild(newRow);
        }
        console.log("onload done successfully");
    }

    console.log("opening get request for the method");
    xmlObj.open("GET","http://localhost:8888/employe");
    xmlObj.send();
}

function deleteEmp(id){
    console.log(`id is : ${id}`);
    if(window.confirm(`Are you Sure you want to delete ${id}`)){
        let xmlObj=new XMLHttpRequest();
        xmlObj.onload= function(){
            console.log("Deleted Successfully");
        }
        xmlObj.open("DELETE",`http://localhost:8888/employe/${id}`);
        xmlObj.send();
    }
}
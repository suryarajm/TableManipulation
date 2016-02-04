$(document).ready(function(){

	$("#detailsTableDiv").hide();
	    var companies = [{"name":"QBurst","headOffice":"Trivandrum","numberOfEmployees":"1200+","email":"hr@qburst.com","phoneNum":"0471 653 7510"},
  {"name":"UST","headOffice":"Trivandrum","numberOfEmployees":"50000+","email":"hr@ust.com","phoneNum":"0471 653 7510"},
  {"name":"Infosys","headOffice":"Bangalore","numberOfEmployees":"100000+","email":"hr@qinfosys.com","phoneNum":"0471 653 7510"},
  {"name":"TATA ELXSI","headOffice":"Mumbai","numberOfEmployees":"40000+","email":"hr@tata.com","phoneNum":"0471 653 7510"},
  {"name":"Allianz","headOffice":"Cochi","numberOfEmployees":"2200+","email":"hr@qburst.com","phoneNum":"0471 653 7510"},
  {"name":"Maxartists","headOffice":"Trivandrum","numberOfEmployees":"50+","email":"hr@maxartists.com","phoneNum":"0471 653 7510"},
  {"name":"EY","headOffice":"Cochi","numberOfEmployees":"7200+","email":"hr@ey.com","phoneNum":"0471 653 7510"},
  {"name":"IBS","headOffice":"Bangalore","numberOfEmployees":"5200+","email":"hr@ibs.com","phoneNum":"0471 653 7510"},
  {"name":"InApp","headOffice":"Chennai","numberOfEmployees":"1000+","email":"hr@inapp.com","phoneNum":"0471 653 7510"},
  {"name":"PITS","headOffice":"Trivandrum","numberOfEmployees":"500+","email":"hr@pits.com","phoneNum":"0471 653 7510"},
];


var companyListTbodyElement = document.getElementById("companyListBody");
     var i = 0;
     var companyCount = 10;
     for(i=0;i<10;i++){
      

         var trElement = document.createElement('tr');
         var td1 = document.createElement('td');
         trElement.appendChild(td1);
         td1.appendChild(document.createTextNode(i+1));


         var td2 = document.createElement('td');
         trElement.appendChild(td2);
         td2.appendChild(document.createTextNode(companies[i].name));


         var td3 = document.createElement('td');
         trElement.appendChild(td3);
         td3.appendChild(document.createTextNode(companies[i].headOffice));


         var td4 = document.createElement('td');
         trElement.appendChild(td4);


         var icon = document.createElement('img');
         $(icon).attr("class","viewDetails");
         $(icon).attr("rel",i);
         $(icon).attr("src","images/view-details.jpg");
         $(icon).attr("title","more details");
         $(icon).attr("width","20px");
         $(icon).attr("height","20px");
         td4.appendChild(icon);
         $(td4).attr("align","center");
         

         companyListTbodyElement.appendChild(trElement);

     } 

    
    
      
      $(".viewDetails").on('click',function(){
      	 if(document.getElementById("showDatatable")){
      	 	$("#showDatatable").remove();
      	 }
      	 $(".firstTable").css("float","left");
      	 $(".firstTable").css("width","48%");
      	 $(".firstTable").css("margin","0px 1%");
         $("#detailsTableDiv").show();

         var tableId = $(this).attr("rel");
        

         var detailsTableDivElement = document.getElementById("detailsTableDiv");


         var newTableElement = document.createElement('table');
         $(newTableElement).attr("id","showDatatable");
         detailsTableDivElement.appendChild(newTableElement);

         

         var newTheadElement = document.createElement('thead');
         newTableElement.appendChild(newTheadElement);

         var newThElement = document.createElement('th');
         newTheadElement.appendChild(newThElement);
         $(newThElement).attr("colspan","2");
         newThElement.appendChild(document.createTextNode(companies[tableId].name));


         var newTbodyElement = document.createElement('tbody');
         newTableElement.appendChild(newTbodyElement);


         var newTr1Element = document.createElement('tr');
         newTbodyElement.appendChild(newTr1Element);

         var newTd1Element = document.createElement('td');
         newTr1Element.appendChild(newTd1Element);
         newTd1Element.appendChild(document.createTextNode("HeadOffice:"));
         
         var newTd2Element = document.createElement('td');
         newTr1Element.appendChild(newTd2Element);
         newTd2Element.appendChild(document.createTextNode(companies[tableId].headOffice));



         var newTr2Element = document.createElement('tr');
         newTbodyElement.appendChild(newTr2Element);

         var newTd1Element = document.createElement('td');
         newTr2Element.appendChild(newTd1Element);
         newTd1Element.appendChild(document.createTextNode("Number Of Employees:"));
         
         var newTd2Element = document.createElement('td');
         newTr2Element.appendChild(newTd2Element);
         newTd2Element.appendChild(document.createTextNode(companies[tableId].numberOfEmployees));



         var newTr3Element = document.createElement('tr');
         newTbodyElement.appendChild(newTr3Element);

         var newTd1Element = document.createElement('td');
         newTr3Element.appendChild(newTd1Element);
         newTd1Element.appendChild(document.createTextNode("Email:"));
         
         var newTd2Element = document.createElement('td');
         newTr3Element.appendChild(newTd2Element);
         newTd2Element.appendChild(document.createTextNode(companies[tableId].email));


         var newTr4Element = document.createElement('tr');
         newTbodyElement.appendChild(newTr4Element);

         var newTd1Element = document.createElement('td');
         newTr4Element.appendChild(newTd1Element);
         newTd1Element.appendChild(document.createTextNode("PhoneNum:"));
         
         var newTd2Element = document.createElement('td');
         newTr4Element.appendChild(newTd2Element);
         newTd2Element.appendChild(document.createTextNode(companies[tableId].phoneNum));




      });

    $(".cancel").on("click",function(){
        $("#showDatatable").remove();
        $("#detailsTableDiv").hide();
        $(".firstTable").css({"width":"96%","margin":"0px 2%"});
    });

});
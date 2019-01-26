//Information in 3 seperate arrays 
var tableId = document.getElementById("tableId");
var images = ["Img/Barrier.jpeg","Img/mexico.jpg","Img/Hawaii.jpg","Img/tahiti.jpg"];
var description  = ["Great Barrier Reef","Mexico","Hawaii","Tahiti"];
var urls = ["https://travel.usnews.com/Great_Barrier_Reef_Australia/Things_To_Do/","https://www.atlasobscura.com/things-to-do/mexico","http://www.prideofmaui.com/blog/maui/top-things-hawaii.html","https://travel.usnews.com/Tahiti_French_Polynesia/Things_To_Do/"];

//var tablerows = document.getElementById('table1').rows.length;

//Develope needed nodes
var table = document.createElement('table');
var newHeadImg = document.createElement('th');
var newHeadDesc = document.createElement('th');
var firstRow = document.createElement('tr')
   var HeaderImg = document.createTextNode("Images");
   var HeaderDesc = document.createTextNode("Description(Go on image for description)");
//Connect nodes in a table format
       newHeadImg.appendChild(HeaderImg);
       newHeadDesc.appendChild(HeaderDesc);
       firstRow.appendChild(newHeadImg);
       firstRow.appendChild(newHeadDesc);
   table.appendChild(firstRow);
   console.log(table);

//For loop adds pictures and description to table format
for(i=0;i<images.length;i++)
{
   var newRow= document.createElement('tr');
   var newDataImg = document.createElement('td');
   var newDataDesc = document.createElement('td');
   var newImg = document.createElement('img');
   
   newImg.src = images[i];
   newImg.href = urls[i];
   console.log(urls[i]);
   var newDesc = document.createTextNode(description[i]);
  

    
       newDataImg.appendChild(newImg);
       
       newDataDesc.className = "descClass";
       newDataDesc.appendChild(newDesc)
       newRow.appendChild(newDataImg);
       newRow.appendChild(newDataDesc);
   table.appendChild(newRow);
   

}   
//posts finished table
tableId.appendChild(table);

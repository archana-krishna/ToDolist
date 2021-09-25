var btn = document.getElementById("btn")
var pic = document.getElementById("pic")




function ajax() {
  btn.style.display = "none"
  pic.style.display = "none"

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          console.log(response);
        
          var output = "";
          output += `<tr>`
          output += `<th>id</th>`;
          output += `<th>title</th>`;
          output += `<th>status</th>`;
          output += `<tr>`


          for (i = 0; i < response.length; i++) {
             
            if(response[i].completed == true){
              
              output += `
              <tr> 
              <td>${response[i].id}</td>
              <td>${response[i].title}</td>
              <td><input type="checkbox" checked class="largerCheckbox" disabled></td>
              </tr>`;
             }
             else{
                output += `
              <tr> 
              <td>${response[i].id}</td>
              <td>${response[i].title}</td>
              <td><input id="check" type="checkbox" class="largerCheckbox"></td>
              </tr>`;
             }
            }

          
          console.log(output);
          document.getElementById("body").innerHTML = output;
          
          var count = 0;
          console.log(count);
          $(document).ready(function(){
              console.log(count);
              $("#body").on("change",":checkbox",
              function(){
               console.log(count);

            var status = this.checked;
            var promise = new Promise(function(resolve){

                if(status === true){
                    count++;
                }
                console.log(count);

                if(status === false){
                    count--;
                }
                console.log(count);
                if(count == 5){
                    console.log(count);
                    resolve();
                }
            });
          promise.then(function(){
            setTimeout(function(){ alert("Congratuations five task completed"); }, 1000);

          });
         });
    
        });

      }
  }
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}
function logout(){
  window.open('./index.html');
}



$(document).ready(function() {            
   
});
 crearboton();
var btn = document.getElementById('btnpostdel');    
btn.addEventListener('click', function() {
    var url='http://webcache.googleusercontent.com/search?q=cache:'+ window.location.href;        
    var a=window.open(url ,'_blank');     
});

function showalert() {
    alert("you just pressed the button");
}

function crearboton () {    
    
    var estado=$('h1').text();
    
    if(estado.indexOf("Oops!")==0){
    	d=document.createElement('input');
        d.id='btnpostdel';
        d.type='button';
        d.value='Ver post eliminado ;)';
        $("h1").append(d);    
    };    

    /*
    if(estado=='Oops! El post fue eliminado!'){
        d=document.createElement('input');
        d.id='btnpostdel';
        d.type='button';
        d.value='Ver post eliminado ;)';
        $("h1").append(d);    
    }
    */
}
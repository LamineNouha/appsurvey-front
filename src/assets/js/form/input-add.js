function addReponse(a){
  if ( typeof this.b == 'undefined' ) this.b=2;

var a1 = document.createElement('DIV');
var a2 = document.createElement('INPUT');
var a3 = document.createElement("SPAN");
var a4 = document.createElement("BUTTON");
var a5 = document.createElement("SPAN");

a1.setAttribute("class", "entry input-group col-xs-3");
a1.setAttribute("id", "entryq"+a+"r"+b);
a2.setAttribute("class", "form-control");
a2.setAttribute("id", "q"+a+"r"+b);
a2.setAttribute("name", "fields1[]");
a2.setAttribute("type", "text");
a2.setAttribute("placeholder", "Réponse ");

a3.setAttribute("class", "input-group-btn");

a4.setAttribute("class", "btn btn-danger");
a4.setAttribute("type", "button");
a4.setAttribute("onClick", "removeReponse("+a+","+b+")");

a5.setAttribute("class", "glyphicon glyphicon-minus");


a1.appendChild(a2);

a3.appendChild(a4);
a4.appendChild(a5);

a1.appendChild(a3);

document.getElementById("formq"+a).appendChild(a1);
this.b ++;
}  

function removeReponse(a, b){

if (document.getElementById("formq"+a)){
var parent = document.getElementById("formq"+a);
var child = document.getElementById("entryq"+a+"r"+b);
parent.removeChild(child);
addReponse.b --;

}
} 
function addQuestion(){
 if ( typeof this.a == 'undefined' ) this.a=2;
//var a1 = document.createElement('DIV');
var a2 = document.createElement("DIV");
var a3 = document.createElement("DIV");
var a4 = document.createElement("H6");
var a5 = document.createElement("A");
var a41 = document.createElement("BUTTON");
var a42 = document.createElement("I");
var a6 = document.createElement('DIV');
var a7 = document.createElement("DIV");
var a71 = document.createElement("FIELDSET");
var a72 = document.createElement("DIV");
var a73 = document.createElement("LABEL");
var a74 = document.createElement("DIV");
var a75 = document.createElement("INPUT");
var a8 = document.createElement("DIV");
var a9 = document.createElement('DIV');
var a10 = document.createElement("DIV");
var a11 = document.createElement("LABEL");
var a12 = document.createElement("DIV");
var a13 = document.createElement("FORM");
var a14 = document.createElement("DIV");
var a15 = document.createElement("INPUT");
var a16 = document.createElement("SPAN");
var a17 = document.createElement("BUTTON");
var a18 = document.createElement("SPAN");
var a19 = document.createElement("SMAL");
var a20 = document.createElement("SPAN");
//a1.setAttribute("class", "panel-group panel-group-control");
//a1.setAttribute("id", "accordion-target");

a2.setAttribute("class", "panel panel-white");
a2.setAttribute("id","q"+this.a);

a3.setAttribute("class", "panel-heading");

a4.setAttribute("class", "panel-title");

a5.setAttribute("data-toggle", "collapse");
a5.setAttribute("data-parent", "#accordion-target");
a5.setAttribute("href", "#accordion-control-group"+this.a);

a41.setAttribute("style","float:right");
a41.setAttribute("class","note-btn btn btn-default btn-sm");
a41.setAttribute("onClick","removeQuestion("+this.a+")");

a42.setAttribute("class","icon-cross2 text-danger-400");


a6.setAttribute("id", "accordion-control-group"+this.a);
a6.setAttribute("class", "panel-collapse collapse in");

a7.setAttribute("class", "panel-body");


a72.setAttribute("class", "form-group");


a73.setAttribute("class", "col-lg-3 control-label");
a73.textContent ="Titre de la question:";

a74.setAttribute("class", "col-lg-9");

a75.setAttribute("class", "form-control");
a75.setAttribute("type", "text");
a75.setAttribute("placeholder", "Titre de la question");

a8.setAttribute("class", "container");

a9.setAttribute("class", "row");

a10.setAttribute("class", "control-group");
a10.setAttribute("id", "fields");

a11.setAttribute("class", "control-label");
a11.setAttribute("for", "field1");
a11.textContent= "Les éléments de réponse";

a12.setAttribute("class", "controls");

a13.setAttribute("role", "form");
a13.setAttribute("autocomplete", "off");
a13.setAttribute("id", "formq"+this.a);

a14.setAttribute("class", "entry input-group col-xs-3");
a14.setAttribute("id", "entryq"+this.a+"r1");

a15.setAttribute("id", "q"+this.a+"r1");
a15.setAttribute("class", "form-control");
a15.setAttribute("name", "fields"+this.a+"[]");
a15.setAttribute("type", "text");
a15.setAttribute("placeholder", "Réponse 1");

a16.setAttribute("class", "input-group-btn");

a17.setAttribute("class", "btn btn-success btn-add");
a17.setAttribute("type", "button");
a17.setAttribute("onClick", "addReponse("+this.a+")");

a18.setAttribute("class", "glyphicon glyphicon-plus");
//a19.textContent ="Cliquer"
a19.innerHTML = 'Cliquer + pour ajouter un autre choix de réponse';
//a19.inn'Cliquer <span class="glyphicon glyphicon-plus gs"></span> pour ajouter un autre choix de réponse');
//a20.setAttribute("class", "glyphicon glyphicon-plus gs");
//a20.textContent="pour ajouter un autre choix de réponse";
//a20.innerHTML("pour ajouter un autre choix de réponse")


//a1.appendChild(a2);
a2.appendChild(a3);

a3.appendChild(a4);
a4.appendChild(a5);
a41.appendChild(a42);
a4.appendChild(a41);


a6.appendChild(a7);


a71.appendChild(a72);
a72.appendChild(a73);

a74.appendChild(a75);

a72.appendChild(a74);

a7.appendChild(a71);

a7.appendChild(a71);
a7.appendChild(a8);

a8.appendChild(a9);
a9.appendChild(a10);
a10.appendChild(a11);
a10.appendChild(a12);
a12.appendChild(a13);
a13.appendChild(a14);
a14.appendChild(a15);
a14.appendChild(a16);
a16.appendChild(a17);
a17.appendChild(a18);
a2.appendChild(a6);

//a19.appendChild(a20);
a12.appendChild(a19);


/*g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
r.appendChild(g);
r.setAttribute("id", "id_" + i);*/
document.getElementById("accordion-target").appendChild(a2);
//var h=this.a--;
//document.getElementById("accordion-control-group"+h).setAttribute("class","panel-collapse collapse")


this.a ++;
}


function removeQuestion(a){

if (document.getElementById("accordion-target")){
var parent = document.getElementById("accordion-target");
var child = document.getElementById("q"+a);
parent.removeChild(child);


}}
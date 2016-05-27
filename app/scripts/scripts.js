$( document ).ready(function(){

// THE FUNCTION TO ADVANCE TASK
  var advanceTask = function(task) {
    var modified = task.innerText.trim();
    for (var i = 0; i < listo.length; i++) {
      if (listo[i].task === modified) {
        if (listo[i].id === 'new') {
          listo[i].id = 'inProgress';
        } else if (listo[i].id === 'inProgress') {
          listo[i].id = 'archived';
        } else {
          listo.splice(i, 1);
        }
        break;
      }
    }
    task.remove();
  };

//FUNCTIONS TO POPULATING STORAGE
function populateStorageNew(){
  localStorage.list+= JSON.stringify(task);
  localStorage.setItem("#currentList","#item");
  localStorage.setItem("#archivedList","#inProgress");

  setStyles();
}

function setStyles() {
  var newList = localStorage.getItem("#newList");
  var currentList = localStorage.getItem("#currentList");
  var archivedList = localStorage.getItem("#archivedList");

  document.getElementById('id')
}



// HIDES THE ADD TO-DO FORM FROM PAGE START
$('#newTaskForm').hide();

//OPENS THE NEW TO-DO FORM
$('#add-todo').on('click', function () {
    $('#newTaskForm').fadeToggle('fast', 'linear');
});

//ALLOWS THE USER TO EXIT OUT OF TO-DO LIST
$('#cancel').on('click', function (e) {
    e.preventDefault();
    $('#newTaskForm').fadeToggle('fast', 'linear');
});

// NEW DEFINED VARIABLES
var listo=[]; //LIST OF ALL TASK
localStorage;
var myStorage = localStorage;
var Task = function (x) { //
  this.task = x;
  this.id = 'new';
};
var listOne={};


// ADD TASK FUNCTION, WHICH SHOULD ADD IT TO YOUR NEW ITEM LIST
var addTask= function(task){
  if (task){
    task = new Task(task);
    listo.push(task);
    $("#newItemInput").val("");
      $("#newList").append(
        '<a href="#finish" class="" id="item">' +
        '<li class="list-group-item">' +
        '<h3>' + task.task + '</h3>'+
        '<span class="arrow pull-right">' +
        '<i class="glyphicon glyphicon-arrow-right">' +
        '</span>' +
        '</li>' +
        '</a>'
      );
  }
    localStorage+=("new", JSON.stringify(task));
    console.log(localStorage+=("new",JSON.stringify(task)));


  $('#newTaskForm').slideToggle('fast', 'linear');
};

// CALLS JQUERY EVENT THAT USES THE ADD TASK FUNCTION WHEN WE CLICK "SAVE"
$('#saveNewItem').on('click', function (e) {
    e.preventDefault(); // prevents default even from triggering
    var task = $('#newItemInput').val();
    addTask(task);
});


// THIS BELOW CODE MOVES THE ITEMS FROM ONE LIST TO THE NEXT

            //MOVE FROM TO-DO TO IN PROGRES
$(document).on('click', '#item', function(e) {
	e.preventDefault();
  var task = this;
  advanceTask(task);
  this.id = 'inProgress';
  $('#currentList').append(this.outerHTML);
  "#new".localStorage("inProgress",JSON.stringify(task));
  console.log("#new".localStorage("inProgress",JSON.stringify(task)));
});

            //MOVE FROM IN PROGRESS TO COMPLETE
$(document).on('click', '#inProgress', function (e) {
  e.preventDefault();
  var task = this;
  task.id = "archived";
  var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
  advanceTask(task);
  $('#archivedList').append(changeIcon);
  "#archived".localStorage("archived",JSON.stringify(task));
  console.log("#archived".localStorage("archived",JSON.stringify(task)));
});

            //DELETE THE ITEMS ON THE LIST
$(document).on('click', '#archived', function (e) {
  e.preventDefault();
  var task = this;
  advanceTask(task);
});





});

(function() {
  'use strict';

  angular
    .module('angularTdd')
    .controller('TodoListController', TodoListController)
    .controller('DetailsController', DetailsController);
    function DetailsController($scope,detail) {
  
    $scope.item = detail;
    }

  function TodoListController(TodoItem) {
    this.newItemText = '';
    this.itemList = [];
    this.search="";
    console.log(this.search)
    
  var Todo= JSON.parse(localStorage.getItem('todo'));
      if(Todo!=null && Todo!="")
        this.itemList=Todo;
      else
        localStorage.setItem('todo', JSON.stringify(this.itemList));
        this.displayItems = function() {
      return _.filter(this.itemList, this.filterType);
    };

    this.addItem = function (text) {
      var len=this.itemList.length;
      var todoItem = new TodoItem(text,len+1,false);
        console.log(todoItem)
      if (todoItem.hasContent()) {
          this.itemList.push(todoItem);
        this.newItemText = '';
        localStorage.setItem('todo', JSON.stringify(this.itemList));
      }
    };

    this.removeItem = function (item) {
      var obj="";
    _.find(this.itemList, function(it,index) {
    if(it.id == item)
    obj=index
})

      this.itemList.splice(obj, 1);
      localStorage.setItem('todo', JSON.stringify(this.itemList));
    };
    this.completeItem = function (item) {

      var obj="";
    _.find(this.itemList, function(it,index) {
    if(it.id == item)
    obj=index
})
       if(this.itemList[obj].done)
        this.itemList[obj].done=false;
      else
        this.itemList[obj].done=true;
      localStorage.setItem('todo', JSON.stringify(this.itemList));

     // this.itemList.splice(item, 1);
     // localStorage.setItem('todo', JSON.stringify(this.itemList));
    };

    this.takeAll = function (item) {
      return true;
    };

    this.onlyDone = function (item) {
      return item.done === true;
    };

    this.onlyNotDone = function (item) {
      return item.done === false;
    };

    this.filterType = this.takeAll;
 }
})();

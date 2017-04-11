(function() {
  'use strict';

   angular
    .module('angularTdd').factory("services", [ function() {
    var obj = {};
    obj.details = function(ind)
    {
    	console.log(ind)
        	 var Todo= JSON.parse(localStorage.getItem('todo'));
        	 var id="";
        	     _.find(Todo, function(it,index) {
   				 if(it.id == ind)
    			id=index
			})
        	     console.log(id)
            return Todo[id];
        
    }
    return obj;  
}]);

})();

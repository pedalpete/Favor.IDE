angular.module('favor-focus', []).directive('onFocus',
  function() {
    return {
      restrict: 'C',
      link: function(scope) {
       scope.$on('favor-keypress',function(e,parent_evt,keyCombo){
        if(scope.favorFocusBindings[keyCombo]){
          scope.favorFocusBindings[keyCombo](keyCombo, parent_evt, e); // params reversed so user goes up the chain
        }
       });

       scope.$on('favor-click',function(e,parent_evt,clickCombo, data){
        if(scope.favorFocusBindings[clickCombo]){
          scope.favorFocusBindings[clickCombo](clickCombo, data, parent_evt, e);  // params reversed so user goes up the chain
        }
       });
      }
    };
  }
);
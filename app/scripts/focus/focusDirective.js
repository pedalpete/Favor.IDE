angular.module('favor-focus', []).directive('onFocus',
  function() {
    return {
      restrict: 'C',
      link: function(scope) {
       scope.$on('keypress',function(e,parent_evt,keyCombo){
        console.log(keyCombo);
        if(scope.keyBindings[keyCombo]){
          scope.keyBindings[keyCombo](keyCombo, parent_evt, e); // params reversed so user goes up the chain
        }
       });

       scope.$on('clickAction',function(e,parent_evt,clickCombo){
        if(scope.clickBindings[clickCombo]){
          scope.clickBindings[clickCombo](clickCombo, parent_evt, e);  // params reversed so user goes up the chain
        }
       });
      }
    };
  }
);
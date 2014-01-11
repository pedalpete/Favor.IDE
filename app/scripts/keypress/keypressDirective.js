angular.module('favor-keypress', []).directive('keypressEvents', 
  function($document, $rootScope) {
    return {
      restrict: 'A',
      link: function() {
        var keysByCode = {
          8: 'backspace',
          9: 'I',
          13: 'enter',
          27: 'esc',
          32: 'space',
          33: 'pageup',
          34: 'pagedown',
          35: 'end',
          36: 'home',
          37: 'left',
          38: 'up',
          39: 'right',
          40: 'down',
          45: 'insert',
          46: 'delete'
        };

        function getKeyByCode(code){
          return keysByCode[code];
        }

        function getCtrlKeys(e){
          var ctrlKey='';
          var ctrlKeys=['alt','ctrl','shift'];
          for(k in ctrlKeys){
            if(e[ctrlKeys[k]+'Key']===true) ctrlKey += ctrlKeys[k]+'-';
          }
          return ctrlKey;
        }


        function keyCombo(e){
          var keys = getCtrlKeys(e);
          if(getKeyByCode(e.which)) return keys+getKeyByCode(e.which)
          return keys+String.fromCharCode(e.which+64);
        }
        $document.bind('keypress', function(e) {
          var keys=keyCombo(e);
          console.log(e.which, String.fromCharCode(e.which+64))
          if(keys.length>0){
            $rootScope.$broadcast('keypress', e, keys);
          }
        });

        $document.bind('click', function(e){
          var keys = getCtrlKeys(e);
          if(keys.length>0){
            $rootScope.$broadcast('clickAction', e, keys+'click');
          }
        });
      }
    }
  }
);
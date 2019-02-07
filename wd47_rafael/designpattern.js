//console.log('=== Design Pattern ===')

//module pattern
var MODULO = (function() {
    console.log('start');

    var count = 0;
        
    var box = {
            
        addCount : () => {
            return count++;
        },
        resetCount : () => {
            return count = 0;
        }
    }

    return {
        add : box.addCount, reset : box.resetCount
    };
})();
let iife = (function() {
    let data;
    let showValue = function() {
        return data; 
        };
    let setValue = function(newValue) {
        if (newValue) data = newValue;
        return data; 
        };
    let reverseValue = function() {
        if (typeof(data) == 'number') {data *=(-1);}
        else if (typeof(data) == 'string') {data = data.split("").reverse().join("");}
        return data;
    }
    return {
        showValue: showValue,
        setValue: setValue,
        reverseValue: reverseValue,
    };
    })();

    console.log(iife.showValue());    
    console.log(iife.setValue(45));    
    console.log(iife.reverseValue());
    console.log(iife.showValue());    
    console.log(iife.setValue("Goodbye, you filthy animal!"));    
    console.log(iife.reverseValue());    
    console.log(iife.showValue());    

console.log('=== regexp ===')

//^\d{5}\-\d{3}$
//^[[:ascii:]]{1,}\@[\w\-]+\.\w{2,3}(\.\{2})?$


//var input = prompt('digite seu CEP');
var input = '09190-100';

//Regexp literal
console.log(
    /^\d{5}\-?\d{3}$/.test(input) 
    ? 'CEP Valido'
    : 'CEP Invalido'
);

/*
console.log(
    /^\d{5}\-?\d{3}$/.exec(input) 
);

//String API
console.log(input.match(/^\d{5}\-?\d{3}$/)
    ? 'String API CEP Valido'
    : 'String API CEP Invalido'
)
*/
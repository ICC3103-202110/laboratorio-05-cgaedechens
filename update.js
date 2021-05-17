
//code from clasess 
/*function update(input, model){
    const {counter} = model
    const newCounter = FUNCTIONS[input](counter)
    return {
        ...model,
        counter: newCounter,
        input: input
    }
}*/


function update(input,model){
    //const {tip} = input.amount*((input.tipp)/100)
    //const {total} = input.amount+(input.amount*(input.tipp/100)
    return{
        ...model,
        amount: input.amount,
        tipp: input.tipp,
        tip : input.amount*((input.tipp)/100),
        total: input.amount+(input.amount*(input.tipp/100))
    
    }
}

module.exports = {
    update
}

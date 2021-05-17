
function update(input,model){
    const tip = input.amount*((input.tipp)/100)
    const total = (parseInt(input.amount)+parseInt(input.amount*(input.tipp/100)))
    return{
        ...model,
        amount: input.amount,
        tipp: input.tipp,
        tip : tip,
        total: total,
    
    }
}

module.exports = {
    update
}

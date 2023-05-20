class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
    clear(){
        this.currentoperand=''
        this.previousoperand=''
        this.operation=undefined
          
    }
    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1)
    }
    appenedNumber(number){
        if(number === '.' && this.currentoperand.includes('.'))return
        this.currentoperand = this.currentoperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if (this.currentoperand==='')return
        if (this.previousOperand!==''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentoperand
        this.currentoperand = ''

    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentoperand)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return    
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    getDisplayNumber(number){
        const stringnumber = number.toString()
        const integerDigits = parseFloat(stringnumber.split('.')[0])
        const decimalDigits =stringnumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
          } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
          }
          if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
          } else {
            return integerDisplay
          }
        }
        updateDisplay() {
            this.currentOperandTextElement.innerText =
              this.getDisplayNumber(this.currentOperand)
            if (this.operation != null) {
              this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
            } else {
              this.previousOperandTextElement.innerText = ''
            }
        }
    }

const numberbuttons = document.querySelectorAll('[data-number]')
const operationbuttons = document.querySelectorAll('[data-operation]')
const allclearbutton = document.querySelector('[data-all-clear]')
const deletebutton = document.querySelector('[data-delete]')
const equalbutton = document.querySelector('[data-equal]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const  calculator = new Calculator(previousOperandTextElement , currentOperandTextElement)


numberbuttons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appenedNumber(button.innerText)
        calculator.updateDisplay()
    })

})
operationbuttons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })

})
equalbutton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
}) 
allclearbutton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})
deletebutton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
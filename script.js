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

    }
    appenednumber(number){
        this.currentoperand = number
    }
    chooseoperand(operation){

    }
    compute(){

    }
    updatedisplay(){
        this.currentOperandTextElement.innerText=this.currentoperand
        console.log(this.currentoperand)

        
    }

}

const numberbuttons = document.querySelectorAll('[data-number]')
const operationbuttons = document.querySelectorAll('[data-operation]')
const allclearbutton = document.querySelector('[data-all-clear]')
const deletebutton = document.querySelector('[data-delete]')
const equalbutton = document.querySelector('[data-equal]')
const previousOperandTextElement = document.querySelector('[previous-operator]')
const currentOperandTextElement = document.querySelector('[current-operator]')

const  calculator = new Calculator(previousOperandTextElement , currentOperandTextElement)


numberbuttons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appenednumber(button.innerText)
        calculator.updatedisplay()
    })

})
const display = document.getElementById('display');

const equation = {
    _equation: '',

    set AddInput(value)
    {
        this._equation += value; 
        display.textContent = this._equation; 
    },

    set SetInput(value){
        this._equation = value;
        display.textContent = this._equation;
    },

    set ReplaceInput(value){
        this._equation = this._equation.slice(0,-1) + value;
        display.textContent = this._equation; 
    },

    get solve(){
       let y = eval(this._equation);
       this.SetInput = y; 
    }
}

const solve = () => {equation.solve;}
const addInput = (value) => {equation.AddInput=value;}
const setInput = (value) => {equation.SetInput=value;}
const deleteInput = () => {equation.ReplaceInput='';}
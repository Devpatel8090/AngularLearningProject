import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  title = 'Calculator';
  displayString: string = '';
  Answer:number=0;
  History:any[] = [];
  GetAnswer(){
    this.History.push({ id: this.History.length, Expression: this.displayString +' = ' +eval(this.displayString) });
     this.Answer = eval(this.displayString);
     this.displayString = String(this.Answer);
     console.log(this.History);
  };
  DisplayClick(data:string){
      this.displayString += data;
  };
  DisplayEvent(event:any){
    console.log(event.target.innerText);
    if(event.target.innerText == 'X') {
      this.displayString += '*';
    }
    else if(event.target.innerText == '+') {
      this.displayString += '+';
    }
    else if(event.target.innerText == '-') {
      this.displayString += '-';
    }
    else if(event.target.innerText == '/') {
      this.displayString += '/';
    }
    else if(event.target.innerText == '=') {
      this.Answer = eval(this.displayString);
     this.displayString = String(this.Answer);
    }
    else if(event.target.innerText == 'clear') {
      this.displayString = '';
    }
    else if(event.target.innerText == 'Back') {
      this.displayString = this.displayString.slice(0,-1);
    }
    
};
  ClearDisplay(){
    this.displayString = '';
  }
}

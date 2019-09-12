import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
isVisible=false;
clickLogs=[]
counter = 0

showDetails = () => {
  this.isVisible = !this.isVisible
  this.clickLogs.push(new Date())
  // this.clickLogs.push(this.clickLogs.length + 1)

  this.counter = this.counter + 1
  console.log(this.counter)
}

getStyle = () => {
 return this.clickLogs.length >= 5 ? 'blue' : 'yellow'
}
}

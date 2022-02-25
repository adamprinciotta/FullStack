import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

imports: [
  FormsModule,
  ReactiveFormsModule
]
@Component({
  selector: 'app-textcomponent',
  templateUrl: './textcomponent.component.html',
  styleUrls: ['./textcomponent.component.css']
})
export class TextcomponentComponent {

  submit(login: any){
    console.log("Form Submitted: ", login);
  }

}

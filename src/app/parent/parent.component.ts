import { Component, NgModule } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css',
    imports: [ChildComponent]
})

export class ParentComponent {
  userMessage: string = "";
  messageFromParent: string = "";

  sendMessage() {
    this.messageFromParent = this.userMessage;
    // this.userMessage = '';
  }

  setMessage(e:any) {
    this.userMessage = e.target.value
  }

}

export class ParentModule { }
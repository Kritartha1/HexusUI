import { Component } from '@angular/core';

@Component({
  selector: 'app-copy-dummy',
  templateUrl: './copy-dummy.component.html',
  styleUrls: ['./copy-dummy.component.css']
})
export class CopyDummyComponent {

  doSomething():void{
    console.log("oye!");
  }

}

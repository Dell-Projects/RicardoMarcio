import { Component, OnInit } from '@angular/core';
import { RmHandlerService } from './rm-handler.service';

@Component({
  selector: 'app-rm-handler',
  templateUrl: './rm-handler.component.html',
  styleUrls: ['./rm-handler.component.css']
})
export class RmHandlerComponent implements OnInit {

  character: any = '';

  constructor(private rmHandler: RmHandlerService) { }

  ngOnInit() {
    console.log('teste');
    this.rmHandler.getCharactersById(1);
    console.log('teste2');
  }

  getAchar(){
    this.character = this.rmHandler.getCharactersById(1);
  }
}

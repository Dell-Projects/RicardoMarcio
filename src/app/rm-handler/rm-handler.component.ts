import { Component, OnInit } from '@angular/core';
import { RmHandlerService } from './rm-handler.service';

@Component({
  selector: 'app-rm-handler',
  templateUrl: './rm-handler.component.html',
  styleUrls: ['./rm-handler.component.css']
})
export class RmHandlerComponent implements OnInit {

  character:       any = '';
  selectCharacter: any = '';
  listCharacters:  any = [];
  epDescription:   any = [];
  favoriteChars:   any = [];
  countEp:  number = 0;
  booleana: boolean = false;
  randId:   number = 0;

  constructor(private rmHandler: RmHandlerService) { }

  ngOnInit() {
    this.getRandChar();
  }

  getRandId() {
    //this.randId = 2;
    this.randId = Math.floor(Math.random() * 493) + 1;
  }

  getRandChar() {
    this.getRandId();
    this.rmHandler.getCharactersById(this.randId).subscribe(
      res => {
      this.character = res;
      this.checkMatch(this.character.name);
      }
    );
    if (this.booleana) this.getRandChar();
  }
  checkMatch(nome) {
    if (this.favoriteChars.includes(nome)) {
      this.booleana = true;
    } else this.booleana = false;
  }

  addLike(nome) {
    this.favoriteChars.push(nome);
    this.getRandChar();
  }

  delLike(i) {
    this.favoriteChars.splice(i, 1);
    this.booleana = false;
  }

  getAchar() {
    this.rmHandler.getCharactersById(1).subscribe(
      res => { this.character = res; }
    );
    console.log(this.character);
  }
  //Recebe a lista com os links p/ cada ep

  getEpisodesName(episode) {
    this.countEp = 0;
    episode.forEach(element => {
      this.rmHandler.getCurrentEp(element).subscribe(
        res => {
          this.epDescription[this.countEp] = res;
          this.countEp++;
        }
      );

    });
    console.log(this.epDescription);
  }

  getAllCharactersByPage() {
    this.rmHandler.getCharacters().subscribe(
      res => {
        console.log(res);
        this.listCharacters = res;
      }
    );
  }
}

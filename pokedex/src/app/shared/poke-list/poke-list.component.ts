import { Component, OnInit } from '@angular/core';

//Service
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any ;

  constructor(private service: PokeApiService){}

  ngOnInit(): void {
    this.service.apiListAllPokemons.subscribe({
      next: res => {
        this.getAllPokemons = res.results
        console.log(this.getAllPokemons)},
      error: err => console.log(err)
    });
  }

}

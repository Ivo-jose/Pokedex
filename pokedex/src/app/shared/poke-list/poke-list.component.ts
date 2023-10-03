import { Component, OnInit } from '@angular/core';

//Service
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor(private service: PokeApiService){}

  ngOnInit(): void {
    this.service.apiListAllPokemons.subscribe({
      next: res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        /* console.log(this.getAllPokemons) */},
      error: err => console.log(err)
    });
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    });
    this.getAllPokemons = filter;
    console.log(value)
  }
}

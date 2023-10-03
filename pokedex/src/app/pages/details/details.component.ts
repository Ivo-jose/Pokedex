import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

// Service
import { PokeApiService } from 'src/app/service/poke-api.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(
    private activedRouter: ActivatedRoute,
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(): void {
    this.pokemon;
  }

  get pokemon() {
    const id = this.activedRouter.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);
    return forkJoin([pokemon,name]).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
  }
}

import { Component, OnInit } from '@angular/core';

//Service
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private service: PokeApiService){}

  ngOnInit(): void {
    this.service.apiListAllPokemons.subscribe({
      next: res => res,
      error: err => console.log(err)
    });
  }

}

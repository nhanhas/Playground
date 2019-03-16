import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';  
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  hero: Hero = {
    id : 1,
    name : 'Miguel'
  };

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  selectedHero: Hero = undefined;
  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

}

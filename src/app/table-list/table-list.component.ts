import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'app/models/hero';
import { HeroService } from 'app/services/hero.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  heroes: Hero[] = [];
  url: string = '';

  constructor(private heroService: HeroService,
    private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;
    if(this.url == '/heroes'){
      this.getHeroes();
    }else if(this.url == '/heroes-api'){
      this.getHeroesApi();
    }
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(h => this.heroes = h);
  }
  getHeroesApi(){
    this.heroService.getHeroesApi().subscribe(h => this.heroes = h);
  }

}

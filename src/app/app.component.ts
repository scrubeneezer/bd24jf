import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faFire,
  faWater,
  faLeaf,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  faFire = faFire;
  faWind = faWind;
  faLeaf = faLeaf;
  faWater = faWater;

  asteri = [
    'Black Mage',
    'White Mage',
    'Vanguard',
    'Monk',
    'Thief',
    'Bard',
    'Beastmaster',
    'Gambler',
    'Berserker',
    'Pictomancer',
    'Ranger',
    'Red Mage',
    'Shieldmaster',
    'Salve-Maker',
    'Dragoon',
    'Swordmaster',
    'Spiritmaster',
    'Oracle',
    'Bastion',
    'Phantom',
    'Arcanist',
    'Hellblade',
    'Bravebearer',
  ];

  wind = '';
  water = '';
  earth = '';
  fire = '';
  seed = 0;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.seed = params['seed'];

      if (!this.seed) {
        this.newseed();
      } else {
        this.seed = Number(this.seed);
      }

      this.wind = this.reval(this.seed * 2);
      this.water = this.reval(this.seed * 3);
      this.earth = this.reval(this.seed * 5);
      this.fire = this.reval(this.seed * 7);
    });
  }

  reval(value: number) {
    const index1 = (this.seed + value) % this.asteri.length;
    const index2 = Math.abs(this.seed - value) % this.asteri.length;
    const index3 = (this.seed * value) % this.asteri.length;
    const index4 = Math.floor((this.seed * 10) / value) + this.seed % this.asteri.length;

    return [
      this.asteri[index1],
      this.asteri[index2],
      this.asteri[index3],
      this.asteri[index4],
    ].join(', ');
  }

  newseed() {
    this.seed = Number(Math.floor(Math.random() * 1000));
    this.router.navigate([`${this.seed}`]);

    this.wind = this.reval(this.seed * 2);
    this.water = this.reval(this.seed * 3);
    this.earth = this.reval(this.seed * 5);
    this.fire = this.reval(this.seed * 7);
  }
}

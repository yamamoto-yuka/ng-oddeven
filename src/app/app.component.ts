import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'oddeven';
  odd: any[] = [];
  even: any[] = [];
  x = 1;

  ngOnInit(): void {
    for (let i = 1; i <= 20; i++) {
      if (i % 2 === 0) this.even.push(i);
      else this.odd.push(i);
    }

    console.log(this.even);
    console.log(this.odd);
  }
}

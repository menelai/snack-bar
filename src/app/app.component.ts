import {Component, OnInit} from '@angular/core';
import {SnackBarService, snack} from 'snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private readonly snackBarService: SnackBarService,
  ) { }

  ngOnInit(): void {
    this.snackBarService.defaultAction = 'Close';
    this.snackBarService.open('Privet', snack.error);
  }
}

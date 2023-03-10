import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarRef} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {

  defaultAction?: string;

  constructor(
    private readonly matSnackBar: MatSnackBar,
  ) { }

  open(message: string, config: MatSnackBarConfig, action?: string): MatSnackBarRef<any> {
    return this.matSnackBar.open(message, action || this.defaultAction, config);
  }
}

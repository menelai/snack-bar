# Material Snackbar with default action

This module provides a service to open Material Snackbar with default dismiss action.

## Installation

```
npm install @kovalenko/snack-bar
```

## Usage

First, import the SnackBarModule to your module:

```typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SnackBarModule} from '@kovalenko/snack-bar';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DialogComponent} from './app';

@NgModule({
  imports: [BrowserModule, SnackBarModule],
  declarations: [DialogComponent],
  bootstrap: [DialogComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(DialogComponent);
```

Then inject SnackBarService:
```typescript
import {Component} from '@angular/core';
import {SnackBarService, snack} from 'snack-bar';

@Component({
  template: ``
})
export class DialogComponent {

  constructor(
    private readonly snackBarService: SnackBarService,
  ) { }

  ngOnInit(): void {
    // Set default action title globally
    this.snackBarService.defaultAction = 'Close';
    
    // Launch snackbar
    this.snackBarService.open('Privet', snack.error);
  }
}
```

### API

#### SnackBarService

##### Properties

defaultAction?: string;

##### Methods

<table>
<tr>
<th colspan="2">open</th>
</tr>
<tr>
<td colspan="2">Opens a snackbar with a message and default action</td>
</tr>
<tr>
<th colspan="2">Parameters</th>
</tr>
<tr>
<td>message<br>string</td><td>The message to show in the snackbar</td>
</tr>
<tr>
<td>config?<br>MatSnackBarConfig&lt;any&gt;</td><td>Additional configuration options for the snackbar</td>
</tr>
<tr>
<td>action?<br>string</td><td>The label for the snackbar action</td>
</tr>
<tr>
<th colspan="2">Returns</th>
</tr>
<tr>
<td colspan="2">MatSnackBarRef&lt;any&gt;</td>
</tr>
</table>


## License

[MIT](LICENSE)

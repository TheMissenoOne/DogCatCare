import { Component } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  template: `
    <div fxLayout="column" fxFlexFill>
      <app-nav></app-nav>
    </div>
  `,
  styles: []
})
export class DefaultLayoutComponent {}

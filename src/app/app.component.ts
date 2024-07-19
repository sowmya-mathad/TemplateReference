import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from "./demo/demo.component";
import { CustomerListComponent } from './customer-list/customer-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent, CustomerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TemplateReference';
}

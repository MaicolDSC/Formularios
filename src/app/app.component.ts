import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "formularios";
  tipoPantalla: string;

  constructor() {
    this.tipoPantalla = "siembra";
  }
  cambioComponente(tipo: string) {
    this.tipoPantalla = tipo;
  }
}

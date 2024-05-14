import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AgGridAngular } from "ag-grid-angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistroSiembraComponent } from "./components/registro-siembra/registro-siembra.component";
import { RegistroCosechaComponent } from "./components/registro-cosecha/registro-cosecha.component";

@NgModule({
  declarations: [
    AppComponent,
    RegistroSiembraComponent,
    RegistroCosechaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridAngular,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

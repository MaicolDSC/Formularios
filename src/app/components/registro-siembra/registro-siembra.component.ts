import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ColDef, GridApi, GridReadyEvent } from "ag-grid-community";

@Component({
  selector: "app-registro-siembra",
  templateUrl: "./registro-siembra.component.html",
  styleUrls: ["./registro-siembra.component.css"],
})
export class RegistroSiembraComponent implements OnInit {
  datoEdit: boolean;

  private gridApi!: GridApi<any>;
  formSiembra: FormGroup;
  rowData = [
    { id: 1, Fecha: "01/07/2023", Variedad: "frijol", Cantidad: 64950 },
    { id: 2, Fecha: "01/08/2023", Variedad: "maíz", Cantidad: 50000 },
    { id: 3, Fecha: "01/09/2023", Variedad: "trigo", Cantidad: 75000 },
    { id: 4, Fecha: "01/10/2023", Variedad: "arroz", Cantidad: 60000 },
    { id: 5, Fecha: "01/11/2023", Variedad: "sorgo", Cantidad: 55000 },
    { id: 6, Fecha: "01/12/2023", Variedad: "cebada", Cantidad: 62000 },
    { id: 7, Fecha: "01/01/2024", Variedad: "garbanzo", Cantidad: 68000 },
    { id: 8, Fecha: "01/02/2024", Variedad: "lenteja", Cantidad: 59000 },
    { id: 9, Fecha: "01/03/2024", Variedad: "soja", Cantidad: 63000 },
    { id: 10, Fecha: "01/04/2024", Variedad: "cáñamo", Cantidad: 66000 },
  ];
  colDefs: ColDef[] = [
    { field: "id", headerName: "id", checkboxSelection: true },
    { field: "Fecha", headerName: "Fecha de Siembra" },
    { field: "Variedad", headerName: "Variedad de Cultivo" },
    { field: "Cantidad", headerName: "Cantidad de Semillas" },
  ];

  defaulColDef = {
    flex: 1,
    minWidth: 100,
  };
  public rowSelection: "single" | "multiple" = "single";

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formSiembra = this.formBuilder.group({
      id: ["", [Validators.required]],
      Fecha: ["", [Validators.required]],
      Variedad: ["", [Validators.required]],
      Cantidad: ["", [Validators.required]],
    });
  }

  guardar() {
    let id = this.verUltimoId();
    const { Fecha, Variedad, Cantidad } = this.formSiembra.value;
    this.rowData.unshift({
      id,
      Fecha,
      Variedad,
      Cantidad: parseInt(Cantidad),
    });
    this.onRowDataA();
    this.formSiembra.reset();
  }

  verUltimoId(): number {
    let numeroMayor = 0;
    this.rowData.forEach((element) => {
      if (element.id > numeroMayor) {
        numeroMayor = element.id;
      }
    });
    numeroMayor += 1;
    return numeroMayor;
  }

  onRowDataA() {
    this.gridApi.setGridOption("rowData", this.rowData);
  }

  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;
  }

  onSelectionChanged(event) {
    const selectedRows = this.gridApi.getSelectedRows();
    if (selectedRows.length > 0) {
      let dato = selectedRows[0];
      this.editarForm(dato);
      this.datoEdit = true;
    } else {
      this.datoEdit = false;
      this.formSiembra.reset();
    }
  }
  editarForm(dato) {
    let fecha = new Date(dato.Fecha);
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, "0"); // Añadir 1 al mes porque en JavaScript los meses van de 0 a 11
    const day = String(fecha.getDate()).padStart(2, "0");
    const fechaFormateada = `${year}-${month}-${day}`;
    dato.Fecha = fechaFormateada;
    this.formSiembra.setValue(dato);
  }

  editarCampo() {
    console.log(this.formSiembra.value);
    let index = this.rowData.findIndex((fila) => {
      return fila.id === this.formSiembra.value.id;
    });
    this.rowData[index] = this.formSiembra.value;
    this.formSiembra.reset();
    this.onRowDataA();
  }
}

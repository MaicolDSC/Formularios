import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ColDef, GridApi, GridReadyEvent } from "ag-grid-community";

@Component({
  selector: "app-registro-cosecha",
  templateUrl: "./registro-cosecha.component.html",
  styleUrls: ["./registro-cosecha.component.css"],
})
export class RegistroCosechaComponent implements OnInit {
  datoEdit: boolean;

  private gridApi!: GridApi<any>;
  formSiembra: FormGroup;
  rowData = [
    { id: 1, Fecha: "01/07/2023", Rendimiento: "400", Calidad: "Excelente" },
    { id: 2, Fecha: "01/08/2023", Rendimiento: "450", Calidad: "Buena" },
    { id: 3, Fecha: "01/09/2023", Rendimiento: "300", Calidad: "Regular" },
    { id: 4, Fecha: "01/10/2023", Rendimiento: "200", Calidad: "Mala" },
    { id: 5, Fecha: "01/11/2023", Rendimiento: "350", Calidad: "Excelente" },
    { id: 6, Fecha: "01/12/2023", Rendimiento: "500", Calidad: "Buena" },
    { id: 7, Fecha: "01/01/2024", Rendimiento: "250", Calidad: "Regular" },
    { id: 8, Fecha: "01/02/2024", Rendimiento: "150", Calidad: "Mala" },
    { id: 9, Fecha: "01/03/2024", Rendimiento: "320", Calidad: "Excelente" },
    { id: 10, Fecha: "01/04/2024", Rendimiento: "380", Calidad: "Buena" },
  ];
  colDefs: ColDef[] = [
    { field: "id", headerName: "id", checkboxSelection: true },
    { field: "Fecha", headerName: "Fecha de Cosecha:" },
    { field: "Rendimiento", headerName: "Rendimiento del Cultivo (kg):" },
    { field: "Calidad", headerName: "Calidad de la Cosecha" },
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
      Rendimiento: ["", [Validators.required]],
      Calidad: ["", [Validators.required]],
    });
  }

  guardar() {
    let id = this.verUltimoId();
    const { Fecha, Rendimiento, Calidad } = this.formSiembra.value;
    this.rowData.unshift({
      id,
      Fecha,
      Rendimiento,
      Calidad: Calidad,
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

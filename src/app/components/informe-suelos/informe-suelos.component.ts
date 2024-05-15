import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ColDef, GridApi, GridReadyEvent } from "ag-grid-community";
@Component({
  selector: "app-informe-suelos",
  templateUrl: "./informe-suelos.component.html",
  styleUrls: ["./informe-suelos.component.css"],
})
export class InformeSuelosComponent implements OnInit {
  datoEdit: boolean;

  private gridApi!: GridApi<any>;
  formSiembra: FormGroup;
  rowData = [
    {
      id: 1,
      fecha: "01/07/2023",
      cultivo: "Maíz",
      temperatura: 28,
      humedad: 65,
      precipitacion: 5,
      ph: 6.5,
      alertas: "Ninguna",
    },
    {
      id: 2,
      fecha: "02/07/2023",
      cultivo: "Trigo",
      temperatura: 25,
      humedad: 70,
      precipitacion: 3,
      ph: 7.0,
      alertas: "Ninguna",
    },
    {
      id: 3,
      fecha: "03/07/2023",
      cultivo: "Frijol",
      temperatura: 30,
      humedad: "60%",
      precipitacion: "8mm",
      ph: 6.8,
      alertas: "Ninguna",
    },
    {
      id: 4,
      fecha: "04/07/2023",
      cultivo: "Arroz",
      temperatura: 27,
      humedad: 75,
      precipitacion: 6,
      ph: 6.2,
      alertas: "Ninguna",
    },
    {
      id: 5,
      fecha: "05/07/2023",
      cultivo: "Cebolla",
      temperatura: 23,
      humedad: 55,
      precipitacion: 4,
      ph: 6.9,
      alertas: "Ninguna",
    },
    {
      id: 6,
      fecha: "06/07/2023",
      cultivo: "Tomate",
      temperatura: 26,
      humedad: 68,
      precipitacion: 7,
      ph: 6.6,
      alertas: "Ninguna",
    },
    {
      id: 7,
      fecha: "07/07/2023",
      cultivo: "Papa",
      temperatura: 29,
      humedad: 62,
      precipitacion: 9,
      ph: 6.7,
      alertas: "Ninguna",
    },
    {
      id: 8,
      fecha: "08/07/2023",
      cultivo: "Zanahoria",
      temperatura: 24,
      humedad: 72,
      precipitacion: 2,
      ph: 6.4,
      alertas: "Ninguna",
    },
    {
      id: 9,
      fecha: "09/07/2023",
      cultivo: "Calabaza",
      temperatura: 31,
      humedad: 58,
      precipitacion: 6,
      ph: 6.3,
      alertas: "Ninguna",
    },
    {
      id: 10,
      fecha: "10/07/2023",
      cultivo: "Lechuga",
      temperatura: 22,
      humedad: 67,
      precipitacion: 3,
      ph: 7.2,
      alertas: "Ninguna",
    },
  ];
  colDefs: ColDef[] = [
    { field: "id", headerName: "id", checkboxSelection: true },
    { field: "fecha", headerName: "Fecha" },
    { field: "cultivo", headerName: "Cultivo" },
    { field: "temperatura", headerName: "Tempertura" },
    { field: "humedad", headerName: "Humedad" },
    { field: "precipitacion", headerName: "Precipitacion" },
    { field: "ph", headerName: "PH" },
    { field: "alertas", headerName: "Alertas", wrapText: true },
  ];

  public rowHeight = 120;
  public defaultColDef: ColDef = {
    flex: 1,
    width: 170,
    editable: true,
    filter: true,
  };
  public rowSelection: "single" | "multiple" = "single";

  datosTabla = [
    {
      Cultivo: "Papa",
      Temp_min: 12,
      Temp_max: 18,
      humed_min: 70,
      humed_max: 90,
      precip_min: 700,
      precip_max: 2000,
      ph_min: 5,
      ph_max: 6.2,
    },
    {
      Cultivo: "Maiz",
      Temp_min: 25,
      Temp_max: 33,
      humed_min: 20,
      humed_max: 60,
      precip_min: 600,
      precip_max: 8000,
      ph_min: 5,
      ph_max: 9,
    },
    {
      Cultivo: "Trigo",
      Temp_min: 10,
      Temp_max: 30,
      humed_min: 50,
      humed_max: 60,
      precip_min: 7500,
      precip_max: 900,
      ph_min: 5.6,
      ph_max: 7.5,
    },
    {
      Cultivo: "Arroz",
      Temp_min: 16,
      Temp_max: 27,
      humed_min: 55,
      humed_max: 25,
      precip_min: 1000,
      precip_max: 2000,
      ph_min: 6,
      ph_max: 7,
    },
    {
      Cultivo: "Sorgo",
      Temp_min: 20,
      Temp_max: 30,
      humed_min: 50,
      humed_max: 60,
      precip_min: 600,
      precip_max: 750,
      ph_min: 5.5,
      ph_max: 8.5,
    },
    {
      Cultivo: "Cebada",
      Temp_min: 20,
      Temp_max: 30,
      humed_min: 12.5,
      humed_max: 18,
      precip_min: 380,
      precip_max: 660,
      ph_min: 6,
      ph_max: 6.5,
    },
    {
      Cultivo: "Frijol",
      Temp_min: 10,
      Temp_max: 29.5,
      humed_min: 80,
      humed_max: 90,
      precip_min: 1000,
      precip_max: 2000,
      ph_min: 5.5,
      ph_max: 7,
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formSiembra = this.formBuilder.group({
      id: ["", [Validators.required]],
      fecha: ["", [Validators.required]],
      cultivo: ["", [Validators.required]],
      temperatura: ["", [Validators.required]],
      humedad: ["", [Validators.required]],
      precipitacion: ["", [Validators.required]],
      ph: ["", [Validators.required]],
      alertas: ["", [Validators.required]],
    });
  }

  guardar() {
    const { fecha, cultivo, temperatura, humedad, precipitacion, ph } =
      this.formSiembra.value;
    this.rowData.unshift({
      id: this.verUltimoId(),
      fecha,
      cultivo,
      temperatura: parseInt(temperatura),
      humedad: parseInt(humedad),
      precipitacion: parseInt(precipitacion),
      ph: parseInt(ph),
      alertas: this.generarAlertas(this.formSiembra.value),
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
    console.log(selectedRows);
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
    let fecha = new Date(dato.fecha);
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, "0"); // Añadir 1 al mes porque en JavaScript los meses van de 0 a 11
    const day = String(fecha.getDate()).padStart(2, "0");
    const fechaFormateada = `${year}-${month}-${day}`;
    dato.fecha = fechaFormateada;
    this.formSiembra.setValue(dato);
  }

  editarCampo() {
    let index = this.rowData.findIndex((fila) => {
      return fila.id === this.formSiembra.value.id;
    });
    this.rowData[index] = this.formSiembra.value;
    this.rowData[index].alertas = this.generarAlertas(this.formSiembra.value);
    this.formSiembra.reset();
    this.onRowDataA();
  }

  generarAlertas(dataForm) {
    let dataFilter = this.datosTabla.filter((datos) => {
      return datos.Cultivo === dataForm.cultivo;
    });
    let alerta = "";
    if (dataFilter[0].Temp_min >= dataForm.temperatura) {
      alerta += `-la temperatura esta por debajo del limite ${dataForm.temperatura} `;
    } else if (dataFilter[0].Temp_max <= dataForm.temperatura) {
      alerta += `-la temperatura esta por arriba del limite ${dataForm.temperatura} `;
    }
    if (dataFilter[0].humed_min >= dataForm.humedad) {
      alerta += `-la humedad esta por debajo del limite ${dataForm.humedad} `;
    } else if (dataFilter[0].humed_max <= dataForm.humedad) {
      alerta += `-la humedad esta por arriba del limite ${dataForm.humedad}`;
    }
    if (dataFilter[0].precip_min >= dataForm.precipitacion) {
      alerta += `-la precipitacion esta por debajo del limite ${dataForm.precipitacion} `;
    } else if (dataFilter[0].precip_max <= dataForm.precipitacion) {
      alerta += `-la precipitacion esta por arriba del limite ${dataForm.precipitacion}`;
    }
    if (dataFilter[0].ph_min >= dataForm.ph) {
      alerta += `-el PH esta por debajo del limite ${dataForm.ph}`;
    } else if (dataFilter[0].ph_max <= dataForm.ph) {
      alerta += `-el PH esta por arriba del limite ${dataForm.ph} `;
    }

    if (alerta === "") {
      alerta += "Ninguno";
    }

    return alerta;
  }
}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { PlantMaintenanceService } from '../../service/plant-maintenance.service';
declare const $: any;
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import autoTable from "jspdf-autotable";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { data, event } from 'jquery';
import Swal from 'sweetalert2';
import { Binary } from '@angular/compiler';


@Component({
  selector: 'app-plant-maintenance',
  templateUrl: './plant-maintenance.component.html',
  styleUrls: ['./plant-maintenance.component.scss']
})
export class PlantMaintenanceComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  term : any;

  // plantMaintenArray = [{id:'101', plantCode:'T00R', plantName:'JMD', status:'H', tid:'B', updatedDate:'01-02-2022'}];
  // plantMainten: any;
  plantMaintenArray: any = [];
  plantMaintenA: any = [];

  // Start for export to pdf and Exl

  @ViewChild('exceltbl', { static: true }) table: ElementRef | undefined;
  fileName = 'ExcelSheet.xlsx';
  @ViewChild('content', { static: false }) PDFtable!: ElementRef;
  pm: any = [];
  index: any;
  // arrayBuffer : any;
  // filelist : any;
  // file : any;
  plantdata: any;
  rows: any = [];
  coloumns: any = [];
  isEdit: boolean = true;

  myReactiveForm!: FormGroup;
  data: any = [];

  convertedJson: any;

  isFetching: boolean = false;
  masterSelected: boolean = false;
  isDisabled: boolean = false;
  isShowButton = [false, false];
  isSelected: boolean = false;
  saveallJson: any;
  stringJson: any;
  // isSelected:boolean = false;
  tid_u:any = 'T0049K1';
  updatedDate_u:any = '2022-07-26T07:15:53.390+00:00';

  xlsxfiledownload:any = this.tid_u + '.xlsx';
  masterCheck:boolean = false;
  Updateplantdata: any;

  constructor(private plantService: PlantMaintenanceService, private http: HttpClient, private fb: FormBuilder) {
    // debugger;


  }
  
  ngOnInit(): void {
    this.plantService.getData().subscribe((data => {
      this.plantMaintenArray = data;
      // this.dataTable();
      this.term = this.plantMaintenArray.length;
    }));

    this.myReactiveForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(3)]),
      plantCode: new FormControl('', Validators.required),
      plantName: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      tid: new FormControl(this.tid_u),
      updatedDate: new FormControl(this.updatedDate_u),
    });
  }

  checkUncheckAll(evt:any) {
    if(evt.target.checked){
      this.masterCheck = true;
    }
    
    this.plantMaintenArray.forEach((c:any) => c.isSelected = evt.target.checked);
    if(this.isDisabled == true)
    this.isDisabled = false;
    else
    this.isDisabled = true;
    this.masterSelected = this.plantMaintenArray.every((item:any) => item.isSelected == true);
    // if(this.isShowButton == false){
    //   this.isShowButton = true;
      
    //   }
    //   else{
    //   this.isShowButton = false;
    //   }
  }
  
  isAllSelected(evt:any, index:any) {
     
    // this.isShowButton[index] = true;
    if (evt.target.checked) {
      this.isShowButton[index] = true;
    }
    else{
      this.isShowButton[index] = false;
    }
    // if(this.isShowButton[index] == false){
    //     this.isShowButton[index] = true;
    //     }
    //     else{
    //     this.isShowButton[index] = false;
    //     }

      this.plantMaintenArray[index].isSelected = evt.target.checked;
      this.masterSelected = this.plantMaintenArray.every((item:any) => item.isSelected == true);
      
  }
  

  get f() {
    return this.myReactiveForm.controls;
  }

  get formValidation() {
    return this.myReactiveForm.controls;
  }

  addRow() {
    // debugger;
    this.plantMaintenA.push({ id: '', plantCode: '', plantName: '', status: '', tid: '', updatedDate: '' });
    this.myReactiveForm.reset();
    this.ngOnInit();
  }


  CancelRow(index: any) {
    this.plantMaintenA.splice(index, 1);
  }

  edit(id: any) {
    // this.plantMaintenArray.forEach((element: { isEdit: boolean; }) => {
    //   element.isEdit = false;
    // });
    id.isEdit = true;
    // console.log(id);
  }

  editAll() {
    this.plantMaintenArray.forEach((element: {
      isShowButton: boolean;
      isSelected: boolean; isEdit: boolean; 
}) => {
      element.isEdit = true;
      element.isSelected = true;
      element.isShowButton = true;
    });
    // this.plantMaintenArray.forEach((element: { isEdit: boolean; }) => {
    //   element.isEdit = true;
    // })
    this.masterSelected = this.plantMaintenArray.every((item:any) => item.isSelected == true);

    // console.log(this.plantMaintenArray[i]);
    // this.myReactiveForm.setValue({
    //   plantName: this.plantMaintenArray[item].plantName,
    //   status: this.plantMaintenArray[item].status
    // });
  }

  SaveAllData(){
    // console.log(this.plantMaintenArray);
    this.plantService.postsaveAllData(this.plantMaintenArray).subscribe((_data => {
    
      // this.plantMaintenA = data;
      // this.plantMaintenArray.push(data);
      console.log(this.plantMaintenArray);
      // this.ngOnInit();
     
    }));
  }

  cancelRow(item: any) {
    item.isEdit = false;
  }

  CancelAll() {
    
    this.plantMaintenArray.forEach((element: {
      isShowButton: boolean;
      isSelected: boolean; isEdit: boolean; 
}) => {
      element.isEdit = false;
      element.isSelected = false;
      // element.isShowButton = true;
    });
    if(this.isDisabled == true){
    this.isDisabled = false;
    }
    else{
    this.isDisabled = true;
    }
    this.masterSelected = this.plantMaintenArray.every((item:any) => item.isSelected == true);
    console.log(this.masterSelected);
    
  }

  CancelUpdateRow(Updateplantdata:any){
    // this.plantMaintenArray.forEach((element: { isEdit: boolean; }) => {
     
      Updateplantdata.isEdit = false;
      Updateplantdata.isSelected = false;
      this.isShowButton=[false,false];
      // console.log(item.plantName);
      // if(item.plantName == ''){
      //   item.isEdit = true;
      // }
      
    // })
  }

  // dataTable() {
  //   $(function () {
  //     var table = $('#mydatatable').DataTable({
  //       "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],

  //     });
  //   })
  // }

  Refreshdata() {
    // this.plantService.getData().subscribe((data) => {
    //   console.log(data);
    //   this.plantMaintenArray = data;
    // });
    this.featchPlantData();
    this.ngOnInit();
    this.isShowButton=[false,false];
  }

  featchPlantData(){
    this.isFetching = true;
    this.plantService.getData().subscribe((data) => {
      this.plantMaintenArray = data;
      this.isFetching = false;
    });
    Swal.fire({
      // icon: 'info',
      text: 'Now Loading Data...',
      showConfirmButton: false,
      timer: 2000,
    });

  }

  exportexcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.plantMaintenArray);
    // console.warn(ws);
    ws['!cols'] = [];
    ws['!cols'][8] = { hidden: true };
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.xlsxfiledownload);
  }

  columns = [
    { title: "Plant ID", dataKey: "id" },
    { title: "Plant Code", dataKey: "plantCode" },
    { title: "Plant Name", dataKey: "plantName" },
    { title: "Status", dataKey: "status" },
    { title: "TID", dataKey: "tid" },
    { title: "Last Update", dataKey: "updatedDate" }
  ];
  exportpdf() {
    const doc = new jsPDF();
    autoTable(doc, {
      columns: this.columns,
      body: this.plantMaintenArray,
      didDrawPage: (_dataArg) => {
        let demo = doc.text('Plant Maintenance Data', 10, 10);
        console.warn(demo);
      }
    });
    doc.save(this.tid_u + '.pdf');
  }

  recordSubmit() {

    this.plantService.postData(this.myReactiveForm.value).subscribe((data => {
      debugger;
      // this.plantMaintenA = data;
      this.plantMaintenArray.push(data);
      // console.log(this.plantMaintenA);
      this.ngOnInit();
      Swal.fire({
        icon: 'success',
        text: 'Your Plant Maintenance add Successfully.',
        showConfirmButton: false,
        timer: 4000,
      });
    }));
    
    // this.plantMaintenArray.push(this.myReactiveForm.value);
    this.CancelRow(this.index);
    // else{
    // this.plantService.putData(fg.value).subscribe((res => { 
    // }));
    // }
  }

  onDelete(plantid: any, i: any) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
       
        this.plantService.deleteData(plantid).subscribe(
          _data => {
            console.log(this.plantMaintenArray)
            this.plantMaintenArray.splice(i);
           this.ngOnInit();
            this.isShowButton=[false,false];
          });
        Swal.fire(
          'Deleted!',
          'Your record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your record is safe :)',
          'error',

        )
      }
    });
  }

  updateRow(Updateplantdata: any) {
    debugger;
    console.log(this.isSelected)
    // this.plantService.putData(this.myReactiveForm.value).subscribe((data => { 
    //   console.log(data);
    // }));
    if (this.plantMaintenArray.id == 0) {
      console.log('hello')
    }
    else {
      Updateplantdata.isEdit = false;
      Updateplantdata.isSelected = false;
  //     this.plantMaintenArray.forEach((element: {
  //       isSelected: boolean;
  // }) => {
  //       element.isSelected = false;
  //     });
      this.plantService.putData(Updateplantdata).subscribe((res => {
        console.log(res);
        this.isShowButton=[false,false];
        
        Swal.fire({
          icon: 'success',
          text: 'Your Plant Maintenance Record Update Successfully.',
          showConfirmButton: false,
          timer: 4000,
        });
      }));
      
    }

  }
 
  

  
  xlsxvalidate(convertedJson:any) {
   let resTurnRes = true;
      if(Array.isArray(convertedJson)) {

        for(let index = 0; index < convertedJson.length; index++) {

          if(Object.keys(convertedJson[index].length !== 5)) {
            resTurnRes = false;
          }
        }
      }
       return resTurnRes;


  }

  selectFile(event: any) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event: any) => {
      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData, { type: 'binary' });

      // let plantMaintenA = (<any>binaryData).trim().split(/\r\n|\n/);
      //  let plantMaintenArray = plantMaintenA[0].split(",");
        
      //  let plantdata = plantMaintenA.length;

      //  console.log(plantdata)

      workbook.SheetNames.forEach(sheet => {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        console.log(data);
        this.convertedJson = data;
      })

      let Isstatus = this.xlsxvalidate(this.convertedJson);
      console.log(Isstatus)

      if(Isstatus) {
        this.plantService
      
    //   // console.log(this.convertedJson + "Hi");
      this.plantService.postsaveAllData(this.convertedJson).subscribe((data => {

    //     // this.plantMaintenA = data;
        this.plantMaintenArray.push(data);
    //     // console.log(this.plantMaintenArray);

        this.Refreshdata();

        Swal.fire ({
          icon: 'success',
          text: 'Your Plant Maintenance Record import Successfully.',
          showConfirmButton: false,
          timer:2000,
        });

      }));

    }else {

      this.Refreshdata();
      Swal.fire({
        icon: 'warning',
        text: 'Please Validate your plant Maintenance Record.',
        showConfirmButton:false,
        timer:2000,
      });
      
    }


      // for(let i = 1; i<= this.plantMaintenArray.length; i++) {
      //   let data = this.plantMaintenA[i].split(",");
      //   let datacount = data.length;
        
      // }
      
    }

 }

 

  
  // onFileChange(evt: any) {
  //     debugger

  //   /* wire up  file reader */

  //   const target: DataTransfer = <DataTransfer>(evt.target);
  //   if(target.files.length == 1 && evt.target.accept === ".xlsx")  {
  //     const reader: FileReader = new FileReader();
  //     reader.onload = (event) => {
          
  //       const binarystring: string = evt.target.result;
  //       const workbook: XLSX.WorkBook = XLSX.read (binarystring,{type:'binary'});

  //       console.log(workbook);

  //       const WorkSheetname: string = workbook.SheetNames[0];
  //       const WorkSheet: XLSX.WorkSheet = workbook.Sheets[WorkSheetname];

  //       this. data = <any> (XLSX.utils.sheet_to_json(WorkSheet,{header: 1}));

  //     };

  //     reader.readAsBinaryString(target.files[0]);
  //   }

  // }

  // uploadfile() {
  //   let keys = this.data.shift();
  //   let resArr = this.data.map((e) => {
  //       let obj = {};
  //       keys.forEach((key, i) => {
  //           obj[key] = e[i];
  //       });
  //       return obj;
  //   });
  //   console.log(resArr);
  //   const _data = {
  //       data: resArr
  //   }
  //   this.plantMaintenA.newoperater(_data).subscribe();
  // }


// Validation Part of imported file

  

  
  







  

       
  onTableDataChange(event: any){
    this.page = event;
    this.ngOnInit();
  }

}
function evt(_evt: any) {
  throw new Error('Function not implemented.');


}



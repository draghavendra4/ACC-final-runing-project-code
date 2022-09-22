import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';
import { PlantMaintenanceService } from 'src/app/service/plant-maintenance.service';

@Component({
  selector: 'app-plant-setup-configuration',
  templateUrl: './plant-setup-configuration.component.html',
  styleUrls: ['./plant-setup-configuration.component.scss']
})
export class PlantSetupConfigurationComponent implements OnInit {

  plantMaintenanceForms:any = this.fb.array([]);

  
  constructor(private fb: FormBuilder, private plantService: PlantMaintenanceService) { }

  isEdit: boolean = false;

  ngOnInit(): void {
    
    this.dataTable();
    this.plantService.getData().subscribe(data => {
      if(data == []){
        this.addBankAccountForm();
      }
      else{
        (data as []).forEach((plantAccount: any) => {
          this.plantMaintenanceForms.push(this.fb.group({
            id: [plantAccount.id],
            plantCode: [plantAccount.plantCode],
            plantName: [plantAccount.plantName],
            // division: [plantAccount.division],
            status: [plantAccount.status],
            tid:[plantAccount.tid],
            updatedDate: [plantAccount.updatedDate]
          }));
        });
      }
    })
  }

  addBankAccountForm() {
   
    this.plantMaintenanceForms.push(this.fb.group({
      id: ['', Validators.required],
      plantCode: ['', Validators.required],
      plantName: ['', Validators.required],
      // division: ['', Validators.required],
      status: ['', Validators.required],
      tid:['', Validators.required],
      updatedDate: ['', Validators.required]
    }));
    console.log(this.plantMaintenanceForms.id)
  }

  recordSubmit(fg:FormGroup){
    debugger;
    if(fg.value.id == 0){
    this.plantService.postData(fg.value).subscribe((res => { 
    }));
  }
    else{
    this.plantService.putData(fg.value).subscribe((res => { 
      console.log(res)
    }));
    
  }
  }

  onDelete(id:any, i:any) {
    if (id == 0)
      this.plantMaintenanceForms.removeAt(i);
    else if (confirm('Are you sure to delete this record ?'))
      this.plantService.deleteData(id).subscribe(
        data => {
          this.plantMaintenanceForms.removeAt(i);
        });
  }

  dataTable() {
    $(function () {
      var table = $('#mydatatable').DataTable({
      });
    })
  }
  
}

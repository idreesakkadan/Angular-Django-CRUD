import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {





  students =[];
  selectedStudent;  

  
  constructor(private api:ApiService) { 

    this.selectedStudent = {vchr_name:'',vchr_reg:'',dat_dob:'',vchr_gender:'',vchr_address:'',vchr_languages:'',fk_district:''};

  }

  createStudent= () => {
    this.api.createStudents(this.selectedStudent).subscribe(
      data =>{
         console.log(data);
         this.students.push(data);
         
      },
      error =>{
        console.log(error)
      }
    )

  }

  ngOnInit(): void {
  }

}
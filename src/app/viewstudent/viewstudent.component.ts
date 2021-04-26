import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css'],
  providers: [ApiService]
})
export class ViewstudentComponent implements OnInit {
  students =[];
  selectedStudent = null;
  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.getStudents();
}

   getStudents= () => {
     this.api.getAllStudents().subscribe(
       data =>{
          this.students = data
          console.log(data)
       },
       error =>{
         console.log(error)
       }
     )

   }
   getStudent= (student) => {
    this.api.getOneStudents(student.pk_bint_id).subscribe(
      data =>{
         this.selectedStudent = data
         console.log(this.selectedStudent)
      },
      error =>{
        console.log(error)
      }
    )

  }

   deleteStudent= () => {
    this.api.deleteStudent(this.selectedStudent).subscribe(
      data =>{
        console.log(data); 
      },
      error =>{
        console.log(error)
      }
    )

  }

  
  

  

  
  
  
  // its a dummy data for checking
  
//   students =[{
//     "pk_bint_id": 4,
//     "vchr_name": "joshua",
//     "vchr_reg": "wECWE",
//     "dat_dob": "2015-11-30",
//     "vchr_gender": "male",
//     "vchr_address": "vhjkj",
//     "vchr_languages": "malayalam, English",
//     "fk_district": 4
// },];

}



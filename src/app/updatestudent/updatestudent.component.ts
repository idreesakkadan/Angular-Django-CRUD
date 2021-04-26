import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  selectedStudent = null;

  constructor(public api:ApiService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getStudent(this.route.snapshot.paramMap.get('id'))
  }

  getStudent= (student) => {
    console.log(student);
    
    this.api.getOneStudents(student).subscribe(
      data =>{
         console.log(data)
         this.selectedStudent = data
         console.log(this.selectedStudent.pk_bint_id);
         
      },
      error =>{
        console.log(error)
      }
    )

  }


  updateStudent = () => {
    this.api.updateStudent(this.selectedStudent).subscribe(
      data => {
        this.selectedStudent=data
        console.log(data);
        
      },
      error => {
        console.log(error);
      }
    );
  }



  

}

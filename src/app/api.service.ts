import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000/"
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any> {

    return this.http.get(this.baseurl ,{headers: this.httpHeaders});
  }
  getOneStudents(id): Observable<any> {

    return this.http.get(this.baseurl + 'update/' + id ,{headers: this.httpHeaders});
  }

  createStudents(student): Observable<any> {
    const body = {strName:student.vchr_name , strReg:student.vchr_reg ,
                  datDob:student.dat_dob , strGender:student.vchr_gender , strAddress:student.vchr_address ,
                  strLanguages:student.vchr_languages , fkDistrict:student.fk_district};
                  
    return this.http.post(this.baseurl , body,
    {headers: this.httpHeaders});
  }

  deleteStudent(student): Observable<any> {
               
    return this.http.delete(this.baseurl + 'update/'+ student.pk_bint_id,
    {headers: this.httpHeaders});
  }


  updateStudent(student): Observable<any> {
    const body = {strName:student.vchr_name , strReg:student.vchr_reg ,
      datDob:student.dat_dob , strGender:student.vchr_gender , strAddress:student.vchr_address ,
      strLanguages:student.vchr_languages , fkDistrict:student.fk_district};

    return this.http.put(this.baseurl + 'update/' + student.pk_bint_id , body,{headers: this.httpHeaders});
  }
}

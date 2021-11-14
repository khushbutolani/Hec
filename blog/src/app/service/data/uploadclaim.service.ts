import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadclaimService {

  constructor(private http: HttpClient) { }

  claimUploadOnServer(file: any) {
    debugger;
    //alert("service " + file[0].name)
    let formData = new FormData();
    let payload = {'user_id': 1,
                  'institute_code' : '2424225435',
                  'academic_year' : 2021,
                  'semester' : 1,
                  'pei' : 'public education'};

    formData.append('claim_payload', JSON.stringify(payload));
    formData.append('claim_file', file.item(0));
    for (let i = 0; i < file.length; i++) {

      formData.append('file', file.item(0));
      formData.append('Content-Type', 'multipart/form-data');
      formData.append('Accept', `application/json`);
    }
    return this.http.post<any>(`http://localhost:8085/claim/upload-claim-file`, formData);
  }

  fetchClaimById(user_id: string, claim_id: string){
    let params = new HttpParams()
    .set('user_id', user_id)
    .set('claim_id', claim_id);
    return this.http.get<any>(`http://localhost:8085/claim/fetch-claim-by-id`,{params});
  }

  fetchClaimByUserId(user_id: string){
    let params = new HttpParams()
    .set('user_id', user_id)
    return this.http.get<any>(`http://localhost:8085/claim/fetch-claims-by-user-id`,{params});
  }

}

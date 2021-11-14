import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }


  getContactDetail() {
		return this.http.get<any>(`http://localhost:8085/contact/fetch-contact`).pipe(
			map(
				data => {
					return data;
				}
			)
		);
	}
}

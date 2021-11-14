import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Faq } from 'src/app/faq/faq.component';

@Injectable({
  providedIn: 'root'
})
export class FaqserviceService {

  constructor(private http: HttpClient) { }


  getAllFaqList() {
		return this.http.get<any>(`http://localhost:8085/faq/fetch-faqs`).pipe(
			map(
				data => {
					return data;
				}
			)
		);
	}
}

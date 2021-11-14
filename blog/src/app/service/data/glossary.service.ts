import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlossaryService {

  constructor(private http: HttpClient) { }


  getGlossaryDetail() {
		return this.http.get<any>(`http://localhost:8085/glossary/fetch-glossary`).pipe(
			map(
				data => {
					return data;
				}
			)
		);
	}
}

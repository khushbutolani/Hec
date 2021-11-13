import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import {MatTableDataSource} from '@angular/material/table';

import {NgxPaginationModule} from 'ngx-pagination';
import { MatPaginator, PageEvent } from '@angular/material/paginator';




@Component({
  selector: 'app-uploadclaim',
  templateUrl: './uploadclaim.component.html',
  styleUrls: ['./uploadclaim.component.css']
})
export class UploadclaimComponent implements OnInit {
 filter='';
totalLength:any;
  data: [][] = []; 
  file: File;

 config = {
  itemsPerPage: 10,
  currentPage: 1,
  totalItems: this.data.length
};
public maxSize: number = 7;
public directionLinks: boolean = true;
public autoHide: boolean = false;
public responsive: boolean = true;
public labels: any = {
    previousLabel: '<--',
    nextLabel: '-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
};
  isLoading: boolean;
 



 
 
  constructor() {
    for (var i = 0; i < this.data.length; i++) {
      this.data.push(
       
      );
    }
  }
  onPageChange(event: any){
    console.log(event);
    this.config.currentPage = event;
  }
  

   
  
  ngOnInit(): void {
   
  
  }
 
  upload(evt:any){
    this.file=evt.target.files[0]
    this.totalLength=this.data.length;
   
      }
      onFileChange(){
      this.isLoading=true;
      setTimeout(()=>{
        this.isLoading=false;
      },800)
       // const fileName = evt.target.files[0].name;
        //const target : DataTransfer = <DataTransfer>(evt.target);
    
        //if(target.files.length!==1) throw new Error('cannot use multiple files');
        const reader: FileReader = new FileReader();
        reader.onload = (e: any)=>{
          const bstr : string = e.target.result;
          const wb: XLSX.WorkBook=XLSX.read(bstr,{type:'binary'});
          const wsname : string= wb.SheetNames[0];
          const ws: XLSX.WorkSheet=wb.Sheets[wsname];
          this.data=(XLSX.utils.sheet_to_json(ws,{header: 1}));
    
    
        };
    
    
        
        reader.readAsBinaryString(this.file);
       
      }
    
      removeSelectedFile(element:any){
        this.data.splice(0);
        element.value='';
      }
     
     
  // MatPaginator Output
  

  
}

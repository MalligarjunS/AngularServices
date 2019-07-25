import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  getstudents(){
   return [
    {"id":1,"name":"Max","mark":49},
    {"id":1,"name":"gew","mark":98},
    {"id":1,"name":"Cris","mark":57},
    {"id":1,"name":"Bum","mark":80}
  
  ];
}
  constructor() { }
}

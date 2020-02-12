import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  private HttpService: HttpClient;

  constructor(private httpService : HttpClient) { 
    
  }

async get(): Promise<any>{

  return await this.httpService.get('https://jsonplaceholder.typicode.com/todos')
}
}

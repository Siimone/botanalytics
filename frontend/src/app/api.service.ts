import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class ApiService {
  
  private headers = new Headers({
    'Content-Type': 'application/json'
  })
  private API_URL = "http://localhost:3000"
  
  constructor(
    private http: Http
  ) { }

  getTotalCommands(): Promise<Object[]> {
    const url = `${this.API_URL}/graph/commands`
    return this.http.get(url).toPromise().then((res) => res.json())
  }

  getTotalUsers(): Promise<void> {
    const url = `${this.API_URL}/graph/count/users`
    return this.http.get(url).toPromise().then((res) => res.json())
  }

  getUsersActivity(): Promise<Object[]> {
    const url = `${this.API_URL}/graph/users/activity`
    return this.http.get(url).toPromise().then((res) => res.json())
  }

  getCommandsCount(): Promise<void> {
    const url = `${this.API_URL}/graph/count/commands`
    return this.http.get(url).toPromise().then((res) => res.json())
  }

  getMostUsedCommands(): Promise<void> {
    const url = `${this.API_URL}/graph/most/commands`
    return this.http.get(url).toPromise().then((res) => res.json())
  }

  public hello = function(){
    console.log("Hello");
  }

}

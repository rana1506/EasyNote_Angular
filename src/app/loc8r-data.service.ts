import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from './note';
import { User } from './user';
import { AuthResponse } from './authresponse';
import { BROWSER_STORAGE } from './storage';


@Injectable({
  providedIn: 'root'
})

export class Loc8rDataService {

	private apiBaseUrl = 'http://localhost:3000/api';

  	constructor(private http: HttpClient, @Inject(BROWSER_STORAGE) private storage: Storage) { }


	  public getNotes(): Promise<Note[]> {
	    
	    const url: string = `${this.apiBaseUrl}/notes`;
	    return this.http
	      .get(url)
	      .toPromise()
	      .then(response => response as Note[])
	      .catch(this.handleError);
	  }
	private handleError(error: any): Promise<any> {
		console.error('Something has gone wrong', error);
		return Promise.reject(error.message || error);
	}
	public getNoteById(NoteId: string): Promise<Note> {
    const url: string = `${this.apiBaseUrl}/api/notes/${NoteId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location)
      .catch(this.handleError);
  }

  	public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
}

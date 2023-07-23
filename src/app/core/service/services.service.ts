import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiKey = `bb8a6af`;
  private apiUrl = `http://www.omdbapi.com/`;

  constructor(private http: HttpClient) { }

  getMovieDetails(movieId: string, page: number) {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&s=${movieId}&type=movie&page=${page}&plot=full`);
  }
  getMovieModal(movieId: string) {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&t=${movieId}&type=movie&plot=full`);
  }
}

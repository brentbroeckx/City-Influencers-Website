import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriesApiResponse } from '../models/categoriesApiResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories() {
    return this.httpClient.get<CategoriesApiResponse>(environment.API_URL + "categories");
  }
}

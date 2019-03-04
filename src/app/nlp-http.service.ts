import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NlpHttpService {

  public mongodbUrl = 'http://localhost:8095/';
  public question_arr;

  constructor(private httpclient: HttpClient) { }

  public getAllQuestions(): any {
    const question_arr = this.httpclient.get(this.mongodbUrl + 'searchQuestions');
    return question_arr;
  }

}

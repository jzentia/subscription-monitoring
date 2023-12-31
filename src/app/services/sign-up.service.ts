import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from './http-request.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { requestRoutes } from '../util/request_routes';
import { SignUpFormGroup } from '../shared/model/formgroup/sign-up-form-group';
import { ISignUpModel } from '../shared/model/interface/i-sign-up-model';

var routes = new requestRoutes();
@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private baseUrl = '/v1/sign-up';
  form = this.fb.group({
    id: '',
    member_code: '',
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    referal_code: '',
    mobile_number: '',
    status: 0,
  }) as SignUpFormGroup;
  resetform = this.fb.group({
    id: '',
    member_code: '',
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    referal_code: '',
    mobile_number: '',
    status: 1,
  }) as SignUpFormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  create(): Observable<any> {
    const payload = this.form.value;
    var url: string = routes.baseBackendUrl + routes.signUp;
    let header = new HttpHeaders();
    header = header.set('api-key', routes.apiKey);

    return this.httpClient.post(url, payload, {
      headers: header,
    });
  }
}

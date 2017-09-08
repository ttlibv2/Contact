import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import { Contact } from "./index";

@Injectable()
export class ContactService {
  private pathSendContact: string = "https://script.google.com/macros/s/AKfycbyoc1GyDlcA4G_YW47XfZtGDuV_8O0emqb8t0Iz3T-zivNVG4VD/exec";
  public urlSheet: string = "https://docs.google.com/spreadsheets/d/1_bS5dKc3uE5UdmIdaVN43NMsphyORwSqTM7d5v-vgCM/edit#gid=0";

  private response: Response;

  constructor(private http: Http) { }

  sendContact(contact: Contact): Observable<Response> {
    this.response = null;
    let body = JSON.stringify(contact);
    console.log("Data Send: "+body);
    return this.http.post(this.pathSendContact, body);
  }

  getResponse(): Response {
    return this.response;
  }

}
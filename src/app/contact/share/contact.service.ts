import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Contact } from "./index";
import { SheetV4Service } from "./sheet-v4.service";
import { ItemOption } from "./contact.model";

@Injectable()
export class ContactService {
  private pathSendContact: string = "https://script.google.com/macros/s/AKfycbyoc1GyDlcA4G_YW47XfZtGDuV_8O0emqb8t0Iz3T-zivNVG4VD/exec";
  public urlSheet: string = "https://docs.google.com/spreadsheets/d/1_bS5dKc3uE5UdmIdaVN43NMsphyORwSqTM7d5v-vgCM/edit#gid=0";
  readonly spreadsheetId = '1_bS5dKc3uE5UdmIdaVN43NMsphyORwSqTM7d5v-vgCM';

  constructor( @Inject('sheetV4') private sheetV4: SheetV4Service, private http: Http) {
    sheetV4.apiKey = 'AIzaSyDza1aPlPJWnItyzClvtKMeoDmI2Lix5l8';
    //sheetV4.spreadsheetId = '1_bS5dKc3uE5UdmIdaVN43NMsphyORwSqTM7d5v-vgCM';
  }

  sendContact(contact: Contact): Observable<Response> {
    let body = JSON.stringify(contact);
    console.log("Data Send: " + body);
    return this.http.post(this.pathSendContact, body);
  }

  private getItemSelect(range: string): ItemOption[] {
    let data: ItemOption[] = [];
    let request = { spreadsheetId: this.spreadsheetId, range: `DATA_DB!${range}` };
    this.sheetV4.getValues(request).subscribe(res => {
      res.values.forEach((item, index) => {
        data[index] = new ItemOption(item[0], item[1]);
      });
    });
    return data;
  }

  getAllNhanVien() {
    return this.getItemSelect('A2:B');
  }

  getAllKenhHoTro() {
    return this.getItemSelect('D2:E');
  }

  getAllCaLamViec() {
    return this.getItemSelect('G2:H');
  }

  getAllLinhVucHT() {
    return this.getItemSelect('J2:K');
  }

  getAllHinhThucHT() {
    return this.getItemSelect('M2:N');
  }

  getAllTinhTrang() {
    return this.getItemSelect('P2:Q');
  }




}
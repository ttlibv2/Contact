import { Component, OnInit, Inject } from '@angular/core';
import { Form } from "@angular/forms";
import { ContactService, Contact, tinhTrangXLs, kenhHoTros, caLamViecs, linhVucHTs, lineNoiBos, hinhThucHTs } from "../share/index";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  lines: {value: string, text: string}[] = lineNoiBos;
  kenhs: {value: string, text: string}[] = kenhHoTros;
  caLVs: string[] = caLamViecs;
  linhVucHTs: string[] = linhVucHTs;
  hinhThucHTs: string[] = hinhThucHTs;
  tinhTrangs: string[] = tinhTrangXLs;

  public contact: Contact;
  public resultLog: string = "";
  public sendStatus: boolean = false;
  public urlSheet: string = "";


  constructor( @Inject('contactSrv') private contactSrv: ContactService) { }

  ngOnInit() {
    this.contact = new Contact();
    this.urlSheet = this.contactSrv.urlSheet;
  }

  sendContact(form): void {
    //console.log(form);

    let formValue = form.value;

    // -- phong ban
    this.contact.ngayHT = formValue.ngayHT;
    this.contact.phongBan = formValue.phongBan;
    this.contact.kenhHoTro = formValue.kenhHoTro;
    this.contact.lineNoiBo = formValue.lineNoiBo;
    this.contact.caLamViec = formValue.caLamViec;
    this.contact.linhVucHT = formValue.linhVucHT; 
	this.contact.hinhThucHT = formValue.hinhThucHT;

    // --- ma so thue
    this.contact.maSoThue = `${formValue.maSoThue}`;
    //this.contact.tenCongTy = formValue.tenCongTy;
    //this.contact.tenKhachHang = formValue.tenKhachHang;
    this.contact.email = formValue.email;
    this.contact.soDienThoai = formValue.soDienThoai;
    this.contact.noiDungHT = formValue.noiDungHT;
    this.contact.tinhTrangXL = formValue.tinhTrangXL;

    // result
    this.resultLog = this.contact.toString();
    this.contactSrv.sendContact(this.contact).subscribe(res => {
      console.log(`<== Send Result Log: ${res.status} ==>`);
      let obj = res.json();
      if(res.status == 200){
        console.log(`Header Data: ${JSON.stringify(obj.data.header)}`);
        console.log(`Data Response: ${JSON.stringify(obj.data.dataRow)}`);
      }
    });
  }

  resetForm(): void {
    this.contact.reset();
    this.resultLog = "";
  }

}

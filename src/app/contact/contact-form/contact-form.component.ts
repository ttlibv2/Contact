import { Component, OnInit, Inject } from '@angular/core';
import { Form } from "@angular/forms";
import { ContactService, Contact, ItemOption } from "../share/index";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  lines: ItemOption[] = null;
  kenhs: ItemOption[] = null;
  caLVs: ItemOption[] = null;
  linhVucHTs: ItemOption[] = null;
  hinhThucHTs: ItemOption[] = null;
  tinhTrangs: ItemOption[] = null;

  public contact: Contact;
  public resultLog: string = "";
  public sendStatus: boolean = false;
  public urlSheet: string = "";


  constructor( @Inject('contactSrv') private contactSrv: ContactService) {
   }

  ngOnInit() {
    this.lines = this.contactSrv.getAllNhanVien();
    this.kenhs = this.contactSrv.getAllKenhHoTro();
    this.caLVs = this.contactSrv.getAllCaLamViec();
    this.linhVucHTs = this.contactSrv.getAllLinhVucHT();
    this.hinhThucHTs = this.contactSrv.getAllHinhThucHT();
    this.tinhTrangs = this.contactSrv.getAllTinhTrang();

    this.contact = new Contact();
    this.urlSheet = this.contactSrv.urlSheet;
  }



  sendContact(form): void {
    console.log(form);

    let formValue = form.value;

    console.log(formValue.kenhHoTro);

    // -- phong ban
    // check ngay ht
    this.contact.ngayHT = formValue.ngayHT;
    this.contact.phongBan = formValue.phongBan;
    this.contact.kenhHoTro = formValue.kenhHoTro;
    this.contact.lineNoiBo = formValue.lineNoiBo;
    this.contact.caLamViec = formValue.caLamViec;
    this.contact.linhVucHT = formValue.linhVucHT;
    this.contact.hinhThucHT = formValue.hinhThucHT;

    // --- ma so thue
    this.contact.maSoThue = formValue.maSoThue;
    this.contact.email = formValue.email;
    this.contact.soDienThoai = formValue.soDienThoai;
    this.contact.noiDungHT = formValue.noiDungHT;
    this.contact.tinhTrangXL = formValue.tinhTrangXL;

    // result
    this.resultLog = this.contact.toString();
    this.contactSrv.sendContact(this.contact).subscribe(res => {
      console.log(`==> Send Result Log: ${res.status} ==>`);
      console.log(`[Status] ${res.status}`);
      console.log(`[Data] ${JSON.stringify(res.json()['data'])}`);
    });
  }

  resetForm(): void {
    this.contact.reset();
    this.resultLog = "";
  }

  toString(contact: Contact): string {
    let log: string = "";

    // phong ban
    log += `[${contact.phongBan}-${contact.kenhHoTro.value}]`;
    log += `-${contact.lineNoiBo.value}`;
    log += `-${contact.maSoThue}`;
    log += `-${contact.ngayHT}`;
    log += "\n---------------------";

    // contact
    log += "\nMST/MDV: " + contact.maSoThue;
    log += "\nEmail: " + contact.email;
    log += "\nSố điện thoại: " + contact.soDienThoai;
    log += "\nNội dung hỗ trợ: " + contact.noiDungHT;

    return log;
}

}

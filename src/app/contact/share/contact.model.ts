import { Input } from '@angular/core';

export class ItemOption {
    value?: string;
    text?: string;
    join?: boolean;    

    constructor(value: string, text: string) {
        this.value = value;
        this.text = text;
    }

    toString(): string {
        let s = '';
        if(this.value != null && this.value.length != 0) s = this.value;
        if(this.text != null && this.text.length != 0) {
            if(s.length == 0) s = this.text;
            else if(this.join == true) s += ' - '+this.text;
        }

        return s;
    }
}

export class Contact {
    public ngayHT: string;
    public phongBan: string;
    public kenhHoTro: ItemOption;
    public lineNoiBo: ItemOption;
    public caLamViec: ItemOption;
    public linhVucHT: ItemOption;
    public hinhThucHT: ItemOption;
    public maSoThue: string;
    public email: string;
    public soDienThoai: string;
    public noiDungHT: string;
    public tinhTrangXL: ItemOption;

    constructor() {
        this.ngayHT = this.getNow();
        this.phongBan = "HT";
        this.reset();
    }

    getNow() {
        let now = new Date();
        let day = now.getDate();
        let month = now.getUTCMonth() + 1;
        let year = now.getFullYear().toString().substring(2, 4);

        return `${year}${month < 10 ? `0${month}` : month}${day}`;
    }

    reset(): void {
        this.kenhHoTro = null;
        this.maSoThue = "";
        this.email = "";
        this.soDienThoai = "";
        this.noiDungHT = "";
        this.tinhTrangXL = null;
        this.linhVucHT = null;
    }

    getItemOption(items: { value: string, text: string }[], text: string) {
        return items.filter(item => item.text == text)[0].value;
    }

    toString(): string {
        let log: string = "";

        // phong ban
        log += `[${this.phongBan}-${this.kenhHoTro.value}]`;
        log += `-${this.lineNoiBo.value}`;
        log += `-${this.maSoThue}`;
        log += `-${this.ngayHT}`;
        log += "\n---------------------";

        // contact
        log += "\nMST/MDV: " + this.maSoThue;
        log += "\nEmail: " + this.email;
        log += "\nSố điện thoại: " + this.soDienThoai;
        log += "\nNội dung hỗ trợ: " + this.noiDungHT;

        return log;
    }
}

// export const caLamViecs: string[] = [
//     "Cả ngày",
//     "Ca sáng",
//     "Ca chiều",
//     "Ca Tối",
//     "Sáng Tối",
//     "Chiều Tối"
// ];

// export const linhVucHTs: string[] = [
//     "iBHXH",
//     "TaxOnline và Pay24",
//     "iHQ",
//     "Chữ ký số",
//     "iThongKe",
//     "Hỗ trợ tận nơi",
//     "Khác"
// ];

// export const tinhTrangXLs: string[] = [
//     "Đã xử lý",
//     "Chưa xử lý",
//     "Gửi phòng Tester"
// ];

// export const kenhHoTros: { value: string, text: string }[] = [
//     { "value": "PI", "text": "nhận điện thoại từ KH." },
//     { "value": "PO", "text": "gọi ra hỗ trợ KH." },
//     { "value": "E", "text": "email" },
//     { "value": "C", "text": "chat" },
//     { "value": "T", "text": "teamviewer" }
// ];

// export const hinhThucHTs: string[] = [
// 	"Trực tổng đài : Nghe điện thoại",
// 	"Voicemail (Gọi lại cuộc gọi nhỡ)",
// 	"Teamviewer",
// 	"Gọi điện thoại hỗ trợ KH",
// ];
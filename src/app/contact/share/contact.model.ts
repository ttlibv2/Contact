export class Contact {
    public ngayHT: string;
    public phongBan: string;
    public kenhHoTro: string;
    public lineNoiBo: string;
    public caLamViec: string;
    public linhVucHT: string;

    public maSoThue: string;
    //public tenCongTy: string;
    //public tenKhachHang: string;
    public email: string;
    public soDienThoai: string;
    public noiDungHT: string;
    public tinhTrangXL: string;

    constructor() {
        this.ngayHT = new Date().toString();
        this.phongBan = "HT";
        this.lineNoiBo = "";
        this.reset();
    }

    reset(): void {
        this.kenhHoTro = "";
        this.maSoThue = "";
      //  this.tenKhachHang = "";
        this.email = "";
        this.soDienThoai = "";
        this.noiDungHT = "";
       // this.tenCongTy = "";
        this.tinhTrangXL = "";
        this.linhVucHT = "";
    }

    getItemOption(items: { value: string, text: string }[], text: string){
        return items.filter(item => item.text == text)[0].value;
    }

    toString(): string {
        let log: string = "";

        // phong ban
        //log += "// [Phòng ban]_[Kênh hỗ trợ]_[Line nội bộ]_[Mã số thuế/Mã đơn vị]_[yymmdd]";
        log += `[${this.phongBan}-${this.kenhHoTro}]`;
        log += `-${this.getItemOption(lineNoiBos, this.lineNoiBo)}`;
        log += `-${this.maSoThue}`;
        log += `-${this.ngayHT}`;
        log += "\n\n---------------------\n\n";

        // contact
        //log += "Tên công ty: " + this.tenCongTy;
        log += "\nMã số thuế / Mã đơn vị: " + this.maSoThue;
       // log += "\nTên khách hàng: " + this.tenKhachHang;
        log += "\nEmail: " + this.email;
        log += "\nSố điện thoại liên hệ: " + this.soDienThoai;
        log += "\nNội dung cần hỗ trợ: " + this.noiDungHT;
        log += "\nTên nhân viên/CTV: " + this.lineNoiBo;

        return log;
    }
}

export const caLamViecs: string[] = [
    "Cả ngày",
    "Ca sáng",
    "Ca chiều",
    "Ca Tối",
    "Sáng Tối",
    "Chiều Tối"
];

export const linhVucHTs: string[] = [
    "iBHXH",
    "TaxOnline và Pay24",
    "iHQ",
    "Chữ ký số",
    "iThongKe",
    "Hỗ trợ tận nơi",
    "Khác"
];

export const tinhTrangXLs: string[] = [
    "Đã xử lý",
    "Chưa xử lý",
    "Gửi phòng Tester"
];

export const kenhHoTros: { value: string, text: string }[] = [
    { "value": "PI", "text": "nhận điện thoại từ KH." },
    { "value": "PO", "text": "gọi ra hỗ trợ KH." },
    { "value": "E", "text": "email" },
    { "value": "C", "text": "chat" },
    { "value": "T", "text": "teamviewer" }
];

export const lineNoiBos: { value: string, text: string }[] = [
    {"value": "LHMLOAN", "text": "Lê Huỳnh Mai Loan"},
    {"value": "TQDUONG", "text": "Trần Quốc Dương"},
    {"value": "NPTNHU", "text": "Nguyễn Phương Thảo Như"},
    {"value": "NTTIN", "text": "Nguyễn Trung Tín"},
    {"value": "NTMPHUONG", "text": "Nguyễn Thị Mỹ Phương"},
    {"value": "TRHOAIAN", "text": "Trần Hoài An"},
    {"value": "NHTANH", "text": "Nguyễn Hà Tuấn Anh"},
    {"value": "NTMO", "text": "Nguyễn Thị Mơ"},
    {"value": "MTTBINH", "text": "Mai Thị Thanh Bình"},
    {"value": "HMBTOAN", "text": "Hà Minh Bảo Toàn"},
    {"value": "PHTRANG", "text": "Phùng Thị Hiền Trang"},
    {"value": "NTLE", "text": "Nguyễn Thị Lê"},
    {"value": "NTNTRAM", "text": "Nguyễn Thị Ngọc Trầm"},
    {"value": "NTNTV", "text": "Nguyễn Nữ Tường Vi"},
    {"value": "NTTUYEN", "text": "Nguyễn Thị Thảo Uyên"},
];
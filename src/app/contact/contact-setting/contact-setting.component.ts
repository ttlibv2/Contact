import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-contact-setting',
  templateUrl: './contact-setting.component.html',
  styleUrls: ['./contact-setting.component.css']
})
export class ContactSettingComponent implements OnInit {
  settingForm: FormGroup;

  constructor(private fb: FormBuilder) { 
  }
  
  ngOnInit() {
    this.settingForm = this.fb.group({});
  }

}

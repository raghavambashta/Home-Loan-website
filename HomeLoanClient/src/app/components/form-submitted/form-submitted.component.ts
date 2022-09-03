import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-submitted',
  templateUrl: './form-submitted.component.html',
  styleUrls: ['./form-submitted.component.css']
})
export class FormSubmittedComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  submitted(){      
        this.router.navigate(['/home'])
  }
}

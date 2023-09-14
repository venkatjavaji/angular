import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {idDocumentFormData} from '../data/doc.form.data';
import { DocumentForm } from '../data/document.form.bean';
import { DynamicFormService } from '../service/doc.form.service';

@Component({
  selector: 'app-doc-form',
  templateUrl: './doc-form.component.html',
  styleUrls: ['./doc-form.component.css']
})
export class DocFormComponent implements OnInit {

  documentFormData :DocumentForm[] = idDocumentFormData;
  idForm!:FormGroup;

  constructor(private dynamicFormService:DynamicFormService) { }

  ngOnInit(): void {
    this.idForm = this.dynamicFormService.toFormGroup(this.documentFormData);
  }

}

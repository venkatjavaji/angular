import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DocumentForm } from "../data/document.form.bean";
import {documentTypeData} from "../data/doc.type.data";


@Injectable()
export class DynamicFormService {

    constructor() { }

    toFormGroup(documentFormData: DocumentForm[]) {
        const group: any = {};
        documentFormData.forEach((element: any) => {
            let itemValue = element.defaultValue ? element.defaultValue : (element.value ? element.value :  element.value || '');
            group[element.property] = element.required ? new FormControl(itemValue, Validators.required)
                : new FormControl(itemValue);
        });
        return new FormGroup(group);
    }

    getDocumentTypeList() {
            return documentTypeData;
    }

}
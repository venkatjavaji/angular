export interface DocumentForm {
   label:string;
   property:string;
   type:string;
   dropDownValues?:DropDownValue[];
   mandatory:string;
   visible:string;
   value?:string;
   defaultValue?:string;
   placeHolder:string;
   externalField:string;
}

export interface DropDownValue {
    label:string;
    value?:string;
    description:string;
}
export const idDocumentFormData = [ {
        label : "Verification Type",
        property : "verificationType",
        type : "drop-down",
        dropDownValues : [{
            label : "None",
            value : "null",
            description : "Verification type to be selected to complete the verification process"
        },
        {
            label : "Automatic",
            value : "automatic",
            description : "Auto selection type, only verification status has to be selected"
        },
        {
            label : "Manual",
            value : "manual",
            description : "Manual selection type, manual document to be uploded and details to be manually filled"
        }],
        mandatory : "true",
        visible : "true",
        value : "null",
        defaultValue : "automatic",
        placeHolder : "Select Verification Type",
        externalField : "IdDocumentVerificationType"
    },
    {
        label : "Reference Number",
        property : "referenceNumber",
        type : "text",
        dropDownValues : [],
        mandatory : "mandatoryFilter",
        visible : "visibleFilter",
        value: "null",
        defaultValue : "${senderCountry}",
        placeHolder : "Select Issuing Country of Document",
        externalField : "IdExpirationDate"
    },
    {
        label : "Document Type",
        property : "documentType",
        type : "drop-down",
        dropDownValues : [],
        mandatory : "true",
        visible : "true",
        value : "null",
        defaultValue : "null",
        placeHolder : "Select Document Type",
        externalField : "IdDocumentDocumentType"
    },{
        label : "Expiration Date",
        property : "expirationDate",
        type : "date",
        dropDownValues : [],
        mandatory : "mandatoryFilter",
        visible : "visibleFilter",
        value : "null",
        defaultValue : "",
        placeHolder : "Enter Expiration Date of Document",
        externalField : "IdExpirationDate"
    }, {
        label : "Issuing Country",
        property : "issueCountry",
        type : "drop-down",
        dropDownValues : [],
        mandatory : "mandatoryFilter",
        visible : "visibleFilter",
        value: "null",
        defaultValue : "${senderCountry}",
        placeHolder : "Select Issuing Country of Document",
        externalField : "IdExpirationDate"
    }];


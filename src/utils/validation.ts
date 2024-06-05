const validate = (value: string, fieldName: string, errors: string[]) => {
    return {
        required: () => {
            if (value.length === 0) {
                errors.push(`${fieldName} field is required.`);
            }
            return this;
        },
        isEmail: () => {
            const emailPattern = /\S+@\S+\.\S+/;
            if (!emailPattern.test(value)) {
                errors.push(`${fieldName} is not a valid email.`);
            }
            return this;
        },
        minLength: (length: number) => {
            if (value.length < length) {
                errors.push(`${fieldName} must be at least ${length} characters long.`);
            }
            return this;
        },
        maxLength: (length: number) => {
            if (value.length > length) {
                errors.push(`${fieldName} characters should be greater than ${length}.`);
            }
            return this;
        }
    };
};

const validator = (bodyRequest: any, rules: any) => {
    Object.keys(bodyRequest).forEach(key => {
        console.log(`${key}: ${bodyRequest[key]}`);
      });
}

const isValidated = (errors: string[]) : boolean => {
    if(errors.length > 0){
        return true;
    }
    return false;
}


export {validator, isValidated, validate}
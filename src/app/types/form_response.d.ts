import { FormFieldResponse } from './form_field_response';

export interface FormResponse {
    created_at: Date,
    fields: Array<FormFieldResponse>
}

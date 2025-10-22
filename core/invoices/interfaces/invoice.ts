export interface InvoiceResponse {
    id:           number;
    amount:       number;
    issuedAt:     Date;
    status:       string;
    contractId:   number;
    userFullName: string;
    serviceName:  string;
}

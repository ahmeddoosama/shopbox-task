export interface QueryBase {
    func: String;
    return: String;
}

export interface QueryFull {
    func: String;
    return: any;
    variable?: string;
    type?: String;
    pagination?: any;
    paginationType?: String;
    variables?: any;
    data?: any;
}

export interface ShippingStepper {
    step: String;
    data: any;
}

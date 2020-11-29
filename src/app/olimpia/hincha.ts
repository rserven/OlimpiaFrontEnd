export interface hinchaCreacionDto{
    documentid: string;
    fullname: string;
    location: string;
}

export interface hinchaEliminacionDto{
    documentid: string;
}

export interface MyArray{
    name: string;
    series: Series[];
}

export interface Series{
    name: string;
    value: number;  
}
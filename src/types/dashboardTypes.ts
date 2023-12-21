import {Status, Type} from "./enums";


export interface Test {
    id: number
    name: string
    type: Type
    status: Status
    siteId: number
}
export interface Site {
    id: number
    url: string
}
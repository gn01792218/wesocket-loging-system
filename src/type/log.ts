export interface LogMsg {
    type:LogMsgType,
    title:string,
    message:Object
}
export enum LogMsgType {
    CLIENT,
    SERVER,
    ERROR,
    WARN,
}
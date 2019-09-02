export class Bquote {
    showDescription: boolean
    constructor(public id: number,public author: string,public writter: string , public quoteWritten:string,public completeDate:Date){
        this.showDescription=false
}
}
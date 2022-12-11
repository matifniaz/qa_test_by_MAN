import Asset from "../Asset/Asset";

class Picture extends Asset {
    width: number = 0;
    height: number = 0;
    canBeDownloaded: boolean = false;
    constructor(data: any){
        super(data)
        if(typeof(data.width)==='undefined' || typeof(data.height)==='undefined'){
            return
        }
        this.width = data.width;
        this.height = data.height;
        this.canBeDownloaded = this.checkIfCanBeDownloaded()
    }
    checkIfCanBeDownloaded():boolean{
        if( ((this.width * this.height) > 4*Math.pow(10,6)) && this.width > 2000){
            return true
        }
        return false
    }
}
export default Picture
class Asset {
    id: number = 0;
    author: string = '';
    url: string = ''
    downloadUrl: string = ''
    constructor(data: any) {
        if(typeof(data)==='undefined' || typeof(data.id)==='undefined'){
            return
        }
        this.id = isNaN(parseInt(data.id,10)) ? 0 : parseInt(data.id,10)
        this.author = data.author
        this.url = data.url
        this.downloadUrl = typeof(data.downloadUrl)!=='undefined' ? data.downloadUrl : 
            typeof(data.download_url)!=='undefined' ? data.download_url : '' 
    }
}
export default Asset
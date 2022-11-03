class APIResponse {
    loading: boolean = true
    error: boolean = false
    data: any;
    constructor(){}
    ready(response: any): any {
        const data = response;
        this.loading = false;
        switch(true) {
            case typeof(data)==='object' && !Array.isArray(data): 
                this.data = Object.assign({},data); break;
            case typeof(data)==='object' && Array.isArray(data): 
                this.data = [...data]; break;
            default: this.data = data; break;
        }
    }
    setError() {
        this.error = true
    }
}

export default APIResponse
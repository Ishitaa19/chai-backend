class ApiResponse{
    constructor(statusCode ,data,messge = "Success"){
        this.stautsCode= statusCode
        this.data =data 
        this.message = message
        this.success = statusCode <400
    }
    
}
export default class Config{
    serverIP = "192.168.43.171"
    serverPort = 7100
    serverAddr = `http://${this.serverIP}:${this.serverPort}`

    loginAddr = `${this.serverAddr}/login`
    
}
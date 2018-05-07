import { Paho } from 'ng2-mqtt/mqttws31';

export class MqttService {

    client;

    constructor() {}

    conectar() {
        console.log("Entrou");
        this.client = new Paho.MQTT.Client('192.168.5.101', 1884, 'Felipe');

        this.onMessage();
        this.onConnectionLost();
        this.client.connect({ onSuccess: this.onConnected.bind(this), onFailure : this.onFalha.bind(this) });
        console.log("Saiu");
    }

    onConnected() {
        console.log("Connected: KD");
        this.client.subscribe("REQUISICAO/IRRIGAR");
        // this.sendMessage('Contrutor');
    }

    onFalha(){
        console.log("Falhou");
    }

    sendMessage(message: string) {
        let packet = new Paho.MQTT.Message(message);
        packet.destinationName = "REQUISICAO/IRRIGAR";
        this.client.send(packet);
    }

    onMessage() {
        this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
            console.log('Message arrived : ' + message.payloadString);
        };
    }

    onConnectionLost() {
        this.client.onConnectionLost = (responseObject: Object) => {
            console.log('Connection lost : ' + JSON.stringify(responseObject));
            this.client.connect({ onSuccess: this.onConnected.bind(this), onFailure: this.onFalha.bind(this) })
        };
    }
}
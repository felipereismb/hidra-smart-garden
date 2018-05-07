import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MqttService } from './mqtt.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MqttService]
})
export class HomePage{

  public valores = {
    temp: "", //valor da ultima temperatura lida
    umAr: "", //valor da ultima umidade do ar lida
    umSolo: "", //valor da ultima umidade do solo lida
    lumin: "", //valor da ultima luminosidade lida
  };

  constructor(public navCtrl: NavController, public mqtt_service: MqttService) {
    this.valores['temp'] = "Não medido";
    this.valores['umAr'] = "Não medido";
    this.valores['umSolo'] = "Não medido";
    this.valores['lumin'] = "Não medido";
    this.iniciar();
  }

  iniciar() {
    this.mqtt_service.conectar();
  }

  irrigar(){
    this.mqtt_service.sendMessage("Funcao Irrigar");
  }

  public medirTemp() {
    // this.mqtt_service.sendMessage("1","REQUISICAO/TEMPERATURA/ST01");
    this.valores['temp'] = "25º C";
    console.log("medindo temp")
  }
  public medirUmidAr() {
    // this.mqtt_service.sendMessage("1","REQUISICAO/UMIDADE_AR/SUA01");
    this.valores['umAr'] = "Ameno";
    console.log("medindo umidade ar")
  }
  public medirUmidSolo() {
    // this.mqtt_service.sendMessage("1","REQUISICAO/UMIDADE_SOLO/SUS01");
    this.valores['umSolo'] = "Úmido"
    console.log("medindo umidade terra")
  }
  public medirLuminosidade() {
    // this.mqtt_service.sendMessage("1","REQUISICAO/LUMINOSIDADE/SL01");
    this.valores['lumin'] = "Alta";
    console.log("medindo luminosidade")
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
//necessário injetar uma dependencia
  constructor(private http: HttpClient) { } //lemprar de importar (crtl .)

  //chamada ao back-end
    //chamada assincrona: vc chama e não espera a resposta, ele continua a execução (lembrar que o garons recolhe o pedido,faz a chamada para o cozinheiro e pega outros pedidos)
      //quando se trabalha com esse tipo de assincrona, mas o retorno será observable, que é a forma de falar que será assincrono
    //chamada sincrona: depende
  getRandomDog(): Observable<Dog>{ //fazer import do Dog
    return this.http.get<Dog>("https://dog.ceo/api/breeds/image/random"); //http.get devolve um assincrono por padrão-> sem isso n funcionaria
  }
}

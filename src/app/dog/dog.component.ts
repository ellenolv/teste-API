import { DogService } from './../dog.service';
import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{ // o end point será chamado assim que inicar a inialização do componente

  dog : Dog = {} as Dog; //dog é um objeto e message e status são atributos de dog


constructor(private dogService: DogService){}//injeção da dependencia é via constructor
//private significa que será acessado apenas por essa classe

ngOnInit(): void { //inicialização do componente
    this.loadDog();
  }
  loadDog() { //chamada ao service
    this.dogService.getRandomDog().subscribe(
        {
          next: dog => this.dog  =dog // this.sog -> dog do componente | dog é o que veio do observable
        }

      ); //retorna um observable, e é necessário subscribe esse observable
  }

//para importar a interface criada e criar um objeto
  //clicar em cima da interface crtl . e selecionar a primeira opção

  //fazer separação da string
  getName():string []{

//para acessar o objeto tem que acessar o objeto e necessário usar o this.
return this.dog.message.split("/")[4].split("-"); //pseparar o string com o conteudo que está entre barras
// o ultimo split vai mostrar os nomes sem o ifen. isso vai gerar um string

//DIRETIVA FOR ANGULAR


}


}

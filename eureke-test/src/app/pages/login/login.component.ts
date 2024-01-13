import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {


  }

  contenu='exemple@gmail.com'
  imageUrl='../../../assets/imgs/customer01.jpg'
  // email=true


  //méthodes
  afficherBloc1: boolean = true;

  basculerBlocs() {
    this.afficherBloc1 = !this.afficherBloc1;
  }



  // attributs
  nom = "";
  prenom = "";
  // numero = "";
  email = "";
  pass = "";
  // formChoice=true;


  // methodes
  verifierLogin() {
    console.log({email: this.email, pass: this.pass});
    if (this.email == "" || this.pass == "") {

      this.showMessage("error","Sorry",'Veuillez saisir tous les champs');
    }else if(this.pass.length<8){
        this.showMessage("error","Sorry",'Le password doit être > ou = à 8 caractère');
      }
      else {
          this.showMessage('success','Thanks','Connexion faite avec succès');
    }

  }


  verifierRegister() {

    if (this.nom == "" || this.prenom == "" || this.email == "" || this.pass == "" ) {
      Swal.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'Veuillez saisir tous les champs',
      })
    }
    else if(this.pass.length<8){
      this.showMessage("error","Sorry",'Le password doit être > ou = à 8 caractère');
    }


    else {
      Swal.fire({
        icon: 'success',
        title: 'Thanks',
        text: 'Connexion faite avec succès',
      })
      this.showForm()


    }

  }

  showMessage(icon:any,title:any,text:any){
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    })
  }


  showForm(){
    // this.formChoice=!this.formChoice;
    this.nom="";
    this.prenom="";
    // this.numero="";
    this.email="";
    this.pass="";
  }

}

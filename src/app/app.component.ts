import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portafolio';

  Inicio:any='active';
  SobreMi:any;
  Proyectos:any;
  //Contacto:any;

  getActive(value:any){
    
    if(value =='inicio'){
      this.Inicio='active';
    }else{
      this.Inicio='';
    }

    if(value =='sobre_mi'){
      this.SobreMi='active';
    }else{
      this.SobreMi='';
    }

    if(value =='proyectos'){
      this.Proyectos='active';
    }else{
      this.Proyectos='';
    }

    /* if(value =='contacto'){
      this.Contacto='active';
    }else{
      this.Contacto='';
    } */
  }
  
}

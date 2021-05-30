import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService],
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;

  public newUser: any;
  public usuarioGuardado: any;

  constructor(private _peticionesService: PeticionesService) {
    this.userId = 1;
    this.newUser = {
      name: '',
      job: '',
    };
  }

  ngOnInit(): void {
    this.fecha = new Date();
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      (result) => {
        console.log(result);
        this.user = result.data;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
  onSubmit(form: any) {
    this._peticionesService.addUser(this.newUser).subscribe(
      (response) => {
        console.log(response.data);
        this.usuarioGuardado = response;
        form.reset();
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}

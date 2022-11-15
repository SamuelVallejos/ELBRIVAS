import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from './usuario';
import { Vehiculo } from './vehiculo';
import { Viaje } from './viaje';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  // Create Table
  usuarioD: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement,nombre VARCHAR(100) NOT NULL, correo VARCHAR(100), contrasena varchar(16) NOT NULL, telefono NUMBER,id_rol INTEGER NOT NULL)"
  autoD: string = "CREATE TABLE IF NOT EXISTS vehiculo(patente INTEGER PRIMARY KEY, marca VARCHAR(20) NOT NULL, modelo VARCHAR(20), color VARCHAR(20), annio NUMBER,FOREIGN KEY(usuario_id_usuario) REFERENCES usuario(id_usuario))"
  //viajeD: string = "CREATE TABLE IF NOT EXISTS viaje(id_viaje INTEGER PRIMARY KEY autoincrement,fecha_viaje VARCHAR(10) NOT NULL, hora_salida VARCHAR(20) NOT NULL, asientos_disponibles number NOT NULL, monto NUMBER NOT NULL, sede VARCHAR(30) NOT NULL, recorrido VARCHAR(30) NOT NULL,FOREIGN KEY(vehiculo_patente) REFERENCES vehiculo(patente))"
  //DViajeD: string = "CREATE TABLE IF NOT EXISTS detalle_viaje(id_detalle INTEGER PRIMARY KEY autoincrement,status VARCHAR(100), FOREIGN KEY(usuario_id_usuario) REFERENCES usuario(id_usuario),FOREIGN KEY(viaje_id_viaje) REFERENCES viaje(id_viaje))"

  // Instert IntosregistroVehiculo
  registroVehiculo: string = "INSERT or IGNORE INTO usuario(id_vehiculo ,patente, marca, modelo, color, annio) VALUES (0, SASD11,drivolo,j3,rosao,1943);";
  registroUsuario: string = "INSERT or IGNORE INTO vehiculo(id_usuario,correo,contrasena,telefono) VALUES (0,sad@dsa.cl,dsasadsa,34783478);";
  //registroViaje: string = "INSERT or IGNORE INTO viaje(id_viaje,fecha_viaje, hora_salida, asientos_disponibles, monto, sede, recorrido) VALUES (0,123,);";
  //registroDviajeD: string = "INSERT or IGNORE INTO viaje() VALUES ();";
  // 

  public database: SQLiteObject;


  listaUsuario = new BehaviorSubject([]);
  listaVehiculo = new BehaviorSubject([]);
  listaViaje = new BehaviorSubject([]);
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private sqlite: SQLite,
    private platform: Platform,
    private alertController: AlertController,
    private http: HttpClient
  ) {

    this.crearBD();
  }

  crearBD() {
    //verificamos que la plataforma este lista
    this.platform.ready().then(() => {
      //creamos la BD
      this.sqlite.create({
        name: 'bdusuario.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //llamar a la funcion para crear las tablas
        this.crearTablas();
      }).catch(e => {
        this.presentAlert("Error creación la BD: " + e);
      })
    })
  }

  async crearTablas() {
    try {
      //ejecuto creacion de tablas
      await this.database.executeSql(this.usuarioD, []);
      await this.database.executeSql(this.autoD, []);
      //await this.database.executeSql(this.DViajeD, []);
      //await this.database.executeSql(this.DViajeD, []);


      //ejecuto los insert
      await this.database.executeSql(this.registroUsuario, []);
      await this.database.executeSql(this.registroVehiculo, []);
      //await this.database.executeSql(this.registroViaje, []);
      //await this.database.executeSql(this.registroDviajeD, []);

      //llamo al observable de carga de datos
      this.buscarUsuario();
      this.buscarVehiculo();
      this.buscarViaje();
      //modificar el observable de el status de la BD
      this.isDBReady.next(true);

    } catch (e) {
      this.presentAlert("Error en la creación de la BD: " + e);
    }
  }

  dbState() {
    return this.isDBReady.asObservable();
  }

  // Usuario
  fetchUsuario(): Observable<Usuario[]> {
    return this.listaUsuario.asObservable();
  }

  buscarUsuario() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id_usuario,
            nombre: res.rows.item(i).nombre,
            correo: res.rows.item(i).correo,
            contrasena: res.rows.item(i).contrasena,
            telefono: res.rows.item(i).telefono,
            id_rol: res.rows.item(i).id_rol
          })
        }
      }
      this.listaUsuario.next(items);

    })
  }

  registrarUsuario(nombre, correo, contraseña, telefono, id_rol) {
    let data = [nombre, correo, contraseña, telefono];
    return this.database.executeSql('INSERT INTO usuario(nombre, correo,contraseña,telefono,id_rol) VALUES (?,?,?,?,?)', data).then(data2 => {
      this.buscarUsuario();
      this.presentAlert("Registro del Usuario Realizado");
    })
  }

  modificarUsuario(id, telefono) {
    let data = [telefono, id];
    return this.database.executeSql('UPDATE usuario SET telefono = ? WHERE id_usuario = ?', data).then(data2 => {
      this.buscarUsuario();
      this.presentAlert("Usuario Modificado");
    })
  }

  eliminarUsuario(id) {
    return this.database.executeSql('DELETE FROM usuario WHERE id_usuario = ?', [id]).then(data2 => {
      this.buscarUsuario();
      this.presentAlert("Usuario Eliminado");
    })
  }

  // vehiculo

  fetchVehiculo(): Observable<Vehiculo[]> {
    return this.listaVehiculo.asObservable();
  }

  buscarVehiculo() {
    return this.database.executeSql('SELECT * FROM vehiculo', []).then(res => {
      let items: Vehiculo[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            patente: res.rows.item(i).patente,
            marca: res.rows.item(i).marca,
            modelo: res.rows.item(i).modelo,
            color: res.rows.item(i).color,
            annio: res.rows.item(i).annio
          })
        }
      }
      this.listaVehiculo.next(items);

    })
  }

  registrarVehiculo(patente, marca, modelo, color, annio) {
    let data = [patente, marca, modelo, color, annio];
    return this.database.executeSql('INSERT INTO vehiculo(patente,marca,modelo,color,annio) VALUES (?,?,?,?,?)', data).then(data2 => {
      this.buscarVehiculo();
      this.presentAlert("Registro del Vehiculo Realizado");
    })
  }

  modificarVehiculo(patente, color) {
    let data = [color, patente];
    return this.database.executeSql('UPDATE vehiculo SET color = ? WHERE patente = ?', data).then(data2 => {
      this.buscarVehiculo();
      this.presentAlert("Vehiculo Modificado");
    })
  }

  eliminarVehiculo(patente) {
    return this.database.executeSql('DELETE FROM vehiculo WHERE patente = ?', [patente]).then(data2 => {
      this.buscarVehiculo();
      this.presentAlert("Vehiculo Eliminado");
    })
  }

  // viaje

  fetchViaje(): Observable<Viaje[]> {
    return this.listaVehiculo.asObservable();
  }

  buscarViaje() {
    return this.database.executeSql('SELECT * FROM viaje', []).then(res => {
      let items: Viaje[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id_viaje,
            fecha_viaje: res.rows.item(i).fecha_viaje,
            hora_salida: res.rows.item(i).hora_salida,
            asientos_disponibles: res.rows.item(i).asientos_disponibles,
            monto: res.rows.item(i).monto,
            sede: res.rows.item(i).sede,
            recorrido: res.rows.item(i).recorrido
          })
        }
      }
      this.listaViaje.next(items);

    })
  }

  registrarViaje(fecha_viaje, hora_salida, asientos_disponibles, monto, recorrido) {
    let data = [fecha_viaje, hora_salida, asientos_disponibles, monto, recorrido];
    return this.database.executeSql('INSERT INTO viaje(fecha_viaje, hora_salida, asientos_disponibles, monto, recorrido) VALUES (?,?,?,?,?)', data).then(data2 => {
      this.buscarViaje();
      this.presentAlert("Registro del Viaje Realizado");
    })
  }

  modificarViaje(id, fecha_viaje, hora_salida, asientos_disponibles, monto, recorrido) {
    let data = [fecha_viaje, hora_salida, asientos_disponibles, monto, recorrido, id];
    return this.database.executeSql('UPDATE viaje SET fecha_viaje = ?, hora_salida = ?, asientos_disponibles = ?, monto = ?, recorrido = ? WHERE id_viaje = ?', data).then(data2 => {
      this.buscarViaje();
      this.presentAlert("Viaje Modificado");
    })
  }

  eliminarViaje(id) {
    return this.database.executeSql('DELETE FROM viaje WHERE id_viaje = ?', [id]).then(data2 => {
      this.buscarViaje();
      this.presentAlert("Viaje Eliminado");
    })
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
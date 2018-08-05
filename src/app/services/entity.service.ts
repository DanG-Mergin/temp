
import { Entity } from './entity';

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators'; 
import 'rxjs/add/operator/map'; 
import { Socket } from 'ng-socket-io';

@Injectable()
export class EntityService {
  //private entities = []; 

  entities = new BehaviorSubject<Entity[]>([]);
  //observable bts selections stream
  //currentEntities = this.entities.asObservable();

  constructor(private socket: Socket) { }

  sendMessage(msg: string){
      this.socket.emit("add-message", msg);
  }

  getMessage() {
      return this.socket
          .fromEvent("message")
          .map( data => data['text'] );
  }

  getEntities(): Observable<Entity[]> {
      this.socket.emit("EntityDetailReq");

      this.socket.on("EntityDetailAns", (data) => {
        //compare against interface.  TODO: add true validation and error handling
        console.log(data);
        let returnedEntities = data['entities'] as Entity[];
        this.entities.next(returnedEntities);
      });
      return this.entities.asObservable();

      //using simple observable not behavior subject as above
      // return this.socket
      //     .fromEvent("EntityDetailAns")
      //     .map( data => data['entities']);

  }

  // getEntities() {
  //     this.socket.emit("EntityDetailReq");
  //     return this.socket
  //         .fromEvent("EntityDetailAns")
  //         .map( data => data['entities'];  );
  // } 

  addEntity(entity: Entity) {
    this.socket.emit("addEntityReq", entity);
  }

  updateEntity(){

  }

}







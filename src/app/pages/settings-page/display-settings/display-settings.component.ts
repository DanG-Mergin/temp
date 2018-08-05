import { Component, OnInit, OnDestroy } from '@angular/core';

import { Entity, RfChain, createEntity, createRfChain } from '../../../services/entity';
import { EntityService } from '../../../services/entity.service';

@Component({
  selector: 'app-display-settings',
  templateUrl: './display-settings.component.html',
  styleUrls: ['./display-settings.component.scss']
})

//TODO: implement onDestroy for all components calling observers 
export class DisplaySettingsComponent implements OnInit, OnDestroy {
	public entityStream;
	entities: Entity[];
	newEntity: Entity;

	public message = "testing connection";
	messages: Array<string> = ["init"];

	constructor(private entityService: EntityService) {}


	ngOnInit() {

		// this.entityStream = this.entityService.getMessage().subscribe(message => {
	 //      this.messages.push(message);
	 //      console.log(this.messages);
	 //    });
	 //    this.sendMessage();

	    this.getEntities();
	}
	sendMessage() {
		console.log(this.message);
		this.entityService.sendMessage(this.message);
		this.message = '';
	}
	getEntities() {
		// this.entityStream = this.entityService.getEntities().subscribe(entities => {this.rows = entities; console.log(entities)});
		// this.entityStream = this.entityService.getEntities().subscribe(entities => 
		// 	{
		// 		console.log(entities);
		// 		this.entities = entities;
		// 	});
	}

	getNewEntity() {
		// this.newEntity = createEntity();
	}

	ngOnDestroy() {
		// this.entityStream.unsubscribe();
	}

}

// export class ChatComponent implements OnInit, OnDestroy {

//   @ViewChild('chatInput') chatInput: ElementRef;

//   public messages = [];
//   public entityStream;
//   public message;

//   constructor(private chatService: ChatService) { }

//   ngOnInit() {
//     this.entityStream = this.chatService.getMessages().subscribe(message => {
//       this.messages.push(message);
//     })
//   }

//   ngOnDestroy() {
//     this.entityStream.unsubscribe();
//   }

//   sendMessage() {
//     this.chatService.sendMessage(this.message);
//     this.message = '';
//   }

//   @HostListener('click')
//   public autofocusInput() {
//     this.chatInput.nativeElement.focus();
//   }
// }


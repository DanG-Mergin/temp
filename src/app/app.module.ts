import { AgmCoreModule } from '@agm/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { AuthService } from './shared/auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BTSService } from './services/bts.service';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { CustomRequestOptions } from './shared/routes/custom-request-options';
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { EnclosureService } from './services/enclosure.service';
import { EntityService } from './services/entity.service';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule}    from '@angular/common/http';
import { InMemoryDataService }  from './in-memory-data.service';
import { MessageService } from './services/message.service';
import { NgModule } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestOptions } from '@angular/http';
import { SharedModule } from "./shared/shared.module";
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { TargetService } from './services/targets.service';

import { ScanService } from './services/scan.service';

import * as $ from 'jquery';

//TODO: alphabetize all imports and declarations app wide

@NgModule({
    declarations: [
        AppComponent,
        ContentLayoutComponent,
        FullLayoutComponent   
    ],
    imports: [
        AngularFontAwesomeModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgbModule.forRoot(),
        SharedModule,

        //SocketIoModule.forRoot(environment.socketIoConfig),
        // SocketIoModule.forRoot(environment.TESTsocketIoConfig),
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        // HttpClientInMemoryWebApiModule.forRoot(
        //   InMemoryDataService, { dataEncapsulation: false }
        // ),
         
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
        })
    ],
    providers: [
        AuthGuard,
        AuthService,
        BTSService, 
        EnclosureService,
        EntityService,
        MessageService,
        NgbActiveModal,
        TargetService,
        ScanService,
        { provide: RequestOptions, useClass: CustomRequestOptions }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

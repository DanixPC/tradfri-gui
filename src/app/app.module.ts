import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ANGULAR
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//MATERIAL ANGULAR
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTreeModule} from '@angular/material/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DialogAssistComponent } from './components/utils/dialog-assist/dialog-assist.component';
import { WelcomePageComponent } from './components/first-start-pages/welcome-page/welcome-page.component';
import { RouterModule } from '@angular/router';
import { rutas } from './constants/routes';
import { LoaderComponent } from './components/utils/loader/loader.component';
import { MessageBoxHelperComponent } from './components/utils/message-box-helper/message-box-helper.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DeviceComponent } from './components/utils/device/device.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DialogAssistComponent,
    WelcomePageComponent,
    LoaderComponent,
    MessageBoxHelperComponent,
    DashboardComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatGridListModule,
    ScrollingModule,
    MatRippleModule,
    MatExpansionModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTreeModule,
    HttpClientModule,
    MatSliderModule,
    RouterModule.forRoot(rutas, {
    initialNavigation: 'enabled'
})
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

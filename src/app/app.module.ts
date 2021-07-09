import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//AppComponent
import { AppComponent } from './app.component';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

//Modules Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';



//Components
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { AnnotationsComponent } from './views/annotations/annotations.component'
import { TasksComponent } from './views/tasks/tasks.component';
import { TasksCreateComponent } from './components/tasks/tasks-create/tasks-create.component'
import { TasksReadComponent } from './components/tasks/tasks-read/tasks-read.component';
import { TasksRead2Component } from './components/tasks/tasks-read2/tasks-read2.component';
import { TasksUpdateComponent } from './components/tasks/tasks-update/tasks-update.component';
import { TasksDeleteComponent } from './components/tasks/tasks-delete/tasks-delete.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';

//Directives
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

//Utils
import { Mesage } from './utils/mesage.component';
import { Constants } from './utils/constants.component';

//Locale
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TasksComponent,
    AnnotationsComponent,
    RedDirective,
    ForDirective,
    TasksCreateComponent,
    TasksReadComponent,
    TasksRead2Component,
    TasksUpdateComponent,
    TasksDeleteComponent,
    TimelineComponent,
    DialogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatGridListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  },
  Mesage, 
  Constants,
],
  bootstrap: [AppComponent]
})
export class AppModule { }

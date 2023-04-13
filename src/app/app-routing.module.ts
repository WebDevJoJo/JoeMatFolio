import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessModule } from './access/access.module';
import { PersonalAreaModule } from './personal-area/personal-area.module';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: 'access',
    loadChildren: () =>
      import('./access/access.module').then((m) => m.AccessModule),
  },
  {
    path: 'personal-area',
    loadChildren: () =>
      import('./personal-area/personal-area.module').then(
        (m) => m.PersonalAreaModule
      ),
  },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AccessModule, PersonalAreaModule],
  exports: [RouterModule, AccessModule, PersonalAreaModule],
})
export class AppRoutingModule {}

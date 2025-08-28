import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutPublisher } from './about-publisher/about-publisher';
import { Chapters } from './chapters/chapters';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { ReleaseCampaign } from './release-campaign/release-campaign';
import { Pills } from './pills/pills';

@Component({
  selector: 'app-root',
  imports: [AboutPublisher, Chapters, Footer, Header, ReleaseCampaign, Pills],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('ebook-landing-page');
}

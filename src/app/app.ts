import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutPublisher } from './about-publisher/about-publisher';
import { Chapters } from './chapters/chapters';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { ReleaseCampaign } from './release-campaign/release-campaign';
import { Pill } from './pill/pill';

@Component({
  selector: 'app-root',
  imports: [AboutPublisher, Chapters, Footer, Header, ReleaseCampaign, Pill],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ebook-landing-page');
}

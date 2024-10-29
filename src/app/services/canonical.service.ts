import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Seo } from '../models/seo.model';

@Injectable({
  providedIn: 'root'
})

export class SeoService {

  constructor(@Inject(DOCUMENT) private dom: any, private titleService: Title, private metaTagsService: Meta) { }

  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.dom.URL : url;
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);
  }

  updateSeo(data: Seo) {
    // Set the page title
    this.titleService.setTitle(data.Title);

    // Standard meta tags
    this.metaTagsService.updateTag({ name: 'description', content: data.Description });
    this.metaTagsService.updateTag({ name: 'keywords', content: data.Keywords });

    // Open Graph meta tags (used by Facebook, LinkedIn, etc.)
    this.metaTagsService.updateTag({ property: 'og:title', content: data.Title });
    this.metaTagsService.updateTag({ property: 'og:description', content: data.Description });
    this.metaTagsService.updateTag({ property: 'og:image', content: data.Image });

    // Twitter meta tags
    this.metaTagsService.updateTag({ name: 'twitter:title', content: data.Title });
    this.metaTagsService.updateTag({ name: 'twitter:description', content: data.Description.substring(0, 155).replace(/\r?\n|\r/g, ' ') + '...' });
    this.metaTagsService.updateTag({ name: 'twitter:image', content: data.Image });
    this.metaTagsService.updateTag({ name: 'twitter:card', content: 'summary' });

    // Set canonical URL
    if(data != null && data.CanonicalUrl != null && data.CanonicalUrl != ""){
      this.setCanonicalURL(data.CanonicalUrl);
    }
  }
}
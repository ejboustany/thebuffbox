export class Seo {
    Title: string;
    Description: string;
    Keywords: string;
    Image: string;
    AltText: string;
    CanonicalUrl: string;
  
    constructor(title: string, description: string, image: string, altText: string, keywords: Array<string>, canonicalUrl: string = '') {
      this.Title = title;
      this.Description = description;
      this.Image = image;
      this.Keywords = keywords? keywords.join(", "): "";
      this.AltText = altText;
      this.CanonicalUrl = canonicalUrl;
    }
  }
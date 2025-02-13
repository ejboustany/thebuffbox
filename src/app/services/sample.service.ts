import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  sample1: number | null = null;
  sample2: number | null = null;

  setSample(value: number) {
    if (this.sample1 === null || this.sample1 === 0) {
      this.sample1 = value;
    } else {
      this.sample2 = value;
    }
  }

  getSamples() {
    return { sample1: this.sample1, sample2: this.sample2 };
  }
}

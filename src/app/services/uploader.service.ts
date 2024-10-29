import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { APICallService } from './api-call.service';
import { ImagePurposeEnum } from '../enums/image-purpose.enum';
import { Image } from '../models/image.model';

@Injectable({
    providedIn: 'root'
})
export class UploadService {
    private apiUrl: string = environment.api;
    constructor(private apiCallService: APICallService) { }

    setApiUrl(apiUrl: string) {
        this.apiUrl = apiUrl;
    }


    uploadImage(purpose: ImagePurposeEnum, file: FormData) {
        const url = this.apiUrl + "/File/UploadImage?purpose=" + purpose;
        return this.apiCallService.post(url, file);
    }

    uploadIdentityImage(file: FormData) {
        const url = this.apiUrl + "/File/UploadImage";
        return this.apiCallService.post(url, file);
    }

    delete(image: Image) {
        const url = this.apiUrl + "/File/DeleteImage?imageId=" + image.id;
        return this.apiCallService.delete(url);
    }
}
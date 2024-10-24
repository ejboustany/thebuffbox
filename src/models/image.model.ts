import { ImagePurposeEnum } from "../enums/image-purpose.enum";
import { Base } from "./base.model";


export class Image extends Base {
    originalPath: string;
    originalThumbnailPath: string;
    Purpose: ImagePurposeEnum;
    Source: string;
}
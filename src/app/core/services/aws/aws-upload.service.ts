
import { Injectable } from '@angular/core';
import { AWS_ACCESS_KEY_ID, AWS_BUCKET, AWS_REGION, AWS_SECRET_ACCESS_KEY } from '../../../shared/config/congif';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class AwsUploadService {

  constructor() { }

  uploadFile(file){

    const contentType = file.type;

    const bucket = new S3(
        {
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
            region: AWS_REGION
        }
    );

    const params = {
        Bucket: AWS_BUCKET,
        Key: 'catalogue' + file.name,
        Body: file,
        ACL: 'public-read',
        ContentType: contentType
    };

    return bucket.upload(params).promise();
  }
}

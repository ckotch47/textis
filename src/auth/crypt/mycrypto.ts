import { createCipheriv, createDecipheriv } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class mycrypto{
   key = '02cebe01ab04de08ba02cebe01ab04de';
   iv = '02cd30df90ef06da';

   async mcrypt(str: string){
     const cipher = createCipheriv("aes-256-ctr", this.key, this.iv);
     const ecrypted = Buffer.concat([
       cipher.update(str),
       cipher.final()
     ])
     return ecrypted.toString();
   }


  // async mdecrypt(str) {
  //   const decipher = createDecipheriv("aes-256-ctr", this.key, this.iv);
  //   const decrypted = Buffer.concat([
  //     decipher.update(str),
  //     decipher.final()
  //   ]);
  // }

}
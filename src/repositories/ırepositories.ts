import { Injectable } from "@nestjs/common";

export const REPOSİTORY_SERVICE = 'REPOSİTORY_SERVICE';
   @Injectable()
export   abstract class IRepository<T> {
     abstract create(t:T):Promise<T>;
    
   abstract   findAll():Promise<T[]>;
    
     abstract findOne(id:string):Promise<T>;
    
     abstract update(id:string,t:Partial<T>):Promise<T>;
    
     abstract remove(id: string):Promise<T>;
}

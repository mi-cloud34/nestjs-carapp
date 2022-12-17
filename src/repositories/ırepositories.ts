
export const REPOSİTORY_SERVICE = 'REPOSİTORY_SERVICE';

export   interface IRepository<T> {
      create(t:T):Promise<T>;
    
      findAll():Promise<T[]>;
    
      findOne(id:string):Promise<T>;
    
      update(id:string,t:Partial<T>):Promise<T>;
    
      remove(id: string):Promise<T>;
}

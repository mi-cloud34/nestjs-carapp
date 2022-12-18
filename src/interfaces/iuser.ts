export interface IUser extends Document {
    readonly  name: string;

    readonly  email: string;

     password: string;

    readonly role: string;

    readonly createdAt: Date;

    readonly  place: string;

    readonly image: string;

    readonly blocked: boolean;
}


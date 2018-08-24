import { IUserEntity } from './iuser-entity';

export class UserEntity implements IUserEntity {
    login: string;
    password: string;
    token: string;
    id: string;
    firstName: string;
    lastName: string;
}

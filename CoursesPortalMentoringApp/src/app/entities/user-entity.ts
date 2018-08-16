import { IUserEntity } from './iuser-entity';

export class UserEntity implements IUserEntity {
    id: string;
    firstName: string;
    lastName: string;
}

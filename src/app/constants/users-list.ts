import {IUserModule } from './../models/iuser-module';

export const Max: IUserModule = {
    user: 'Max',
    active: true
}

export const Anna: IUserModule = {
    user: 'Anna',
    active: true
}

export const Chris: IUserModule = {
    user: 'Chris',
    active: false
}

export const Manu: IUserModule = {
    user: 'Manu',
    active: false
}

export const UserList: Array<IUserModule> = [
    {...Max},
    {...Anna},
    {...Chris},
    {...Manu}
]


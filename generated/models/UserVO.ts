/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: UserVO.userRole;
    userRoleName?: string;
};

export namespace UserVO {

    export enum userRole {
        ADMIN = 'ADMIN',
        BAN = 'BAN',
        USER = 'USER',
    }


}

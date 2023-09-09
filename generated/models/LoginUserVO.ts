/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: LoginUserVO.userRole;
    userRoleName?: string;
};

export namespace LoginUserVO {

    export enum userRole {
        ADMIN = 'ADMIN',
        BAN = 'BAN',
        USER = 'USER',
    }


}

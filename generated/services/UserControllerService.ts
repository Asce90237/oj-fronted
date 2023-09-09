/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommonResponse_boolean_ } from '../models/CommonResponse_boolean_';
import type { CommonResponse_LoginUserVO_ } from '../models/CommonResponse_LoginUserVO_';
import type { CommonResponse_long_ } from '../models/CommonResponse_long_';
import type { CommonResponse_Page_User_ } from '../models/CommonResponse_Page_User_';
import type { CommonResponse_Page_UserVO_ } from '../models/CommonResponse_Page_UserVO_';
import type { CommonResponse_User_ } from '../models/CommonResponse_User_';
import type { CommonResponse_UserVO_ } from '../models/CommonResponse_UserVO_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { UserAddRequest } from '../models/UserAddRequest';
import type { UserLoginRequest } from '../models/UserLoginRequest';
import type { UserQueryRequest } from '../models/UserQueryRequest';
import type { UserRegisterRequest } from '../models/UserRegisterRequest';
import type { UserUpdateMyRequest } from '../models/UserUpdateMyRequest';
import type { UserUpdateRequest } from '../models/UserUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * addUser
     * @param userAddRequest userAddRequest
     * @returns CommonResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUserUsingPost(
userAddRequest: UserAddRequest,
): CancelablePromise<CommonResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/add',
            body: userAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteUser
     * @param deleteRequest deleteRequest
     * @returns CommonResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteUserUsingPost(
deleteRequest: DeleteRequest,
): CancelablePromise<CommonResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getUserById
     * @param id id
     * @returns CommonResponse_User_ OK
     * @throws ApiError
     */
    public static getUserByIdUsingGet(
id?: number,
): CancelablePromise<CommonResponse_User_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/get',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getLoginUser
     * @param creationTime 
     * @param id 
     * @param lastAccessedTime 
     * @param maxInactiveInterval 
     * @param _new 
     * @param valueNames 
     * @returns CommonResponse_LoginUserVO_ OK
     * @throws ApiError
     */
    public static getLoginUserUsingGet(
creationTime?: number,
id?: string,
lastAccessedTime?: number,
maxInactiveInterval?: number,
_new?: boolean,
valueNames?: Array<string>,
): CancelablePromise<CommonResponse_LoginUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/get/login',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'valueNames': valueNames,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getUserVoById
     * @param id id
     * @returns CommonResponse_UserVO_ OK
     * @throws ApiError
     */
    public static getUserVoByIdUsingGet(
id?: number,
): CancelablePromise<CommonResponse_UserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/get/vo',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listUserByPage
     * @param userQueryRequest userQueryRequest
     * @returns CommonResponse_Page_User_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listUserByPageUsingPost(
userQueryRequest: UserQueryRequest,
): CancelablePromise<CommonResponse_Page_User_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/list/page',
            body: userQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listUserVoByPage
     * @param userQueryRequest userQueryRequest
     * @returns CommonResponse_Page_UserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listUserVoByPageUsingPost(
userQueryRequest: UserQueryRequest,
): CancelablePromise<CommonResponse_Page_UserVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/list/page/vo',
            body: userQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userLogin
     * @param userLoginRequest userLoginRequest
     * @param creationTime 
     * @param id 
     * @param lastAccessedTime 
     * @param maxInactiveInterval 
     * @param _new 
     * @param valueNames 
     * @returns CommonResponse_LoginUserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLoginUsingPost(
userLoginRequest: UserLoginRequest,
creationTime?: number,
id?: string,
lastAccessedTime?: number,
maxInactiveInterval?: number,
_new?: boolean,
valueNames?: Array<string>,
): CancelablePromise<CommonResponse_LoginUserVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/login',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'valueNames': valueNames,
            },
            body: userLoginRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userLogout
     * @param creationTime 
     * @param id 
     * @param lastAccessedTime 
     * @param maxInactiveInterval 
     * @param _new 
     * @param valueNames 
     * @returns CommonResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLogoutUsingPost(
creationTime?: number,
id?: string,
lastAccessedTime?: number,
maxInactiveInterval?: number,
_new?: boolean,
valueNames?: Array<string>,
): CancelablePromise<CommonResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/logout',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'valueNames': valueNames,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userRegister
     * @param userRegisterRequest userRegisterRequest
     * @returns CommonResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userRegisterUsingPost(
userRegisterRequest: UserRegisterRequest,
): CancelablePromise<CommonResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/register',
            body: userRegisterRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateUser
     * @param userUpdateRequest userUpdateRequest
     * @returns CommonResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUserUsingPost(
userUpdateRequest: UserUpdateRequest,
): CancelablePromise<CommonResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/update',
            body: userUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateMyUser
     * @param userUpdateMyRequest userUpdateMyRequest
     * @param creationTime 
     * @param id 
     * @param lastAccessedTime 
     * @param maxInactiveInterval 
     * @param _new 
     * @param valueNames 
     * @returns CommonResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateMyUserUsingPost(
userUpdateMyRequest: UserUpdateMyRequest,
creationTime?: number,
id?: string,
lastAccessedTime?: number,
maxInactiveInterval?: number,
_new?: boolean,
valueNames?: Array<string>,
): CancelablePromise<CommonResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/update/my',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'valueNames': valueNames,
            },
            body: userUpdateMyRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}

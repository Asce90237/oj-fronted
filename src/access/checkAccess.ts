import { ACCESS_ENUM } from "@/access/accessEnum";

/**
 * 检查权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要的权限
 * @return boolean 有无权限
 */
export const checkAccess = (
  loginUser: { userRole: string },
  needAccess = ACCESS_ENUM.NOT_LOGIN
) => {
  // 当前登录用户所需要的权限
  const loginUserAccess = loginUser.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  switch (needAccess) {
    case ACCESS_ENUM.NOT_LOGIN:
      return true;
    case ACCESS_ENUM.USR:
      return loginUserAccess !== ACCESS_ENUM.NOT_LOGIN;
    case ACCESS_ENUM.ADMIN:
      return loginUserAccess === ACCESS_ENUM.ADMIN;
    default:
      return false;
  }
};

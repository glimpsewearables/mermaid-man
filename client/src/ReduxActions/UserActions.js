export const USER_LOGOUT = "USER_LOGOUT";


export function userLogout(logout = false){
    console.log("logout action fired")
    return {
        type: USER_LOGOUT,
        logout,
    }
}   
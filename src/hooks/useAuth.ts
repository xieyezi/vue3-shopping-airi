
export function useAuth() {
    const token = localStorage.getItem('IS_LOGIN')
    console.log('token:',token)
    return token;
}
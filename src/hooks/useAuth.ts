export function useAuth() {
	const token = localStorage.getItem('IS_LOGIN')
	return token
}

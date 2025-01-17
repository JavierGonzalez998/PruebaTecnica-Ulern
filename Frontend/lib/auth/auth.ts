import query from "../conn";

export async function login(email: string, password: string) {
  return query('login', null, 'POST', { email, password })
  .then((res) => {
    return res
  }).catch((e:any) => JSON.stringify({"error": "Error al realizar la solicitud, intente nuevamente"}));
}
export async function logout(access:string){
  return query('logout', access, 'POST')
  .then((res) => {
    return res
  }).catch((e:any) => JSON.stringify({"error": "Error al realizar la solicitud, intente nuevamente"}));
}

export async function register(body:Record<string,string>){
    return query('register', null, 'POST', body)
    .then((res) => res)
    .catch((e:any) => JSON.stringify({'error': "Error al realizar la solicitud, intente nuevamente"}))
}
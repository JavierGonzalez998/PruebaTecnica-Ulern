import query from "../conn";

export async function getUserData(access:string){
    return query('user', access, 'GET')
    .then((res) => res)
    .catch((e:any) => JSON.stringify({'error': "Error al realizar la solicitud, intente nuevamente"}))
}
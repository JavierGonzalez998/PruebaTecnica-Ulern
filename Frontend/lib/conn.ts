export default async function query(url = '', access: string | null = null, method = 'GET', body: Record<string, string | number | null> = {}) {
    try{
        const headers:Record<string, string> = {};;
        const BACKEND_URL = process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost:8000';
        
        // Solo agrega la cabecera de autorización si el access token está presente
        if (access) {
            headers['Authorization'] = `Bearer ${access}`;
        }
        
        headers['Content-Type'] = 'application/json';

        const res = await fetch(`${BACKEND_URL}/api/${url}`, {
            headers: headers,
            method: method,
            body: method != "GET" ? JSON.stringify(body) : null
        })
    
        if (res.status != 200){
            throw new Error()
        }
    
        return await res.json()
    }catch (error) {
        console.error("Fetch error:", error);
        return null;
  }
}
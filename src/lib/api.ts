const API_URL = import.meta.env.PUBLIC_API_URL 

export async function fetchJSON<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// URL de la page de connexion de l'app — locale en dev, https://app.auto-prospect.fr/login en prod
export const APP_LOGIN_URL = import.meta.env.PUBLIC_APP_LOGIN_URL;

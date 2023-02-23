const API_BASE = 'https://api.github.com';

export const gitFetch = async (nameSearch: string) => {
    const response = await fetch(`${API_BASE}/users/${nameSearch}`);
    return response.json();
}
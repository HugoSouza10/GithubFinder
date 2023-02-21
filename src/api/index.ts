const API_BASE = 'https://api.github.com/users';

export const gitFetch = async (nameSearch: string) => {
    const req = await fetch(`${API_BASE}/${nameSearch}`);
    const json = await req.json();
    return json;
}
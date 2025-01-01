const API_BASE_URL = 'https://63ef222ec59531ccf16982c8.mockapi.io/api/v1/';

export const login = async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Failed to log in');
    }

    return await response.json(); // Return the parsed JSON response
};

export const getUsers = () => async () => {
    const response: Response = await fetch(`${API_BASE_URL}/users`, {});

    return await response.json();
}

export const fetchUsersFromApi = async (): Promise<any> => {
    const response: Response = await fetch(API_BASE_URL + 'users');
    if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    return await response.json();
};

export interface LoginCredentials {
  usuarioName: string;
  password: string;
}

export interface AuthResponse {
  error: string | null;
  payload: {
    session_token: string;
    Nombre: string | null;
    Apellido: string;
    Mail: string;
  };
}

export async function authenticateUser(credentials: LoginCredentials): Promise<AuthResponse> {
  try {
    const response = await fetch('https://ingresopas-testing.evolucionseguros.com/dcxapi/api/v1/Seguridad/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Error en la autenticación');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error durante la autenticación:', error);
    throw error;
  }
} 
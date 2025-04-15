export interface CaptchaResponse {
  captchaUrl: string;
  captchaDigest: string;
}

export const generateCaptcha = async (): Promise<CaptchaResponse> => {
  try {
    const response = await fetch("/contacto/zoho-handlers/captcha");

    if (!response.ok) {
      throw new Error("Error al cargar el captcha");
    }

    const data = await response.json();
    return {
      captchaUrl: data.captchaUrl,
      captchaDigest: data.captchaDigest,
    };
  } catch (error) {
    console.error("Error generating captcha:", error);
    throw new Error("Error al cargar el captcha. Por favor, recargue la página.");
  }
}; 
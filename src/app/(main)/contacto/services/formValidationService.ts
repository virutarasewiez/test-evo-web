export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  description: string;
  captchaWord: string;
}

export const validateForm = (formData: FormData): string | null => {
  // Check required fields
  if (!formData.firstName.trim()) {
    return "Nombre no puede estar vacío";
  }
  if (!formData.lastName.trim()) {
    return "Apellidos no puede estar vacío";
  }
  if (!formData.email.trim()) {
    return "Correo electrónico no puede estar vacío";
  }
  
  // Validate email format
  const emailRegex = /^([\w_][\w\-_.+'&]*)@(?=.{4,256}$)(([\w]+)([-_]*[\w])*[.])+[a-zA-Z]{2,22}$/;
  if (!emailRegex.test(formData.email)) {
    return "Introduzca una ID de correo electrónico válida";
  }
  
  if (!formData.phone.trim()) {
    return "Número de teléfono no puede estar vacío";
  }
  if (!formData.subject.trim()) {
    return "Asunto no puede estar vacío";
  }
  if (!formData.captchaWord.trim()) {
    return "Introduzca el código captcha";
  }

  return null;
}; 
import type { FormData } from './formValidationService';

export interface FormSubmissionResponse {
  success: boolean;
  error?: string;
}

export const submitForm = async (
  formData: FormData,
  captchaDigest: string,
  attachments: File[]
): Promise<FormSubmissionResponse> => {
  try {
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("xnQsjsdp", "edbsna02549fc4e9c14452e01234e3ddfbaf2");
    formDataToSubmit.append("xmIwtLD", "edbsn6279170e24c1423ab95f4f2c1db85249e67d3ac5720223543b4628327faa4690");
    formDataToSubmit.append("xJdfEaS", captchaDigest);
    formDataToSubmit.append("actionType", "Q2FzZXM=");
    formDataToSubmit.append("First Name", formData.firstName);
    formDataToSubmit.append("Contact Name", formData.lastName);
    formDataToSubmit.append("Email", formData.email);
    formDataToSubmit.append("Phone", formData.phone);
    formDataToSubmit.append("Subject", formData.subject);
    formDataToSubmit.append("Description", formData.description);
    formDataToSubmit.append("zsWebFormCaptchaWord", formData.captchaWord);

    // Append attachments
    attachments.forEach((file, index) => {
      formDataToSubmit.append(`attachment_${index + 1}`, file);
    });

    const response = await fetch("/contacto/zoho-handlers/submit-form", {
      method: "POST",
      body: formDataToSubmit,
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return { success: true };
    } else {
      return {
        success: false,
        error: result.error || "Error al enviar el formulario. Por favor, inténtelo de nuevo."
      };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      error: "Error al enviar el formulario. Por favor, inténtelo de nuevo."
    };
  }
}; 
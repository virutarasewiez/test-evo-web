export const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB
export const MAX_ATTACHMENTS = 5;

const unsupportedExtensions = [
  "ade", "adp", "apk", "appx", "appxbundle", "bat", "cab", "cer", "chm", "cmd",
  "com", "cpl", "dll", "dmg", "exe", "hlp", "hta", "ins", "iso", "isp",
  "jar", "js", "jse", "lnk", "mde", "msc", "msi", "msix", "msixbundle", "msp",
  "mst", "nsh", "pif", "ps1", "pst", "reg", "scr", "sct", "shb", "sys",
  "tmp", "url", "vb", "vbe", "vbs", "vxd", "wsc", "wsf", "wsh", "terminal",
];

export const validateFile = (file: File, currentAttachments: File[]): string | null => {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return "El tamaño de archivo máximo permitido es 20MB.";
  }

  // Check file extension
  const extension = file.name.split(".").pop()?.toLowerCase();
  if (extension && unsupportedExtensions.includes(extension)) {
    return "El archivo no se ha adjuntado porque su extensión no es compatible.";
  }

  // Check if we already have 5 attachments
  if (currentAttachments.length >= MAX_ATTACHMENTS) {
    return "Puede adjuntar un máximo de 5 archivos a la vez.";
  }

  return null;
}; 
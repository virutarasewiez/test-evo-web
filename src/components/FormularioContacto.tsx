"use client";

import { useState, useRef, useEffect, type FormEvent, type ChangeEvent } from "react"
import Image from "next/image"
import { generateCaptcha } from "../app/(main)/contacto/services/captchaService"
import { validateFile, MAX_ATTACHMENTS } from "../app/(main)/contacto/services/fileService"
import { validateForm, type FormData } from "../app/(main)/contacto/services/formValidationService"
import { submitForm } from "../app/(main)/contacto/services/formSubmissionService"

interface FormularioContactoProps {
  className?: string;
}

export default function FormularioContacto({ className = "" }: FormularioContactoProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captchaUrl, setCaptchaUrl] = useState<string | null>(null)
  const [captchaDigest, setCaptchaDigest] = useState("")
  const [attachments, setAttachments] = useState<File[]>([])
  const [formError, setFormError] = useState<string | null>(null)
  const [formSuccess, setFormSuccess] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Form fields
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")
  const [captchaWord, setCaptchaWord] = useState("")
  const [selectedOption, setSelectedOption] = useState<string>("")

  const options = [
    { value: "", label: "Seleccione una opción" },
    { value: "Siniestro", label: "Siniestro" },
    { value: "Venta", label: "Venta" },
    { value: "Administración", label: "Administración" },
    { value: "Productores", label: "Productores" },
    { value: "Mesa de ayuda PAS", label: "Mesa de ayuda PAS" },
    { value: "Convenio UOM", label: "Convenio UOM" }
  ]

  // Load captcha on component mount
  useEffect(() => {
    loadCaptcha()
  }, [])

  const loadCaptcha = async () => {
    try {
      const { captchaUrl, captchaDigest } = await generateCaptcha()
      setCaptchaUrl(captchaUrl)
      setCaptchaDigest(captchaDigest)
    } catch (error) {
      if (error instanceof Error) {
        setFormError(error.message)
      }
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const error = validateFile(file, attachments)
      
      if (error) {
        setFormError(error)
        return
      }

      setAttachments([...attachments, file])

      // Reset the input so the same file can be selected again if removed
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const removeAttachment = (index: number) => {
    const newAttachments = [...attachments]
    newAttachments.splice(index, 1)
    setAttachments(newAttachments)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormError(null)
    setShowModal(true)

    const formData: FormData = {
      firstName,
      lastName,
      email,
      phone,
      subject: selectedOption ? `${selectedOption} - ${subject}` : subject,
      description,
      captchaWord
    }

    const validationError = validateForm(formData)
    if (validationError) {
      setFormError(validationError)
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitForm(formData, captchaDigest, attachments)

      if (result.success) {
        // Reset form on success
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setSubject("")
        setSelectedOption("")
        setDescription("")
        setCaptchaWord("")
        setAttachments([])
        setFormSuccess(true)
        loadCaptcha() // Generate new captcha
      } else {
        setFormError(result.error || "Error al enviar el formulario. Por favor, inténtelo de nuevo.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormError("Error al enviar el formulario. Por favor, inténtelo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setShowModal(false)
    setFormError(null)
    setFormSuccess(false)
  }

  return (
    <div className={`bg-white ${className}`}>
      <div className="max-w-3xl mx-auto bg-white rounded-lg p-6">
        {formError && (
          <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded">
            {formError}
          </div>
        )}

        {formSuccess && (
          <div className="mb-6 p-4 bg-green-50 text-green-800 border border-green-200 rounded">
            Su formulario ha sido enviado correctamente. Gracias por contactarnos.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                maxLength={120}
                required
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Apellidos <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                maxLength={120}
                required
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={120}
                required
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Número de teléfono <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={120}
                required
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Asunto <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <select
                  id="subjectOption"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b42830] text-gray-900"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  maxLength={255}
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b42830] text-gray-900"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              maxLength={3000}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Adjunto</label>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={attachments.length >= MAX_ATTACHMENTS}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 text-gray-700"
              >
                Adjuntar archivos
              </button>
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                className="hidden"
                disabled={attachments.length >= MAX_ATTACHMENTS}
              />
            </div>

            <div className="text-xs text-gray-500 mt-1">
              Cada archivo puede tener hasta 20 MB de tamaño.
              {attachments.length >= MAX_ATTACHMENTS && (
                <span className="text-amber-600 ml-2">Puede adjuntar un máximo de 5 archivos a la vez.</span>
              )}
            </div>

            {attachments.length > 0 && (
              <div className="mt-2 space-y-2">
                {attachments.map((file, index) => (
                  <div key={index} className="flex items-center text-sm bg-gray-50 p-2 rounded text-gray-700">
                    <span className="flex-1 truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeAttachment(index)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
              Captcha <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              {captchaUrl ? (
                <div className="flex items-center">
                  <Image
                    src={captchaUrl || "/placeholder.svg"}
                    alt="CAPTCHA"
                    width={180}
                    height={50}
                    className="border border-gray-300 rounded"
                  />
                  <button
                    type="button"
                    onClick={loadCaptcha}
                    className="ml-2 text-[#b42830] hover:text-[#b42830]"
                  >
                    Actualizar
                  </button>
                </div>
              ) : (
                <div className="flex items-center text-gray-700">
                  <span>Cargando...</span>
                </div>
              )}
              <input
                type="text"
                id="captcha"
                value={captchaWord}
                onChange={(e) => setCaptchaWord(e.target.value)}
                className="max-w-[180px] px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                required
              />
            </div>
          </div>

          <div className="flex justify-center space-x-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-[#b42830] text-white rounded-md hover:bg-[#dd1c1c] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
            <button
              type="button"
              onClick={() => {
                setFirstName("")
                setLastName("")
                setEmail("")
                setPhone("")
                setSubject("")
                setSelectedOption("")
                setDescription("")
                setCaptchaWord("")
                setAttachments([])
                setFormError(null)
                setFormSuccess(false)
                loadCaptcha()
              }}
              className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            >
              Restablecer
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {(formError || formSuccess) && showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm"></div>
          <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            {formError && (
              <div className="text-center">
                <div className="text-red-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Error</h3>
                <p className="text-gray-600 mb-4">{formError}</p>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            )}

            {formSuccess && (
              <div className="text-center">
                <div className="text-green-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">¡Éxito!</h3>
                <p className="text-gray-600 mb-4">Su formulario ha sido enviado correctamente. Gracias por contactarnos.</p>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 
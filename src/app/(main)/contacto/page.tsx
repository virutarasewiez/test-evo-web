"use client"

import { useState, useRef, useEffect, type FormEvent, type ChangeEvent } from "react"
import Image from "next/image"
import { generateCaptcha } from "./services/captchaService"
import { validateFile, MAX_ATTACHMENTS } from "./services/fileService"
import { validateForm, type FormData } from "./services/formValidationService"
import { submitForm } from "./services/formSubmissionService"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captchaUrl, setCaptchaUrl] = useState<string | null>(null)
  const [captchaDigest, setCaptchaDigest] = useState("")
  const [attachments, setAttachments] = useState<File[]>([])
  const [formError, setFormError] = useState<string | null>(null)
  const [formSuccess, setFormSuccess] = useState(false)
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

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Necesitas asesoramiento personalizado?</h2>
            <div className="h-1 w-24 bg-[#b42830] mx-auto rounded"></div>
          </div>
          
          <p className="text-lg mb-6 text-gray-800">
            Nuestros expertos están listos para ayudarte a encontrar la mejor solución para tus necesidades.
          </p>
        </div>

        </section>

        <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-[#b42830]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">En caso de fallecimiento</h3>
                <p className="text-2xl font-semibold text-[#b42830]">0800-345-7373</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-[#b42830]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Para otras Consultas</h3>
                <p className="text-2xl font-semibold text-[#b42830] mb-2">(5411) 5278 – 3600</p>
                <p className="text-gray-600">Lunes a Viernes</p>
                <p className="text-gray-600">09:00 a 17:00 horas</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-[#b42830]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">WhatsApp</h3>
                <a href="https://wa.me/5491126589562" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-[#b42830] hover:text-[#b42830] transition-colors">
                  54 911 2658 9562
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>






      AQUI

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


    </div>
  )
}


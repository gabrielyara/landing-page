import React, { useEffect, useRef, useState } from 'react'

type Data = { name: string; email: string; phone: string; message: string }

export default function ContactForm() {
  const [data, setData] = useState<Data>({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Partial<Data>>({})
  const [sent, setSent] = useState(false)
  const nameRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => { nameRef.current?.focus() }, [])

  function validate() {
    const e: Partial<Data> = {}
    if (!data.name.trim()) e.name = 'Nome obrigatório'
    if (!data.email.includes('@')) e.email = 'E-mail inválido'
    if (!data.message.trim()) e.message = 'Mensagem vazia'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setTimeout(() => {
      setSent(true)
      setData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSent(false), 2500)
    }, 600)
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <input ref={nameRef} className={`box ${errors.name ? 'error' : ''}`} placeholder="Seu nome" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
      {errors.name && <small className="error-text">{errors.name}</small>}

      <input className={`box ${errors.email ? 'error' : ''}`} placeholder="Seu email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
      {errors.email && <small className="error-text">{errors.email}</small>}

      <input className="box" placeholder="Seu telefone" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />

      <textarea className={`box ${errors.message ? 'error' : ''}`} placeholder="Sua mensagem" value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} rows={5} />
      {errors.message && <small className="error-text">{errors.message}</small>}

      <button className="btn" type="submit">Enviar mensagem</button>
      {sent && <div className="toast">Mensagem enviada! Obrigado.</div>}
    </form>
  )
}

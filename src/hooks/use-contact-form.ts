import * as React from "react"
import { toast } from "sonner"

export function useContactForm() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast("Thanks for reaching out! We will get back to you soon.")
    setValues({ name: "", email: "", message: "" })
  }

  return { values, handleChange, handleSubmit }
}

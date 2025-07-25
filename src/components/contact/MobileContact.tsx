import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useContactForm } from "@/hooks/use-contact-form"

const MobileContact = () => {
  const { values, handleChange, handleSubmit } = useContactForm()

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4">
      <Input
        name="name"
        placeholder="Your Name"
        value={values.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <Textarea
        name="message"
        placeholder="Message"
        value={values.message}
        onChange={handleChange}
        className="min-h-[100px]"
      />
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}

export default MobileContact

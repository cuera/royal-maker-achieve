import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useContactForm } from "@/hooks/use-contact-form"

const DesktopContact = () => {
  const { values, handleChange, handleSubmit } = useContactForm()

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="min-h-[120px]"
          />
          <Button type="submit" className="ml-auto block">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default DesktopContact

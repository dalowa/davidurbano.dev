

import { cn } from '@/src/lib/utils'
import { SocialLinks } from './SocialLinks'
import { ContactFormField } from './ContactFormField'

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement logic
    console.log('Form submitted')
  }

  return (
    <div className={cn(
      "w-full max-w-xs px-4 text-black-dalowa flex flex-col",
      "lg:w-[40vw] lg:h-[650px] lg:max-w-none lg:items-end lg:gap-3",
      "xl:max-w-xl"
    )}>
      <h5 className={cn(
        "hidden font-bold",
        "lg:inline lg:text-2xl lg:max-w-xs lg:w-full",
        "xl:text-4xl xl:max-w-md"
      )}>
        Send a message
      </h5>
      
      <form onSubmit={handleSubmit} className={cn(
        "max-w-xs w-full flex flex-col",
        "lg:text-black-dalowa/65",
        "xl:max-w-md"
      )}>
        <ContactFormField
          label="Full Name"
          type="text"
          placeholder="Your Name"
          required
        />
        
        <ContactFormField
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
        />
        
        <ContactFormField
          label="Subject"
          type="text"
          placeholder="Regarding..."
          required
        />
        
        <ContactFormField
          label="Message"
          type="textarea"
          placeholder="Your message..."
          required
        />
        
        <button
          type="submit"
          className={cn(
            "py-2 px-4 rounded text-white transition-colors duration-200",
            "bg-black-dalowa hover:bg-red-dalowa hover:cursor-pointer"
          )}
        >
          Send
        </button>
      </form>
      <SocialLinks />
    </div>
  )
}
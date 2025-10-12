import { cn } from '@/src/lib/utils'
import { CONTACT_CONFIG } from '@/config/content'
import { SocialLinks } from './SocialLinks'
import { ContactFormField } from './ContactFormField'
import { useContactForm } from '@/src/hooks/useContactForm'

export function ContactForm() {
  const { 
    formData, 
    errors, 
    isSubmitting, 
    submitSuccess,
    handleChange, 
    handleSubmit 
  } = useContactForm()

  return (
    <div className={cn(
      "w-full max-w-xs px-4 text-black-dalowa flex flex-col",
      "lg:w-[40vw] lg:h-[650px] lg:max-w-none lg:items-end lg:gap-3",
      "xl:max-w-xl"
    )}>
      <h5 className={cn(
        "hidden font-bold",
        "lg:inline lg:text-2xl lg:max-w-xs lg:w-full",
        "xl:text-3xl xl:max-w-md"
      )}>
        {CONTACT_CONFIG.formTitle}
      </h5>
      
      {submitSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ¡Mensaje enviado exitosamente!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={cn(
        "max-w-xs w-full flex flex-col",
        "lg:text-black-dalowa/65",
        "xl:max-w-md"
      )}>
        {CONTACT_CONFIG.fields.map((field) => (
          <ContactFormField
            key={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            onChange={handleChange}
            stateValue={formData[field.name as keyof typeof formData]}
            error={errors[field.name]}
          />
        ))}
        <label className='hidden'>
          <input
          placeholder='detect bots' 
          name="website" 
          type="text" 
          tabIndex={-1}
          autoComplete="off"
          />
        </label>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "py-2 px-4 rounded text-white transition-colors duration-200",
            "bg-black-dalowa focus:bg-red-dalowa focus:border-none focus:outline-none hover:bg-red-dalowa hover:cursor-pointer",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </form>
      
      <SocialLinks />
    </div>
  )
}
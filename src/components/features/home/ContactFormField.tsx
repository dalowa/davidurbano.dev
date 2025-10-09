import { cn } from '@/src/lib/utils'
import { ContactFormFieldProps } from '@/src/types'

export function ContactFormField({ 
  label, 
  type, 
  placeholder, 
  required = false,
  name 
}: ContactFormFieldProps) {
  const inputClasses = cn(
    "p-2 rounded border outline-none transition-colors duration-200",
    "border-black-dalowa/50 focus:border-black-dalowa",
    "placeholder:text-black-dalowa/85"
  )

  const labelClasses = cn(
    "flex flex-col py-2 text-md font-light gap-3",
    "[&>span]:font-bold lg:[&>span]:font-medium"
  )

  return (
    <label className={labelClasses}>
      <span>{label}</span>
      {type === 'textarea' ? (
        <textarea
          className={inputClasses}
          placeholder={placeholder}
          required={required}
          name={name || label.toLowerCase().replace(' ', '_')}
          rows={4}
        />
      ) : (
        <input
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          required={required}
          name={name || label.toLowerCase().replace(' ', '_')}
        />
      )}
    </label>
  )
}
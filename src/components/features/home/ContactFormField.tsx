import { cn } from '@/src/lib/utils'
import { ContactFormFieldProps } from '@/src/types'

export function ContactFormField({ 
  label, 
  type, 
  placeholder, 
  required = false,
  name,
  stateValue,
  onChange,
  error
}: ContactFormFieldProps) {
  const inputClasses = cn(
    "p-2 rounded border outline-none transition-colors duration-200",
    "placeholder:text-black-dalowa/50",
    error 
      ? "border-red-800 focus:border-red-200" 
      : "border-black-dalowa/10 focus:border-black-dalowa"
  )

  const labelClasses = cn(
    "flex flex-col py-2 text-md font-light gap-3",
    "[&>span]:font-bold lg:[&>span]:font-medium",
    error && "[&>span]:text-red-500"
  )

  const value = stateValue || ''
  const fieldName = name || label.toLowerCase().replace(' ', '_')

  const handleChange = (newValue: string) => {
    if (onChange) {
      onChange(fieldName, newValue)
    }
  }

  return (
    <label className={labelClasses}>
      <span>{error ? `${label} is required` : label}</span>
      {type === 'textarea' ? (
        <textarea
          className={inputClasses}
          placeholder={placeholder}
          required={required}
          name={fieldName}
          rows={4}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      ) : (
        <input
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          required={required}
          name={fieldName}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
    </label>
  )
}
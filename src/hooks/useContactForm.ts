
import { useState } from 'react'
import { FormData } from '../types/type-hooks'

/**
 * Custom hook for managing contact form state and validation
 * Provides complete form handling including validation, submission, and error management
 * 
 * Features:
 * - Real-time field validation
 * - Form submission with API integration
 * - Error handling and user feedback
 * - Success state management
 * - Form reset functionality
 * 
 * @returns Object containing form state, handlers, and utility functions
 * 
 * @example
 * ```typescript
 * function ContactForm() {
 *   const {
 *     formData,
 *     errors,
 *     isSubmitting,
 *     submitSuccess,
 *     handleChange,
 *     handleSubmit,
 *     resetForm
 *   } = useContactForm();
 * 
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       <input
 *         value={formData.fullName}
 *         onChange={(e) => handleChange('fullName', e.target.value)}
 *       />
 *       {errors.fullName && <span>{errors.fullName}</span>}
 *       <button type="submit" disabled={isSubmitting}>
 *         {isSubmitting ? 'Sending...' : 'Send'}
 *       </button>
 *     </form>
 *   );
 * }
 * ```
 */
export function useContactForm() {
  // Form data state - stores all input values
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })
  
  // Loading state during form submission
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Error state for field and submission errors
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  // Success state after successful submission
  const [submitSuccess, setSubmitSuccess] = useState(false)

  /**
   * Validates individual form fields based on business rules
   * Provides real-time validation feedback to users
   * 
   * @param name - Field name to validate
   * @param value - Field value to validate
   * @returns Error message string, empty if valid
   */
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        return !value.trim() ? 'Name is required' : ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return !emailRegex.test(value) ? 'Invalid email format' : ''
      case 'subject':
        return !value.trim() ? 'Subject is required' : ''
      case 'message':
        return !value.trim() ? 'Message is required' : ''
      default:
        return ''
    }
  }

  /**
   * Handles form field changes with real-time validation
   * Updates form data and validates the changed field immediately
   * 
   * @param name - Name of the field being changed
   * @param value - New value for the field
   */
  const handleChange = (name?: string, value?: string) => {
    if (!name || value === undefined) return

    // Update form data with new value
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Perform real-time validation on the changed field
    const fieldError = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: fieldError }))
    
    // Clear previous success state when user starts typing
    if (submitSuccess) setSubmitSuccess(false)
  }

  /**
   * Validates all form fields at once
   * Used before form submission to ensure all data is valid
   * 
   * @returns true if all fields are valid, false otherwise
   */
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    // Validate each field and collect errors
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value)
      if (error) newErrors[key] = error
    })
    
    // Update error state with all validation results
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Resets the form to its initial state
   * Clears all form data, errors, and success states
   */
  const resetForm = () => {
    setFormData({ fullName: '', email: '', subject: '', message: '' })
    setErrors({})
    setSubmitSuccess(false)
  }

  /**
   * Handles form submission with validation and API communication
   * Validates form, sends data to API, and manages loading/success/error states
   * 
   * @param e - Form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields before submission
    if (!validateForm()) return
    
    // Set loading state during API call
    setIsSubmitting(true)
    
    try {
      // Send form data to contact API endpoint
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,  // Map to API expected field names
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      
      // Parse API response
      const result = await response.json();
      
      if (response.ok) {
        // Success: show success state and reset form
        setSubmitSuccess(true);
        resetForm();
      } else {
        // API error: show error message from server
        setErrors({ submit: result.error || 'Error sending form' });
      }
      
    } catch (error) {
      // Network/connection error handling
      console.error('Error submitting form:', error)
      setErrors({ submit: 'Connection error' })
    } finally {
      // Always clear loading state
      setIsSubmitting(false)
    }
  }

  /**
   * Hook return object containing all form functionality
   * Provides complete interface for contact form component integration
   * 
   * @returns {ContactFormHook} Object containing:
   * - formData: Current form field values
   * - errors: Validation error messages for each field
   * - isSubmitting: Loading state during form submission
   * - submitSuccess: Success state after successful submission
   * - handleChange: Function to handle input field changes
   * - handleSubmit: Function to handle form submission
   * - resetForm: Function to reset form to initial state
   * - validateField: Function to validate individual fields
   * - validateForm: Function to validate entire form
   * 
   * @example
   * ```typescript
   * // In a React component
   * const {
   *   formData,
   *   errors,
   *   isSubmitting,
   *   submitSuccess,
   *   handleChange,
   *   handleSubmit,
   *   resetForm
   * } = useContactForm()
   * 
   * return (
   *   <form onSubmit={handleSubmit}>
   *     <input
   *       name="fullName"
   *       value={formData.fullName}
   *       onChange={handleChange}
   *     />
   *     {errors.fullName && <span>{errors.fullName}</span>}
   *     <button type="submit" disabled={isSubmitting}>
   *       {isSubmitting ? 'Sending...' : 'Send'}
   *     </button>
   *   </form>
   * )
   * ```
   */
  return {
    // State
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    
    // Actions
    handleChange,
    handleSubmit,
    resetForm,
    
    // Utilities
    validateField,
    validateForm
  }
}
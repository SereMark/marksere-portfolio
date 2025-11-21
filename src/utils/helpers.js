/**
 * @fileoverview UI utility functions for scrolling and form handling
 */

/**
 * Smoothly scrolls to a specific section on the page
 * @param {string} sectionId - The ID of the target HTML element
 * @param {number} [offset=80] - Pixels to offset from the top (for fixed headers)
 * @returns {boolean} True if element found and scrolled, false if element not found
 * @example
 * scrollToSection('about', 100); // Scrolls to #about with 100px offset
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (!element) {
    console.error(`Section with id "${sectionId}" not found`);
    return false;
  }

  const targetPosition = element.offsetTop - offset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  return true;
};

/**
 * Handles contact form submission via mailto link
 * Opens user's default email client with pre-filled subject and body
 * @param {Object} formData - The form data object
 * @param {string} formData.name - Contact's name
 * @param {string} formData.email - Contact's email address
 * @param {string} formData.message - Contact message
 * @returns {Promise<boolean>} True if mailto opened successfully, false on error
 * @example
 * await handleContactSubmit({ 
 *   name: 'John Doe', 
 *   email: 'john@example.com', 
 *   message: 'Hello!' 
 * });
 */
export const handleContactSubmit = async (formData) => {
  try {
    const subject = encodeURIComponent('Portfolio Contact Form');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:seremark056@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
    return true;
  } catch (error) {
    console.error('Error sending message:', error);
    return false;
  }
};

/**
 * Debounces a function call to limit execution frequency
 * Useful for scroll, resize, and input event handlers
 * @param {Function} func - The function to debounce
 * @param {number} wait - Milliseconds to wait before executing
 * @returns {Function} Debounced function
 * @example
 * const debouncedSearch = debounce(searchFunction, 300);
 * input.addEventListener('input', debouncedSearch);
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
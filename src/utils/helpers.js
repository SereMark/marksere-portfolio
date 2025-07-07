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
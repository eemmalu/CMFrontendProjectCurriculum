import { useState } from 'react';
// TODO: Import Card components from '@/components/ui/card'
// TODO: Import Button from '@/components/ui/button'
// TODO: Import Input from '@/components/ui/input'
// TODO: Import Badge from '@/components/ui/badge'

export default function ContactForm() {
  // TODO: Create state for name, email, and message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // TODO: Log the form data to console
    console.log({ name, email, message });

    // TODO: Set submitted to true
    setSubmitted(true);

    // Reset submitted status after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  return (
    // TODO: Wrap everything in a Card component with a max width of 500px
    <div className="w-full max-w-md">
      {/* TODO: Add CardHeader with CardTitle "Contact Us" */}
      <div>
        <h2>Contact Us</h2>
      </div>

      {/* TODO: Add CardContent with the form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name field */}
          <div>
            <label className="text-sm font-medium flex items-center gap-2">
              Name
              {/* TODO: Add a Badge with variant "secondary" and text "Required" */}
            </label>
            {/* TODO: Replace with Input component */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>

          {/* Email field */}
          <div>
            <label className="text-sm font-medium flex items-center gap-2">
              Email
              {/* TODO: Add a Badge with variant "secondary" and text "Required" */}
            </label>
            {/* TODO: Replace with Input component */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Message field */}
          <div>
            <label className="text-sm font-medium flex items-center gap-2">
              Message
              {/* TODO: Add a Badge with variant "secondary" and text "Required" */}
            </label>
            {/* TODO: Replace with Input component */}
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
            />
          </div>

          {/* Submit button */}
          {/* TODO: Replace with Button component (full width) */}
          <button type="submit" className="w-full">
            Send Message
          </button>

          {/* Success message */}
          {submitted && (
            <div className="text-center">
              {/* TODO: Add a Badge with variant "default" and text "Message sent successfully!" */}
              <span>Message sent successfully!</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

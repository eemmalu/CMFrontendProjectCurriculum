import { Button } from './components/Button'
import { Card } from './components/Card'
import { Input } from './components/Input'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Button Examples */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Buttons</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Primary Buttons</h3>
              <div className="flex gap-4">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Secondary Buttons</h3>
              <div className="flex gap-4">
                <Button variant="secondary" size="sm">Small</Button>
                <Button variant="secondary" size="md">Medium</Button>
                <Button variant="secondary" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Danger Buttons</h3>
              <div className="flex gap-4">
                <Button variant="danger" size="sm">Delete</Button>
                <Button variant="danger" size="md">Remove</Button>
                <Button variant="danger" size="lg">Destroy</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Disabled Buttons</h3>
              <div className="flex gap-4">
                <Button variant="primary" disabled>Disabled Primary</Button>
                <Button variant="secondary" disabled>Disabled Secondary</Button>
                <Button variant="danger" disabled>Disabled Danger</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Card Examples */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Cards</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Standard Card">
              <p>This is a standard card without hover effects.</p>
            </Card>

            <Card title="Hoverable Card" hoverable>
              <p>Hover over this card to see the lift effect!</p>
            </Card>

            <Card title="Feature Card" hoverable>
              <p className="mb-4">This card demonstrates the group hover feature where the title changes color.</p>
              <Button variant="primary" size="sm">Learn More</Button>
            </Card>

            <Card title="Another Card" hoverable>
              <p className="mb-2">Cards can contain any content:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Text content</li>
                <li>Buttons</li>
                <li>Images</li>
                <li>And more!</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Input Examples */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Inputs</h2>

          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            <Input
              label="Username"
              type="text"
              placeholder="Choose a username"
              error="This username is already taken"
            />

            <div className="flex gap-4 mt-6">
              <Button variant="primary" size="md">Submit</Button>
              <Button variant="secondary" size="md">Cancel</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App

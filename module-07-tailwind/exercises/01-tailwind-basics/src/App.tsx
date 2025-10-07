function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* TODO: Add Tailwind classes to style this card:
          - White background
          - Padding: 24px (p-6)
          - Rounded corners: large (rounded-lg)
          - Shadow: medium (shadow-md)
          - Max width: 384px (max-w-sm)
          - Center with margin auto (mx-auto)
      */}
      <div className="">
        {/* TODO: Add Tailwind classes to center the content */}
        <div className="">
          {/* TODO: Add Tailwind classes to style the avatar:
              - Width and height: 96px (w-24 h-24)
              - Rounded: full circle (rounded-full)
              - Border: 4px blue (border-4 border-blue-500)
              - Center with margin (mx-auto)
              - Margin bottom: 16px (mb-4)
          */}
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className=""
          />

          {/* TODO: Add Tailwind classes to style the name:
              - Text size: 2xl (text-2xl)
              - Font weight: bold (font-bold)
              - Text color: gray-800 (text-gray-800)
              - Margin bottom: 8px (mb-2)
          */}
          <h2 className="">
            Jane Doe
          </h2>

          {/* TODO: Add Tailwind classes to style the title:
              - Text color: gray-600 (text-gray-600)
              - Margin bottom: 16px (mb-4)
          */}
          <p className="">
            Frontend Developer
          </p>

          {/* TODO: Add Tailwind classes to style the bio:
              - Text size: small (text-sm)
              - Text color: gray-700 (text-gray-700)
              - Margin bottom: 24px (mb-6)
              - Text alignment: center (text-center)
          */}
          <p className="">
            Passionate about building beautiful web applications with React and Tailwind CSS.
          </p>

          {/* TODO: Add Tailwind classes to style the button:
              - Background: blue-500 (bg-blue-500)
              - Text color: white (text-white)
              - Padding: horizontal 24px, vertical 8px (px-6 py-2)
              - Rounded: medium (rounded-md)
              - Font weight: medium (font-medium)
              - Hover: darker blue background (hover:bg-blue-600)
              - Transition: colors (transition-colors)
              - Full width (w-full)
          */}
          <button className="">
            View Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

// TODO: Import Routes and Route from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar appears on all pages */}
      <Navbar />

      <main className="container mx-auto p-8">
        {/* TODO: Set up Routes */}
        {/* Route for "/" -> Home component */}
        {/* Route for "/posts/:postId" -> PostDetail component */}
        {/* Route for "*" (catch-all) -> NotFound component */}
        <div>
          <p>Set up your routes here</p>
        </div>
      </main>
    </div>
  );
}

export default App;

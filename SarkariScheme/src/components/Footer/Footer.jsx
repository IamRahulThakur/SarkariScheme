import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-300">Your Company &copy; 2024</p>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-300 hover:text-gray-400">Home</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-gray-400">About</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-gray-400">Services</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Travel Planner</h2>
            <p className="text-sm mt-2">Plan your next adventure!</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Travel Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Tips &amp; Inspiration
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              Have any questions? Feel free to reach out to us.
            </p>
            <p className="text-sm mt-2">Email: info@travelplanner.com</p>
            <p className="text-sm">Phone: +1 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Travel Planner. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

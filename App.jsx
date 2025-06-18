import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "Maruti Swift",
    year: 2019,
    price: "₹4.8L",
    km: "45,000 KM",
    fuel: "Petrol",
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
  },
  {
    id: 2,
    name: "Hyundai i20",
    year: 2020,
    price: "₹6.2L",
    km: "30,000 KM",
    fuel: "Diesel",
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
  }
];

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-purple-700">Jaroo Moto Corp</h1>
      <p className="text-gray-600 mt-2">Your trusted partner in pre-owned cars</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="border rounded-xl shadow-md overflow-hidden">
            <img src={car.image} alt={car.name} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-pink-600">{car.name}</h2>
              <p>{car.year} • {car.km} • {car.fuel}</p>
              <p className="text-lg font-bold text-purple-700">{car.price}</p>
              <Link to={\`/car/\${car.id}\`} className="text-sm text-blue-500 underline">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CarDetail() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));
  if (!car) return <div className="p-4">Car not found</div>;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-pink-700">{car.name}</h1>
      <img src={car.image} className="w-full max-w-xl rounded-xl mt-4" alt="" />
      <p className="mt-4">Year: {car.year}</p>
      <p>Kilometers Driven: {car.km}</p>
      <p>Fuel Type: {car.fuel}</p>
      <p className="text-2xl text-purple-600 mt-2">Price: {car.price}</p>
    </div>
  );
}

function SellForm() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Sell Your Car</h2>
      <form className="grid gap-4">
        <input type="text" placeholder="Your Name" className="border rounded p-2" />
        <input type="text" placeholder="Phone Number" className="border rounded p-2" />
        <input type="text" placeholder="Car Model" className="border rounded p-2" />
        <input type="text" placeholder="Year" className="border rounded p-2" />
        <input type="text" placeholder="KM Driven" className="border rounded p-2" />
        <button className="bg-pink-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Contact Us</h2>
      <form className="grid gap-4">
        <input type="text" placeholder="Your Name" className="border rounded p-2" />
        <input type="email" placeholder="Your Email" className="border rounded p-2" />
        <textarea placeholder="Your Message" className="border rounded p-2"></textarea>
        <button className="bg-purple-700 text-white p-2 rounded">Send</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="bg-pink-600 text-white p-4 flex justify-between">
        <Link to="/" className="font-bold">Jaroo Moto</Link>
        <div className="space-x-4">
          <Link to="/sell">Sell Your Car</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/sell" element={<SellForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
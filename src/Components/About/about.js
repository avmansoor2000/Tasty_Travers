import React from 'react';
import './about.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Our Delivery Service</h1>
      </div>
      <div className="about-content">
        <p>
          Welcome to [Your App Name], your trusted partner in delivering delicious meals and more right to your doorstep.
        </p>
        <p>
          Our mission is to provide you with a convenient, fast, and reliable delivery experience. Whether you're craving your favorite restaurant dishes, groceries, or anything in between, we've got you covered.
        </p>
        <p>
          We take pride in our team of dedicated drivers and the relationships we've built with local businesses. Our goal is to ensure that you receive your orders fresh and on time.
        </p>
        <p>
          With [Your App Name], you can:
        </p>
        <ul>
          <li>Explore a wide variety of restaurants and cuisines in your area.</li>
          <li>Order groceries, snacks, and essentials without leaving your home.</li>
          <li>Track your deliveries in real-time.</li>
          <li>Enjoy quick and secure online payment options.</li>
        </ul>
        <p>
          Thank you for choosing [Your App Name] for your delivery needs. We look forward to serving you and making your day a little bit easier.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

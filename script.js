/* Reset and Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #f4f6f8;
  padding: 40px 20px;
  color: #222;
}

/* Section Title */
#certifications h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Grid Layout */
.certification-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Card */
.certification-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.certification-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.certification-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

/* Card Content */
.cert-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cert-provider {
  font-size: 0.85rem;
  color: #777;
}

.cert-content h3 {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.cert-type {
  font-size: 0.8rem;
  color: #0073e6;
}

/* Button */
#showMore {
  display: block;
  margin: 2rem auto 0;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

#showMore:hover {
  background-color: #0056b3;
}

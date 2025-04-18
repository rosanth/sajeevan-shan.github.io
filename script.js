/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f6f8;
  color: #222;
  line-height: 1.6;
  padding: 0 20px;
}

/* Headings */
h1, h2, h3 {
  color: #111;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 60px 20px 40px;
  background: linear-gradient(120deg, #6c63ff, #b49aff);
  color: white;
  border-radius: 16px;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
}

/* About Section */
.about {
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-inline: auto;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 16px;
}

.about p {
  font-size: 1rem;
  color: #333;
}

/* Section Titles */
section h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
}

/* Slider Container */
.slider-container {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  margin-bottom: 40px;
  padding: 10px 5px;
}

.slider-container::-webkit-scrollbar {
  display: none;
}

/* Slider Row */
.card-slider {
  display: flex;
  gap: 16px;
  padding: 5px 5px 20px;
}

/* Card Style */
.certification-card {
  flex: 0 0 auto;
  width: 220px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  scroll-snap-align: start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certification-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.certification-card img {
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.cert-content {
  padding: 10px 12px;
}

.cert-provider {
  font-size: 0.75rem;
  color: #777;
}

.cert-content h3 {
  font-size: 0.95rem;
  margin: 4px 0;
  color: #222;
}

.cert-type {
  font-size: 0.75rem;
  color: #007bff;
}

/* Contact Section */
.contact {
  text-align: center;
  padding: 40px 20px;
  background: #fff;
  border-radius: 12px;
  margin: 60px auto 20px;
  max-width: 800px;
}

.contact h2 {
  margin-bottom: 16px;
}

.contact p {
  color: #444;
  font-size: 1rem;
}

/* Footer */
footer {
  text-align: center;
  font-size: 0.85rem;
  color: #888;
  padding: 30px 10px;
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  padding-top: 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.9);
}

.modal-content {
  margin: auto;
  display: block;
  max-width: 90%;
  max-height: 80%;
  border-radius: 12px;
  animation: zoom 0.3s ease-in-out;
}

@keyframes zoom {
  from {transform: scale(0.7);}
  to {transform: scale(1);}
}

.close {
  position: absolute;
  top: 20px;
  right: 40px;
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.close:hover {
  color: #bbb;
}
a.cert-link {
  display: inline-block;
  margin-top: 6px;
  font-size: 0.75rem;
  color: #007bff !important;
  cursor: pointer;
}

a.cert-link:hover {
  color: #0056b3 !important;
}



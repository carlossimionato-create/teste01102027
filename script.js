:root {
--primary: #2563eb;
--primary-dark: #1d4ed8;
--secondary: #7c3aed;
--dark: #172033;
--text: #4b5563;
--light: #f5f8ff;
--white: #ffffff;
--border: #e5e7eb;
--green: #16a34a;
--orange: #f59e0b;
--shadow: 0 15px 40px rgba(37, 99, 235, 0.10);
}

{
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
scroll-behavior: smooth;
}

body {
font-family: Arial, Helvetica, sans-serif;
color: var(--text);
background: var(--white);
line-height: 1.6;
}

a {
text-decoration: none;
color: inherit;
}

.header {
position: sticky;
top: 0;
z-index: 1000;
background: rgba(255, 255, 255, 0.96);
border-bottom: 1px solid var(--border);
backdrop-filter: blur(10px);
}

.navbar {
max-width: 1200px;
margin: auto;
padding: 18px 25px;
display: flex;
align-items: center;
justify-content: space-between;
}

.logo {
display: flex;
align-items: center;
gap: 10px;
color: var(--dark);
font-size: 1.25rem;
font-weight: 800;
}

.logo span {
font-size: 1.6rem;
}

.nav-links {
display: flex;
list-style: none;
gap: 28px;
}

.nav-links a {
color: var(--text);
font-size: 0.95rem;
font-weight: 600;
transition: 0.3s;
}

.nav-links a:hover {
color: var(--primary);
}

.menu-btn {
display: none;
border: none;
background: transparent;
color: var(--dark);
font-size: 1.7rem;
cursor: pointer;
}

/* HERO */

.hero {
min-height: 650px;
padding: 80px 7%;
display: grid;
grid-template-columns: 1.3fr 0.7fr;
align-items: center;
gap: 60px;
background:
radial-gradient(circle at 90% 20%, #dbeafe 0, transparent 30%),
linear-gradient(135deg, #f8fbff, #eef5ff);
}

.hero-content {
max-width: 700px;
}

.tag,
.section-title > span {
color: var(--primary);
font-size: 0.8rem;
letter-spacing: 2px;
font-weight: 800;
}

.hero h1 {
margin: 18px 0;
color: var(--dark);
font-size: clamp(2.8rem, 6vw, 5rem);
line-height: 1.05;
}

.hero h1 span {
color: var(--primary);
display: block;
}

.hero p {
max-width: 650px;
font-size: 1.15rem;
margin-bottom: 30px;
}

.hero-buttons {
display: flex;
gap: 15px;
flex-wrap: wrap;
}

.btn {
display: inline-flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 10px;
padding: 14px 22px;
font-size: 0.95rem;
font-weight: 700;
cursor: pointer;
transition: 0.3s;
}

.btn-primary {
color: white;
background: var(--primary);
}

.btn-primary:hover {
background: var(--primary-dark);
transform: translateY(-2px);
}

.btn-secondary {
color: var(--primary);
background: white;
border: 1px solid #bfdbfe;
}

.btn-secondary:hover {
background: #eff6ff;
}

.hero-card {
background: white;
padding: 45px 35px;
border-radius: 25px;
text-align: center;
box-shadow: var(--shadow);
border: 1px solid #e0eaff;
}

.book-icon {
font-size: 5rem;
margin-bottom: 15px;
}

.hero-card h3 {
color: var(--dark);
font-size: 1.5rem;
margin-bottom: 10px;
}

/* SECTIONS */

.section {
max-width: 1200px;
margin: auto;
padding: 100px 25px;
}

.section-title {
max-width: 750px;
margin: 0 auto 55px;
text-align: center;
}

.section-title h2 {
color: var(--dark);
font-size: clamp(2rem, 4vw, 3rem);
line-height: 1.15;
margin: 12px 0;
}

.section-title p {
font-size: 1.05rem;
}

/* ABOUT */

.about {
background: white;
}

.about-grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 60px;
align-items: start;
}

.about-text p {
margin-bottom: 20px;
}

.highlight {
margin-top: 30px;
padding: 20px;
border-left: 4px solid var(--primary);
background: #eff6ff;
border-radius: 0 10px 10px 0;
}

.highlight strong {
color: var(--primary-dark);
}

.highlight p {
margin-top: 8px;
margin-bottom: 0;
}

.about-statistics {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 18px;
}

.stat-card {
padding: 25px;
background: var(--light);
border-radius: 16px;
border: 1px solid #e5edff;
}

.stat-card span {
font-size: 2rem;
}

.stat-card h3 {
color: var(--dark);
margin: 8px 0;
}

/* DIFFICULTIES */

.difficulties {
max-width: none;
background: #f7faff;
}

.difficulties > * {
max-width: 1200px;
margin-left: auto;
margin-right: auto;
}

.cards {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 20px;
}

.info-card {
padding: 30px 25px;
background: white;
border-radius: 18px;
border: 1px solid var(--border);
transition: 0.3s;
}

.info-card:hover {
transform: translateY(-7px);
box-shadow: var(--shadow);
}

.card-icon {
width: 58px;
height: 58px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 15px;
font-size: 1.8rem;
margin-bottom: 20px;
}

.blue {
background: #dbeafe;
}

.purple {
background: #ede9fe;
}

.orange {
background: #fef3c7;
}

.green {
background: #dcfce7;
}

.info-card h3 {
color: var(--dark);
margin-bottom: 10px;
}

/* STRATEGIES */

.strategy-container {
display: grid;
grid-template-columns: 0.75fr 1.25fr;
gap: 40px;
background: #f8fafc;
border-radius: 25px;
padding: 35px;
}

.strategy-list {
display: flex;
flex-direction: column;
gap: 10px;
}

.strategy-btn {
width: 100%;
display: flex;
align-items: center;
gap: 15px;
text-align: left;
padding: 18px;
background: white;
border: 1px solid var(--border);
border-radius: 12px;
color: var(--text);
font-weight: 700;
cursor: pointer;
transition: 0.3s;
}

.strategy-btn span {
color: var(--primary);
}

.strategy-btn:hover,
.strategy-btn.active {
color: white;
background: var(--primary);
border-color: var(--primary);
}

.strategy-btn:hover span,
.strategy-btn.active span {
color: white;
}

.strategy-content {
min-height: 330px;
background: white;
border-radius: 18px;
padding: 40px;
}

.strategy-item {
display: none;
}

.strategy-item.active {
display: block;
animation: fadeIn 0.35s ease;
}

.big-icon {
display: block;
font-size: 3rem;
margin-bottom: 10px;
}

.strategy-item h3 {
color: var(--dark);
font-size: 1.7rem;
margin-bottom: 12px;
}

.strategy-item ul {
margin-top: 20px;
padding-left: 20px;
}

.strategy-item li {
margin-bottom: 8px;
}

/* TEACHERS */

.teachers {
background: white;
}

.teacher-content {
display: grid;
grid-template-columns: 0.8fr 1.2fr;
gap: 70px;
align-items: center;
}

.teacher-image {
min-height: 350px;
border-radius: 25px;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(135deg, #dbeafe, #ede9fe);
}

.teacher-emoji {
font-size: 9rem;
}

.teacher-text h3 {
color: var(--dark);
font-size: 2rem;
margin-bottom: 15px;
}

.check-list {
margin-top: 25px;
}

.check-list div {
margin-bottom: 14px;
color: var(--dark);
font-weight: 600;
}

/* QUOTE */

.quote-section {
padding: 100px 25px;
text-align: center;
background: linear-gradient(135deg, #2563eb, #4f46e5);
color: white;
}

.quote-section > div {
max-width: 900px;
margin: auto;
}

.quote-section span {
display: block;
font-size: 5rem;
height: 60px;
opacity: 0.5;
}

.quote-section h2 {
font-size: clamp(1.8rem, 4vw, 3rem);
line-height: 1.25;
}

.quote-section p {
margin-top: 20px;
opacity: 0.8;
}

/* FORM */

.contact {
max-width: 900px;
}

.contact-form {
padding: 35px;
background: #f8fafc;
border-radius: 20px;
}

.form-row {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
}

.form-group {
display: flex;
flex-direction: column;
margin-bottom: 20px;
}

.form-group label {
color: var(--dark);
font-weight: 700;
margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
width: 100%;
padding: 14px 16px;
border: 1px solid var(--border);
border-radius: 10px;
outline: none;
font: inherit;
background: white;
transition: 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
border-color: var(--primary);
box-shadow: 0 0 0 3px #dbeafe;
}

.form-message {
margin-top: 15px;
font-weight: 700;
color: var(--green);
}

/* FOOTER */

.footer {
background: var(--dark);
color: #cbd5e1;
padding: 50px 25px 20px;
}

.footer-content {
max-width: 1200px;
margin: auto;
display: flex;
justify-content: space-between;
gap: 40px;
}

.footer .logo {
color: white;
margin-bottom: 15px;
}

.footer-content p {
max-width: 450px;
}

.footer-links {
display: flex;
flex-wrap: wrap;
gap: 20px;
}

.footer-links a:hover {
color: white;
}

.copyright {
max-width: 1200px;
margin: 40px auto 0;
padding-top: 20px;
border-top: 1px solid #334155;
text-align: center;
font-size: 0.9rem;
}

/* ANIMAÇÃO */

@keyframes fadeIn {
from {
opacity: 0;
transform: translateY(10px);
}

to {
    opacity: 1;
    transform: translateY(0);
}


}

/* RESPONSIVO */

@media (max-width: 900px) {

.nav-links {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    padding: 20px 25px;
    background: white;
    border-bottom: 1px solid var(--border);
}

.nav-links.active {
    display: flex;
}

.menu-btn {
    display: block;
}

.hero {
    grid-template-columns: 1fr;
    padding-top: 60px;
    padding-bottom: 60px;
}

.about-grid,
.teacher-content {
    grid-template-columns: 1fr;
}

.cards {
    grid-template-columns: 1fr 1fr;
}

.strategy-container {
    grid-template-columns: 1fr;
}


}

@media (max-width: 600px) {

.navbar {
    padding: 15px 20px;
}

.hero {
    padding-left: 20px;
    padding-right: 20px;
}

.hero h1 {
    font-size: 2.7rem;
}

.section {
    padding: 70px 20px;
}

.about-statistics,
.cards,
.form-row {
    grid-template-columns: 1fr;
}

.strategy-container {
    padding: 18px;
}

.strategy-content {
    padding: 25px;
}

.footer-content {
    flex-direction: column;
}

.teacher-emoji {
    font-size: 6rem;
}


}
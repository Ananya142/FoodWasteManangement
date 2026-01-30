# FoodCycle - Food Waste Management System

A comprehensive food waste management system built with HTML, CSS, and JavaScript. This system helps reduce food waste by connecting donors with organizations that can utilize surplus food.

## 🌟 Features

### For Donors
- **Easy Donation Form**: Submit food donation requests with detailed information
- **Real-time Validation**: Client-side validation for all form inputs
- **Newsletter Subscription**: Stay updated with food waste management initiatives
- **Contact Support**: Direct communication with the management team

### For Administrators
- **Dashboard**: Comprehensive admin panel to manage donations
- **Statistics Overview**: Track total donations, pending requests, and completed deliveries
- **Status Management**: Update donation status (pending, completed, cancelled)
- **Data Persistence**: All data stored locally using browser's localStorage

### System Features
- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Local Data Storage**: No backend required - uses browser's localStorage
- **Form Validation**: Comprehensive client-side validation
- **User Feedback**: Success/error messages for all user actions
- **Modern UI**: Clean and intuitive user interface

## 📁 Project Structure

```
Food_waste_management/
├── index.html          # Home page with information and newsletter
├── register.html       # Food donation form
├── contact.html        # Contact form
├── about.html          # About the organization
├── dashboard.html      # Admin dashboard
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── files/              # Images and assets
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend required - runs entirely in the browser

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sajal-2003/Food_waste_management.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Food_waste_management
   ```

3. Open `index.html` in your web browser or serve with any static server

### Usage

#### For Donors:
1. Visit the homepage to learn about food waste management
2. Click "Get Involved" to access the donation form
3. Fill out the donation form with:
   - Personal information (name, email, phone)
   - Collection address
   - Food category (veg, non-veg, both)
   - Quantity in kilograms
   - Food preparation date and time
   - Special notes (optional)
4. Submit the form to create a donation request

#### For Administrators:
1. Click "Dashboard" in the navigation
2. View statistics and donation requests
3. Filter donations by status (all, pending, completed, cancelled)
4. Update donation status using action buttons

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern responsive design with gradients, animations, and glassmorphism effects
- **JavaScript (ES6+)**: Client-side functionality, form validation, and data management
- **Google Fonts**: Typography using Paytone One, Inter, Poppins, and Playfair Display
- **localStorage API**: Browser-based data persistence without backend requirements

### Key JavaScript Classes
- `FoodWasteManager`: Main class handling all data operations
  - Manages donations, contacts, and newsletter subscriptions
  - Provides methods for CRUD operations
  - Handles data persistence with localStorage

### Data Storage
- Uses browser's `localStorage` for data persistence
- No external database required
- Data persists between browser sessions

### Validation Features
- Name validation (minimum 2 characters)
- Email format validation
- Phone number validation (Indian format: 10 digits starting with 6-9)
- Required field validation
- Date/time validation (must be in future)
- Quantity validation (must be positive number)


## 🎨 Customization

### Styling
- Main styles are in `css/style.css`
- Uses Google Fonts (Poppins and Paytone One)
- Boxicons for social media icons
- Custom CSS variables for easy theming

### Functionality
- Core logic in `js/script.js`
- Easy to extend with new features
- Modular class-based architecture

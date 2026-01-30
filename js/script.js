// Food Waste Management System JavaScript

class FoodWasteManager {
    constructor() {
        this.donations = JSON.parse(localStorage.getItem('donations')) || [];
        this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        this.newsletter = JSON.parse(localStorage.getItem('newsletter')) || [];
    }

    // Save data to localStorage
    saveData() {
        localStorage.setItem('donations', JSON.stringify(this.donations));
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
        localStorage.setItem('newsletter', JSON.stringify(this.newsletter));
    }

    // Add donation
    addDonation(donation) {
        donation.id = Date.now();
        donation.status = 'pending';
        donation.dateSubmitted = new Date().toISOString();
        this.donations.push(donation);
        this.saveData();
        return donation.id;
    }

    // Add contact message
    addContact(contact) {
        contact.id = Date.now();
        contact.dateSubmitted = new Date().toISOString();
        this.contacts.push(contact);
        this.saveData();
        return contact.id;
    }

    // Add newsletter subscription
    addNewsletter(email) {
        if (!this.newsletter.includes(email)) {
            this.newsletter.push(email);
            this.saveData();
            return true;
        }
        return false;
    }

    // Get all donations
    getDonations() {
        return this.donations;
    }

    // Get donations by status
    getDonationsByStatus(status) {
        return this.donations.filter(donation => donation.status === status);
    }

    // Update donation status
    updateDonationStatus(id, status) {
        const donation = this.donations.find(d => d.id === id);
        if (donation) {
            donation.status = status;
            this.saveData();
            return true;
        }
        return false;
    }

    // Get statistics
    getStats() {
        const totalDonations = this.donations.length;
        const pendingDonations = this.donations.filter(d => d.status === 'pending').length;
        const completedDonations = this.donations.filter(d => d.status === 'completed').length;
        const totalQuantity = this.donations.reduce((sum, d) => sum + (parseFloat(d.quantity) || 0), 0);

        return {
            totalDonations,
            pendingDonations,
            completedDonations,
            totalQuantity: totalQuantity.toFixed(2)
        };
    }
}

// Initialize the manager
const foodManager = new FoodWasteManager();

// Form validation functions
function validatePhone(phone) {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateName(name) {
    return name.trim().length >= 2;
}

function showMessage(message, type = 'success') {
    // Create message element
    const msgDiv = document.createElement('div');
    msgDiv.className = `alert alert-${type}`;
    msgDiv.textContent = message;
    msgDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

    if (type === 'success') {
        msgDiv.style.backgroundColor = '#4CAF50';
    } else {
        msgDiv.style.backgroundColor = '#f44336';
    }

    document.body.appendChild(msgDiv);

    // Remove after 3 seconds
    setTimeout(() => {
        msgDiv.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(msgDiv);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Export for use in other files
window.FoodWasteManager = FoodWasteManager;
window.foodManager = foodManager;
window.validatePhone = validatePhone;
window.validateEmail = validateEmail;
window.validateName = validateName;
window.showMessage = showMessage;
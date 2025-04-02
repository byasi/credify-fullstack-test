# React User Management System Test

## Overview
This is a 50-minute technical test designed to evaluate your React development skills, particularly focusing on state management, API integration, and form handling. The test involves extending an existing user management system to collect additional user information.

## Current System
The application currently manages users with basic information:
- Name
- Email

## Task Requirements
Your task is to extend the user management system to collect additional information from users:

### New Required Fields
1. Phone Number
2. Tax Identification Number (TIN)
3. National ID Number
4. Address

### Technical Requirements
1. Update the user form to include the new fields
2. Modify the user card display to show the new information
3. Ensure proper validation for all new fields
4. Maintain the existing functionality (add, edit, delete users)
5. Keep the current UI/UX patterns and styling

### Validation Rules
- Phone Number: Must be a valid phone number format
- TIN: Must be a valid tax identification number format
- National ID: Must be a valid national ID format
- Address: Must not be empty

## Time Limit
- Duration: 50 minutes
- Plan your time wisely to complete all requirements

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Evaluation Criteria
Your solution will be evaluated based on:
1. Code quality and organization
2. Implementation of all required fields
3. Proper form validation
4. Maintained existing functionality
5. UI/UX consistency
6. Error handling
7. Code readability

## Tips
- Start by updating the mock API and user interface
- Ensure all new fields are properly validated
- Maintain the existing styling patterns
- Test all CRUD operations with the new fields
- Handle edge cases and validation errors appropriately

Good luck!

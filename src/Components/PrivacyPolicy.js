import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: 1.6,
      color: '#333',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
      }}>
        <h1 style={{
          color: '#2c3e50',
          borderBottom: '2px solid #eaecef',
          paddingBottom: '12px',
          marginBottom: '24px'
        }}>Privacy Policy</h1>
        <p>Welcome to Pixzzle. We are committed to protecting your privacy and providing a safe gaming experience for all our users.</p>

        <h2 style={{ color: '#34495e', marginTop: '28px', marginBottom: '12px' }}>1. Information We Collect</h2>
        <p>We do not collect any personal data directly through our games. Any data processed is solely for core functionality, such as saving your game progress locally on your device.</p>

        <h2 style={{ color: '#34495e', marginTop: '28px', marginBottom: '12px' }}>2. How We Use Information</h2>
        <p>Any non-personal information or gameplay data is used solely to maintain game state, improve game performance, and provide a seamless puzzle-solving experience.</p>

        <h2 style={{ color: '#34495e', marginTop: '28px', marginBottom: '12px' }}>3. Local Storage and Game Progress</h2>
        <p>Game levels, scores, and preferences are stored locally on your device to ensure you can resume play anytime without losing progress.</p>

        <h2 style={{ color: '#34495e', marginTop: '28px', marginBottom: '12px' }}>4. Permissions</h2>
        <p>Our applications require only minimal permissions strictly necessary for app execution and standard platform integration.</p>

        <h2 style={{ color: '#34495e', marginTop: '28px', marginBottom: '12px' }}>5. Third-Party Services</h2>
        <p>Our applications may use trusted third-party services that collect information used to identify you according to their own privacy policies:</p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>Google Play Services:</strong> Used for core Android app runtime, analytics, and platform updates.
          </li>
        </ul>

        <h2 style={{ color: '#34495e', marginTop: '28px', marginBottom: '12px' }}>6. Children's Privacy</h2>
        <p>Our puzzle games are suitable for all ages. We do not knowingly collect personally identifiable information from children under the age of 13. If you believe your child has provided us with personal information, please contact us immediately, and we will delete such data.</p>

        <h2 style={{ color: '#34495e', marginTop: '28px', marginBottom: '12px' }}>7. Data Retention and Deletion</h2>
        <p>We retain game progress data for as long as necessary to provide game services. You have the right to request deletion of your account and associated game progress at any time by contacting us at our support email below.</p>

        <h2 style={{ color: '#34495e', marginTop: '28px', marginBottom: '12px' }}>8. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy periodically. We recommend reviewing this page periodically for any changes. Any updates will take effect immediately upon being posted to this page.</p>

        <h2 style={{ color: '#34495e', marginTop: '28px', marginBottom: '12px' }}>9. Contact Us</h2>
        <p>If you have any questions, suggestions, or requests regarding this Privacy Policy, please contact us at:</p>
        <p>
          <strong>Email:</strong> <a href="mailto:support@ratnakarsingh.info" style={{ color: '#0066cc', textDecoration: 'none' }}>support@ratnakarsingh.info</a><br />
          <strong>Website:</strong> <a href="https://api.ratnakarsingh.info" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>https://api.ratnakarsingh.info</a>
        </p>

        <div style={{
          marginTop: '40px',
          paddingTop: '20px',
          borderTop: '1px solid #eaecef',
          color: '#6a737d',
          fontSize: '0.9em',
          textAlign: 'center'
        }}>
          &copy; 2026 Pixzzle. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

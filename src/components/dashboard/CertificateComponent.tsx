import React from 'react';

export interface CertificateProps {
  recipientName: string;
  campName?: string;
  schoolName?: string;
}

const CertificateComponent: React.FC<CertificateProps> = ({
  recipientName,
  campName = 'Royal MakerCamp',
  schoolName = 'Royal Global School, Guwahati',
}) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '500px',
        height: '280px',
        backgroundColor: '#FFFFFF',
        padding: '24px',
        borderRadius: '10px',
        boxShadow: '0 3px 15px rgba(0, 0, 0, 0.08)',
        position: 'relative',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#1F2937',
        border: '1.5px solid #E5E7EB',
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <img 
          src="/lovable-uploads/LOgo white.png" 
          alt="School Logo" 
          style={{ height: '46px', width: 'auto' }} 
        />
      </div>

      {/* Title */}
      <h1
        style={{
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.4px',
          marginBottom: '10px',
          color: '#111827',
        }}
      >
        Certificate of <span style={{ color: '#DC2626', fontWeight: 700 }}>Achievement</span>
      </h1>

      {/* Subtitle */}
      <p style={{ 
        textAlign: 'center', 
        fontSize: '12px', 
        marginBottom: '12px',
        color: '#6B7280'
      }}>
        This certifies that
      </p>

      {/* Recipient Name */}
      <h2
        style={{
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: 700,
          borderBottom: '2px solid #DC2626',
          display: 'inline-block',
          width: '100%',
          paddingBottom: '6px',
          marginBottom: '16px',
          color: '#111827',
        }}
      >
        {recipientName}
      </h2>

      {/* Description */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p style={{ fontSize: '11px', lineHeight: 1.4, color: '#374151', marginBottom: '5px' }}>
          has successfully completed the <strong>{campName}</strong>
        </p>
        <p style={{ fontSize: '11px', lineHeight: 1.4, color: '#374151', marginBottom: '5px' }}>
          at <strong>{schoolName}</strong>
        </p>
        <p style={{ fontSize: '10px', lineHeight: 1.3, color: '#6B7280', fontStyle: 'italic' }}>
          Awarded in recognition of curiosity, innovation, and commitment to learning.
        </p>
      </div>
    </div>
  );
};

export default CertificateComponent; 
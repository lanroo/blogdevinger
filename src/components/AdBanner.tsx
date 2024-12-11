import React from 'react';

interface AdBannerProps {
  position: 'top' | 'middle' | 'bottom' | 'sidebar';
}

const AdBanner: React.FC<AdBannerProps> = ({ position }) => {
  const getAdClass = () => {
    switch (position) {
      case 'top':
        return 'my-8';
      case 'middle':
        return 'my-12';
      case 'bottom':
        return 'my-8';
      case 'sidebar':
        return 'mb-6';
      default:
        return 'my-8';
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${getAdClass()}`}>
      <div className="bg-background text-foreground rounded-lg p-4 text-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', backgroundColor: '#1a1a2e', color: '#f1f1f1', borderRadius: '0.5rem' }}
          data-ad-client="ca-pub-YOUR_ADSENSE_ID"
          data-ad-slot="YOUR_AD_SLOT"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
};

export default AdBanner;

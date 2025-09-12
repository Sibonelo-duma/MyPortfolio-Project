
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import CertificationCard from './CertificationCard';
import SectionWrapper from './SectionWrapper';

const Certifications: React.FC = () => {
  return (
    <SectionWrapper title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATIONS.map((cert, index) => (
          <CertificationCard key={index} certification={cert} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;

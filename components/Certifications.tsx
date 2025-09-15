
import React, { useState } from 'react';
import { CERTIFICATIONS } from '../constants';
import CertificationCard from './CertificationCard';
import SectionWrapper from './SectionWrapper';
import AddCertificationModal from './AddCertificationModal';
import { PlusIcon } from './Icons';
import type { Certification } from '../types';

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>(CERTIFICATIONS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCertification = (newCertification: Certification) => {
    setCertifications([newCertification, ...certifications]);
    setIsModalOpen(false);
  };

  return (
    <>
      <SectionWrapper 
        title="Certifications"
        action={
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center gap-2 text-sm"
            aria-label="Add new certification"
          >
            <PlusIcon className="w-5 h-5" />
            Add Certification
          </button>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </div>
      </SectionWrapper>
      {isModalOpen && (
        <AddCertificationModal
          onSave={handleAddCertification}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Certifications;
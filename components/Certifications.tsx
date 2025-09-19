

import React, { useState } from 'react';
import { CERTIFICATIONS as initialCertifications } from '../constants';
import type { Certification } from '../types';
import CertificationCard from './CertificationCard';
import SectionWrapper from './SectionWrapper';
import AddCertificationModal from './AddCertificationModal';
import { PlusIcon } from './Icons';

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>(initialCertifications);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveCertification = (newCertification: Certification) => {
    setCertifications(prev => [newCertification, ...prev]);
    setIsModalOpen(false);
  };

  const AddCertificationButton = (
    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg"
      aria-label="Add new certification"
    >
      <PlusIcon className="w-5 h-5" />
    </button>
  );

  return (
    <>
      <SectionWrapper title="Certifications" id="certifications" action={AddCertificationButton}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </div>
      </SectionWrapper>
      {isModalOpen && <AddCertificationModal onClose={() => setIsModalOpen(false)} onSave={handleSaveCertification} />}
    </>
  );
};

export default Certifications;

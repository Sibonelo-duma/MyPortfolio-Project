import React, { useState, useEffect } from 'react';
import type { Certification } from '../types';
import Modal from './Modal';

interface AddCertificationModalProps {
  onClose: () => void;
  onSave: (certification: Certification) => void;
}

const FormInput: React.FC<{id: string, label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean}> = 
  ({ id, label, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
    <input type="text" id={id} value={value} onChange={onChange} required={required} className="w-full bg-slate-800 border border-slate-600 rounded-md shadow-sm px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
  </div>
);

const AddCertificationModal: React.FC<AddCertificationModalProps> = ({ onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [issuer, setIssuer] = useState('');
    const [date, setDate] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [url, setUrl] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(title.trim() !== '' && issuer.trim() !== '' && date.trim() !== '' && imageUrl.trim() !== '');
    }, [title, issuer, date, imageUrl]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        const newCertification: Certification = {
          title,
          subtitle,
          issuer,
          date,
          imageUrl,
          url: url || '#',
        };
        onSave(newCertification);
    };

    return (
        <Modal title="Add New Certification" onClose={onClose}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <FormInput id="title" label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <FormInput id="subtitle" label="Subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                <FormInput id="issuer" label="Issuer" value={issuer} onChange={(e) => setIssuer(e.target.value)} required />
                <FormInput id="date" label="Date Issued" value={date} onChange={(e) => setDate(e.target.value)} required />
                <FormInput id="imageUrl" label="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                <FormInput id="url" label="Certificate URL (Optional)" value={url} onChange={(e) => setUrl(e.target.value)} />
                
                <footer className="flex justify-end gap-4 pt-4">
                    <button type="button" onClick={onClose} className="bg-slate-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-slate-600 transition-all duration-300">
                        Cancel
                    </button>
                    <button type="submit" disabled={!isFormValid} className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 disabled:bg-indigo-800 disabled:text-slate-400 disabled:cursor-not-allowed">
                        Save Certification
                    </button>
                </footer>
            </form>
        </Modal>
    );
};

export default AddCertificationModal;

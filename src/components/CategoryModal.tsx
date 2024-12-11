import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import Category from '../pages/Category';

const CategoryModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary-light transition"
      >
        Explorar Categorias
      </button>

      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

        {/* Modal Content */}
        <div className="relative bg-[#1e1e30] text-foreground rounded-lg shadow-lg w-full max-w-xl mx-auto sm:my-8 max-h-[90vh] overflow-y-auto px-4 sm:px-6 lg:px-8">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            <Category />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CategoryModal;

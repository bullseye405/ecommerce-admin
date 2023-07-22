'use client';

import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { useEffect } from 'react';

const SetupPage = () => {
  const { onOpen, isOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  
  return (
    <div className="p-4">
      <Modal
        isOpen={isOpen}
        onClose={() => {}}
        title="test"
        description="test description"
      >
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;

import React from 'react';
import './ModalOverlay.module.scss';

interface IModalOverlayProps {
  isOpen: boolean;
}

function ModalOverlay(props: IModalOverlayProps) {
  const { isOpen } = props;

  return <div className={`modalOverlay ${isOpen ? 'modalOverlay_opened' : ''}`}></div>;
}

export default ModalOverlay;

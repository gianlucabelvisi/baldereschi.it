import React from "react"
import styled from "styled-components"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"

const LightboxOverlay = styled(DialogOverlay)`
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

const LightboxContent = styled(DialogContent)`
  background: transparent;
  padding: 0;
  margin: 2rem;
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  border: none;
  position: relative;
`

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  width: auto;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`

const CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  background: white;
  color: #2c3e50;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8f9fa;
    transform: scale(1.1);
  }
  
  &:focus {
    outline: 2px solid #444fc7;
    outline-offset: 2px;
  }
`

const ImageTitle = styled.div`
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  color: white;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
`

const SimpleLightbox = ({ src, alt, onClose }) => {
  return (
    <LightboxOverlay isOpen={true} onDismiss={onClose}>
      <LightboxContent>
        <CloseButton onClick={onClose} aria-label="Close lightbox">
          ×
        </CloseButton>
        <LightboxImage src={src} alt={alt} />
        {alt && <ImageTitle>{alt}</ImageTitle>}
      </LightboxContent>
    </LightboxOverlay>
  )
}

export default SimpleLightbox 
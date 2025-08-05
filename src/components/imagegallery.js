import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SimpleLightbox from "./simplelightbox"
import media from "./media"
import styled from "styled-components"

const GalleryContainer = styled.div`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h3`
  color: #2c3e50;
  font-family: 'Oxygen', Arial, sans-serif;
  font-weight: 600;
  margin: 2rem 0 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 2px solid #444fc7;
  padding-bottom: 0.5rem;
  display: inline-block;
`

const ImageGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
  
  /* Mobile first - 1 column */
  grid-template-columns: 1fr;
  
  /* Direct media queries instead of styled-components media helper */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 1980px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

const ImageCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  background: white;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
  
  .gatsby-image-wrapper {
    height: 250px;
    width: 100%;
  }
  
  .gatsby-image-wrapper img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const ImageTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
  color: white;
  padding: 2rem 0.75rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
`

const ImageGallery = ({ folderPath, title }) => {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Optimized query that filters at GraphQL level
  const data = useStaticQuery(graphql`
    query OptimizedImageGalleryQuery {
      allFile(
        filter: { 
          extension: { regex: "/(jpg|jpeg|png)$/i" }
          relativePath: { regex: "/projects\/SPRING SUMMER 25-26/" }
        }
        sort: { fields: [name], order: ASC }
      ) {
        nodes {
          relativePath
          name
          childImageSharp {
            gatsbyImageData(
              width: 300
              height: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              quality: 80
            )
            original {
              src
            }
          }
        }
      }
    }
  `)

  // Group images by subfolder
  const groupImagesByFolder = (images) => {
    const groups = {}
    
    images.forEach(image => {
      const pathParts = image.relativePath.split('/')
      if (pathParts.length === 3) {
        // Direct images in main folder
        if (!groups['main']) groups['main'] = []
        groups['main'].push(image)
      } else if (pathParts.length === 4) {
        // Images in subfolders
        const subfolder = pathParts[2]
        if (!groups[subfolder]) groups[subfolder] = []
        groups[subfolder].push(image)
      }
    })
    
    return groups
  }

  const openLightbox = (image) => {
    setLightboxImage(image)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
  }

  // Group the filtered images
  const groupedImages = groupImagesByFolder(data.allFile.nodes)

  // Format folder name for display
  const formatFolderName = (folderName) => {
    if (folderName === 'main') return 'Main Collection'
    return folderName
      .replace(/\([^)]*\)/g, '') // Remove parentheses content
      .replace(/[_-]/g, ' ') // Replace underscores and hyphens with spaces
      .trim()
  }

  // Format image name for display
  const formatImageName = (imageName) => {
    return imageName
      .replace(/[_-]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  return (
    <GalleryContainer>
      {title && <h2 style={{ color: '#2c3e50', marginBottom: '2rem' }}>{title}</h2>}
      
      {Object.entries(groupedImages).map(([folderName, images]) => (
        <div key={folderName}>
          <SectionTitle>
            {formatFolderName(folderName)}
          </SectionTitle>
          
          <ImageGrid>
            {images.map((image, index) => {
              const gatsbyImage = getImage(image.childImageSharp)
              const imageName = formatImageName(image.name)
              
              return (
                <ImageCard
                  key={`${folderName}-${index}`}
                  onClick={() => openLightbox(image)}
                >
                  <GatsbyImage
                    image={gatsbyImage}
                    alt={imageName}
                    loading="lazy"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <ImageTitle>
                    {imageName}
                  </ImageTitle>
                </ImageCard>
              )
            })}
          </ImageGrid>
        </div>
      ))}

      {lightboxOpen && lightboxImage && (
        <SimpleLightbox
          src={lightboxImage.childImageSharp.original.src}
          alt={formatImageName(lightboxImage.name)}
          onClose={closeLightbox}
        />
      )}
    </GalleryContainer>
  )
}

export default ImageGallery 
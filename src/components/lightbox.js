import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`
const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`

export default class Lightbox extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      showLightbox: false,
      selectedImage: null,
    }
  }

  render() {
    const { images } = this.props
    const { selectedImage, showLightbox } = this.state
    return (
      <Fragment>
        <LightboxContainer>
          {images.map(image => (
            <PreviewButton
              key={image.node}
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedImage: image })
              }
            >
              <GatsbyImage image={getImage(image.node)} alt="Slider"/>
            </PreviewButton>
          ))}
        </LightboxContainer>

        {showLightbox && (
          <Dialog>
            <GatsbyImage image={getImage(selectedImage.node)} alt="Slider"/>
            <button type="button" className="btn-primary" onClick={() => this.setState({ showLightbox: false })}>
              Close
            </button>
          </Dialog>
        )}

      </Fragment>
    )
  }
}
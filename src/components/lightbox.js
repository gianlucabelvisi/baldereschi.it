import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { DialogOverlay } from "@reach/dialog"
import "@reach/dialog/styles.css"
import media from "./media"

export const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  ${media.desktop`
    grid-template-columns: repeat(4, 1fr);
  `};
  ${media.widescreen`
    grid-template-columns: repeat(5, 1fr);
  `};
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

    const open = (image) => this.setState({ showLightbox: true, selectedImage: image })
    const close = () => this.setState({ showLightbox: false })

    return (
      <Fragment>
        <LightboxContainer>
          {images.map(image => (
            <PreviewButton
              key={image.node}
              type="button"
              onClick={() =>
                this.setState(open(image))
              }
            >
              <GatsbyImage image={getImage(image.node)} alt="Slider"/>
            </PreviewButton>
          ))}
        </LightboxContainer>

        {showLightbox && (
          <DialogOverlay style={{ background: "hsla(0, 100%, 100%, 0.9)",
                                  position: "absolute",
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                  left: 0,
                                  right: 0,
                                  top: "4em",
                                  textAlign: "center",
                                  alignContent: "center"
                                }}
                         allowPinchZoom={true}
                         onDismiss={close}>
            <GatsbyImage image={getImage(selectedImage.node)} alt="Novelty"/>
            {/*<button type="button" className="btn-primary" onClick={() => this.setState({ showLightbox: false })}>*/}
            {/*  Close*/}
            {/*</button>*/}
          </DialogOverlay>
        )}

      </Fragment>
    )
  }
}
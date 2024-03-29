import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Iframe from "react-iframe"
import { Dialog } from "@reach/dialog"
import { useForm } from "react-hook-form";

const Showroom = ({location}) => {

  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const openError = () => setShowErrorDialog(true);
  const closeError = () => setShowErrorDialog(false);

  const [revealShowroom, setRevealShowroom] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    data.password === location.state.password? setRevealShowroom(true) : openError()
  };

  return (
    <Layout>
      <Seo title="Showroom" />

      <h4 className="mb-2">{location.state?.title}</h4>

      {!revealShowroom &&(
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="password">Insert Password</label>
          <input
            id="password"
            className="form-control"
            type="password"
            name="password"
            {...register("password")}
            style={{width: "20em"}}
          />
          <button
            type="submit"
            className="btn btn-primary mt-2"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
        </form>
      )}
      <Dialog isOpen={showErrorDialog} onDismiss={closeError} style={{width: "20em"}}>
        <p>Password incorrect!</p>
        <button className="btn btn-primary" onClick={closeError}>Retry</button>
      </Dialog>

      {revealShowroom &&(
        <Iframe id="showroom"
                width="100%"
                height="800"
                frameBorder="0"
                allowFullScreen="true"
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                scrolling="no"
                url={location.state.targetUrl}>
        </Iframe>
      )}
    </Layout>
  )
}

export default Showroom



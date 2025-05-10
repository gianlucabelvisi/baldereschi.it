import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Iframe from "react-iframe"

const About = () => {
  return (
    <Layout>
      <Seo title="About" />

      <div className="row d-flex">

        <div className="col-sm-12 col-md-12 col-lg-6 pb-4">

          <h3>Where we are</h3>

          <div className="w-100">
            <Iframe width="100%"
                    height="400"
                    id="gmap_canvas"
                    url="https://maps.google.com/maps?q=via%20della%20pesa%2041%2C%20santa%20croce%20sullarno&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
            />
          </div>

        </div>

        <div className="col-sm-12 col-md-12 col-lg-6">

          <h3>Contact us</h3>

          <p>
            We would love to hear from you. Any comment, suggestion or any question you may have.
            We will get back to you as soon as possible!
          </p>

          <form className="form-group" action="https://getform.io/f/3470d5e9-4942-41b2-8afa-283a8a524951" method="POST">

            <input type="email" name="email" id="email" className="form-control mb-2" aria-describedby="emailHelp" placeholder="Your email" />

            <input type="text" name="name" id="name" className="form-control mb-2" placeholder="Your name"/>

            <textarea id="message" name="message" className="form-control mb-2" rows="5" placeholder="Your message"/>

            <button type="submit" className="btn-primary">Send</button>

          </form>

        </div>

      </div>

    </Layout>
  )
}

export default About
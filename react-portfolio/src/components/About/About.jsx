import React from "react"

import styles from "./About.module.css"
import { getImageUrl } from "../../utils"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Crafting Digital Experiences</h3>
              <p>
                Venturing into web development naturally evolved from my years
                of service to my country and community.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>A Diverse Path to Innovation</h3>
              <p>
                My transition from emergency services and military to community
                coaching honed my adaptability and leadership, enriching my tech
                endeavors.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Beyond Code: Building Connections</h3>
              <p>
                Every project is an opportunity to strengthen community bonds,
                turning technological solutions into platforms for meaningful
                human connections.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

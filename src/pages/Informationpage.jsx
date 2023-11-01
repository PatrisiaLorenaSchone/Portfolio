import React from 'react'
import InfoCard from '../components/InfoCard'
import { Link } from 'react-router-dom'

export default function Informationpage() {
  return (
    <div className="infoPage">
        <InfoCard title="Terms and Conditions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque cum consectetur eum aspernatur harum atque sunt. Porro quaerat, neque quasi vitae, reiciendis odio, modi ex alias molestias veniam praesentium.
        Ducimus tempora eaque impedit magni nostrum eligendi, placeat eius eum distinctio, iure porro id, quibusdam optio sapiente non doloribus architecto doloremque nisi eos nemo voluptates. Illum voluptatem temporibus reprehenderit maxime!
        Porro totam, qui natus doloribus illo nisi nam quasi? Commodi enim non, assumenda itaque alias consequuntur. Culpa ea voluptatibus, minima similique possimus, ipsa vitae ad ullam rerum doloremque deserunt omnis.</InfoCard>
        <InfoCard title="Privacy Policy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est quod beatae labore cumque distinctio temporibus architecto voluptates ea blanditiis, possimus quibusdam aspernatur odio laborum deserunt qui, pariatur rerum! Cumque!
        Molestiae a distinctio omnis optio quidem nisi cum error vero nam explicabo! Obcaecati neque repellat quod a beatae commodi ducimus, odio quibusdam maxime eveniet delectus odit dolorem sit, nostrum unde?</InfoCard>
        <InfoCard title="Accessibility">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque cum consectetur eum aspernatur harum atque sunt. Porro quaerat, neque quasi vitae, reiciendis odio, modi ex alias molestias veniam praesentium.
        Ducimus tempora eaque impedit magni nostrum eligendi, placeat eius eum distinctio, iure porro id, quibusdam optio sapiente non doloribus architecto doloremque nisi eos nemo voluptates. Illum voluptatem temporibus reprehenderit maxime!
        Porro totam, qui natus doloribus illo nisi nam quasi? Commodi enim non, assumenda itaque alias consequuntur. Culpa ea voluptatibus, minima similique possimus, ipsa vitae ad ullam rerum doloremque deserunt omnis.</InfoCard>
        <InfoCard title="Additional informations">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est quod beatae labore cumque distinctio temporibus architecto voluptates ea blanditiis, possimus quibusdam aspernatur odio laborum deserunt qui, pariatur rerum! Cumque!
        Molestiae a distinctio omnis optio quidem nisi cum error vero nam explicabo! Obcaecati neque repellat quod a beatae commodi ducimus, odio quibusdam maxime eveniet delectus odit dolorem sit, nostrum unde?</InfoCard>
        <Link to="/"><button className="my-btn">Back to the Homepage</button></Link>
    </div>
  )
}
//Terms and Conditions
//Privacy Policy
//Help
//Accessibility
//Additional informations
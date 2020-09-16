import React from 'react'
import './VideoRow.css'

const VideoRow = ({ views, subs, description, timestamp, channel, title, image }) => {
  return(
    <div className="videoRow">
      <img src={image} alt={title} />
      <div className="videoRow__text">
        <h3>{title.substr(0, 100)}</h3>
        <p className="videoRow__headline">
          {channel} •{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs}</span> subscribers
          </span>{" "} {views} views • {timestamp}
        </p>
        <p className="videoRow__description">{description.substr(0, 150)}{description.length > 150 ? "..." : ""}</p>
      </div>
    </div>
  )
}

export default VideoRow
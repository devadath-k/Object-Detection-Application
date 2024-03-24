import React from 'react'

const Images = ({imageSrc}) => {
  return (
    <div>
      {imageSrc && <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '100%' }} />}
    </div>
  )
}

export default Images

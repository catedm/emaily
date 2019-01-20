import React from 'react';

// redux form gives our component a lot of props
// the props get passed in when we pass the component into
// the 'component' prop into the Field redux component
export default ({ input, label, icon, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <i className="material-icons left">{icon}</i>
      <input {...input} style={{ marginBottom: '5px'}} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  )
}

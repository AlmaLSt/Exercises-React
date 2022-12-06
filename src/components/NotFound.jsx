import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => 
    <div data-testid="not-found">
      Ya buscamos por todos lados y no encontramos lo que buscas, perdón. :-(
      <br />
      Te sugerimos ir a <Link to="/">aquí</Link>
    </div>

export default NotFound;

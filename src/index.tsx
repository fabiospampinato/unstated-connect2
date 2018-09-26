
/* IMPORT */

import * as _ from 'lodash';
import selectr from 'react-selectr';
import shouldComponentUpdate from 'react-should-component-update';
import withContainers from 'unstated-with-containers';

/* CONNECT */

function connect ( options: any = {} ) {

  if ( _.isArray ( options ) ) {
    options = { containers: options };
  } else if ( _.isFunction ( options ) ) {
    options = { container: options };
  }

  return function wrapper ( WrappedComponent ) {

    let ConnectedComponent = WrappedComponent;

    if ( options.selector ) {
      const pure = _.isBoolean ( options.pure ) ? options.pure : true;
      ConnectedComponent = selectr ( options.selector, { pure } )( ConnectedComponent );
    }

    if ( options.hasOwnProperty ( 'shouldComponentUpdate' ) ) {
      ConnectedComponent = shouldComponentUpdate ( ..._.castArray ( options.shouldComponentUpdate ) )( ConnectedComponent );
    }

    if ( options.containers ) {
      ConnectedComponent = withContainers ( ...options.containers )( ConnectedComponent );
    } else if ( options.container ) {
      ConnectedComponent = withContainers ( options.container )( ConnectedComponent );
    }

    return ConnectedComponent;

  };

}

/* EXPORT */

export default connect;

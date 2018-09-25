
/* IMPORT */

import * as _ from 'lodash';
import selectr from 'react-selectr';
import shouldComponentUpdate from 'react-should-component-update';
import withContainers from 'unstated-with-containers';

/* CONNECT */

function connect ( options: any = {} ) {

  return function wrapper ( WrappedComponent ) {

    let ConnectedComponent = WrappedComponent;

    if ( options.containers ) {
      ConnectedComponent = withContainers ( ...options.containers )( ConnectedComponent );
    } else if ( options.container ) {
      ConnectedComponent = withContainers ( options.container )( ConnectedComponent );
    }

    if ( options.shouldComponentUpdate ) {
      ConnectedComponent = shouldComponentUpdate ( ..._.castArray ( shouldComponentUpdate ) )( ConnectedComponent );
    }

    if ( options.selector ) {
      const pure = _.isBoolean ( options.pure ) ? options.pure : true;
      ConnectedComponent = selectr ( options.selector, { pure } )( ConnectedComponent );
    }

    return ConnectedComponent;

  };

}

/* EXPORT */

export default connect;

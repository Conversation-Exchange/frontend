import React from 'react';

import { Routing } from '../../pages/Routing';
import { withProviders } from './providers';

function Component() {
  return <Routing />;
}

const App = withProviders(Component);

export default App;

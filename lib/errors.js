'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on acmcore-p2p Module {0}'
};

module.exports = require('acmcore-lib').errors.extend(spec);

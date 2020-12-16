var NODE_ENV = process.env.NODE_ENV || 'production';

if (NODE_ENV !== 'production') {
  require('@babel/register');
}

require('./server');

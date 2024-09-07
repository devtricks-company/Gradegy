import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { join } from 'path';
import { ConfigProps } from './config.interface';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default (): Partial<ConfigProps> => {
  return {
    enviroment:
      process.env.NODE_ENV === 'development' ? 'development' : 'production',
    port: parseInt(process.env.PORT, 10) || 3000,
  };
};

//api configuration
interface IApiConfigProp {
  apiUrl: string;
  httpTimeout: number;
}

//mongo db configuration
interface IMongodbConfig {
  connectionString: string;
  databaseName: string;
}

//app configuration
interface IAppConfig {}

// config for all section of app
export interface ConfigProps {
  port: number;
  enviroment: string;
  api: IApiConfigProp;
  mongodb: {
    database: IMongodbConfig;
  };
}

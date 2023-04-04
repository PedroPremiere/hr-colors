export interface IAppConfig {
    env: string;
    port: number;
    url: string;
    frontendUrl: string;
    adminUrl: string;
    corsSites: string;
}

export interface IConfig {
    app: IAppConfig;
}
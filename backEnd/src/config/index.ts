import dotenv from 'dotenv';

import type { IConfig } from '@/types/config';

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const env = (key: string, defaultValue = '') =>
    process.env[key] || defaultValue;

const parseUrl = (url: string) => (url.endsWith('/') ? url.slice(0, -1) : url);

const currentEnviroment = env('NODE_ENV');

export const config: IConfig = {
    app: {
        env: currentEnviroment,
        port: parseInt(env('PORT', '3000')),
        url: parseUrl(env('APP_URL', 'http://127.0.0.1:3000')),
        frontendUrl: parseUrl(env('FRONTEND_URL', 'http://127.0.0.1:8080')),
        adminUrl: parseUrl(env('ADMIN_URL', 'http://127.0.0.1:8081')),
        corsSites: env('CORS_SITES')
    }
};

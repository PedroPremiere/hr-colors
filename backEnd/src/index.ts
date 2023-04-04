import express, {Express} from "express";

import helmet from "helmet";
import { corsPlugin } from '@/plugins/cors';
import {getRouter} from "@/routes";

export const getApp = async () => {
    const app: Express = express();

    app.use(helmet());
    app.use(corsPlugin);

    const router = await getRouter();
    app.use('/api', router);

    return app;

}
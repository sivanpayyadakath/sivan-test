import { AppService } from './app.service';
import { RequestContext } from './shared/request-context/request-context.dto';
import { AppLogger } from './shared/logger/logger.service';
export declare class AppController {
    private readonly logger;
    private readonly appService;
    constructor(logger: AppLogger, appService: AppService);
    getHello(ctx: RequestContext): string;
}

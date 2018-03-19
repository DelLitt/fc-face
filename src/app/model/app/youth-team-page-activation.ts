import { LogService } from '../../services/log.service';

export class YouthTeamPageActivation {
    public about = false;
    public games = false;
    public results = false;

    constructor(
        private logger: LogService
      ) {}

    public setActive(routeName: string) {
        const field = this[routeName] as boolean;
        if (typeof field === 'undefined') {
            // throw new Error(`Route '${routeName}' cannot be marked as active for youth team page activation!`);
            this.logger.logDebug(`'${(<any>this).constructor.name}'. Route '${routeName}' cannot be marked as active!`);
            return;
        }

        this.clear();
        this[routeName] = true;
    }

    private clear() {
        this.about = this.games = this.results = false;
    }
}

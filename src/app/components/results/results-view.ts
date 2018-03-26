import { OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { LogService } from '../../services/log.service';

export class ResultsView implements OnInit {
    protected _loaded: boolean;
    protected _teamIds = new Array<number>();

    constructor(
        protected configuration: ConfigurationService,
        protected logger: LogService
    ) { }

    ngOnInit() {
        this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
        this.loadTeamIds();
    }

    private loadTeamIds() {
        this.configuration.activeTeamsIds
            .then(result => {
                this._teamIds = result instanceof Array ? result : Array<number>();
                this.configurationLoaded();
            });
    }

    protected configurationLoaded() {
    }
}

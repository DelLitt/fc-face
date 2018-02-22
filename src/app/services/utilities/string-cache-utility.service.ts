import { Injectable } from '@angular/core';
import { LogService } from '../log.service';

@Injectable()
export class StringCacheUtilityService {

  private cache: Map<string, string> = new Map<string, string>();

  constructor(
    private logger: LogService
  ) { }

  private static buildKey(...data: string[]): string {
    if (data.length === 0) { return null; }
    return '___' + data.join('_');
  }

  public getOrSet(getValueAction: Function, ...keyData: string[]): string {
    const key: string = StringCacheUtilityService.buildKey(...keyData);
    if (!key) { return null; }

    let value = this.getValueByKey(key);
    if (value) { return value; }

    if (!getValueAction) { return null; }

    value = getValueAction();
    this.setValueByKey(key, value);
    return value;
  }

  public getValue(...data: string[]): string {
    const key: string = StringCacheUtilityService.buildKey(...data);
    if (!key) { return null; }

    return this.getValueByKey(key);
  }

  public setValue(value: string, ...keyData: string[]) {
    const key: string = StringCacheUtilityService.buildKey(...keyData);
    if (!key) { return; }

    this.setValueByKey(key, value);
  }

  private getValueByKey(key: string): string {
    if (!this.cache.has(key)) { return null; }

    const value: string = this.cache.get(key);
    this.logger.logDebug(`'${(<any>this).constructor.name}' extracted value '${value}' from string cache with the key ${key}.`);
    return value;
  }

  private setValueByKey(key: string, value: string) {
    this.cache.set(key, value);
    this.logger.logDebug(`'${(<any>this).constructor.name}' added value '${value}' to string cache with the key ${key}.`);
  }
}

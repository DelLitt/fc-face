import { Injectable, InjectionToken } from '@angular/core';

export const LOG_LEVEL = new InjectionToken('log_level');

export enum LogLevel {
  DEBUG, INFO, WARNING, ERROR
}

@Injectable()
export class LogService {
  public minLevel: LogLevel = LogLevel.DEBUG;

  constructor() {
  }

  public logDebug(message: string) {
    this.log(LogLevel.DEBUG, message);
  }

  public logInfo(message: string) {
    this.log(LogLevel.INFO, message);
  }

  public logWarning(message: string) {
    this.log(LogLevel.WARNING, message);
  }

  public logError(message: string) {
    this.log(LogLevel.ERROR, message);
  }

  private log(level: LogLevel, message: string) {
    if (level >= this.minLevel) {
      console.log(`${Date.now()}. [${LogLevel[level]}]. ${message}`);
    }
  }
}

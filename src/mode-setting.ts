/**
 * 
 */

import type { tGameMode } from "./index.js";

export class ModeSetting {

    private currentSetting: tGameMode = 'demo';

    public get current(): tGameMode {
        return this.currentSetting;
    }

    public demo(): void {
        this.currentSetting = 'demo';
    }

    public client(): void {
        this.currentSetting = 'client';
    }

    public server(): void {
        this.currentSetting = 'server';
    }

}
/**
 * 
 */

import type { tGameDifficulty } from "./index.js";

export class DifficultySetting {

    private currentSetting: tGameDifficulty = 'beginner';

    public get current(): tGameDifficulty {
        return this.currentSetting;
    }

    public beginner(): void {
        this.currentSetting = 'beginner';
    }

    public easy(): void {
        this.currentSetting = 'easy';
    }

    public normal(): void {
        this.currentSetting = 'normal';
    }

    public hard(): void {
        this.currentSetting = 'hard';
    }

    public expert(): void {
        this.currentSetting = 'expert';
    }

}
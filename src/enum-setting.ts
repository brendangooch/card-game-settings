/**
 * represents a changeable fixed set of numeric setting values for a game of cards
 */

import type { iCardGameSetting } from "./i-card-game-setting.js";

export class ENumSetting implements iCardGameSetting {

    private valid: number[];
    private currentValue: number = 0;

    public constructor(valid: number[]) {
        this.valid = valid;
        this.currentValue = valid[0];
    }

    public get current(): number {
        return this.currentValue;
    }

    public change(value: number): void {
        if (this.valid.includes(value)) this.currentValue = value;
    }

}
/**
 * represents a changeable numeric setting of any value for a game of cards
 */

import type { iCardGameSetting } from "./i-card-game-setting.js";

export class KeyValueSetting implements iCardGameSetting {

    private currentValue: number;

    public constructor(current: number = 0) {
        this.currentValue = current;
    }

    public get current(): number {
        return this.currentValue;
    }

    public change(value: number): void {
        this.currentValue = value;
    }

}
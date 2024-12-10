/**
 * represents a changeable numeric setting for a game of cards that can be increased or decreased by a set amount
 */

import type { iCardGameSetting } from "./i-card-game-setting.js";

export class NumericSetting implements iCardGameSetting {

    private properties = { min: 0, max: 0, current: 0, stepSize: 1 };

    public constructor(min: number, max: number, initial: number, stepSize: number = 1) {
        this.properties.min = min;
        this.properties.max = max;
        this.properties.current = initial;
        this.properties.stepSize = stepSize;
    }

    public get current(): number {
        return this.properties.current;
    }

    public get min(): number {
        return this.properties.min;
    }

    public get max(): number {
        return this.properties.max;
    }

    public get stepSize(): number {
        return this.properties.stepSize;
    }

    public increase(): void {
        if (this.properties.current < this.properties.max) this.properties.current++;
    }

    public decrease(): void {
        if (this.properties.current > this.properties.min) this.properties.current--;
    }

}
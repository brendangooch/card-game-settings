/**
 * 
 */

export class NumericSetting {

    private properties = { min: 0, max: 0, current: 0 };

    public constructor(min: number, max: number, current: number) {
        this.properties.min = min;
        this.properties.max = max;
        this.properties.current = current;
    }

    public get current(): number {
        return this.properties.current;
    }

    public add(): void {
        if (this.properties.current < this.properties.max) this.properties.current++;
    }

    public remove(): void {
        if (this.properties.current > this.properties.min) this.properties.current--;
    }

}
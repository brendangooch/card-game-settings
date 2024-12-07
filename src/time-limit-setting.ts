/**
 * 
 */

export class TimeLimitSetting {

    private currentSetting = 0;

    public get current(): number {
        return this.currentSetting;
    }

    public none(): void {
        this.currentSetting = 0;
    }

    public limit(n: number): void {
        this.currentSetting = Math.round(n);
    }

}
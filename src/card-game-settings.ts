/**
 * all card games extend this class to create their own set of bespoke settings
 */

import { ENumSetting } from "./enum-setting.js";
import { KeyValueSetting } from "./key-value-setting.js";
import { NumericSetting } from "./numeric-setting.js";

export abstract class CardGameSettings {

    protected numeric: NumericSetting[] = [];
    protected keyValue: KeyValueSetting[] = [];
    protected enum: ENumSetting[] = [];

    public constructor() {
        this.loadSettings();
    }

    protected abstract loadSettings(): void;

}
export const exp = global.exports;

export const Delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export const GetRandom = (Min: number, Max: number) => Math.floor(Math.random() * (Max - Min + 1)) + Min;

declare function SendNUIMessage(message: any): void;
declare function GetCurrentResourceName(): string;
declare function GetConvarInt(name: string, defaultValue: number): number;

const currentResourceName = GetCurrentResourceName();
const debugIsEnabled = GetConvarInt(`${currentResourceName}-debugMode`, 0) === 1;

export function SendReactMessage(action: string, data: any) {
    SendNUIMessage({
        action: action,
        data: data
    });
}

export function debugPrint(...args: any[]): void {
    if (!debugIsEnabled) return;

    const appendStr = args.map(arg => ` ${arg}`).join('');
    const msgTemplate = `^3[%s]^0%s`;
    const finalMsg = msgTemplate.replace('%s', currentResourceName).replace('%s', appendStr);

    console.log(finalMsg);
}
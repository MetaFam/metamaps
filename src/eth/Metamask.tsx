declare const window: any;

export function CheckMetamask() {
    if (typeof window.ethereum !== 'undefined') {
        return true;
    } else {
        return false;
    }
}

export async function GetAccounts() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts as Array<string>;
}
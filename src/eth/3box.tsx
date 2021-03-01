import Box from '3box';

declare const window: any;

export async function LoadUrl(account: string, url: string) {
    const box = await Box.openBox(account, window.ethereum);
    await box.syncDone;
    const space = await box.openSpace(url);
    const data = await space.public.get('items');

    return data;
}

export async function SetUrl(account: string, url: string, data: any) {
    const box = await Box.openBox(account, window.ethereum);
    await box.syncDone;
    const space = await box.openSpace(url);
    await space.public.set('items', data);
}
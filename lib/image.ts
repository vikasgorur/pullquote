import domtoimage from 'dom-to-image';

export async function copyNodeToClipboard(node: Node): Promise<void> {
    const blob = await domtoimage.toBlob(node);
    // @ts-ignore
    return navigator.clipboard.write([
        // @ts-ignore
        new ClipboardItem({
            "image/png": blob
        })
    ]);
}
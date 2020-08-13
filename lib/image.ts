import domtoimage from 'dom-to-image';

export async function copyNodeToClipboard(node: Node): Promise<void> {
    const blob = await domtoimage.toBlob(node);
    return navigator.clipboard.write([
        new ClipboardItem({
            "image/png": blob
        })
    ]);
}
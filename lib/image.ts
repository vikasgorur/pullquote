import domtoimage from "dom-to-image";

/**
 * Optimal twitter image size 1200x675
 */
export async function copyNodeToClipboard(node: Node): Promise<void> {
    const blob = await domtoimage.toBlob(node, {
        width: 800,
        height: 450
    });
    // @ts-ignore
    return navigator.clipboard.write([
        // @ts-ignore
        new ClipboardItem({
            "image/png": blob,
        }),
    ]);
}

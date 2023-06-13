export async function tsFn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('tsFn');
        }, 3000);
    });
}

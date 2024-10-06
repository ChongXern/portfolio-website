export const getImageUrl = (path) => {
    try {
        const url = new URL(`/assets/${path}`, import.meta.url).href;
        return url;
    } catch (error) {
        console.error(`Error generating image URL for path "${path}":`, error);
        return new URL('/assets/default-image.png', import.meta.url).href; // Fallback URL
    }
};
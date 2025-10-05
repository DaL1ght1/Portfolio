export default function imageLoader({ src }: { src: string }) {
    // In production, add the basePath
    if (process.env.NODE_ENV === 'production') {
        // If src already starts with /Portfolio, return as is
        if (src.startsWith('/Portfolio')) {
            return src
        }
        // Add /Portfolio prefix
        return `/Portfolio${src}`
    }
    // In development, return as is
    return src
}

export default function imageLoader({ src }: { src: string }) {
    if (src.startsWith("http://") || src.startsWith("https://")) return src
    if (src.startsWith("/Portfolio")) return src

    return src.startsWith("/") ? `/Portfolio${src}` : `/Portfolio/${src}`
}
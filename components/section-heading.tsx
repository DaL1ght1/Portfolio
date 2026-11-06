type SectionHeadingProps = {
  index: string
  label: string
  title: string
  description?: string
}

export default function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return (
    <div className="reveal mb-12 md:mb-16">
      <p className="mb-3 font-mono text-sm text-primary">
        {index} <span className="text-muted-foreground">/ {label}</span>
      </p>
      <h2 className="max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>}
    </div>
  )
}

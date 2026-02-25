type TagsProps = {
  tags: string[]
}

export default function Tags({ tags }: TagsProps) {
  if (!tags.length) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="resume-tag">
          {tag}
        </span>
      ))}
    </div>
  )
}

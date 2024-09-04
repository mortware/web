type TagsProps = {
  tags: string[];
}

export default function Tags({ tags = [] }: TagsProps) {
  return (
    <div className="flex flex-wrap">
      {tags.map((item, i) =>
        <span key={i} className="mb-2 mr-2 text-gray-500 text-sm shadow px-2 rounded bg-gray-100">{item}</span>
      )}
    </div>
  )
}

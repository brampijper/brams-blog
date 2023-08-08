export default function extractExcerpt(content) {
  const lines = content.split('\n')

  // Filter out the subtitle.
  const linesWithoutTitle = lines.filter(line => !line.startsWith('#'));

  // Filter out lines containing only commas and then concatenate
  const excerpt = linesWithoutTitle.filter(line => line.trim() !== ',').join('\n');
  
  return excerpt
}
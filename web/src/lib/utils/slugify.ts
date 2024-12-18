export function slugify(...values: string[]): string {
  const charMap: Record<string, string> = {
    'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
    'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
    'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
    'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
    'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
    'ñ': 'n', 'ç': 'c',
    'ß': 'ss', 'æ': 'ae', 'œ': 'oe',
    '♀': 'female', '♂': 'male' // Add these special characters
  };

  return values
    .join('-')
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\u0000-\u007E]/g, char => charMap[char] || '')
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
export interface ValidationResult {
  valid: boolean;
  platform?: string;
  error?: string;
}

const supportedPlatforms = [
  { 
    name: 'instagram', 
    patterns: [
      /instagram\.com\/(p|reel|tv|stories)\//,
      /instagr\.am\//
    ] 
  },
  { 
    name: 'tiktok', 
    patterns: [
      /tiktok\.com\/@[\w-]+\/video\//,
      /tiktok\.com\/@[\w-]+\/v\/\d+/,
      /vt\.tiktok\.com\//
    ] 
  },
  { 
    name: 'facebook', 
    patterns: [
      /facebook\.com\/(watch|reel|video)/,
      /fb\.watch\//
    ] 
  },
  { 
    name: 'youtube', 
    patterns: [
      /youtube\.com\/watch\?v=/,
      /youtu\.be\//,
      /youtube\.com\/shorts\//
    ] 
  },
];

export function validateUrl(url: string): ValidationResult {
  if (!url || typeof url !== 'string') {
    return { valid: false, error: 'Please enter a valid URL.' };
  }

  const trimmedUrl = url.trim();
  
  try {
    new URL(trimmedUrl);
  } catch {
    return { valid: false, error: 'Invalid URL format. Please check the URL and try again.' };
  }

  const platform = getPlatformFromUrl(trimmedUrl);
  if (!platform) {
    return { 
      valid: false, 
      error: 'This platform is not currently supported. Supported platforms: Instagram, TikTok, Facebook, YouTube.' 
    };
  }

  return { valid: true, platform };
}

export function getPlatformFromUrl(url: string): string | null {
  for (const platform of supportedPlatforms) {
    for (const pattern of platform.patterns) {
      if (pattern.test(url)) {
        return platform.name;
      }
    }
  }
  return null;
}
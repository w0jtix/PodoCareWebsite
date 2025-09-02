import { Picture } from "../../data/diseases";

const allImages = {
  ...import.meta.glob('/src/assets/diseases/*/*.{png,jpg,JPG,jpeg,webp,gif}', {
    eager: true,
    query: '?url',
    import: 'default'
  }),
  ...import.meta.glob('/src/assets/services/*/*/*.{png,jpg,JPG,jpeg,webp,gif}', {
    eager: true,
    query: '?url',
    import: 'default'
  }),
  ...import.meta.glob('/src/assets/services/*/*.{png,jpg,JPG,jpeg,webp,gif}', {
    eager: true,
    query: '?url',
    import: 'default'
  })
};

const imagesByFolder: Record<string, Picture[]> = {};

Object.entries(allImages).forEach(([path, url]) => {
  const pathParts = path.split('/');
  const fileName = pathParts[pathParts.length - 1].split('.')[0];
  
  let folderKey: string;
  let altPrefix: string;
  
  if (pathParts.includes('diseases')) {
    // Structure: /src/assets/diseases/diseaseName/image.jpg
    const diseaseName = pathParts[pathParts.length - 2];
    folderKey = diseaseName;
    altPrefix = diseaseName;
  } else if (pathParts.includes('services')) {
    const serviceIndex = pathParts.indexOf('services');
    const serviceName = pathParts[serviceIndex + 1];
    
    if (pathParts.length > serviceIndex + 3) {
      const subFolder = pathParts[serviceIndex + 2];
      folderKey = `${serviceName}/${subFolder}`;
      altPrefix = `${serviceName} ${subFolder}`;
    } else {
      // Structure: /src/assets/services/serviceName/image.jpg
      folderKey = serviceName;
      altPrefix = serviceName;
    }
  } else {
    folderKey = pathParts[pathParts.length - 2];
    altPrefix = folderKey;
  }
  
  if (!imagesByFolder[folderKey]) {
    imagesByFolder[folderKey] = [];
  }
  
  imagesByFolder[folderKey].push({
    src: url as string,
    alt: `${altPrefix} ${fileName}`
  });
});

Object.keys(imagesByFolder).forEach(folder => {
  imagesByFolder[folder].sort((a, b) => a.alt.localeCompare(b.alt));
});

/* returns images in shuffled order */
export const loadImagesFromFolder = (folderName: string): Picture[] => {
  const result = imagesByFolder[folderName] || [];

  const shuffled = [...result];

  for (let i = shuffled.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const shuffledImageCache: Record<string, Picture[]> = {};

export const loadShuffledImagesFromFolder = (folderName: string): Picture[] => {
  if (!shuffledImageCache[folderName]) {
    shuffledImageCache[folderName] = loadImagesFromFolder(folderName);
  }
  return shuffledImageCache[folderName];
};
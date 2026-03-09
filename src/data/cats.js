const catModules = import.meta.glob('./cats/*/profile.json', { eager: true });
const vetBillModules = import.meta.glob('./cats/*/vet_bills.json', { eager: true });
const photoModules = import.meta.glob('./cats/*/photo.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const pdfModules = import.meta.glob('./cats/*/*.pdf', { eager: true, query: '?url', import: 'default' });

const cats = Object.keys(catModules).map((path) => {
  const folderName = path.split('/')[2];
  const profile = catModules[path]?.default || catModules[path];
  const rawVetBills = vetBillModules[`./cats/${folderName}/vet_bills.json`]?.default || vetBillModules[`./cats/${folderName}/vet_bills.json`] || [];
  
  // Find photo in folder
  const photoExtensions = ['jpg', 'jpeg', 'png'];
  let localPhoto = null;
  
  for (const ext of photoExtensions) {
    const photoPath = `./cats/${folderName}/photo.${ext}`;
    if (photoModules[photoPath]) {
      localPhoto = String(photoModules[photoPath]);
      break;
    }
  }

  // Find PDFs in folder
  const pdfFiles = {};
  Object.keys(pdfModules).forEach(pdfPath => {
    const fileName = pdfPath.split('/').pop().replace('.pdf', '').toLowerCase();
    pdfFiles[fileName] = String(pdfModules[pdfPath]);
  });

  // Generate unique bill IDs based on folder name and index, and attach PDF URL
  const vetBills = rawVetBills.map((bill, index) => {
    const billId = `${folderName}-bill-${index + 1}`;
    return {
      ...bill,
      id: billId,
      pdfUrl: pdfFiles[billId.toLowerCase()] || null
    };
  });

  // Use folder name as id and name (capitalized)
  const formattedName = folderName
    .split(/[\s-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    id: folderName,
    name: formattedName,
    bio: profile?.bio || '',
    location: profile?.location || '',
    age: profile?.age,
    breed: profile?.breed,
    gender: profile?.gender,
    notes: profile?.notes || [],
    photoUrl: localPhoto || `https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop`,
    vetBills: vetBills || [],
  };
});

export default { cats };

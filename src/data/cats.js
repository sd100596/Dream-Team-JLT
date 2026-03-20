const catModules = import.meta.glob('./cats/*/profile.json', { eager: true });
const vetBillModules = import.meta.glob('./cats/*/vet_bills.json', { eager: true });
const photoModules = import.meta.glob('./cats/*/photo.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });

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

   // Generate bill data - no PDF field anymore
   const vetBills = rawVetBills.map((bill, index) => {
     const billId = `${folderName}-bill-${index + 1}`;
     return {
       ...bill,
       id: billId
     };
   });

  // Use folder name as id and name (capitalized)
  const formattedName = folderName
    .split(/[\s-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

   // Compute status based on location only (TNR is a separate flag)
    const isHomed = profile?.location === 'Homed';
    const status = isHomed ? 'homed' : 'stray';
    
    // Check if cat has pending bills
    const hasPendingBills = vetBills?.some(bill => bill.status === 'due' || bill.status === 'unpaid') || false;

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
      tnr: profile?.tnr || false,
      adoptable: profile?.adoptable || false,
      // Computed properties for filtering
      status,
      hasPendingBills
    };
});

export const totalPendingBillsAmount = cats
  .flatMap(cat => cat.vetBills)
  .filter(bill => bill.status === 'due' || bill.status === 'unpaid')
  .reduce((sum, bill) => sum + bill.amount, 0);

export const pendingBillsCount = cats
  .flatMap(cat => cat.vetBills)
  .filter(bill => bill.status === 'due' || bill.status === 'unpaid').length;

export const catsWithPendingBills = cats
  .map(cat => ({
    id: cat.id,
    name: cat.name,
    pendingBills: cat.vetBills.filter(b => b.status === 'due' || b.status === 'unpaid'),
    pendingAmount: cat.vetBills
      .filter(b => b.status === 'due' || b.status === 'unpaid')
      .reduce((sum, b) => sum + b.amount, 0)
  }))
  .filter(cat => cat.pendingBills.length > 0);

export default { cats };

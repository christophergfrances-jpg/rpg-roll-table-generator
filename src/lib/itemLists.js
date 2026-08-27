const shuffle = () => Math.random() > Math.random() ? 1 : -1;
const addGuns = (baseList) => {
  const retArr = [];
  const max = Math.floor(baseList.length / 3);
  const randomAddMods = Math.floor(Math.random() * max);
  const pickAGun = [...baseList];
  for (let i = 0; i < randomAddMods; i++) {
    const mods = ['Receiver', 'Barrel', 'Magazine', 'Stock', 'Sight', 'Muzzle'];
    // add random base small gun with random amount of mods;
    pickAGun.sort(shuffle);
    const pickedGun = pickAGun.pop();
    const addMods = [];
    if (pickedGun.maxMods === 0) continue;
    const pickLimit = pickedGun.maxMods ?? 6;
    do {
      mods.sort(shuffle);
      addMods.push(mods.pop());
    } while(Math.random() > 0.5 && addMods.length < (pickLimit - 1));
    const item = {
      ...pickedGun,
    }
    item.name = `${pickedGun.name} (with ${addMods.length} random mod${addMods.length > 1 ? 's' : ''})`;
    item.rarity = pickedGun.rarity + addMods.length;
    retArr.push(item);
  }
  return retArr;
};

/**
 * Export arrays of items in the structure
 * [
 *  {
 *    name: string
 *    rarity: number
 *    source: string
 *  }
 * ]
 */
export const itemCategory = [
  { name: 'Item Name', rarity: 0, source: 'Source pg or ref' },  
];

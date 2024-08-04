import { ParamJson } from "./types"
import equipParamGem from '../data/params/json/equipParamGem.json'
import swordArtsParam from '../data/params/json/SwordArtsParam.json'
import equipParamWeapon from '../data/params/json/EquipParamWeapon.json'
import { wepCats, type WepCat, DiffCat, diffCats } from "./gameCode"
import { diffCatToOverwriteId, type OverwriteId } from "./diffCatToOverwriteId"
import { getSwordArtDiffCatFunctions } from "./GetDiffCatFunctions"


function swordArtsRowToAshId(rowId: number) {
    const ashRow = swordArtsParam.find(ashRow => ashRow.ID === rowId)
    if (!ashRow) throw new Error(`row '${rowId}' does not exist in SwordArtsParam`)
    return ashRow.swordArtsTypeNew
}

function getAllowedWepCats(gemRow: (typeof equipParamGem)[number]): Array<WepCat> {
    const gemFields = Object.keys(gemRow) as Array<keyof typeof gemRow>
    const allowedCats = gemFields
        .filter(k => k.startsWith('canMountWep_'))
        .filter(k => !['SpearLarge', 'Sorcery', 'Talisman'].includes(k.split('_')[1]))
        .filter(k => gemRow[k] === 1)
        .map(k => {
            switch (k) {
                case 'canMountWep_Dagger':           return wepCats.SHORT_SWORD;
                case 'canMountWep_SwordNormal':      return wepCats.STRAIGHT_SWORD;
                case 'canMountWep_SwordLarge':       return wepCats.LARGE_SWORD;
                case 'canMountWep_SwordGigantic':    return wepCats.EXTRALARGE_SWORD;
                case 'canMountWep_SaberNormal':      return wepCats.CURVEDSWORD;
                case 'canMountWep_SaberLarge':       return wepCats.LARGE_CURVEDSWORD;
                case 'canMountWep_katana':           return wepCats.KATANA;
                case 'canMountWep_SwordDoubleEdge':  return wepCats.TWINBLADE;
                case 'canMountWep_SwordPierce':      return wepCats.RAPIER;
                case 'canMountWep_RapierHeavy':      return wepCats.LARGE_RAPIER;
                case 'canMountWep_AxeNormal':        return wepCats.AX;
                case 'canMountWep_AxeLarge':         return wepCats.LARGE_AX;
                case 'canMountWep_HammerNormal':     return wepCats.HAMMER;
                case 'canMountWep_HammerLarge':      return wepCats.LARGE_HAMMER;
                case 'canMountWep_Flail':            return wepCats.FLAIL;
                case 'canMountWep_SpearNormal':      return wepCats.SPEAR;
                case 'canMountWep_SpearHeavy':       return wepCats.LARGE_SPEAR;
                case 'canMountWep_SpearAxe':         return wepCats.HALBERD;
                case 'canMountWep_Sickle':           return wepCats.LARGE_SCYTHE;
                case 'canMountWep_Knuckle':          return wepCats.FIST;
                case 'canMountWep_Claw':             return wepCats.CLAW;
                case 'canMountWep_Whip':             return wepCats.WHIP;
                case 'canMountWep_AxhammerLarge':    return wepCats.EXTRALARGE_AXHAMMER;
                case 'canMountWep_BowSmall':         return wepCats.SMALL_ARROW;
                case 'canMountWep_BowNormal':        return wepCats.ARROW;
                case 'canMountWep_BowLarge':         return wepCats.LARGE_ARROW;
                case 'canMountWep_ClossBow':         return wepCats.CROSSBOW;
                case 'canMountWep_Ballista':         return wepCats.BALLISTA;
                case 'canMountWep_Staff':            return wepCats.STAFF;
                case 'canMountWep_ShieldSmall':      return wepCats.SMALL_SHIELD;
                case 'canMountWep_ShieldNormal':     return wepCats.MIDDLE_SHIELD;
                case 'canMountWep_ShieldLarge':      return wepCats.LARGE_SHIELD;
                case 'canMountWep_Torch':            return wepCats.TORCH;
                case 'canMountWep_HandToHand':       return wepCats.MARTIAL_ARTS;
                case 'canMountWep_PerfumeBottle':    return wepCats.PERFUME_BOTTLE;
                case 'canMountWep_ThrustingShield':  return wepCats.DUELING_SHIELD;
                case 'canMountWep_ThrowingWeapon':   return wepCats.THROW_DAGGER;
                case 'canMountWep_ReverseHandSword': return wepCats.BACKHAND_SWORD;
                case 'canMountWep_LightGreatsword':  return wepCats.LIGHT_LARGE_SWORD;
                case 'canMountWep_GreatKatana':      return wepCats.LARGE_KATANA;
                case 'canMountWep_BeastClaw':        return wepCats.BEAST_CLAW;
                default: throw new Error(`Unhandled canMountCategory: "${k}"`)
            }
        })
    return allowedCats
}
export function destructureAnimId(animId: number) {
    return {
        taeCat: Math.floor(animId/1_00_00_00),
        animType: Math.floor(animId/1_00_00) % 1_00,
        overwriteId: Math.floor(animId/1_00) % 1_00 as OverwriteId,
        actionId: animId % 1_00
    }
}

export function getUsers(animId: number, animIdSiblings: number[]) {
    const { taeCat, animType, overwriteId } = destructureAnimId(animId)
    const ashId = taeCat - 600
    const ashRow = swordArtsParam.find(r => r.swordArtsTypeNew === ashId)

    if (!ashRow) throw new Error('tae category is not used for an ash of war')
    if (animType !== 4) throw new Error('animId does not belong to a valid ash')

    const gemRow = equipParamGem.find(r => ashId === swordArtsRowToAshId(r.swordArtsParamId))

    // unique default ash
    if (!gemRow) {
        return equipParamWeapon
            .filter(row => row.swordArtsParamId === ashRow.ID)
            .map(row => row.Name)
    }

    // everything else

    const allowedCats: Array<WepCat> = getAllowedWepCats(gemRow)

    const overwriteIdMap = {} as Record<OverwriteId, Set<WepCat>>
    for (const cat of allowedCats) {
        for (const getSwordArtDiffCat of getSwordArtDiffCatFunctions) {
            const diffCats = getSwordArtDiffCat(ashId, cat)
            if (!diffCats) continue;

            for (const diffCat of diffCats) {
                const overwriteId = diffCatToOverwriteId(diffCat, animId)
                overwriteIdMap[overwriteId] = overwriteIdMap[overwriteId]
                    ? overwriteIdMap[overwriteId].add(cat)
                    : new Set([ cat ])
            }
        }
    }

    const availableOverwrites = new Set([
        overwriteId,
        ...animIdSiblings.map(anim => destructureAnimId(anim).overwriteId)
    ])

    for (const diffCat of (Object.keys(overwriteIdMap).map(k => Number(k)) as DiffCat[])) {
        if (!availableOverwrites.has(diffCat)) {
            overwriteIdMap[diffCats.DEFAULT] = new Set([
                ...overwriteIdMap[diffCats.DEFAULT],
                ...overwriteIdMap[diffCat]
            ])
            delete overwriteIdMap[diffCat] // technically not needed
        }
    }

    return Array.from(overwriteIdMap[overwriteId])
        .flatMap(cat => equipParamWeapon.filter(w => cat === w.wepmotionCategory))
        .filter(row => gemRow.isSpecialSwordArt ? !row.restrictSpecialSwordArt : true)
        .filter(row => row.gemMountType === 2 || row.swordArtsParamId === ashRow.ID)
        .map(row => row.Name)
}
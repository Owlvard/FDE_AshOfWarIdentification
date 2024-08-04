
import { getSwordArtsDiffCategory, wepCats, isShieldArts } from "./gameCode";
import type { DiffCat, IdleCat, WepCat } from "./gameCode"
import equipParamWeapon from '../data/params/json/EquipParamWeapon.json'


export function getSwordArtsDiffCat_normal(ashId: number, wepCat: WepCat): [ DiffCat ] {
    const diffCat = getSwordArtsDiffCategory({
        ashId: ashId,
        wepCat: wepCat,
        idleCat: equipParamWeapon.find(r => r.wepmotionCategory === wepCat)?.wepmotionOneHandId as IdleCat,
        style: 'HAND_RIGHT',
        ashHand: 'HAND_RIGHT'
    })
    return [ diffCat ]
}

export function getSwordArtsDiffCat_shieldAsh(ashId: number, wepCat: WepCat): DiffCat[] | undefined {
    if (!isShieldArts(ashId)) return;
    const diffCatSet: Set<DiffCat> = new Set()
    for (const idleCat of [0, 2, 3] as IdleCat[]) {
        const diffCat = getSwordArtsDiffCategory({
            ashId: ashId,
            wepCat: wepCat,
            idleCat: idleCat,
            style: 'HAND_RIGHT',
            ashHand: 'HAND_LEFT'
        })
        diffCatSet.add(diffCat)
    }
    return [ ...diffCatSet ]
}

export function getSwordArtsDiffCat_bothHand(ashId: number, wepCat: WepCat): [ DiffCat ] {
    const diffCat = getSwordArtsDiffCategory({
        ashId: ashId,
        wepCat: wepCat,
        idleCat: equipParamWeapon.find(r => r.wepmotionCategory === wepCat)?.wepmotionBothHandId as IdleCat,
        style: 'HAND_RIGHT_BOTH',
        ashHand: 'HAND_RIGHT'
    })
    return [ diffCat ]
}

export const getSwordArtDiffCatFunctions = [
    getSwordArtsDiffCat_normal,
    getSwordArtsDiffCat_shieldAsh,
    getSwordArtsDiffCat_bothHand
]
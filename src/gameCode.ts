
export const diffCats = {
    DEFAULT: 0,
    LARGE_WEAPON: 2,
    POLEARM: 3,
    LARGE_WEAPON_SMALL_SHIELD: 4,
    POLEARM_SMALL_SHIELD: 5,
    LARGE_WEAPON_LARGE_SHIELD: 8,
    POLEARM_LARGE_SHIELD: 9,
} as const

export const wepCats = {
    SHORT_SWORD: 20,
    TORCH: 21,
    CLAW: 22,
    STRAIGHT_SWORD: 23,
    TWINBLADE: 24,
    LARGE_SWORD: 25,
    EXTRALARGE_SWORD: 26,
    RAPIER: 27,
    CURVEDSWORD: 28,
    KATANA: 29,
    AX: 30,
    EXTRALARGE_AXHAMMER: 31,
    LARGE_AX: 32,
    HAMMER: 33,
    FLAIL: 34,
    LARGE_HAMMER: 35,
    SPEAR: 36,
    LARGE_SPEAR: 37,
    HALBERD: 38,
    LARGE_RAPIER: 39,
    LARGE_CURVEDSWORD: 40,
    STAFF: 41,
    FIST: 42,
    WHIP: 43,
    ARROW: 44,
    LARGE_ARROW: 45,
    CROSSBOW: 46,
    LARGE_SHIELD: 47,
    SMALL_SHIELD: 48,
    MIDDLE_SHIELD: 49,
    LARGE_SCYTHE: 50,
    SMALL_ARROW: 51,
    BALLISTA: 52,
    THROW_DAGGER: 53,
    MARTIAL_ARTS: 55,
    PERFUME_BOTTLE: 56,
    DUELING_SHIELD: 57,
    BACKHAND_SWORD: 58,
    LIGHT_LARGE_SWORD: 60,
    LARGE_KATANA: 61,
    BEAST_CLAW: 62,
} as const

export const swordArtsCategory: Record<number, Array<DiffCat>> = {
    0: [ diffCats.DEFAULT ],
    1: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM, wepCats.FIST, wepCats.DUELING_SHIELD ],
    2: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    3: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM, wepCats.TWINBLADE, wepCats.BACKHAND_SWORD ],
    4: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM ],
    5: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    6: [ diffCats.DEFAULT ],
    7: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM ],
    8: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM, wepCats.DUELING_SHIELD ],
    9: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM, wepCats.DUELING_SHIELD ],
    10: [ diffCats.DEFAULT ],
    11: [ diffCats.DEFAULT ],
    12: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM ],
    13: [ diffCats.DEFAULT ],
    14: [ diffCats.DEFAULT ],
    15: [ diffCats.DEFAULT ],
    16: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    17: [ diffCats.DEFAULT ],
    18: [ diffCats.DEFAULT, diffCats.POLEARM ],
    19: [ diffCats.DEFAULT, wepCats.BACKHAND_SWORD ],
    20: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    21: [ diffCats.DEFAULT ],
    22: [ diffCats.DEFAULT, diffCats.POLEARM, wepCats.TWINBLADE, wepCats.DUELING_SHIELD ],
    23: [ diffCats.DEFAULT, diffCats.POLEARM, wepCats.TWINBLADE ],
    24: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM, wepCats.TWINBLADE, wepCats.BACKHAND_SWORD ],
    25: [ diffCats.DEFAULT ],
    50: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    51: [ diffCats.DEFAULT ],
    52: [ diffCats.DEFAULT, wepCats.TWINBLADE ],
    53: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    54: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, wepCats.TWINBLADE ],
    55: [ diffCats.DEFAULT ],
    56: [ diffCats.DEFAULT ],
    57: [ diffCats.DEFAULT, 2 ],
    58: [ diffCats.DEFAULT, wepCats.BACKHAND_SWORD, wepCats.DUELING_SHIELD ],
    59: [ diffCats.DEFAULT ],
    61: [ diffCats.DEFAULT ],
    62: [ diffCats.DEFAULT ],
    63: [ diffCats.DEFAULT, wepCats.BACKHAND_SWORD ],
    64: [ diffCats.DEFAULT, wepCats.FIST, wepCats.MARTIAL_ARTS, wepCats.DUELING_SHIELD, wepCats.BEAST_CLAW ],
    65: [ diffCats.DEFAULT, diffCats.POLEARM ],
    66: [ diffCats.DEFAULT ],
    67: [ diffCats.DEFAULT ],
    68: [ diffCats.DEFAULT ],
    69: [ diffCats.DEFAULT ],
    70: [ diffCats.DEFAULT ],
    71: [ diffCats.DEFAULT ],
    72: [ diffCats.DEFAULT, wepCats.BACKHAND_SWORD ],
    73: [ diffCats.DEFAULT ],
    74: [ diffCats.DEFAULT ],
    75: [ diffCats.DEFAULT ],
    76: [ diffCats.DEFAULT ],
    90: [ diffCats.DEFAULT, wepCats.LARGE_SHIELD, wepCats.SMALL_SHIELD, wepCats.DUELING_SHIELD ],
    91: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM, diffCats.LARGE_WEAPON_SMALL_SHIELD, diffCats.POLEARM_SMALL_SHIELD, diffCats.LARGE_WEAPON_LARGE_SHIELD, diffCats.POLEARM_LARGE_SHIELD, wepCats.LARGE_SHIELD, wepCats.SMALL_SHIELD, wepCats.DUELING_SHIELD ],
    92: [ diffCats.DEFAULT, wepCats.SHORT_SWORD, wepCats.CURVEDSWORD, wepCats.SMALL_SHIELD, wepCats.THROW_DAGGER ],
    93: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM ],
    94: [ diffCats.DEFAULT ],
    95: [ diffCats.DEFAULT ],
    96: [ diffCats.DEFAULT ],
    97: [ diffCats.DEFAULT ],
    98: [ diffCats.DEFAULT, wepCats.LARGE_SHIELD, wepCats.SMALL_SHIELD, wepCats.DUELING_SHIELD ],
    99: [ diffCats.DEFAULT ],
    100: [ diffCats.DEFAULT ],
    101: [ diffCats.DEFAULT ],
    102: [ diffCats.DEFAULT ],
    103: [ diffCats.DEFAULT ],
    105: [ diffCats.DEFAULT, wepCats.LARGE_ARROW ],
    108: [ diffCats.DEFAULT ],
    109: [ diffCats.DEFAULT ],
    110: [ diffCats.DEFAULT ],
    111: [ diffCats.DEFAULT ],
    112: [ diffCats.DEFAULT ],
    113: [ diffCats.DEFAULT ],
    114: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    115: [ diffCats.DEFAULT ],
    116: [ diffCats.DEFAULT ],
    117: [ diffCats.DEFAULT ],
    118: [ diffCats.DEFAULT ],
    130: [ diffCats.DEFAULT ],
    131: [ diffCats.DEFAULT ],
    132: [ diffCats.DEFAULT ],
    133: [ diffCats.DEFAULT ],
    134: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    135: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    136: [ diffCats.DEFAULT ],
    137: [ diffCats.DEFAULT, wepCats.BACKHAND_SWORD, wepCats.LARGE_KATANA ],
    140: [ diffCats.DEFAULT ],
    141: [ diffCats.DEFAULT ],
    142: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    143: [ diffCats.DEFAULT ],
    144: [ diffCats.DEFAULT ],
    150: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, wepCats.FIST, wepCats.MARTIAL_ARTS, wepCats.PERFUME_BOTTLE, wepCats.DUELING_SHIELD, wepCats.BEAST_CLAW ],
    151: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    152: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    155: [ diffCats.DEFAULT ],
    156: [ diffCats.DEFAULT ],
    157: [ diffCats.DEFAULT ],
    160: [ diffCats.DEFAULT ],
    165: [ diffCats.DEFAULT ],
    166: [ diffCats.DEFAULT ],
    167: [ diffCats.DEFAULT ],
    168: [ diffCats.DEFAULT ],
    196: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM ],
    256: [ diffCats.DEFAULT, wepCats.TWINBLADE ],
    257: [ diffCats.DEFAULT ],
    258: [ diffCats.DEFAULT ],
    260: [ diffCats.DEFAULT ],
    261: [ diffCats.DEFAULT ],
    262: [ diffCats.DEFAULT ],
    263: [ diffCats.DEFAULT ],
    264: [ diffCats.DEFAULT ],
    265: [ diffCats.DEFAULT ],
    269: [ diffCats.DEFAULT ],
    273: [ diffCats.DEFAULT ],
    274: [ diffCats.DEFAULT ],
    276: [ diffCats.DEFAULT ],
    277: [ diffCats.DEFAULT ],
    278: [ diffCats.DEFAULT ],
    279: [ diffCats.DEFAULT ],
    280: [ diffCats.DEFAULT ],
    281: [ diffCats.DEFAULT, wepCats.DUELING_SHIELD ],
    282: [ diffCats.DEFAULT ],
    283: [ diffCats.DEFAULT ],
    284: [ diffCats.DEFAULT, diffCats.LARGE_WEAPON, diffCats.POLEARM ],
    285: [ diffCats.DEFAULT ],
    286: [ diffCats.DEFAULT ],
    305: [ diffCats.DEFAULT ],
    340: [ diffCats.DEFAULT ],
    341: [ diffCats.DEFAULT ],
    342: [ diffCats.DEFAULT ],
    343: [ diffCats.DEFAULT ],
    357: [ diffCats.DEFAULT ],
    399: [ diffCats.DEFAULT ]
} as const

type Values<T> = T[keyof T]
export type WepCat = Values<typeof wepCats>
export type IdleCat = 0 | 2 | 3 | 12 | 13 | 14 | 15 | 16
export type DiffCat = WepCat | Values<typeof diffCats>
export type Styles = 'HAND_LEFT' | 'HAND_RIGHT' | 'HAND_LEFT_BOTH' | 'HAND_RIGHT_BOTH'
export type AshHand = 'HAND_LEFT' | 'HAND_RIGHT'

export function getSwordArtsDiffCategory({
    ashId, 
    idleCat , 
    wepCat, 
    ashHand, 
    style 
}: {
    ashId: number,
    idleCat: IdleCat ,
    wepCat: WepCat,
    ashHand: AshHand,
    style: Styles 
}): DiffCat
{
    if ( 
        (ashId >= 170 && ashId < 255 && ashId !== 196)
        || (ashId >= 300 && ![305, 357, 399].includes(ashId))
        || [275, 272].includes(ashId)
    ) return diffCats.DEFAULT

    if (ashId === 169) return wepCats.LARGE_ARROW
    if (wepCat === wepCats.LIGHT_LARGE_SWORD) return diffCats.DEFAULT

    // let claws use fist versions
    const alternativeWepCat = wepCat === wepCats.CLAW ? wepCats.FIST : wepCat

    // convert two handed idlecats to one handed
    idleCat = idleCat % 10

    // hts two handed and one handed idleCat don't match, this streamlines them
    if (wepCat == wepCats.LARGE_RAPIER) idleCat = diffCats.DEFAULT

    // think this forces you to use the default version if dueling shield is in main or offhand
    // regular shields probs use some special variations when using shield ashes
    if (
        [90, 98, 151, 152].includes(ashId)
        && wepCat === wepCats.DUELING_SHIELD
        && (style === 'HAND_LEFT' || style === 'HAND_RIGHT')
    ) return diffCats.DEFAULT

    const ashCategory = swordArtsCategory[ashId]
    if (!ashCategory) return diffCats.DEFAULT

    // this fucking bullshit is purely for fucking barricade fucking shield
    if (ashHand === 'HAND_LEFT'
        && style !== 'HAND_LEFT_BOTH'
        && (wepCat === wepCats.SMALL_SHIELD || wepCat === wepCats.LARGE_SHIELD)
        && (idleCat === 2 || idleCat === 3)
    ) {
        const shieldCat = wepCat === wepCats.SMALL_SHIELD
            ? idleCat === 2
                ? diffCats.LARGE_WEAPON_SMALL_SHIELD
                : diffCats.POLEARM_SMALL_SHIELD
            : idleCat === 2
                ? diffCats.LARGE_WEAPON_LARGE_SHIELD
                : diffCats.POLEARM_LARGE_SHIELD
        if (swordArtsCategory[ashId].includes(shieldCat)) {
            return shieldCat
        }
    }

    if (swordArtsCategory[ashId].includes(wepCat)) {
        return wepCat
    }

    if (swordArtsCategory[ashId].includes(alternativeWepCat)) {
        return alternativeWepCat
    }

    if ( 90 <= ashId && ashId <= 99 && (ashHand === 'HAND_RIGHT' || style === 'HAND_LEFT_BOTH')) {
        return diffCats.DEFAULT
    }

    if (swordArtsCategory[ashId].includes(idleCat as DiffCat)) {
        return idleCat as DiffCat
    }

    return diffCats.DEFAULT
}

const shieldAshes = [
    17, // Torch Attack
    71, // Firebreather
    90, // Shield Bash
    91, // Barricade Shield
    92, // Parry
    93, // Buckler Parry
    95, // Carian Retaliation
    96, // Storm Wall
    97, // Golden Parry
    98, // Shield Crash
    99, // Thops's Barrier
    151, // Vow of the Indomitable
    152, // Holy Ground
    195, // Fires of Slumber
    196, // Golden Retaliation
    197, // Contagious Fury
    201, // Flame Spit
    202, // Tongues of Fire
    207, // Viper Bite
    211, // Bear Witness!

    322, // Sleep Evermore
    324, // Moore's Charge
    348, // Discus Hurl
    352, // Revenge of the Night
    354, // Blindfold of Happiness
    355, // Blindfold of Happiness (2?)
    359, // Roaring Bash
    399, // Shield Strike
    334  // Feeble Lord's Frenzied Flame
]

export function isShieldArts(ashId: number) {
    return shieldAshes.includes(ashId)
}
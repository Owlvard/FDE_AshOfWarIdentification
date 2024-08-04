
import { type DiffCat } from './gameCode'
import { destructureAnimId } from './index'

export type OverwriteId = DiffCat | 59

export function diffCatToOverwriteId(diffCat: DiffCat, animId: number): OverwriteId {
    const { actionId, taeCat } = destructureAnimId(animId)
    const ashId = taeCat - 600

    switch(actionId) {
        case 0: switch(diffCat) {
            case 0:  return 0
            case 61:
            case 2:  return 2
            case 3:  return 3
            case 53:
            case 20: return 20
            case 24: return 24
            case 28: return 28
            case 55:
            case 56:
            case 62:
            case 42: return 42
            case 47: return 47
            case 48: return 48
            case 58: return 58
            case 57: return 59
            default: return diffCat
        }
        case 1: switch(diffCat) {
            case 0:  return 0
            case 47: return 47
            case 48: return 48
            case 57: return 59
            case 2:  return 2
            case 3:  return 3
            default: return diffCat
        }
        case 10: switch(diffCat) {
           case 0:  return 0
           case 2:  return 2
           case 3:  return 3
           case 24: return 24
           case 28:
           case 55:
           case 62: return 42
           case 58: return 58
           case 57: return 59
           default: return diffCat
        }
        case 20: switch(diffCat) {
           case 0:  return 0
           case 2:  return 2
           case 3:  return 3
           case 24: return 24
           case 28:
           case 55:
           case 62: return 0
           case 58: return 58
           default: return diffCat
        }
        case 30: switch(diffCat) {
           case 0:  return 0
           case 20: return 20
           case 28: return 28
           case 47: return 47
           case 48: return 48
           case 57: return 59
           default: return diffCat
        }
        case 31: switch(diffCat) {
            case 0:  return 0
            case 47: return 47
            case 48: return 48
            case 57: return 59
            default: return diffCat 
        }
        case 40: switch(diffCat) {
           case 0:  return 0
           case 2:  return 2
           case 3:  return 3
           case 4:  return 4
           case 5:  return 5
           case 8:  return 8
           case 9:  return 9
           case 20: return 20
           case 28: return 28
           case 47: return 47
           case 48: return 48
           case 57: return 59
           default: return diffCat
        }
        // Total assumptions, just got a feeling this is better than defaulting to 0 or directly to diffCat
        // Basically a copy of the 0 case.
        default: switch(diffCat) {
            case 0:  return 0
            case 61:
            case 2:  return 2
            case 3:  return 3
            case 53:
            case 20: return 20
            case 24: return 24
            case 28: return 28
            case 55:
            case 56:
            case 62:
            case 42: return 42
            case 47: return 47
            case 48: return 48
            case 58: return 58
            case 57: return 59
            default: return diffCat
        }
    }
}
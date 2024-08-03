import * as path from 'path'

export function changeFileExt(file: string, extension: string) {
    const basename = path.basename(file, path.extname(file))
    return path.join(path.dirname(file), basename + extension)
}
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, adds: string[] = []): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, v]) => Boolean(v))
            .map(([mod]) => mod),
        ...adds.filter(Boolean),
    ]
        .join(' ')
}

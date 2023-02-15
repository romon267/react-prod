import { classNames } from './class-names'

describe('classNames', () => {
    test('main only', () => {
        const expected = 'class1'
        expect(classNames('class1')).toBe(expected)
    })

    test('main and additional', () => {
        const expected = 'class1 class2 class3'
        expect(classNames('class1', {}, ['class2', 'class3'])).toBe(expected)
    })

    test('main, mods, adds', () => {
        const expected = 'class1 hovered selected class2 class3'
        expect(
            classNames('class1', { hovered: true, selected: true }, [
                'class2',
                'class3'
            ])
        ).toBe(expected)
    })

    test('main, false mod, adds', () => {
        const expected = 'class1 selected class2 class3'
        expect(
            classNames('class1', { hovered: false, selected: true }, [
                'class2',
                'class3'
            ])
        ).toBe(expected)
    })

    test('main, all mods falsy, adds', () => {
        const expected = 'class1 class2 class3'
        expect(
            classNames('class1', { hovered: false, selected: undefined }, [
                'class2',
                'class3'
            ])
        ).toBe(expected)
    })
})

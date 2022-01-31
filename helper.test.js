import { noUndefined } from './helpers.js';

describe('Testing noUndefined', () => {
    test('should first', () => {
        expect(noUndefined(undefined)).toBe(0);
    });
    test('should first', () => {
        expect(noUndefined(0)).toBe(0);
    });
    test('should first', () => {
        expect(noUndefined(1)).toBe(1);
    });
    test('should throw error', () => {
        const n = 'Pepe';
        expect(() => noUndefined(n)).toThrow('tipos');
        // expect(noUndefined.bind(n)).toThrow();
    });
});

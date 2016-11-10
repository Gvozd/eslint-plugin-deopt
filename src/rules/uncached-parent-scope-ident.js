/**
 * @fileoverview Rule to check, that outer variables cached, when has multiple read's
 * @author Gvozd
 */
export const meta = {
    docs: {
        description: 'check, that outer variables cached, when has multiple read\'s',
        category: 'Performance',
        recommended: false
    },
    schema: []
};
export function create(context) {
    return {
        'FunctionDeclaration:exit'() {
            const outerUsages =
                context.getScope().through
                    .reduce((hash, reference) => {
                        const {identifier: {name}} = reference;
                        hash[name] = hash[name] || [];
                        hash[name].push(reference);
                        return hash;
                    }, {});
            for (const name in outerUsages) {
                outerUsages[name]
                    .reduce((arr, reference) => {
                        if (reference.isWrite()) {
                            arr.push([]);
                        } else {
                            arr[arr.length - 1].push(reference.identifier);
                        }
                        return arr;
                    }, [[]])
                    .filter((arr) => arr.length > 1)
                    .forEach((nodes) => {
                        nodes.forEach((node) => {
                            context.report(node, 'Outer variable not changed, and may cached.');
                        });
                    });
            }
        }
    };
}

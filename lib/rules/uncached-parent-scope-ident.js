/**
 * @fileoverview Rule to check, that outer variables cached, when has multiple read's
 * @author Gvozd
 */
'use strict';

module.exports = {
    meta: {
        docs: {
            description: 'check, that outer variables cached, when has multiple read\'s',
            category: 'Performance',
            recommended: false
        },
        schema: []
    },
    create(context) {
        return {
            'FunctionDeclaration:exit'() {
                const outerUsages =
                    context.getScope().through
                        .reduce((hash, reference) => {
                            const {identifier, identifier: {name}} = reference;
                            hash[name] = hash[name] || [];
                            hash[name].push(identifier);
                            return hash;
                        }, {});
                for (const identifier in outerUsages) {
                    outerUsages[identifier]
                        .reduce((arr, node) => {
                            if (isInAssignmentExpression(node)) {
                                arr.push([]);
                            } else {
                                arr[arr.length - 1].push(node);
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
};
function isInAssignmentExpression(node) {
    return node.parent.type === 'AssignmentExpression';
}

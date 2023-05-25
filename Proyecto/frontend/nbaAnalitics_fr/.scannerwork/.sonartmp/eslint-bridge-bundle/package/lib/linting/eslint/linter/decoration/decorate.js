"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateExternalRules = void 0;
const eslint_plugin_1 = require("@typescript-eslint/eslint-plugin");
const decorators_1 = require("linting/eslint/rules/decorators");
const core_1 = require("linting/eslint/rules/core");
const sanitize_1 = require("./sanitize");
/**
 * Decorates external rules
 *
 * Decorating an external rule means customizing the original behaviour of the rule that
 * can't be done through rule configuration and requires special adjustments, among which
 * are internal decorators.
 *
 * @param externalRules the external rules to decorate
 */
function decorateExternalRules(externalRules) {
    const decoratedRules = { ...externalRules };
    /**
     * S1537 ('comma-dangle'), S3723 ('enforce-trailing-comma')
     *
     * S1537 and S3723 both depend on the same ESLint implementation but the
     * plugin doesn't allow duplicates of the same rule key.
     */
    const commaDangleRuleId = 'comma-dangle';
    const enforceTrailingCommaRuleId = 'enforce-trailing-comma';
    decoratedRules[enforceTrailingCommaRuleId] = core_1.eslintRules[commaDangleRuleId];
    /**
     * S3696 ('no-throw-literal')
     *
     * TypeScript ESLint implementation of no-throw-literal does not support JavaScript code.
     */
    const noThrowLiteralRuleId = 'no-throw-literal';
    decoratedRules[noThrowLiteralRuleId] = core_1.eslintRules[noThrowLiteralRuleId];
    /**
     * TypeScript ESLint rules sanitization
     *
     * TypeScript ESLint rules that rely on type information fail at runtime because
     * they unconditionally assume that TypeScript's type checker is available.
     */
    for (const ruleKey of Object.keys(eslint_plugin_1.rules)) {
        decoratedRules[ruleKey] = (0, sanitize_1.sanitizeTypeScriptESLintRule)(decoratedRules[ruleKey]);
    }
    /**
     * Decorate (TypeScript-) ESLint external rules
     *
     * External rules are decorated with internal decorators to refine their
     * behaviour: exceptions, quick fixes, secondary locations, etc.
     */
    for (const ruleKey in decorators_1.decorators) {
        decoratedRules[ruleKey] = decorators_1.decorators[ruleKey](decoratedRules[ruleKey]);
    }
    return decoratedRules;
}
exports.decorateExternalRules = decorateExternalRules;
//# sourceMappingURL=decorate.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeYAML = exports.EMPTY_YAML_ANALYSIS_OUTPUT = void 0;
const eslint_1 = require("linting/eslint");
const yaml_1 = require("parsing/yaml");
const helpers_1 = require("helpers");
/**
 * An empty YAML analysis output
 */
exports.EMPTY_YAML_ANALYSIS_OUTPUT = {
    issues: [],
};
/**
 * Analyzes a YAML analysis input
 *
 * Analyzing a YAML analysis input is part of analyzing inline JavaScript code
 * within various file formats, YAML here. The function first starts by parsing
 * the YAML fle to validate its syntax and to get in return an abstract syntax
 * tree. This abstract syntax tree is then used to extract embedded JavaScript
 * code. As YAML files might embed several JavaScript snippets, the function
 * builds an ESLint SourceCode instance for each snippet using the same utility
 * as for building source code for regular JavaScript analysis inputs. However,
 * since a YAML file can potentially produce multiple ESLint SourceCode instances,
 * the function stops to the first JavaScript parsing error and returns it without
 * considering any other. If all abstract syntax trees are valid, the function
 * then proceeds with linting each of them, aggregates, and returns the results.
 *
 * The analysis requires that global linter wrapper is initialized.
 *
 * @param input the YAML analysis input
 * @returns the YAML analysis output
 */
function analyzeYAML(input) {
    (0, helpers_1.debug)(`Analyzing file "${input.filePath}" with linterId "${input.linterId}"`);
    const linter = (0, eslint_1.getLinter)(input.linterId);
    const extendedSourceCodes = (0, yaml_1.buildSourceCodes)(input);
    const aggregatedIssues = [];
    const aggregatedUcfgPaths = [];
    for (const extendedSourceCode of extendedSourceCodes) {
        const { issues, ucfgPaths } = linter.lint(extendedSourceCode, extendedSourceCode.syntheticFilePath, 'MAIN');
        const filteredIssues = removeYamlIssues(extendedSourceCode, issues);
        aggregatedIssues.push(...filteredIssues);
        aggregatedUcfgPaths.push(...ucfgPaths);
    }
    return { issues: aggregatedIssues, ucfgPaths: aggregatedUcfgPaths };
    /**
     * Filters out issues outside of JS code.
     *
     * This is necessary because we patch the SourceCode object
     * to include all the YAML files in its properties outside its AST.
     * So rules that operate on SourceCode.text get flagged.
     */
    function removeYamlIssues(sourceCode, issues) {
        const [jsStart, jsEnd] = sourceCode.ast.range.map(offset => sourceCode.getLocFromIndex(offset));
        return issues.filter(issue => {
            const issueStart = { line: issue.line, column: issue.column };
            return isBeforeOrEqual(jsStart, issueStart) && isBeforeOrEqual(issueStart, jsEnd);
        });
        function isBeforeOrEqual(a, b) {
            if (a.line < b.line) {
                return true;
            }
            else if (a.line > b.line) {
                return false;
            }
            else {
                return a.column <= b.column;
            }
        }
    }
}
exports.analyzeYAML = analyzeYAML;
//# sourceMappingURL=analyzer.js.map
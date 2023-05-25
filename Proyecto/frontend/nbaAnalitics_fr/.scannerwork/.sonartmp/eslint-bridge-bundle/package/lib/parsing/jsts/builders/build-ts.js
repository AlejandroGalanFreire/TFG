"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTs = void 0;
const jsts_1 = require("parsing/jsts");
/**
 * Builds an instance of ESLint SourceCode for TypeScript
 *
 * Building an ESLint SourceCode for TypeScript implies parsing TypeScript code with
 * TypeScript ESLint parser. However, if the source code denotes TypeScript code in
 * Vue.js Single File Components, Vue.js ESLint parser is used instead to parse the
 * whole file. Furthermore, it is configured to use TypeScript ESLint parser to parse
 * the contents of the 'script' section of the component.
 *
 * @param input the TypeScript analysis input
 * @param isVueFile a flag to indicate if the input denotes Vue.js TypeScript code
 * @returns the parsed TypeScript code
 */
function buildTs(input, isVueFile) {
    const options = (0, jsts_1.buildParserOptions)(input, false, isVueFile ? jsts_1.parsers.typescript.parser : undefined);
    const parse = isVueFile ? jsts_1.parsers.vuejs.parse : jsts_1.parsers.typescript.parse;
    return (0, jsts_1.parseForESLint)(input.fileContent, parse, options);
}
exports.buildTs = buildTs;
//# sourceMappingURL=build-ts.js.map
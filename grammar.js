/**
 * @file tree-sitter grammar for the Ruka programming language
 * @author Devon James Webb <clake.dw@gmail.com>
 * @license MIT, Apache-2.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "ruka",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});

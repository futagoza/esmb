"use strict";

const cherow = require( "cherow" );

/**
 * Will parse JavaScript source code and return ESTree AST
 * 
 * @param {string} source Source code to parse
 * @returns {{}} ESTree AST
 */

function parse( source ) {

    return cherow.parse( source, {

        module: true,
        loc: false,
        ranges: true,
        globalReturn: true,
        skipShebang: true,
        impliedStrict: false,
        next: true,
        jsx: false,
        tolerant: true,
        source: false,
        comments: false,
        experimental: true,
        raw: false,
        rawIdentifier: false,
        node: false,

    } );

}

module.exports = parse;

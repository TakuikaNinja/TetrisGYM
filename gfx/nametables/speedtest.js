const {
    writeRLE,
    drawTiles,
    drawAttrs,
    flatLookup,
} = require('./nametables');

const buffer = Array.from({ length: 1024 }, () => 0xFF);

const lookup = flatLookup(`
0123456789ABCDEF
GHIJKLMNOPQRSTUV
WXYZ-.˙>!^()####
########qweadzxc
################
################
################
################
################
################
################
################
################
################
############?£##
###############
`);

drawTiles(buffer, lookup, `
                               #
                               #
                               #
                               #
                               #
                               #
                               #
                               #
                               #
                               #
                               #
                               #
                               #
                               #
  00£00?                       #
                               #
                               #
                               #
  TAP  0                       #
                               #
                               #
                               #
  DIR                          #
                               #
                               #
                               #
                               #
                               #
                               #
                               #
`);

drawAttrs(buffer, [`
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
`,`
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
`]);

writeRLE(
    __dirname + '/speedtest_nametable.bin',
    buffer,
);

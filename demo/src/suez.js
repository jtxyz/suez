export const game = `
function Angles.cos 0
push argument 0
push static 1
add
pop pointer 1
push that 0
return
function Angles.sin 0
push argument 0
push static 0
add
pop pointer 1
push that 0
return
function Angles.init 0
push constant 40
call Array.new 1
pop static 0
push constant 40
call Array.new 1
pop static 1
push static 0
push constant 0
push constant 0
push constant 16
push constant 31
push constant 45
push constant 59
push constant 71
push constant 81
push constant 89
push constant 95
push constant 99
call Angles.load 12
pop temp 0
push static 0
push constant 10
push constant 100
push constant 99
push constant 95
push constant 89
push constant 81
push constant 71
push constant 59
push constant 45
push constant 31
push constant 16
call Angles.load 12
pop temp 0
push static 0
push constant 20
push constant 0
push constant 16
neg
push constant 31
neg
push constant 45
neg
push constant 59
neg
push constant 71
neg
push constant 81
neg
push constant 89
neg
push constant 95
neg
push constant 99
neg
call Angles.load 12
pop temp 0
push static 0
push constant 30
push constant 100
neg
push constant 99
neg
push constant 95
neg
push constant 89
neg
push constant 81
neg
push constant 71
neg
push constant 59
neg
push constant 45
neg
push constant 31
neg
push constant 16
neg
call Angles.load 12
pop temp 0
push static 1
push constant 0
push constant 100
push constant 99
push constant 95
push constant 89
push constant 81
push constant 71
push constant 59
push constant 45
push constant 31
push constant 16
call Angles.load 12
pop temp 0
push static 1
push constant 10
push constant 0
push constant 16
neg
push constant 31
neg
push constant 45
neg
push constant 59
neg
push constant 71
neg
push constant 81
neg
push constant 89
neg
push constant 95
neg
push constant 99
neg
call Angles.load 12
pop temp 0
push static 1
push constant 20
push constant 100
neg
push constant 99
neg
push constant 95
neg
push constant 89
neg
push constant 81
neg
push constant 71
neg
push constant 59
neg
push constant 45
neg
push constant 31
neg
push constant 16
neg
call Angles.load 12
pop temp 0
push static 1
push constant 30
push constant 0
push constant 16
push constant 31
push constant 45
push constant 59
push constant 71
push constant 81
push constant 89
push constant 95
push constant 99
call Angles.load 12
pop temp 0
push constant 0
return
function Angles.load 0
push argument 1
push constant 0
add
push argument 0
add
push argument 2
pop temp 0
pop pointer 1
push temp 0
pop that 0
push argument 1
push constant 1
add
push argument 0
add
push argument 3
pop temp 0
pop pointer 1
push temp 0
pop that 0
push argument 1
push constant 2
add
push argument 0
add
push argument 4
pop temp 0
pop pointer 1
push temp 0
pop that 0
push argument 1
push constant 3
add
push argument 0
add
push argument 5
pop temp 0
pop pointer 1
push temp 0
pop that 0
push argument 1
push constant 4
add
push argument 0
add
push argument 6
pop temp 0
pop pointer 1
push temp 0
pop that 0
push argument 1
push constant 5
add
push argument 0
add
push argument 7
pop temp 0
pop pointer 1
push temp 0
pop that 0
push argument 1
push constant 6
add
push argument 0
add
push argument 8
pop temp 0
pop pointer 1
push temp 0
pop that 0
push argument 1
push constant 7
add
push argument 0
add
push argument 9
pop temp 0
pop pointer 1
push temp 0
pop that 0
push argument 1
push constant 8
add
push argument 0
add
push argument 10
pop temp 0
pop pointer 1
push temp 0
pop that 0
push argument 1
push constant 9
add
push argument 0
add
push argument 11
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 0
return
function Main.main 3
push constant 0
pop local 0
call Angles.init 0
pop temp 0
label WHILE_EXP0
push constant 0
not
not
if-goto WHILE_END0
call SuezGame.new 0
pop local 2
push local 2
push local 0
call SuezGame.run 2
pop local 1
push local 2
call SuezGame.dispose 1
pop temp 0
push local 1
push local 0
gt
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push local 1
pop local 0
label IF_FALSE0
goto WHILE_EXP0
label WHILE_END0
push constant 0
return
function Ship.new 0
push constant 8
call Memory.alloc 1
pop pointer 0
push argument 0
push argument 1
push argument 2
call Sprite.new 3
pop this 0
push argument 0
push constant 32
call Math.multiply 2
pop this 1
push argument 1
push constant 32
call Math.multiply 2
pop this 2
push argument 2
push constant 100
call Math.multiply 2
pop this 3
push constant 0
pop this 4
push constant 0
pop this 5
push constant 0
pop this 6
push constant 0
pop this 7
push pointer 0
return
function Ship.increasePower 0
push argument 0
pop pointer 0
push this 6
push constant 10
lt
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push this 6
push constant 1
add
pop this 6
push constant 12
push constant 56
call Output.moveCursor 2
pop temp 0
push this 6
call Output.printInt 1
pop temp 0
push constant 32
call Output.printChar 1
pop temp 0
push constant 32
call Output.printChar 1
pop temp 0
label IF_FALSE0
push constant 0
return
function Ship.decreasePower 0
push argument 0
pop pointer 0
push this 6
push constant 10
neg
gt
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push this 6
push constant 1
sub
pop this 6
push constant 12
push constant 56
call Output.moveCursor 2
pop temp 0
push this 6
call Output.printInt 1
pop temp 0
push constant 32
call Output.printChar 1
pop temp 0
push constant 32
call Output.printChar 1
pop temp 0
label IF_FALSE0
push constant 0
return
function Ship.rudderPort 0
push argument 0
pop pointer 0
push this 7
push constant 10
neg
gt
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push this 7
push constant 1
sub
pop this 7
push constant 5
push constant 56
call Output.moveCursor 2
pop temp 0
push this 7
call Output.printInt 1
pop temp 0
push constant 32
call Output.printChar 1
pop temp 0
push constant 32
call Output.printChar 1
pop temp 0
label IF_FALSE0
push constant 0
return
function Ship.rudderStarboard 0
push argument 0
pop pointer 0
push this 7
push constant 10
lt
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push this 7
push constant 1
add
pop this 7
push constant 5
push constant 56
call Output.moveCursor 2
pop temp 0
push this 7
call Output.printInt 1
pop temp 0
push constant 32
call Output.printChar 1
pop temp 0
push constant 32
call Output.printChar 1
pop temp 0
label IF_FALSE0
push constant 0
return
function Ship.update 4
push argument 0
pop pointer 0
push this 3
push this 7
add
pop this 3
push this 3
push constant 3999
gt
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push constant 0
pop this 3
label IF_FALSE0
push this 3
push constant 0
lt
if-goto IF_TRUE1
goto IF_FALSE1
label IF_TRUE1
push constant 3999
pop this 3
label IF_FALSE1
push this 3
push constant 100
call Math.divide 2
pop local 0
push this 6
push local 0
call Angles.sin 1
call Math.multiply 2
push constant 8
call Math.divide 2
pop local 1
push local 1
push constant 0
gt
push this 4
push constant 16384
lt
and
push local 1
push constant 0
lt
push this 4
push constant 16384
neg
gt
and
or
if-goto IF_TRUE2
goto IF_FALSE2
label IF_TRUE2
push this 4
push local 1
add
pop this 4
label IF_FALSE2
push this 1
push this 4
push constant 1200
call Math.divide 2
add
pop this 1
push this 6
push local 0
call Angles.cos 1
neg
call Math.multiply 2
push constant 8
call Math.divide 2
pop local 2
push local 2
push constant 0
gt
push this 5
push constant 16384
lt
and
push local 2
push constant 0
lt
push this 5
push constant 16384
neg
gt
and
or
if-goto IF_TRUE3
goto IF_FALSE3
label IF_TRUE3
push this 5
push local 2
add
pop this 5
label IF_FALSE3
push this 2
push this 5
push constant 1200
call Math.divide 2
add
pop this 2
push this 2
push constant 20
lt
if-goto IF_TRUE4
goto IF_FALSE4
label IF_TRUE4
push constant 2
return
label IF_FALSE4
push this 1
push constant 0
lt
push this 1
push constant 15359
gt
or
push this 2
push constant 0
lt
or
push this 2
push constant 7679
gt
or
if-goto IF_TRUE5
goto IF_FALSE5
label IF_TRUE5
push constant 1
return
label IF_FALSE5
label WHILE_EXP0
push this 0
call Sprite.getX 1
push this 1
push constant 32
call Math.divide 2
lt
not
if-goto WHILE_END0
push this 0
call Sprite.moveRight 1
not
if-goto IF_TRUE6
goto IF_FALSE6
label IF_TRUE6
push constant 1
return
label IF_FALSE6
goto WHILE_EXP0
label WHILE_END0
label WHILE_EXP1
push this 0
call Sprite.getX 1
push this 1
push constant 32
call Math.divide 2
gt
not
if-goto WHILE_END1
push this 0
call Sprite.moveLeft 1
not
if-goto IF_TRUE7
goto IF_FALSE7
label IF_TRUE7
push constant 1
return
label IF_FALSE7
goto WHILE_EXP1
label WHILE_END1
label WHILE_EXP2
push this 0
call Sprite.getY 1
push this 2
push constant 32
call Math.divide 2
lt
not
if-goto WHILE_END2
push this 0
call Sprite.moveDown 1
not
if-goto IF_TRUE8
goto IF_FALSE8
label IF_TRUE8
push constant 1
return
label IF_FALSE8
goto WHILE_EXP2
label WHILE_END2
label WHILE_EXP3
push this 0
call Sprite.getY 1
push this 2
push constant 32
call Math.divide 2
gt
not
if-goto WHILE_END3
push this 0
call Sprite.moveUp 1
not
if-goto IF_TRUE9
goto IF_FALSE9
label IF_TRUE9
push constant 1
return
label IF_FALSE9
goto WHILE_EXP3
label WHILE_END3
push local 0
push this 0
call Sprite.getHeading 1
sub
pop local 3
push local 3
push constant 0
lt
if-goto IF_TRUE10
goto IF_FALSE10
label IF_TRUE10
push local 3
push constant 40
add
pop local 3
label IF_FALSE10
push local 3
push constant 20
gt
if-goto IF_TRUE11
goto IF_FALSE11
label IF_TRUE11
label WHILE_EXP4
push local 0
push this 0
call Sprite.getHeading 1
eq
not
not
if-goto WHILE_END4
push this 0
call Sprite.rotateLeft 1
not
if-goto IF_TRUE12
goto IF_FALSE12
label IF_TRUE12
push constant 1
return
label IF_FALSE12
goto WHILE_EXP4
label WHILE_END4
goto IF_END11
label IF_FALSE11
label WHILE_EXP5
push local 0
push this 0
call Sprite.getHeading 1
eq
not
not
if-goto WHILE_END5
push this 0
call Sprite.rotateRight 1
not
if-goto IF_TRUE13
goto IF_FALSE13
label IF_TRUE13
push constant 1
return
label IF_FALSE13
goto WHILE_EXP5
label WHILE_END5
label IF_END11
push constant 0
return
function Ship.getDistanceTraveled 0
push argument 0
pop pointer 0
push this 1
push constant 7680
push this 2
sub
add
push constant 32
call Math.divide 2
return
function Ship.dispose 0
push argument 0
pop pointer 0
push this 0
call Sprite.dispose 1
pop temp 0
push pointer 0
call Memory.deAlloc 1
pop temp 0
push constant 0
return
function Sprite.new 1
push constant 5
call Memory.alloc 1
pop pointer 0
push argument 0
pop this 0
push argument 1
pop this 1
push argument 2
push constant 2
call Math.multiply 2
pop this 2
call Sprites.load 0
pop this 3
push constant 40
call Array.new 1
pop this 4
label WHILE_EXP0
push local 0
push constant 40
lt
not
if-goto WHILE_END0
push local 0
push this 4
add
push constant 0
pop temp 0
pop pointer 1
push temp 0
pop that 0
push local 0
push constant 1
add
pop local 0
goto WHILE_EXP0
label WHILE_END0
push pointer 0
push constant 0
not
call Sprite.draw 2
pop temp 0
push pointer 0
return
function Sprite.getX 0
push argument 0
pop pointer 0
push this 0
return
function Sprite.getY 0
push argument 0
pop pointer 0
push this 1
return
function Sprite.getHeading 0
push argument 0
pop pointer 0
push this 2
push constant 2
call Math.divide 2
return
function Sprite.moveUp 0
push argument 0
pop pointer 0
push pointer 0
push constant 0
call Sprite.draw 2
pop temp 0
push this 1
push constant 1
sub
pop this 1
push pointer 0
push constant 0
not
call Sprite.draw 2
return
function Sprite.moveDown 0
push argument 0
pop pointer 0
push pointer 0
push constant 0
call Sprite.draw 2
pop temp 0
push this 1
push constant 1
add
pop this 1
push pointer 0
push constant 0
not
call Sprite.draw 2
return
function Sprite.moveRight 0
push argument 0
pop pointer 0
push pointer 0
push constant 0
call Sprite.draw 2
pop temp 0
push this 0
push constant 1
add
pop this 0
push pointer 0
call Sprite.shiftRight 1
pop temp 0
push pointer 0
call Sprite.swapSides 1
pop temp 0
push pointer 0
call Sprite.updateOffset 1
pop temp 0
push pointer 0
push constant 0
not
call Sprite.draw 2
return
function Sprite.moveLeft 0
push argument 0
pop pointer 0
push pointer 0
push constant 0
call Sprite.draw 2
pop temp 0
push pointer 0
call Sprite.swapSides 1
pop temp 0
push pointer 0
call Sprite.shiftLeft 1
pop temp 0
push this 0
push constant 1
sub
pop this 0
push pointer 0
call Sprite.updateOffset 1
pop temp 0
push pointer 0
push constant 0
not
call Sprite.draw 2
return
function Sprite.rotateRight 1
push argument 0
pop pointer 0
push pointer 0
call Sprite.getOffset 1
pop local 0
push pointer 0
push constant 0
call Sprite.draw 2
pop temp 0
push this 2
push constant 2
add
pop this 2
push this 2
push constant 78
gt
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push constant 0
pop this 2
label IF_FALSE0
push pointer 0
push local 0
call Sprite.shiftToOffset 2
pop temp 0
push pointer 0
push constant 0
not
call Sprite.draw 2
return
function Sprite.rotateLeft 1
push argument 0
pop pointer 0
push pointer 0
call Sprite.getOffset 1
pop local 0
push pointer 0
push constant 0
call Sprite.draw 2
pop temp 0
push this 2
push constant 2
sub
pop this 2
push this 2
push constant 0
lt
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push constant 78
pop this 2
label IF_FALSE0
push pointer 0
push local 0
call Sprite.shiftToOffset 2
pop temp 0
push pointer 0
push constant 0
not
call Sprite.draw 2
return
function Sprite.shiftToOffset 1
push argument 0
pop pointer 0
push pointer 0
call Sprite.getOffset 1
pop local 0
label WHILE_EXP0
push local 0
push argument 1
lt
not
if-goto WHILE_END0
push pointer 0
call Sprite.shiftRight 1
pop temp 0
push local 0
push constant 1
add
pop local 0
goto WHILE_EXP0
label WHILE_END0
label WHILE_EXP1
push local 0
push argument 1
gt
not
if-goto WHILE_END1
push pointer 0
call Sprite.shiftLeft 1
pop temp 0
push local 0
push constant 1
sub
pop local 0
goto WHILE_EXP1
label WHILE_END1
push pointer 0
call Sprite.updateOffset 1
pop temp 0
push constant 0
return
function Sprite.shiftRight 3
push argument 0
pop pointer 0
push this 2
push this 3
add
pop pointer 1
push that 0
pop local 0
push this 2
push constant 1
add
push this 3
add
pop pointer 1
push that 0
pop local 1
label WHILE_EXP0
push local 2
push constant 16
lt
not
if-goto WHILE_END0
push local 2
push local 1
add
push local 2
push local 1
add
pop pointer 1
push that 0
push constant 2
call Math.multiply 2
pop temp 0
pop pointer 1
push temp 0
pop that 0
push local 2
push local 0
add
pop pointer 1
push that 0
push constant 0
lt
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push local 2
push local 1
add
push local 2
push local 1
add
pop pointer 1
push that 0
push constant 1
or
pop temp 0
pop pointer 1
push temp 0
pop that 0
label IF_FALSE0
push local 2
push local 0
add
push local 2
push local 0
add
pop pointer 1
push that 0
push constant 2
call Math.multiply 2
pop temp 0
pop pointer 1
push temp 0
pop that 0
push local 2
push constant 1
add
pop local 2
goto WHILE_EXP0
label WHILE_END0
push constant 0
return
function Sprite.shiftLeft 3
push argument 0
pop pointer 0
push this 2
push this 3
add
pop pointer 1
push that 0
pop local 0
push this 2
push constant 1
add
push this 3
add
pop pointer 1
push that 0
pop local 1
label WHILE_EXP0
push local 2
push constant 16
lt
not
if-goto WHILE_END0
push local 2
push local 0
add
pop pointer 1
push that 0
push constant 0
lt
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push local 2
push local 0
add
push local 2
push local 0
add
pop pointer 1
push that 0
push constant 32767
and
push constant 2
call Math.divide 2
push constant 16384
add
pop temp 0
pop pointer 1
push temp 0
pop that 0
goto IF_END0
label IF_FALSE0
push local 2
push local 0
add
push local 2
push local 0
add
pop pointer 1
push that 0
push constant 2
call Math.divide 2
pop temp 0
pop pointer 1
push temp 0
pop that 0
label IF_END0
push local 2
push local 1
add
pop pointer 1
push that 0
push constant 1
and
push constant 0
gt
if-goto IF_TRUE1
goto IF_FALSE1
label IF_TRUE1
push local 2
push local 0
add
push local 2
push local 0
add
pop pointer 1
push that 0
push constant 32767
neg
push constant 1
sub
or
pop temp 0
pop pointer 1
push temp 0
pop that 0
label IF_FALSE1
push local 2
push local 1
add
pop pointer 1
push that 0
push constant 0
lt
if-goto IF_TRUE2
goto IF_FALSE2
label IF_TRUE2
push local 2
push local 1
add
push local 2
push local 1
add
pop pointer 1
push that 0
push constant 32767
and
push constant 2
call Math.divide 2
push constant 16384
add
pop temp 0
pop pointer 1
push temp 0
pop that 0
goto IF_END2
label IF_FALSE2
push local 2
push local 1
add
push local 2
push local 1
add
pop pointer 1
push that 0
push constant 2
call Math.divide 2
pop temp 0
pop pointer 1
push temp 0
pop that 0
label IF_END2
push local 2
push constant 1
add
pop local 2
goto WHILE_EXP0
label WHILE_END0
push constant 0
return
function Sprite.swapSides 1
push argument 0
pop pointer 0
push this 0
push constant 16
call Math.divide 2
push constant 16
call Math.multiply 2
push this 0
eq
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push this 2
push this 3
add
pop pointer 1
push that 0
pop local 0
push this 2
push this 3
add
push this 2
push constant 1
add
push this 3
add
pop pointer 1
push that 0
pop temp 0
pop pointer 1
push temp 0
pop that 0
push this 2
push constant 1
add
push this 3
add
push local 0
pop temp 0
pop pointer 1
push temp 0
pop that 0
label IF_FALSE0
push constant 0
return
function Sprite.getOffset 0
push argument 0
pop pointer 0
push this 2
push constant 2
call Math.divide 2
push this 4
add
pop pointer 1
push that 0
return
function Sprite.updateOffset 0
push argument 0
pop pointer 0
push this 2
push constant 2
call Math.divide 2
push this 4
add
push this 0
push this 0
push constant 16
call Math.divide 2
push constant 16
call Math.multiply 2
sub
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 0
return
function Sprite.draw 7
push argument 0
pop pointer 0
push this 2
push this 3
add
pop pointer 1
push that 0
pop local 3
push this 2
push constant 1
add
push this 3
add
pop pointer 1
push that 0
pop local 4
push constant 16384
push this 1
push constant 32
call Math.multiply 2
add
push this 0
push constant 16
call Math.divide 2
add
pop local 0
label WHILE_EXP0
push local 1
push constant 16
lt
not
if-goto WHILE_END0
push local 0
call Memory.peek 1
pop local 5
push local 0
push constant 1
add
call Memory.peek 1
pop local 6
push argument 1
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push local 5
push local 1
push local 3
add
pop pointer 1
push that 0
add
push local 5
push local 1
push local 3
add
pop pointer 1
push that 0
or
eq
not
if-goto IF_TRUE1
goto IF_FALSE1
label IF_TRUE1
push constant 0
not
pop local 2
label IF_FALSE1
push local 6
push local 1
push local 4
add
pop pointer 1
push that 0
add
push local 6
push local 1
push local 4
add
pop pointer 1
push that 0
or
eq
not
if-goto IF_TRUE2
goto IF_FALSE2
label IF_TRUE2
push constant 0
not
pop local 2
label IF_FALSE2
push local 0
push local 5
push local 1
push local 3
add
pop pointer 1
push that 0
or
call Memory.poke 2
pop temp 0
push local 0
push constant 1
add
push local 6
push local 1
push local 4
add
pop pointer 1
push that 0
or
call Memory.poke 2
pop temp 0
goto IF_END0
label IF_FALSE0
push local 0
push local 5
push local 1
push local 3
add
pop pointer 1
push that 0
not
and
call Memory.poke 2
pop temp 0
push local 0
push constant 1
add
push local 6
push local 1
push local 4
add
pop pointer 1
push that 0
not
and
call Memory.poke 2
pop temp 0
label IF_END0
push local 0
push constant 32
add
pop local 0
push local 1
push constant 1
add
pop local 1
goto WHILE_EXP0
label WHILE_END0
push local 2
not
return
function Sprite.dispose 2
push argument 0
pop pointer 0
push constant 0
pop local 0
label WHILE_EXP0
push local 0
push constant 80
lt
not
if-goto WHILE_END0
push local 0
push this 3
add
pop pointer 1
push that 0
pop local 1
push local 1
call Array.dispose 1
pop temp 0
push local 0
push constant 1
add
pop local 0
goto WHILE_EXP0
label WHILE_END0
push this 3
call Array.dispose 1
pop temp 0
push this 4
call Array.dispose 1
pop temp 0
push pointer 0
call Memory.deAlloc 1
pop temp 0
push constant 0
return
function Sprites.load 4
push constant 80
call Array.new 1
pop local 2
push constant 0
push local 2
add
push constant 0
push constant 128
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 2
push local 2
add
push constant 0
push constant 256
push constant 896
push constant 896
push constant 896
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 224
push constant 224
push constant 224
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 4
push local 2
add
push constant 0
push constant 512
push constant 768
push constant 1920
push constant 896
push constant 896
push constant 960
push constant 448
push constant 448
push constant 480
push constant 224
push constant 224
push constant 240
push constant 64
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 6
push local 2
add
push constant 0
push constant 1024
push constant 1792
push constant 1792
push constant 1920
push constant 896
push constant 960
push constant 448
push constant 448
push constant 224
push constant 224
push constant 112
push constant 112
push constant 64
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 8
push local 2
add
push constant 0
push constant 0
push constant 3072
push constant 3584
push constant 3840
push constant 1920
push constant 896
push constant 960
push constant 480
push constant 240
push constant 112
push constant 120
push constant 48
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 10
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 7168
push constant 7680
push constant 3840
push constant 1920
push constant 960
push constant 480
push constant 240
push constant 120
push constant 56
push constant 16
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 12
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 6144
push constant 7680
push constant 7936
push constant 3968
push constant 992
push constant 496
push constant 248
push constant 60
push constant 24
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 14
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 15360
push constant 7936
push constant 8064
push constant 2016
push constant 504
push constant 124
push constant 56
push constant 8
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 16
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 4096
push constant 32256
push constant 16320
push constant 8184
push constant 1020
push constant 124
push constant 8
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 18
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 14336
push constant 32736
push constant 16380
push constant 2044
push constant 28
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 20
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 16380
push constant 32764
push constant 16380
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 22
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 28
push constant 2044
push constant 16380
push constant 32736
push constant 14336
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 24
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 8
push constant 120
push constant 1020
push constant 8184
push constant 16320
push constant 32256
push constant 4096
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 26
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 24
push constant 120
push constant 1020
push constant 4064
push constant 16256
push constant 15872
push constant 30720
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 28
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 16
push constant 120
push constant 248
push constant 496
push constant 1984
push constant 3968
push constant 7936
push constant 15360
push constant 14336
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 30
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 48
push constant 120
push constant 240
push constant 480
push constant 960
push constant 1920
push constant 3840
push constant 7680
push constant 7168
push constant 6144
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 32
push local 2
add
push constant 0
push constant 0
push constant 32
push constant 112
push constant 240
push constant 480
push constant 448
push constant 960
push constant 1920
push constant 3840
push constant 3584
push constant 7680
push constant 7168
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 34
push local 2
add
push constant 0
push constant 0
push constant 64
push constant 240
push constant 224
push constant 480
push constant 448
push constant 896
push constant 1920
push constant 1792
push constant 3840
push constant 3584
push constant 3584
push constant 2048
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 36
push local 2
add
push constant 0
push constant 0
push constant 192
push constant 480
push constant 448
push constant 448
push constant 960
push constant 896
push constant 896
push constant 1920
push constant 1792
push constant 1792
push constant 3840
push constant 1536
push constant 1024
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 38
push local 2
add
push constant 0
push constant 0
push constant 448
push constant 448
push constant 448
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 1792
push constant 1792
push constant 1792
push constant 512
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 40
push local 2
add
push constant 0
push constant 0
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 256
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 42
push local 2
add
push constant 0
push constant 0
push constant 1792
push constant 1792
push constant 1792
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 896
push constant 448
push constant 448
push constant 448
push constant 128
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 44
push local 2
add
push constant 0
push constant 0
push constant 512
push constant 3840
push constant 1792
push constant 1792
push constant 1920
push constant 896
push constant 896
push constant 960
push constant 448
push constant 448
push constant 480
push constant 192
push constant 64
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 46
push local 2
add
push constant 0
push constant 0
push constant 512
push constant 3584
push constant 3584
push constant 1792
push constant 1792
push constant 896
push constant 896
push constant 960
push constant 448
push constant 480
push constant 224
push constant 224
push constant 32
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 48
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 3072
push constant 7680
push constant 3584
push constant 3840
push constant 1920
push constant 960
push constant 448
push constant 480
push constant 240
push constant 112
push constant 48
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 50
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 2048
push constant 7168
push constant 7680
push constant 3840
push constant 1920
push constant 960
push constant 480
push constant 240
push constant 120
push constant 56
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 52
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 6144
push constant 15360
push constant 7936
push constant 3968
push constant 1984
push constant 496
push constant 248
push constant 120
push constant 24
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 54
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 4096
push constant 7168
push constant 15872
push constant 8064
push constant 2016
push constant 504
push constant 248
push constant 60
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 56
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 4096
push constant 15872
push constant 16320
push constant 8184
push constant 1020
push constant 126
push constant 8
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 58
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 14336
push constant 16352
push constant 16380
push constant 2046
push constant 28
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 60
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 16380
push constant 16382
push constant 16380
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 62
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 28
push constant 2046
push constant 16380
push constant 16352
push constant 14336
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 64
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 8
push constant 126
push constant 1020
push constant 8184
push constant 16320
push constant 7680
push constant 4096
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 66
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 0
push constant 30
push constant 124
push constant 508
push constant 2032
push constant 16320
push constant 7680
push constant 6144
push constant 0
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 68
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 0
push constant 28
push constant 60
push constant 248
push constant 496
push constant 992
push constant 3968
push constant 7936
push constant 7680
push constant 2048
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 70
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 24
push constant 56
push constant 120
push constant 240
push constant 480
push constant 960
push constant 1920
push constant 3840
push constant 7680
push constant 3072
push constant 0
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 72
push local 2
add
push constant 0
push constant 0
push constant 0
push constant 56
push constant 120
push constant 112
push constant 240
push constant 480
push constant 960
push constant 896
push constant 1920
push constant 3840
push constant 3584
push constant 1024
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 74
push local 2
add
push constant 0
push constant 0
push constant 16
push constant 112
push constant 112
push constant 240
push constant 224
push constant 480
push constant 448
push constant 896
push constant 1920
push constant 1792
push constant 3840
push constant 512
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 76
push local 2
add
push constant 0
push constant 32
push constant 96
push constant 240
push constant 224
push constant 224
push constant 480
push constant 448
push constant 448
push constant 960
push constant 896
push constant 896
push constant 1920
push constant 768
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 78
push local 2
add
push constant 0
push constant 64
push constant 224
push constant 224
push constant 224
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 448
push constant 896
push constant 896
push constant 896
push constant 0
push constant 0
call Sprites.build 16
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 1
pop local 0
label WHILE_EXP0
push local 0
push constant 80
lt
not
if-goto WHILE_END0
push constant 16
call Array.new 1
pop local 3
push constant 0
pop local 1
label WHILE_EXP1
push local 1
push constant 16
lt
not
if-goto WHILE_END1
push local 1
push local 3
add
push constant 0
pop temp 0
pop pointer 1
push temp 0
pop that 0
push local 1
push constant 1
add
pop local 1
goto WHILE_EXP1
label WHILE_END1
push local 0
push local 2
add
push local 3
pop temp 0
pop pointer 1
push temp 0
pop that 0
push local 0
push constant 2
add
pop local 0
goto WHILE_EXP0
label WHILE_END0
push local 2
return
function Sprites.build 1
push constant 16
call Array.new 1
pop local 0
push constant 0
push local 0
add
push argument 0
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 1
push local 0
add
push argument 1
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 2
push local 0
add
push argument 2
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 3
push local 0
add
push argument 3
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 4
push local 0
add
push argument 4
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 5
push local 0
add
push argument 5
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 6
push local 0
add
push argument 6
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 7
push local 0
add
push argument 7
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 8
push local 0
add
push argument 8
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 9
push local 0
add
push argument 9
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 10
push local 0
add
push argument 10
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 11
push local 0
add
push argument 11
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 12
push local 0
add
push argument 12
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 13
push local 0
add
push argument 13
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 14
push local 0
add
push argument 14
pop temp 0
pop pointer 1
push temp 0
pop that 0
push constant 15
push local 0
add
push argument 15
pop temp 0
pop pointer 1
push temp 0
pop that 0
push local 0
return
function SuezGame.new 0
push constant 1
call Memory.alloc 1
pop pointer 0
push pointer 0
call SuezGame.initDisplay 1
pop temp 0
push constant 0
push constant 234
push constant 9
call Ship.new 3
pop this 0
push pointer 0
return
function SuezGame.run 4
push argument 0
pop pointer 0
label WHILE_EXP0
push local 2
push constant 0
eq
not
if-goto WHILE_END0
call Keyboard.keyPressed 0
pop local 0
push local 0
push local 1
eq
not
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push local 0
push constant 87
eq
if-goto IF_TRUE1
goto IF_FALSE1
label IF_TRUE1
push this 0
call Ship.increasePower 1
pop temp 0
label IF_FALSE1
push local 0
push constant 83
eq
if-goto IF_TRUE2
goto IF_FALSE2
label IF_TRUE2
push this 0
call Ship.decreasePower 1
pop temp 0
label IF_FALSE2
push local 0
push constant 65
eq
if-goto IF_TRUE3
goto IF_FALSE3
label IF_TRUE3
push this 0
call Ship.rudderPort 1
pop temp 0
label IF_FALSE3
push local 0
push constant 68
eq
if-goto IF_TRUE4
goto IF_FALSE4
label IF_TRUE4
push this 0
call Ship.rudderStarboard 1
pop temp 0
label IF_FALSE4
push local 0
push constant 131
eq
if-goto IF_TRUE5
goto IF_FALSE5
label IF_TRUE5
push this 0
call Ship.increasePower 1
pop temp 0
label IF_FALSE5
push local 0
push constant 133
eq
if-goto IF_TRUE6
goto IF_FALSE6
label IF_TRUE6
push this 0
call Ship.decreasePower 1
pop temp 0
label IF_FALSE6
push local 0
push constant 130
eq
if-goto IF_TRUE7
goto IF_FALSE7
label IF_TRUE7
push this 0
call Ship.rudderPort 1
pop temp 0
label IF_FALSE7
push local 0
push constant 132
eq
if-goto IF_TRUE8
goto IF_FALSE8
label IF_TRUE8
push this 0
call Ship.rudderStarboard 1
pop temp 0
label IF_FALSE8
label IF_FALSE0
push this 0
call Ship.update 1
pop local 2
push local 2
push constant 0
eq
not
if-goto IF_TRUE9
goto IF_FALSE9
label IF_TRUE9
push this 0
call Ship.getDistanceTraveled 1
pop local 3
push pointer 0
push local 2
push constant 2
eq
push local 3
push argument 1
call SuezGame.drawAlert 4
pop temp 0
label IF_FALSE9
push local 0
pop local 1
push constant 50
call Sys.wait 1
pop temp 0
goto WHILE_EXP0
label WHILE_END0
push local 3
return
function SuezGame.initDisplay 0
push argument 0
pop pointer 0
push constant 0
call Screen.setColor 1
pop temp 0
push constant 0
push constant 0
push constant 511
push constant 255
call Screen.drawRectangle 4
pop temp 0
push constant 1
call Screen.setColor 1
pop temp 0
push constant 0
push constant 232
push constant 150
push constant 220
call Screen.drawLine 4
pop temp 0
push constant 150
push constant 220
push constant 240
push constant 179
call Screen.drawLine 4
pop temp 0
push constant 240
push constant 179
push constant 300
push constant 98
call Screen.drawLine 4
pop temp 0
push constant 300
push constant 98
push constant 320
push constant 47
call Screen.drawLine 4
pop temp 0
push constant 320
push constant 47
push constant 325
push constant 0
call Screen.drawLine 4
pop temp 0
push constant 0
push constant 250
push constant 158
push constant 238
call Screen.drawLine 4
pop temp 0
push constant 158
push constant 238
push constant 253
push constant 195
call Screen.drawLine 4
pop temp 0
push constant 253
push constant 195
push constant 315
push constant 107
call Screen.drawLine 4
pop temp 0
push constant 315
push constant 107
push constant 335
push constant 52
call Screen.drawLine 4
pop temp 0
push constant 335
push constant 52
push constant 340
push constant 0
call Screen.drawLine 4
pop temp 0
push pointer 0
push constant 1
push constant 1
push constant 28
call String.new 1
push constant 83
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 117
call String.appendChar 2
push constant 103
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 83
call String.appendChar 2
push constant 117
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 122
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 67
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 108
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 3
push constant 1
push constant 34
call String.new 1
push constant 84
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 121
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 121
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 117
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 118
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 103
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 102
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 4
push constant 1
push constant 35
call String.new 1
push constant 116
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 109
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 103
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 108
call String.appendChar 2
push constant 121
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 102
call String.appendChar 2
push constant 102
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 99
call String.appendChar 2
push constant 107
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 117
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 99
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 108
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 5
push constant 1
push constant 27
call String.new 1
push constant 116
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 117
call String.appendChar 2
push constant 103
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 102
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 119
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 108
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 46
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 7
push constant 1
push constant 31
call String.new 1
push constant 85
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 119
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 107
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 121
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 91
call String.appendChar 2
push constant 119
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 93
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 111
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 8
push constant 1
push constant 31
call String.new 1
push constant 99
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 108
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 112
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 119
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 117
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 103
call String.appendChar 2
push constant 108
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 46
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 10
push constant 1
push constant 25
call String.new 1
push constant 77
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 107
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 112
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 102
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 101
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 11
push constant 1
push constant 11
call String.new 1
push constant 109
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 112
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 119
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 33
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 15
push constant 1
push constant 12
call String.new 1
push constant 73
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 112
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 98
call String.appendChar 2
push constant 121
call String.appendChar 2
push constant 58
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 16
push constant 3
push constant 24
call String.new 1
push constant 104
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 112
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 58
call String.appendChar 2
push constant 47
call String.appendChar 2
push constant 47
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 46
call String.appendChar 2
push constant 99
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 46
call String.appendChar 2
push constant 99
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 109
call String.appendChar 2
push constant 47
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 17
push constant 3
push constant 20
call String.new 1
push constant 105
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 99
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 118
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 47
call String.appendChar 2
push constant 50
call String.appendChar 2
push constant 48
call String.appendChar 2
push constant 50
call String.appendChar 2
push constant 49
call String.appendChar 2
push constant 47
call String.appendChar 2
push constant 48
call String.appendChar 2
push constant 51
call String.appendChar 2
push constant 47
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 18
push constant 3
push constant 16
call String.new 1
push constant 99
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 120
call String.appendChar 2
push constant 45
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 112
call String.appendChar 2
push constant 47
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push constant 400
push constant 0
push constant 400
push constant 255
call Screen.drawLine 4
pop temp 0
push pointer 0
push constant 3
push constant 54
push constant 6
call String.new 1
push constant 82
call String.appendChar 2
push constant 117
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 5
push constant 56
push constant 1
call String.new 1
push constant 48
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 10
push constant 54
push constant 5
call String.new 1
push constant 80
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 119
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push pointer 0
push constant 12
push constant 56
push constant 1
call String.new 1
push constant 48
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push constant 0
return
function SuezGame.drawAlert 1
push argument 0
pop pointer 0
push constant 0
call Screen.setColor 1
pop temp 0
push constant 0
push constant 0
push constant 284
push constant 100
call Screen.drawRectangle 4
pop temp 0
push constant 0
push constant 100
push constant 254
push constant 131
call Screen.drawRectangle 4
pop temp 0
push argument 1
if-goto IF_TRUE0
goto IF_FALSE0
label IF_TRUE0
push pointer 0
push constant 3
push constant 3
push constant 16
call String.new 1
push constant 67
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 103
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 117
call String.appendChar 2
push constant 108
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 33
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
goto IF_END0
label IF_FALSE0
push pointer 0
push constant 3
push constant 3
push constant 10
call String.new 1
push constant 67
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 108
call String.appendChar 2
push constant 108
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 33
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
label IF_END0
push pointer 0
push constant 5
push constant 3
push constant 12
call String.new 1
push constant 89
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 117
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 99
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 100
call String.appendChar 2
push constant 58
call String.appendChar 2
push constant 32
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push argument 2
call Output.printInt 1
pop temp 0
push pointer 0
push constant 6
push constant 3
push constant 12
call String.new 1
push constant 72
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 103
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 99
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 58
call String.appendChar 2
push constant 32
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
push argument 3
call Output.printInt 1
pop temp 0
push pointer 0
push constant 8
push constant 3
push constant 30
call String.new 1
push constant 80
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 112
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 99
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 82
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 121
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 103
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 46
call String.appendChar 2
call SuezGame.printLiteral 4
pop temp 0
label WHILE_EXP0
push local 0
push constant 32
eq
push local 0
push constant 82
eq
or
not
not
if-goto WHILE_END0
push constant 9
push constant 3
call Output.moveCursor 2
pop temp 0
call Keyboard.readChar 0
pop local 0
goto WHILE_EXP0
label WHILE_END0
push constant 0
return
function SuezGame.printLiteral 0
push argument 0
pop pointer 0
push argument 1
push argument 2
call Output.moveCursor 2
pop temp 0
push argument 3
call Output.printString 1
pop temp 0
push argument 3
call String.dispose 1
pop temp 0
push constant 0
return
function SuezGame.dispose 0
push argument 0
pop pointer 0
push this 0
call Ship.dispose 1
pop temp 0
push pointer 0
call Memory.deAlloc 1
pop temp 0
push constant 0
return
`

# Suez Game

Inspired by recent events, this game attempts to bring to the HACK platform the
experience of piloting a container ship through the Suez canal.

[Live demo](https://jtxyz.github.io/suez/).

This project uses the amazing [JackVM Player](https://github.com/jcon/jackvm-rs)Copyright (c) 2020 Jim Connell.

Developed as part of the [nand2tetris](https://www.nand2tetris.org) course offered on
[Coursera](https://www.coursera.org/learn/nand2tetris2).

Game concept derived from CNN's interactive "[Steer through the Suez Canal](https://edition.cnn.com/interactive/2021/03/cnnix-steership)", reproduced for educational purposes.

To generate the VM code `(cd src/ && path/to/JackCompiler.sh . && cat *.vm | pbcopy)`.
To build the demo `(cd demo/ && npm install && npx webpack)`.
To run locally `npx light-server --serve demo/dist --open`

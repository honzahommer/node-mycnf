# mycnf

[![npm version](https://img.shields.io/npm/v/mycnf.svg)](https://npmjs.com/mycnf)
[![Build Status](https://img.shields.io/travis/honzahommer/node-mycnf.svg?branch=master)](https://travis-ci.org/honzahommer/node-mycnf)
[![npm downloads](https://img.shields.io/npm/dm/mycnf.svg)](https://npmjs.com/mycnf)
[![License](https://img.shields.io/npm/l/mycnf.svg)](https://github.com/honzahommer/node-mycnf/blob/master/LICENSE) [![Greenkeeper badge](https://badges.greenkeeper.io/honzahommer/node-mycnf.svg)](https://greenkeeper.io/)

> Reads MySQL options using [my_print_defaults](https://dev.mysql.com/doc/refman/8.0/en/my-print-defaults.html) command.

## Install

```
npm install mycnf --save
```

## Usage

```
const mycnf = require('mycnf');
const config = mycnf();
//> { port: '3306', socket: '/tmp/mysql.sock' }
```

## Configuration Options

* `cmnd`: Path to 'my_print_defaults' command. If no `cmnd` is provided, then 'my_print_defaults' command from $PATH is called.
* `file`: Path of config file to read, defaults to reflecting MySQL config (usually ~/.my.cnf).
* `group`: Name of config file group to parse, default to 'client'.

## Environment Variables

* `MYCNF_CMND`
* `MYCNF_FILE`
* `MYCNF_GROUP`

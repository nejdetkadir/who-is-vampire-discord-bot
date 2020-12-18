[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f067094742b54652a17939dd268b28ee)](https://www.codacy.com/gh/nejdetkadir/who-is-vampire-discord-bot/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nejdetkadir/who-is-vampire-discord-bot&amp;utm_campaign=Badge_Grade)

# who-is-vampire
This bot created with NodeJS for [SET DISCORD SERVER](https://discord.gg/T4hS7UtkHA).

![cover](doc/cover.png)

## SCREENSHOT
![ss](doc/ss.png)

# Commands
- start game -> (PREFIX)oyunbaşlasın
- create roles -> (PREFIX)rololuştur
    * for role and amont -> role:amount (ex: vampire:1)
        * when you added yönetici role, you must write to administrator username of discord (ex: yönetici:nejdetkadirr)

#### NOTE
Space between all roles!
(ex: (PREFIX)rololuştur vampire:1 doctor:2)

## Project setup
```
npm install
```

### Environment variables
Create a file named ".env" in the root directory and fill its contents as follows.
```ruby
DISCORD_TOKEN = XXX
PREFIX = XXX
```

### Run for development
```
npm run start:dev
```

# LICENSE
```
MIT License

Copyright (c) 2020 Nejdet Kadir Bektaş

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
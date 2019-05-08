# md-html-tool-cli

a cli interface of [md-html-tool](https://github.com/jimliu7434/md-html-tool)

for more information, please check [md-html-tool](https://github.com/jimliu7434/md-html-tool)

## install

you can install it locally or globally

using npm as a *devDependency*

  ```sh
  npm install --save-dev md-html-tool-cli
  ```

or using yarn as a *devDependency*

  ```sh
  yarn add --dev md-html-tool-cli
  ```

## how to use

* change to your work directory

* write a **setting file** (*./conf.json* here) like this contains **mdfiles** and **target**

```json
{
    "mdfiles": [
        "./example/doc-title.md",
        "./example/doc-part1.md",
        "./example/doc-part2.md",
        "./example/doc-part3.md"
    ],
    "target": "./document"
}
```

* then run it on cli, using arg `-s` to assign the **setting file path**

  ```sh
  > md2htmlcli -s ./conf.json
  ```